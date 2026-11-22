const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
});
const b64 = bytes => {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
};
const encodeBase64 = value => b64(new TextEncoder().encode(value));

async function verifyAccess(request, env) {
  const token = request.headers.get("Cf-Access-Jwt-Assertion");
  if (!token || !env.CF_ACCESS_TEAM_DOMAIN || !env.CF_ACCESS_AUD) return false;
  const [encodedHeader, encodedPayload, encodedSignature] = token.split(".");
  if (!encodedHeader || !encodedPayload || !encodedSignature) return false;
  let header, claims;
  try {
    header = JSON.parse(atob(encodedHeader.replace(/-/g, "+").replace(/_/g, "/")));
    claims = JSON.parse(atob(encodedPayload.replace(/-/g, "+").replace(/_/g, "/")));
  } catch { return false; }
  const now = Math.floor(Date.now() / 1000);
  const issuer = "https://" + String(env.CF_ACCESS_TEAM_DOMAIN).replace(/^https?:\\/\\//, "").replace(/\\/$/, "");
  if (header.alg !== "RS256" || typeof claims.exp !== "number" || claims.exp <= now ||
      (typeof claims.nbf === "number" && claims.nbf > now) || claims.iss !== issuer ||
      ![].concat(claims.aud || []).includes(env.CF_ACCESS_AUD) ||
      String(claims.email || "").toLowerCase() !== "musicallyivan2@gmail.com") return false;
  const team = String(env.CF_ACCESS_TEAM_DOMAIN).replace(/^https?:\/\//, "").replace(/\/$/, "");
  const certResponse = await fetch("https://" + team + "/cdn-cgi/access/certs");
  if (!certResponse.ok) return false;
  const certs = await certResponse.json();
  const jwk = (certs.keys || []).find(key => key.kid === header.kid);
  if (!jwk) return false;
  try {
    const publicKey = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
    const signature = Uint8Array.from(atob(encodedSignature.replace(/-/g, "+").replace(/_/g, "/")), c => c.charCodeAt(0));
    return await crypto.subtle.verify("RSASSA-PKCS1-v1_5", publicKey, signature, new TextEncoder().encode(encodedHeader + "." + encodedPayload));
  } catch { return false; }
}

async function github(path, token, options = {}) {
  const response = await fetch("https://api.github.com" + path, {
    ...options,
    headers: {
      "accept": "application/vnd.github+json",
      "authorization": "Bearer " + token,
      "x-github-api-version": "2022-11-28",
      "user-agent": "MusicallyIvan-AdminCenter",
      ...(options.body ? { "content-type": "application/json" } : {}),
      ...(options.headers || {})
    }
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || "GitHub API error " + response.status);
  return body;
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: { "allow": "POST, OPTIONS" } });
}

export async function onRequestPost({ request, env }) {
  if (!await verifyAccess(request, env)) return json({ error: "No autorizado. Inicia sesión mediante Cloudflare Access." }, 401);
  if (!env.GITHUB_TOKEN) return json({ error: "Falta configurar el secreto GITHUB_TOKEN en Cloudflare Pages." }, 503);
  let input;
  try { input = await request.json(); } catch { return json({ error: "JSON no válido." }, 400); }
  const headline = String(input.headline || "").trim().slice(0, 120);
  const bio = String(input.bio || "").trim().slice(0, 600);
  if (!Array.isArray(input.timeline) || input.timeline.length > 100) return json({ error: "La trayectoria no tiene un formato válido." }, 400);
  const timeline = input.timeline.map(item => ({
    title: String(item.title || "").trim().slice(0, 100),
    period: String(item.period || "").trim().slice(0, 60),
    description: String(item.description || "").trim().slice(0, 400)
  }));
  if (timeline.some(item => !item.title)) return json({ error: "Cada elemento de la trayectoria necesita un título." }, 400);

  const owner = "musicallyivan", repo = "portfolio", base = "main";
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z").toLowerCase();
  const branch = "admincenter/content-" + stamp;
  const api = "/repos/" + owner + "/" + repo;
  try {
    const mainRef = await github(api + "/git/ref/heads/" + base, env.GITHUB_TOKEN);
    await github(api + "/git/refs", env.GITHUB_TOKEN, {
      method: "POST",
      body: JSON.stringify({ ref: "refs/heads/" + branch, sha: mainRef.object.sha })
    });
    const path = "content/site-content.json";
    let existingSha;
    try {
      const existing = await github(api + "/contents/" + path + "?ref=" + encodeURIComponent(branch), env.GITHUB_TOKEN);
      existingSha = existing.sha;
    } catch (error) {
      if (!String(error.message).includes("Not Found")) throw error;
    }
    const document = {
      schemaVersion: 1,
      updatedAt: new Date().toISOString(),
      profile: { headline, bio },
      timeline
    };
    await github(api + "/contents/" + path, env.GITHUB_TOKEN, {
      method: "PUT",
      body: JSON.stringify({
        message: "Update portfolio content from Admin Center",
        content: encodeBase64(JSON.stringify(document, null, 2) + "\n"),
        branch,
        ...(existingSha ? { sha: existingSha } : {})
      })
    });
    const pull = await github(api + "/pulls", env.GITHUB_TOKEN, {
      method: "POST",
      body: JSON.stringify({
        title: "Update portfolio content",
        head: branch,
        base,
        body: "## Cambios propuestos desde Admin Center\n\n- Actualización del perfil y biografía.\n- Actualización de la trayectoria.\n\nEstos cambios no se publican hasta revisar y fusionar esta Pull Request."
      })
    });
    return json({ ok: true, number: pull.number, url: pull.html_url, branch });
  } catch (error) {
    return json({ error: "No se pudo crear la Pull Request: " + error.message }, 502);
  }
}
