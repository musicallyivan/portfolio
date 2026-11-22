# Configuración del Admin Center

El endpoint `functions/api/publish.js` crea una rama desde `main`, guarda `content/site-content.json` y abre una Pull Request contra `main`. Nunca hace merge ni publica directamente.

## Secretos de Cloudflare Pages

En **Workers & Pages → musicallyivan-portfolio → Settings → Variables and Secrets**, añade estas variables como secretos/valores protegidos para el entorno Preview (y Production cuando se vaya a habilitar allí):

- `GITHUB_TOKEN`: Fine-grained Personal Access Token limitado al repositorio `musicallyivan/portfolio`, con **Contents: Read and write** y **Pull requests: Read and write**. Metadata queda con permiso de lectura. No uses un token clásico con acceso a todos tus repositorios.
- `CF_ACCESS_TEAM_DOMAIN`: dominio de equipo de Cloudflare Access, por ejemplo `tu-equipo.cloudflareaccess.com` (sin protocolo).
- `CF_ACCESS_AUD`: Audience (AUD) de la aplicación de Access que protege el hostname Preview.

Guarda los cambios y vuelve a desplegar el Preview. No pongas estos valores en archivos del repositorio ni en el JavaScript del navegador.

## Protección

La aplicación de Cloudflare Access debe proteger el hostname Preview. La Function valida la firma del JWT de Access, el Audience y que el correo autenticado sea `musicallyivan2@gmail.com`. Si más adelante se habilita el Admin Center en el dominio de producción, protege también esa ruta y configura los secretos en Production.

## Flujo de publicación

1. En Admin Center guarda los cambios del perfil y la trayectoria.
2. Pulsa **Crear Pull Request**.
3. Revisa la PR creada contra `main`.
4. Comprueba el diff y las comprobaciones automáticas antes de fusionarla manualmente.

La Function solo acepta los campos de perfil y trayectoria; no permite enviar rutas arbitrarias, editar código ni ejecutar comandos. La web pública carga el documento publicado desde `content/site-content.json`.
