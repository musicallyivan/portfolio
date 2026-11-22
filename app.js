/**
 * Portfolio Glassmorphic 2.0 - Core Application
 * Developed with Vanilla Modern JavaScript
 * Fully adapted for any type of device (Mobile, Tablet, Foldable, Desktop, 4K)
 */

// ==========================================================================
// 1. REPOSITORIES DATABASE & CURATED METADATA
// ==========================================================================
const GITHUB_USERNAME = 'musicallyivan';

// Detailed data for all repositories with rich descriptions and live URLs
const CURATED_REPOS = [
  {
    name: 'mediaflow',
    title: 'MediaFlow',
    description: 'Aplicación integral para Windows y Web que permite convertir, recortar y procesar archivos multimedia (audio, vídeo e imágenes) a múltiples formatos utilizando ffmpeg de alto rendimiento.',
    language: 'Python',
    topics: ['ffmpeg', 'multimedia', 'converter', 'audio-video', 'gui'],
    html_url: 'https://github.com/musicallyivan/mediaflow',
    homepage: 'https://musicallyivan.github.io/mediaflow/',
    icon: 'fa-solid fa-film',
    stars: 0,
    forks: 0,
    updated_at: '2026-08-24T13:32:28Z'
  },
  {
    name: 'SpiritDex',
    title: 'SpiritDex',
    description: 'Enciclopedia y Pokédex interactiva con estética futurista, buscador instantáneo por tipos y generaciones, cálculo de estadísticas base y renderizado fluido de animaciones de criaturas.',
    language: 'TypeScript',
    topics: ['typescript', 'pokedex', 'gaming', 'api', 'interactive-ui'],
    html_url: 'https://github.com/musicallyivan/SpiritDex',
    homepage: 'https://musicallyivan.github.io/SpiritDex/',
    icon: 'fa-solid fa-bolt',
    stars: 0,
    forks: 0,
    updated_at: '2026-07-30T03:52:38Z'
  },
  {
    name: 'Marvel-Tracker',
    title: 'Marvel Tracker',
    description: 'Plataforma interactiva para seguir el orden cronológico del Universo Cinematográfico de Marvel (MCU), películas, series de Disney+, fases, fechas de estreno y fichas técnicas completas.',
    language: 'JavaScript',
    topics: ['mcu', 'marvel', 'tracker', 'timeline', 'frontend'],
    html_url: 'https://github.com/musicallyivan/Marvel-Tracker',
    homepage: 'https://musicallyivan.github.io/Marvel-Tracker/',
    icon: 'fa-solid fa-shield-halved',
    stars: 0,
    forks: 0,
    updated_at: '2026-08-04T18:06:45Z'
  },
  {
    name: 'insidious-tracker',
    title: 'Insidious Tracker',
    description: 'Guía y timeline cronológico interactivo de la saga de terror Insidious. Incluye árbol de conexiones entre películas, personajes, entidades del Más Allá y registro de visionado.',
    language: 'JavaScript',
    topics: ['horror', 'insidious', 'cinema', 'timeline', 'ui'],
    html_url: 'https://github.com/musicallyivan/insidious-tracker',
    homepage: 'https://musicallyivan.github.io/insidious-tracker/',
    icon: 'fa-solid fa-ghost',
    stars: 0,
    forks: 0,
    updated_at: '2026-08-24T14:06:19Z'
  },
  {
    name: 'trackers-hub',
    title: 'Trackers Hub',
    description: 'Portal centralizado de herramientas de seguimiento, paneles de control y recopilatorios interactivos de series, cine y proyectos con interfaz glassmorphic minimalista.',
    language: 'CSS',
    topics: ['hub', 'trackers', 'css3', 'responsive', 'portal'],
    html_url: 'https://github.com/musicallyivan/trackers-hub',
    homepage: 'https://musicallyivan.github.io/trackers-hub/',
    icon: 'fa-solid fa-compass',
    stars: 0,
    forks: 0,
    updated_at: '2026-08-03T12:55:27Z'
  },
  {
    name: 'musicallyivan-web',
    title: 'Sitio Web Astro',
    description: 'Web personal y portafolio ultra veloz construida con Astro, Tailwind CSS y buenas prácticas de optimización de rendimiento Core Web Vitals y diseño adaptativo moderno.',
    language: 'Astro',
    topics: ['astro', 'tailwindcss', 'fast', 'portfolio', 'vercel'],
    html_url: 'https://github.com/musicallyivan/musicallyivan-web',
    homepage: 'https://musicallyivan-web.vercel.app',
    icon: 'fa-solid fa-rocket',
    stars: 0,
    forks: 0,
    updated_at: '2026-05-20T00:37:47Z'
  },
  {
    name: 'plugin.video.streamhub',
    title: 'StreamHub Plugin',
    description: 'Add-on multimedia y plataforma para centros de entretenimiento y Kodi, con soporte para reproducción de transmisiones en alta definición, organización de canales y gestión de metadatos.',
    language: 'Python',
    topics: ['kodi', 'streaming', 'addon', 'python', 'media'],
    html_url: 'https://github.com/musicallyivan/plugin.video.streamhub',
    homepage: 'https://streamhub.surge.sh',
    icon: 'fa-solid fa-tv',
    stars: 0,
    forks: 0,
    updated_at: '2026-07-11T18:28:49Z'
  },
  {
    name: 'youtube-mp3-downloader',
    title: 'YouTube MP3 Downloader',
    description: 'Script y herramienta en Python para la extracción, conversión y descarga automatizada de audio en formato MP3 desde vídeos de YouTube a máxima calidad de sonido (320kbps).',
    language: 'Python',
    topics: ['python', 'youtube', 'mp3', 'downloader', 'audio'],
    html_url: 'https://github.com/musicallyivan/youtube-mp3-downloader',
    homepage: null,
    icon: 'fa-solid fa-music',
    stars: 0,
    forks: 0,
    updated_at: '2026-05-18T18:37:03Z'
  },
  {
    name: 'MyVLC',
    title: 'MyVLC Player',
    description: 'Reproductor multimedia nativo de escritorio desarrollado en C# y .NET con aceleración por hardware, soporte para subtítulos, listas de reproducción y ecualizador de audio.',
    language: 'C#',
    topics: ['csharp', 'dotnet', 'media-player', 'desktop', 'wpf'],
    html_url: 'https://github.com/musicallyivan/MyVLC',
    homepage: null,
    icon: 'fa-solid fa-circle-play',
    stars: 0,
    forks: 0,
    updated_at: '2026-02-13T23:49:40Z'
  },
  {
    name: 'iesmusicallyivan-app',
    title: 'IES MusicallyIvan App',
    description: 'Aplicación móvil nativa para el sistema operativo iOS programada en Swift, incorporando principios de diseño Human Interface Guidelines de Apple y arquitectura moderna.',
    language: 'Swift',
    topics: ['swift', 'ios', 'mobile', 'apple', 'swiftui'],
    html_url: 'https://github.com/musicallyivan/iesmusicallyivan-app',
    homepage: null,
    icon: 'fa-solid fa-mobile-screen-button',
    stars: 0,
    forks: 0,
    updated_at: '2026-01-20T03:24:55Z'
  },
  {
    name: 'EJEMPLOS-PYTHON',
    title: 'Ejemplos Python',
    description: 'Repositorio didáctico con ejemplos prácticos de algoritmos, estructuras de datos, manipulación de archivos, programación orientada a objetos y scripts de automatización en Python.',
    language: 'Python',
    topics: ['python', 'examples', 'learning', 'algorithms', 'scripts'],
    html_url: 'https://github.com/musicallyivan/EJEMPLOS-PYTHON',
    homepage: null,
    icon: 'fa-brands fa-python',
    stars: 0,
    forks: 0,
    updated_at: '2026-03-16T21:38:30Z'
  },
  {
    name: 'archivo_secreto',
    title: 'Archivo Secreto',
    description: 'Página web interactiva con estética vintage/misterio desarrollada para la preservación, visualización animada y lectura de cartas digitales.',
    language: 'JavaScript',
    topics: ['javascript', 'creative', 'interactive-web', 'custom-ui'],
    html_url: 'https://github.com/musicallyivan/archivo_secreto',
    homepage: null,
    icon: 'fa-solid fa-envelope-open-text',
    stars: 0,
    forks: 0,
    updated_at: '2026-04-01T01:58:03Z'
  },
  {
    name: 'mcu-database',
    title: 'MCU Database',
    description: 'Base de datos en formato JSON estructurado con información minuciosa sobre el canon de Marvel Studios: líneas temporales, directores, actores, recaudaciones y apariciones.',
    language: 'JSON',
    topics: ['json', 'database', 'mcu', 'marvel', 'data'],
    html_url: 'https://github.com/musicallyivan/mcu-database',
    homepage: null,
    icon: 'fa-solid fa-database',
    stars: 0,
    forks: 0,
    updated_at: '2026-08-04T18:20:39Z'
  },
  {
    name: 'taskapp_by_ivan',
    title: 'Task App',
    description: 'Gestor de tareas y listas de productividad interactivo con almacenamiento local, categorización por etiquetas, fechas límite y sistema de prioridades.',
    language: 'JavaScript',
    topics: ['productivity', 'tasks', 'localstorage', 'javascript'],
    html_url: 'https://github.com/musicallyivan/taskapp_by_ivan',
    homepage: null,
    icon: 'fa-solid fa-list-check',
    stars: 0,
    forks: 0,
    updated_at: '2025-08-12T22:07:32Z'
  },
  {
    name: 'elementun',
    title: 'Elementun Tools',
    description: 'Módulo de herramientas y utilidades de automatización para tareas recurrentes, procesamiento de texto y optimización de flujos de trabajo.',
    language: 'Python',
    topics: ['automation', 'tools', 'utilities', 'scripts'],
    html_url: 'https://github.com/musicallyivan/elementun',
    homepage: null,
    icon: 'fa-solid fa-gears',
    stars: 0,
    forks: 0,
    updated_at: '2024-11-17T19:23:20Z'
  },
  {
    name: 'musicallyivannew',
    title: 'Lab Web Design',
    description: 'Espacio de experimentación para probar nuevas técnicas de maquetación CSS Grid, Flexbox, efectos visuales y microinteracciones de interfaz.',
    language: 'HTML',
    topics: ['html5', 'css3', 'playground', 'responsive'],
    html_url: 'https://github.com/musicallyivan/musicallyivannew',
    homepage: null,
    icon: 'fa-solid fa-flask',
    stars: 0,
    forks: 0,
    updated_at: '2024-03-06T23:18:54Z'
  },
  {
    name: 'musicallyivan',
    title: 'Perfil GitHub Readme',
    description: 'Configuración y diseño visual del perfil principal de GitHub con métricas dinámicas, estadísticas de lenguajes y presentación profesional.',
    language: 'Markdown',
    topics: ['github-profile', 'readme', 'markdown', 'metrics'],
    html_url: 'https://github.com/musicallyivan/musicallyivan',
    homepage: 'https://github.com/musicallyivan',
    icon: 'fa-solid fa-user-astronaut',
    stars: 0,
    forks: 0,
    updated_at: '2026-08-24T13:44:07Z'
  }
];

// Curated presentation metadata. Keep screenshots empty until real captures are added.
const PROJECT_METADATA = {
  mediaflow: { featured: true, category: 'Multimedia', screenshots: [], demoStatus: 'live' },
  SpiritDex: { featured: true, category: 'Gaming', screenshots: [], demoStatus: 'live' },
  'Marvel-Tracker': { featured: true, category: 'Entretenimiento', screenshots: [], demoStatus: 'live' },
  'insidious-tracker': { featured: true, category: 'Entretenimiento', screenshots: [], demoStatus: 'live' },
  'trackers-hub': { featured: true, category: 'Web', screenshots: [], demoStatus: 'live' },
  'musicallyivan-web': { featured: true, category: 'Web', screenshots: [], demoStatus: 'live' },
  'plugin.video.streamhub': { category: 'Multimedia', screenshots: [], demoStatus: 'live' },
  MyVLC: { category: 'Multimedia', screenshots: [], demoStatus: 'development' },
  'iesmusicallyivan-app': { category: 'Aplicaciones', screenshots: [], demoStatus: 'development' },
  taskapp_by_ivan: { category: 'Productividad', screenshots: [], demoStatus: 'development' },
  elementun: { category: 'Herramientas', screenshots: [], demoStatus: 'development' }
};

function enrichRepo(repo) {
  const metadata = PROJECT_METADATA[repo.name] || {};
  return {
    ...repo,
    featured: Boolean(metadata.featured),
    category: metadata.category || inferProjectCategory(repo),
    screenshots: Array.isArray(metadata.screenshots) ? metadata.screenshots : [],
    demoStatus: metadata.demoStatus || (repo.homepage ? 'live' : 'unavailable')
  };
}

function inferProjectCategory(repo) {
  const topics = (repo.topics || []).join(' ').toLowerCase();
  if (/game|gaming|pokemon|pokedex/.test(topics)) return 'Gaming';
  if (/media|audio|video|stream|music/.test(topics)) return 'Multimedia';
  if (/tracker|marvel|cinema|horror/.test(topics)) return 'Entretenimiento';
  if (/task|productivity/.test(topics)) return 'Productividad';
  if (/automation|tools|utilities/.test(topics)) return 'Herramientas';
  if (/web|frontend|portfolio|css|html/.test(topics)) return 'Web';
  return 'Aplicaciones';
}

// Map supported language labels to fixed CSS classes (no inline styles).
const LANGUAGE_CLASSES = {
  'JavaScript': 'lang-dot-javascript',
  'TypeScript': 'lang-dot-typescript',
  'Python': 'lang-dot-python',
  'Swift': 'lang-dot-swift',
  'C#': 'lang-dot-csharp',
  'Astro': 'lang-dot-astro',
  'HTML': 'lang-dot-html',
  'CSS': 'lang-dot-css',
  'JSON': 'lang-dot-json',
  'Markdown': 'lang-dot-markdown',
  'Default': 'lang-dot-default'
};

// ==========================================================================
// Treat all repository metadata returned by GitHub as untrusted input.
function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}

function safeExternalUrl(value, { githubOnly = false } = {}) {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const url = new URL(value);
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) return null;
    if (githubOnly && url.hostname.toLowerCase() !== 'github.com') return null;
    return url.href;
  } catch {
    return null;
  }
}

// 2. STATE MANAGEMENT
// ==========================================================================
const state = {
  repos: CURATED_REPOS.map(enrichRepo),
  activeFilter: 'all',
  searchQuery: '',
  sortBy: 'recent',
  theme: localStorage.getItem('theme') || 'dark',
  profile: null,
  lastSync: 0
};

// ==========================================================================
// 3. SOUND SYNTHESIZER (Micro Web Audio Feedback)
// ==========================================================================
function playChime(type = 'success') {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    if (type === 'welcome') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
      osc.start();
      osc.stop(ctx.currentTime + 0.45);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    }
  } catch (e) {
    // Audio contexts might be blocked until user interaction
  }
}

// ==========================================================================
// 4. WELCOME SCREEN CONTROLLER
// ==========================================================================
function initWelcomeScreen() {
  const welcomeOverlay = document.getElementById('welcome-overlay');
  const btnContinue = document.getElementById('btn-welcome-continue');
  
  if (!welcomeOverlay || !btnContinue) return;

  function dismissWelcome() {
    playChime('welcome');
    welcomeOverlay.classList.add('hidden');

    // Auto-scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Focus search input after entrance if not on touch screen
    setTimeout(() => {
      const searchInput = document.getElementById('search-input');
      const isTouch = window.matchMedia('(hover: none)').matches;
      if (searchInput && !isTouch && window.innerWidth > 768) {
        searchInput.focus();
      }
    }, 850);
  }

  btnContinue.addEventListener('click', dismissWelcome);

  // Keyboard accessibility
  window.addEventListener('keydown', (e) => {
    if (!welcomeOverlay.classList.contains('hidden')) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        e.preventDefault();
        dismissWelcome();
      }
    }
  });
}

// ==========================================================================
// 5. MOBILE DRAWER MENU CONTROLLER
// ==========================================================================
function initMobileMenu() {
  const btnMobileMenu = document.getElementById('btn-mobile-menu');
  const btnCloseMobileMenu = document.getElementById('btn-close-mobile-menu');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-item');

  function openDrawer() {
    playChime('click');
    mobileDrawer?.classList.add('active');
    mobileDrawer?.setAttribute('aria-hidden', 'false');
    btnMobileMenu?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('mobile-drawer-open');
  }

  function closeDrawer() {
    mobileDrawer?.classList.remove('active');
    mobileDrawer?.setAttribute('aria-hidden', 'true');
    btnMobileMenu?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('mobile-drawer-open');
  }

  btnMobileMenu?.addEventListener('click', openDrawer);
  btnCloseMobileMenu?.addEventListener('click', closeDrawer);

  // Close when clicking outside of the drawer card
  mobileDrawer?.addEventListener('click', (e) => {
    if (e.target === mobileDrawer) {
      closeDrawer();
    }
  });

  // Close on nav link click
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNavLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      closeDrawer();
    });
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('active')) {
      closeDrawer();
    }
  });
}

// ==========================================================================
// 6. THEME TOGGLE CONTROLLER
// ==========================================================================
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');

  function applyTheme(theme) {
    state.theme = theme;
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      if (themeIcon) {
        themeIcon.className = 'fa-solid fa-moon';
      }
    } else {
      document.body.classList.remove('light-theme');
      if (themeIcon) {
        themeIcon.className = 'fa-solid fa-sun';
      }
    }
    localStorage.setItem('theme', theme);
  }

  // Initial apply
  applyTheme(state.theme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      playChime('click');
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(`Modo ${newTheme === 'dark' ? 'Oscuro' : 'Claro'} activado`, 'fa-circle-half-stroke');
    });
  }
}

// ==========================================================================
// 7. MOUSE GLOW & 3D TILT EFFECT (DESKTOP ONLY)
// 8. GITHUB REPOSITORIES FETCH & SYNC
// ==========================================================================
async function fetchGitHubRepos(forceNotify = false) {
  const syncBtn = document.getElementById('btn-sync-github');
  state.lastSync = Date.now();
  if (syncBtn) syncBtn.classList.add('loading');

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });

    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.status}`);
    }

    const apiRepos = await response.json();

    if (Array.isArray(apiRepos) && apiRepos.length > 0) {
      // Merge apiRepos with curated list to keep high-quality descriptions and custom icons
      const mergedRepos = apiRepos.map(apiRepo => {
        const curated = CURATED_REPOS.find(c => c.name.toLowerCase() === apiRepo.name.toLowerCase());
        return {
          name: apiRepo.name,
          title: curated?.title || apiRepo.name,
          description: curated?.description || apiRepo.description || 'Repositorio de software y proyectos de código abierto.',
          language: apiRepo.language || curated?.language || 'Código',
          topics: apiRepo.topics && apiRepo.topics.length > 0 ? apiRepo.topics : (curated?.topics || []),
          html_url: apiRepo.html_url,
          homepage: apiRepo.homepage || curated?.homepage || null,
          icon: curated?.icon || getLanguageIcon(apiRepo.language),
          stars: apiRepo.stargazers_count ?? 0,
          forks: apiRepo.forks_count ?? 0,
          updated_at: apiRepo.updated_at || curated?.updated_at || new Date().toISOString(),
          ...PROJECT_METADATA[apiRepo.name] ? {
            featured: Boolean(PROJECT_METADATA[apiRepo.name].featured),
            category: PROJECT_METADATA[apiRepo.name].category || inferProjectCategory(apiRepo),
            screenshots: PROJECT_METADATA[apiRepo.name].screenshots || [],
            demoStatus: PROJECT_METADATA[apiRepo.name].demoStatus || (apiRepo.homepage ? 'live' : 'unavailable')
          } : {
            ...enrichRepo({ ...apiRepo, title: apiRepo.name }).valueOf()
          }
        };
      });

      state.repos = mergedRepos.map(repo => enrichRepo(repo));
      state.lastSync = Date.now();
      try {
        const profileResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
          headers: { 'Accept': 'application/vnd.github.v3+json' }
        });
        if (profileResponse.ok) state.profile = await profileResponse.json();
      } catch (profileError) {
        console.warn('No se pudieron actualizar las estadísticas del perfil:', profileError);
      }
      updateStats();
      renderFilterChips();
      renderProjects();
      if (location.hash.startsWith('#project/')) {
        const routeName = decodeURIComponent(location.hash.slice(9));
        if (state.repos.some(repo => repo.name === routeName)) openProjectDetail(routeName, false);
      }

      if (forceNotify) {
        showToast('Repositorios sincronizados con GitHub', 'fa-github');
      }
    }
  } catch (error) {
    console.warn('Usando catálogo local enriquecido:', error);
    state.repos = CURATED_REPOS.map(enrichRepo);
    updateStats();
    renderFilterChips();
    renderProjects();

    if (forceNotify) {
      showToast('Mostrando versión optimizada en caché', 'fa-database');
    }
  } finally {
    if (syncBtn) syncBtn.classList.remove('loading');
  }
}

function getLanguageIcon(lang) {
  switch (lang?.toLowerCase()) {
    case 'python': return 'fa-brands fa-python';
    case 'javascript': return 'fa-brands fa-js';
    case 'typescript': return 'fa-solid fa-code';
    case 'swift': return 'fa-brands fa-swift';
    case 'c#': return 'fa-solid fa-cube';
    case 'html': return 'fa-brands fa-html5';
    case 'css': return 'fa-brands fa-css3-alt';
    default: return 'fa-solid fa-code-branch';
  }
}

// ==========================================================================
// 9. STATS COUNTER RENDERER
// ==========================================================================
function updateStats() {
  const totalReposEl = document.getElementById('stat-total-repos');
  const totalLanguagesEl = document.getElementById('stat-total-languages');
  const totalDemosEl = document.getElementById('stat-total-demos');
  const totalStarsEl = document.getElementById('stat-total-stars');
  const followersEl = document.getElementById('stat-total-followers');

  const totalRepos = state.repos.length;
  const uniqueLanguages = new Set(state.repos.map(r => r.language).filter(Boolean)).size;
  const totalDemos = state.repos.filter(r => r.homepage).length;
  const totalStars = state.repos.reduce((acc, r) => acc + (r.stars || 0), 0);
  const totalFollowers = Number(state.profile?.followers || 0);

  if (totalReposEl) animateCounter(totalReposEl, totalRepos);
  if (totalLanguagesEl) animateCounter(totalLanguagesEl, uniqueLanguages);
  if (totalDemosEl) animateCounter(totalDemosEl, totalDemos);
  if (totalStarsEl) animateCounter(totalStarsEl, totalStars);
  if (followersEl) animateCounter(followersEl, totalFollowers);
}

function animateCounter(element, targetValue) {
  const duration = 1200;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = Math.floor(easeProgress * targetValue);
    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = targetValue;
    }
  }

  requestAnimationFrame(update);
}

// ==========================================================================
// 10. FILTER CHIPS RENDERER
// ==========================================================================
function renderFilterChips() {
  const container = document.getElementById('filter-chips-container');
  if (!container) return;

  const filters = [
    { id: 'all', label: 'Todos', icon: 'fa-globe', count: state.repos.length },
    { id: 'featured', label: 'Destacados', icon: 'fa-star', count: state.repos.filter(r => r.featured).length },
    { id: 'demos', label: 'Demos', icon: 'fa-circle-play', count: state.repos.filter(r => r.demoStatus === 'live' && r.homepage).length }
  ];
  const languages = [...new Set(state.repos.map(r => r.language || 'Otros'))].sort();
  const categories = [...new Set(state.repos.map(r => r.category || 'Aplicaciones'))].sort();

  languages.forEach(language => filters.push({
    id: `lang:${language}`, label: language, icon: 'fa-code',
    count: state.repos.filter(r => (r.language || 'Otros') === language).length
  }));
  categories.forEach(category => filters.push({
    id: `category:${category}`, label: category, icon: 'fa-layer-group',
    count: state.repos.filter(r => (r.category || 'Aplicaciones') === category).length
  }));

  container.innerHTML = filters.filter(f => f.count > 0 || f.id === 'all').map(f => `
    <button type="button" class="filter-chip ${state.activeFilter === f.id ? 'active' : ''}"
      data-filter="${escapeHTML(f.id)}" aria-pressed="${state.activeFilter === f.id}">
      <i class="fa-solid ${escapeHTML(f.icon)}" aria-hidden="true"></i>
      <span>${escapeHTML(f.label)}</span><span class="chip-count">${f.count}</span>
    </button>
  `).join('');

  container.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => setFilter(button.dataset.filter));
  });
}

window.setFilter = function(filterId) {
  playChime('click');
  state.activeFilter = filterId;
  renderFilterChips();
  renderProjects();
};

// ==========================================================================
// 11. PROJECTS GRID RENDERER
// ==========================================================================
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  const countEl = document.getElementById('filtered-count');
  if (!grid) return;

  // Filter repos
  let filtered = state.repos.filter(repo => {
    if (state.activeFilter === 'demos' && !(repo.demoStatus === 'live' && repo.homepage)) return false;
    if (state.activeFilter === 'featured' && !repo.featured) return false;
    if (state.activeFilter.startsWith('lang:') && (repo.language || 'Otros') !== state.activeFilter.slice(5)) return false;
    if (state.activeFilter.startsWith('category:') && (repo.category || 'Aplicaciones') !== state.activeFilter.slice(9)) return false;

    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const inName = (repo.title || repo.name).toLowerCase().includes(q);
      const inDesc = (repo.description || '').toLowerCase().includes(q);
      const inLang = (repo.language || '').toLowerCase().includes(q);
      const inTopics = (repo.topics || []).some(t => t.toLowerCase().includes(q));
      const inCategory = (repo.category || '').toLowerCase().includes(q);

      if (!inName && !inDesc && !inLang && !inTopics && !inCategory) {
        return false;
      }
    }

    return true;
  });

  // Sort repos
  filtered.sort((a, b) => {
    if (state.sortBy === 'name') {
      return (a.title || a.name).localeCompare(b.title || b.name);
    } else if (state.sortBy === 'stars') {
      return (b.stars || 0) - (a.stars || 0);
    } else {
      if (a.featured !== b.featured) return Number(b.featured) - Number(a.featured);
      return new Date(b.updated_at) - new Date(a.updated_at);
    }
  });

  // Update counter
  if (countEl) {
    countEl.textContent = `Mostrando ${filtered.length} de ${state.repos.length} proyectos`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-compass-slash empty-icon"></i>
        <h3 class="empty-title">No se encontraron proyectos</h3>
        <p class="empty-desc">Intenta buscar con otros términos o limpia los filtros activos.</p>
        <button id="btn-reset-search-filters" type="button" class="btn-card-action btn-card-primary empty-reset-button">
          <i class="fa-solid fa-rotate-left" aria-hidden="true"></i> Restablecer filtros
        </button>
      </div>
    `;
    grid.querySelector('#btn-reset-search-filters')?.addEventListener('click', resetSearchAndFilters);
    return;
  }

  grid.innerHTML = filtered.map((repo) => {
    const repoUrl = safeExternalUrl(repo.html_url, { githubOnly: true });
    const demoUrl = safeExternalUrl(repo.homepage);
    const title = escapeHTML(repo.title || repo.name);
    const description = escapeHTML(repo.description || '');
    const language = escapeHTML(repo.language || 'Código');
    const icon = escapeHTML(repo.icon || 'fa-solid fa-code-branch');
    const topics = (Array.isArray(repo.topics) ? repo.topics : [])
      .filter(topic => typeof topic === 'string')
      .slice(0, 3);
    const langClass = LANGUAGE_CLASSES[repo.language] || LANGUAGE_CLASSES['Default'];
    const formattedDate = new Date(repo.updated_at).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    const isLive = Boolean(demoUrl) && repo.demoStatus === 'live';
    const statusLabel = repo.demoStatus === 'live' ? 'Demo disponible' : repo.demoStatus === 'development' ? 'En desarrollo' : 'Sin demo';

    return `
      <article class="repo-card">
        <div class="card-shine"></div>
        
        <div>
          <!-- Card Top Bar -->
          <div class="card-top-bar">
            <div class="card-icon-container">
              <i class="${icon}" aria-hidden="true"></i>
            </div>
            <div class="card-badges">
              ${isLive ? `<span class="badge-live-demo"><i class="fa-solid fa-bolt"></i> Demo disponible</span>` : `<span class="badge-demo-status status-${escapeHTML(repo.demoStatus)}">${escapeHTML(statusLabel)}</span>`}
              ${repo.featured ? '<span class="badge-featured"><i class="fa-solid fa-star"></i> Destacado</span>' : ''}
              <span class="badge-public">Público</span>
            </div>
          </div>

          <!-- Card Body -->
          <div class="card-body">
            <h3 class="repo-name">${title}</h3>
            <p class="repo-desc">${description}</p>
          </div>

          <!-- Tags & Language -->
          <div class="card-tags">
            <span class="tag-lang">
              <span class="lang-dot ${langClass}"></span>
              ${language}
            </span>
            ${topics.map(topic => `<span class="tag-topic">#${escapeHTML(topic)}</span>`).join('')}
          </div>
        </div>

        <div>
          <!-- Card Stats Footer -->
          <div class="card-meta">
            <div class="meta-stats">
              <span class="meta-stat" title="Estrellas">
                <i class="fa-solid fa-star"></i> ${repo.stars || 0}
              </span>
              <span class="meta-stat" title="Forks">
                <i class="fa-solid fa-code-fork"></i> ${repo.forks || 0}
              </span>
            </div>
            <span class="meta-date" title="Última actualización">
              <i class="fa-regular fa-clock"></i> ${formattedDate}
            </span>
          </div>

          <!-- Card Actions -->
          <div class="card-actions">
            <button class="btn-card-action btn-card-secondary" type="button" data-project-detail="${escapeHTML(repo.name)}">
              <i class="fa-solid fa-circle-info" aria-hidden="true"></i> Detalles
            </button>
            ${isLive ? `
              <a href="${escapeHTML(demoUrl)}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-card-primary" title="Abrir demo en vivo">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo
              </a>
            ` : ''}
            <a href="${escapeHTML(repoUrl || 'https://github.com')}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-card-secondary" title="Ver código en GitHub" ${repoUrl ? '' : 'aria-disabled="true"'}>
              <i class="fa-brands fa-github"></i> Código
            </a>
            <button class="btn-card-copy" type="button" data-clone-url="${escapeHTML(repoUrl || '')}" title="Copiar comando git clone" aria-label="Copiar comando git clone" ${repoUrl ? '' : 'disabled'}>
              <i class="fa-regular fa-copy"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('[data-project-detail]').forEach(button => {
    button.addEventListener('click', () => openProjectDetail(button.dataset.projectDetail));
  });
  grid.querySelectorAll('[data-clone-url]').forEach((button) => {
    button.addEventListener('click', () => copyCloneUrl(button.dataset.cloneUrl));
  });
  grid.querySelector('#btn-reset-search-filters')?.addEventListener('click', resetSearchAndFilters);
}

window.resetSearchAndFilters = function() {
  state.searchQuery = '';
  state.activeFilter = 'all';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  const clearBtn = document.getElementById('btn-clear-search');
  if (clearBtn) clearBtn.classList.remove('visible');
  renderFilterChips();
  renderProjects();
};

// ==========================================================================
// 12. SEARCH & SORT CONTROLLERS
// ==========================================================================
function initSearchAndControls() {
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('btn-clear-search');
  const sortSelect = document.getElementById('sort-select');
  const syncBtn = document.getElementById('btn-sync-github');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (clearBtn) {
        if (state.searchQuery.length > 0) {
          clearBtn.classList.add('visible');
        } else {
          clearBtn.classList.remove('visible');
        }
      }
      renderProjects();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        state.searchQuery = '';
        clearBtn.classList.remove('visible');
        searchInput.focus();
        renderProjects();
      }
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProjects();
    });
  }

  if (syncBtn) {
    syncBtn.addEventListener('click', () => {
      playChime('click');
      fetchGitHubRepos(true);
    });
  }
}

// ==========================================================================
// 13. TOAST & CLIPBOARD UTILITIES
// ==========================================================================
window.copyCloneUrl = function(repoUrl) {
  playChime('click');
  const validatedUrl = safeExternalUrl(repoUrl, { githubOnly: true });
  if (!validatedUrl) {
    showToast('URL de repositorio no válida', 'fa-circle-xmark');
    return;
  }
  const cloneCmd = `git clone ${validatedUrl}.git`;
  if (!navigator.clipboard?.writeText) {
    showToast('El portapapeles no está disponible en este navegador', 'fa-circle-xmark');
    return;
  }
  navigator.clipboard.writeText(cloneCmd).then(() => {
    showToast('Comando git clone copiado', 'fa-clipboard-check');
  }).catch(() => {
    showToast('Error al copiar al portapapeles', 'fa-circle-xmark');
  });
};

function showToast(message, icon = 'fa-info-circle') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  const iconElement = document.createElement('i');
  iconElement.className = `fa-solid ${/^[a-z0-9 -]+$/i.test(icon) ? icon : 'fa-info-circle'}`;
  iconElement.setAttribute('aria-hidden', 'true');
  const messageElement = document.createElement('span');
  messageElement.textContent = String(message ?? '');
  toast.append(iconElement, messageElement);

  container.replaceChildren();
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================================================
// 15. FLOATING TOP BUTTON & SMOOTH NAV
// ==========================================================================
function initScrollAndNav() {
  const topBtn = document.getElementById('btn-scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      topBtn?.classList.add('visible');
    } else {
      topBtn?.classList.remove('visible');
    }
  });

  if (topBtn) {
    topBtn.addEventListener('click', () => {
      playChime('click');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}


function openProjectDetail(repoName, updateHistory = true) {
  const repo = state.repos.find(item => item.name === repoName);
  if (!repo) return;
  const detail = document.getElementById('project-detail');
  const content = document.getElementById('project-detail-content');
  const projects = document.getElementById('projects');
  const controls = document.querySelector('.controls-section');
  const hero = document.getElementById('hero');
  const safeRepo = safeExternalUrl(repo.html_url, { githubOnly: true });
  const safeDemo = safeExternalUrl(repo.homepage);
  const screenshots = (repo.screenshots || []).map(safeExternalUrl).filter(Boolean);
  const title = escapeHTML(repo.title || repo.name);
  const description = escapeHTML(repo.description || 'Proyecto de código abierto.');
  const status = repo.demoStatus === 'live' && safeDemo ? 'Demo disponible' : repo.demoStatus === 'development' ? 'En desarrollo' : 'Sin demo disponible';
  content.innerHTML = `
    <article class="project-detail-card">
      <header class="project-detail-header">
        <span class="section-badge"><i class="fa-solid fa-layer-group"></i> FICHA DEL PROYECTO</span>
        <h1>${title}</h1>
        <p>${description}</p>
        <div class="detail-meta">
          <span><i class="fa-solid fa-code"></i> ${escapeHTML(repo.language || 'Código')}</span>
          <span><i class="fa-solid fa-folder"></i> ${escapeHTML(repo.category || 'Aplicaciones')}</span>
          <span><i class="fa-solid fa-star"></i> ${Number(repo.stars || 0)} estrellas</span>
          <span class="badge-demo-status">${escapeHTML(status)}</span>
        </div>
      </header>
      <section class="detail-gallery" aria-label="Capturas del proyecto">
        <h2>Capturas del proyecto</h2>
        ${screenshots.length ? screenshots.map((src,index) => `<img src="${escapeHTML(src)}" alt="Captura ${index+1} de ${title}" loading="lazy">`).join('') : '<div class="detail-gallery-empty"><i class="fa-regular fa-images"></i><p>Las capturas de este proyecto se añadirán próximamente.</p></div>'}
      </section>
      <section class="detail-description">
        <h2>Sobre este proyecto</h2><p>${description}</p>
        <p>Última actualización: ${new Date(repo.updated_at).toLocaleDateString('es-ES')}</p>
      </section>
      <div class="detail-actions">
        ${safeRepo ? `<a class="btn-card-action btn-card-primary" href="${escapeHTML(safeRepo)}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> Ver código</a>` : ''}
        ${safeDemo && repo.demoStatus === 'live' ? `<a class="btn-card-action btn-card-secondary" href="${escapeHTML(safeDemo)}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Abrir demo</a>` : ''}
      </div>
    </article>`;
  if (projects) projects.hidden = true;
  if (controls) controls.hidden = true;
  if (hero) hero.hidden = true;
  detail.hidden = false;
  if (updateHistory) history.pushState({ project: repo.name }, '', `#project/${encodeURIComponent(repo.name)}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function closeProjectDetail(updateHistory = true) {
  const detail = document.getElementById('project-detail');
  const projects = document.getElementById('projects');
  const controls = document.querySelector('.controls-section');
  const hero = document.getElementById('hero');
  if (detail) detail.hidden = true;
  if (projects) projects.hidden = false;
  if (controls) controls.hidden = false;
  if (hero) hero.hidden = false;
  if (updateHistory && location.hash.startsWith('#project/')) history.pushState({}, '', '#projects');
}
function handleProjectRoute() {
  const match = location.hash.match(/^#project\/(.+)$/);
  if (match) {
    const name = decodeURIComponent(match[1]);
    if (state.repos.some(repo => repo.name === name)) openProjectDetail(name);
  } else {
    closeProjectDetail(false);
  }
}
function initProjectDetails() {
  document.getElementById('btn-detail-back')?.addEventListener('click', () => closeProjectDetail());
  window.addEventListener('popstate', () => {
    const match = location.hash.match(/^#project\/(.+)$/);
    if (match) {
      const name = decodeURIComponent(match[1]);
      if (state.repos.some(repo => repo.name === name)) openProjectDetail(name, false);
    } else closeProjectDetail(false);
  });
  if (location.hash.startsWith('#project/')) {
    const name = decodeURIComponent(location.hash.slice(9));
    const repo = state.repos.find(item => item.name === name);
    if (repo) openProjectDetail(name, false);
  }
}
function initAutomaticGitHubSync() {
  const syncIfStale = () => {
    if (document.visibilityState !== 'visible') return;
    if (Date.now() - state.lastSync < 5 * 60 * 1000) return;
    fetchGitHubRepos(false);
  };
  window.addEventListener('focus', syncIfStale);
  document.addEventListener('visibilitychange', syncIfStale);
}

// ==========================================================================
// 16. INITIALIZATION BOOTSTRAP
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initWelcomeScreen();
  initMobileMenu();
  initTheme();
  initSearchAndControls();
  initScrollAndNav();
  initProjectDetails();
  initAutomaticGitHubSync();

  // Initial render with curated database
  updateStats();
  renderFilterChips();
  renderProjects();

  // Fetch latest updates from GitHub in background
  fetchGitHubRepos(false);
});
