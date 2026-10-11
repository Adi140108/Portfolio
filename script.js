/**
 * Adithya Portfolio — Production Master Dynamic Controller
 * Features: Live GitHub API Telemetry, Dynamic Modals, Search & Filter Engine,
 * Accessible Clipboard Actions, Performance Canvas Pausing & Form Validation.
 */

const GITHUB_USERNAME = 'Adi140108';

// Verified Fallback Repositories Dataset
const CACHED_REPOS = [
  {
    name: 'Portfolio',
    description: 'Personal developer portfolio with real-time GitHub integration, UI/UX Pro Max architecture, and dynamic project explorer.',
    language: 'HTML',
    stars: 0,
    forks: 0,
    html_url: 'https://github.com/Adi140108/Portfolio',
    homepage: '',
    updated_at: '2026-09-27T17:12:19Z'
  },
  {
    name: 'SmartQ-Stadium',
    description: 'Smart stadium queue and resource coordination system for high-throughput public venues.',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    html_url: 'https://github.com/Adi140108/SmartQ-Stadium',
    homepage: '',
    updated_at: '2026-07-15T10:14:22Z'
  },
  {
    name: 'CODEWARS-4.0',
    description: 'Interactive competitive coding challenge and technical event platform. Live at codewars-4-0.vercel.app.',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    html_url: 'https://github.com/Adi140108/CODEWARS-4.0',
    homepage: 'https://codewars-4-0.vercel.app/',
    updated_at: '2026-02-25T15:25:35Z'
  },
  {
    name: 'MediMind-Ai',
    description: 'Next-generation AI-powered healthcare triage and medical advisory platform built with Astro.',
    language: 'Astro',
    stars: 0,
    forks: 0,
    html_url: 'https://github.com/Adi140108/MediMind-Ai',
    homepage: '',
    updated_at: '2026-06-26T16:10:46Z'
  },
  {
    name: 'Sehat-Setu',
    description: 'Digital health and patient connectivity ecosystem implemented in TypeScript.',
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    html_url: 'https://github.com/Adi140108/Sehat-Setu',
    homepage: '',
    updated_at: '2026-08-17T04:54:56Z'
  },
  {
    name: 'Nexora_Dashboard',
    description: 'Modern administrative and analytics dashboard featuring responsive UI components and data visualizations.',
    language: 'JavaScript',
    stars: 0,
    forks: 1,
    html_url: 'https://github.com/Adi140108/Nexora_Dashboard',
    homepage: '',
    updated_at: '2026-05-02T12:50:39Z'
  },
  {
    name: 'SmartQ-Stadium',
    description: 'Smart stadium queue and concession management system for seamless event crowd flow.',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    html_url: 'https://github.com/Adi140108/SmartQ-Stadium',
    homepage: '',
    updated_at: '2026-04-20T19:33:46Z'
  },
  {
    name: 'Vote-Buddy',
    description: 'Secure and interactive web voting & poll aggregation portal.',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    html_url: 'https://github.com/Adi140108/Vote-Buddy',
    homepage: '',
    updated_at: '2026-04-25T13:24:36Z'
  },
  {
    name: 'Resource-Management-System',
    description: 'Organizational inventory and resource scheduling application with CRUD operations.',
    language: 'JavaScript',
    stars: 0,
    forks: 1,
    html_url: 'https://github.com/Adi140108/Resource-Management-System',
    homepage: '',
    updated_at: '2026-04-28T14:01:51Z'
  },
  {
    name: 'Jyoti_AI',
    description: 'AI-assisted mobile companion application developed using Dart and Flutter.',
    language: 'Dart',
    stars: 0,
    forks: 0,
    html_url: 'https://github.com/Adi140108/Jyoti_AI',
    homepage: '',
    updated_at: '2026-03-23T18:15:02Z'
  },
  {
    name: 'MM-CAR-CARE',
    description: 'Automotive service booking and detailing showcase web platform built with Astro.',
    language: 'Astro',
    stars: 0,
    forks: 0,
    html_url: 'https://github.com/Adi140108/MM-CAR-CARE',
    homepage: '',
    updated_at: '2026-06-19T17:16:51Z'
  },
  {
    name: 'InAmigos',
    description: 'Social networking and community connecting platform with modern Astro architecture.',
    language: 'Astro',
    stars: 0,
    forks: 0,
    html_url: 'https://github.com/Adi140108/InAmigos',
    homepage: '',
    updated_at: '2026-06-21T08:51:45Z'
  },
  {
    name: 'NayePankh',
    description: 'Social cause and NGO community support portal.',
    language: 'HTML',
    stars: 0,
    forks: 0,
    html_url: 'https://github.com/Adi140108/NayePankh',
    homepage: '',
    updated_at: '2026-06-14T07:56:03Z'
  },
  {
    name: 'FARMER-WEB',
    description: 'Agricultural tech portal bridging farmers to market insights and crop advisory.',
    language: 'HTML',
    stars: 0,
    forks: 0,
    html_url: 'https://github.com/Adi140108/FARMER-WEB',
    homepage: '',
    updated_at: '2025-10-17T15:04:01Z'
  },
  {
    name: 'TechAdi',
    description: 'Tech portfolio & coding projects showcase.',
    language: 'HTML',
    stars: 0,
    forks: 0,
    html_url: 'https://github.com/Adi140108/TechAdi',
    homepage: '',
    updated_at: '2025-10-11T16:51:09Z'
  }
];

// Project Case Study Details for Modal
const PROJECT_DETAILS = {
  codewars: {
    title: 'CODEWARS 4.0 &mdash; Competitive Event Platform',
    status: 'Live Deployed Platform',
    badgeClass: 'live-pill',
    problem: 'College technical competitions and hackathons frequently require a reliable platform to present challenge problems, coordinate participants, and broadcast live event updates without UI clutter.',
    solution: 'Designed and deployed CODEWARS 4.0 using modern JavaScript and Vercel hosting. Built a responsive cyberpunk aesthetic interface with structured navigation, clear rule guidelines, and live links.',
    stack: ['JavaScript (ES6+)', 'Vercel Deployment', 'Responsive CSS3', 'Event Tech'],
    contribution: 'Frontend architecture, UI design system, challenge routing, and production deployment on Vercel.',
    links: [
      { text: 'Live Web Platform', url: 'https://codewars-4-0.vercel.app/', icon: 'fa-solid fa-globe' },
      { text: 'GitHub Repository', url: 'https://github.com/Adi140108/CODEWARS-4.0', icon: 'fa-brands fa-github' }
    ]
  },
  medikiosk: {
    title: 'MediKiosk &mdash; AI Patient Case-Taking &amp; Triage System',
    status: 'Principal Showcase &bull; Prototype &amp; Architecture',
    badgeClass: 'ai-pill',
    problem: 'Outpatient consultations suffer from incomplete patient histories, severe language barriers, and lack of structured symptom intake before clinicians evaluate cases.',
    solution: 'Engineered an AI-assisted clinical intake architecture featuring dedicated General OPD and Ayurvedic OPD flows, multilingual voice/text input, Vashini API OCR document ingestion, and deterministic clinical red-flag safety checks.',
    stack: ['Next.js / React', 'Python / FastAPI', 'Firebase Firestore', 'Gemma 4 12B', 'Vashini API OCR', 'Backblaze B2'],
    contribution: 'Clinical intake workflow design, multi-OPD questionnaire schema separation, FastAPI endpoint specifications, and physician dashboard concept.',
    links: [
      { text: 'Read Full Case Study', url: 'medikiosk.html', icon: 'fa-solid fa-book-open' }
    ]
  },
  ipsakti: {
    title: 'IP-Sakti &mdash; Traditional Knowledge IP Discovery (SIH PS-45)',
    status: 'Principal Showcase &bull; SIH Internal Qualified',
    badgeClass: 'sih-pill',
    problem: 'India’s vast traditional knowledge repositories lack unified, source-aware prior-art search tools, leaving cultural heritage vulnerable to biopiracy and improper patent claims.',
    solution: 'Developed for Smart India Hackathon 2026 (Problem Statement 45 - University Internal Round Qualified). Integrates source-aware retrieval across TKDL, IP India records, and statutory legislation with immutable citation chains.',
    stack: ['SIH 2026 PS-45', 'Python / FastAPI', 'Vector RAG', 'Gemma 4 12B', 'Firebase Firestore', 'Backblaze B2'],
    contribution: 'Team lead for SIH Problem Statement 45 decomposition, system architecture design, citation verification workflow, and internal selection pitch.',
    links: [
      { text: 'Read Full Case Study', url: 'ip-sakti.html', icon: 'fa-solid fa-book-open' },
      { text: 'Author GitHub Profile', url: 'https://github.com/Adi140108', icon: 'fa-brands fa-github' }
    ]
  },
  medimind: {
    title: 'MediMind-Ai &mdash; Preliminary Health Advisory System',
    status: 'Healthcare AI Web Platform',
    badgeClass: 'ai-pill',
    problem: 'Patients needing preliminary health insights face fragmented tools that lack accessible explanations and seamless triage guidance.',
    solution: 'Engineered MediMind-Ai utilizing Astro for blazing-fast static delivery paired with modern TypeScript, providing contextual symptom explanations and health awareness workflows.',
    stack: ['Astro', 'TypeScript', 'Healthcare AI', 'Modular Web Components'],
    contribution: 'Web component structure, client-side routing, and interactive symptom advisory views.',
    links: [
      { text: 'MediMind-Ai Repository', url: 'https://github.com/Adi140108/MediMind-Ai', icon: 'fa-brands fa-github' }
    ]
  },
  nexora: {
    title: 'Nexora Dashboard &mdash; Administrative UI',
    status: 'Technical Club Portal',
    badgeClass: 'analytics-pill',
    problem: 'Student technical clubs need unified dashboards to monitor member metrics, workshop registrations, and club resources.',
    solution: 'Developed an administrative dashboard with modular widget cards, dynamic charts, theme toggles, and responsive layouts for desktop and mobile devices.',
    stack: ['JavaScript (ES6+)', 'Data Visualization', 'Dashboard Architecture', 'Club Project'],
    contribution: 'Dashboard layout design, interactive telemetry widgets, and component modularity.',
    links: [
      { text: 'Nexora Dashboard Repository', url: 'https://github.com/Adi140108/Nexora_Dashboard', icon: 'fa-brands fa-github' }
    ]
  },
  sehatsetu: {
    title: 'Sehat-Setu &mdash; Digital Health &amp; Telemedicine Bridge',
    status: 'Healthcare Mobile &amp; Web Bridge',
    badgeClass: 'live-pill',
    problem: 'Primary healthcare centers and regional clinics lack lightweight, responsive digital appointment coordination channels for underserved communities.',
    solution: 'Created Sehat-Setu to connect patients with local healthcare providers, streamlining clinic discovery, appointment booking, and care continuity.',
    stack: ['Dart / Flutter', 'TypeScript', 'REST APIs', 'Health Coordination'],
    contribution: 'Application layout, API integration contracts, and appointment scheduling UI.',
    links: [
      { text: 'Sehat-Setu Repository', url: 'https://github.com/Adi140108/Sehat-Setu', icon: 'fa-brands fa-github' }
    ]
  }
};

// Language Colors Registry
const LANGUAGE_COLORS = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Dart: '#00b4ab',
  HTML: '#e34f26',
  CSS: '#563d7c',
  Astro: '#ff5d01',
  Python: '#3572A5',
  default: '#f59e0b'
};

// Global App State
let repositories = CACHED_REPOS;
let activeLanguage = 'all';
let searchKeyword = '';
let currentSort = 'updated';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initParticleEngine();
  initTypewriter();
  initNavigation();
  initSpotlight();
  initCaseStudyTOC();
  initClipboardAndForm();
  initModals();
  initLiveGitHub();
  initExplorerControls();
  initFooterYear();
});

/* --------------------------------------------------------------------------
   1. Canvas Particle Engine (Pauses when tab is hidden for performance)
   -------------------------------------------------------------------------- */
function initParticleEngine() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let animId = null;

  function setSize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', setSize);
  setSize();

  const count = Math.min(Math.floor(window.innerWidth / 24), 50);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.r = Math.random() * 1.8 + 0.6;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.color = Math.random() > 0.5 ? 'rgba(245, 158, 11, 0.45)' : 'rgba(139, 92, 246, 0.4)';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.strokeStyle = `rgba(245, 158, 11, ${0.14 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    animId = requestAnimationFrame(loop);
  }

  // Energy & Performance: Pause animation when page hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (animId) cancelAnimationFrame(animId);
    } else {
      animId = requestAnimationFrame(loop);
    }
  });

  loop();
}

/* --------------------------------------------------------------------------
   2. Typewriter Effect
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const target = document.getElementById('typewriter');
  if (!target) return;

  const roles = [
    'Full-Stack Web Applications',
    'Flutter & Cross-Platform Mobile Apps',
    'AI Integrations & Intelligent Tools',
    'Clean & Scalable Software Architecture',
    'Hackathon Prototypes & Production Systems'
  ];

  let rIndex = 0;
  let cIndex = 0;
  let deleting = false;
  let speed = 80;

  function type() {
    const current = roles[rIndex];
    if (deleting) {
      target.textContent = current.substring(0, cIndex - 1);
      cIndex--;
      speed = 35;
    } else {
      target.textContent = current.substring(0, cIndex + 1);
      cIndex++;
      speed = 75;
    }

    if (!deleting && cIndex === current.length) {
      deleting = true;
      speed = 2200;
    } else if (deleting && cIndex === 0) {
      deleting = false;
      rIndex = (rIndex + 1) % roles.length;
      speed = 350;
    }

    setTimeout(type, speed);
  }

  type();
}

/* --------------------------------------------------------------------------
   3. Navigation & Mobile Menu
   -------------------------------------------------------------------------- */
function initNavigation() {
  const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-item');

  // Scroll spy
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
      const top = sec.offsetTop - 140;
      const h = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + h) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = navMenu.classList.toggle('active');
      toggleBtn.setAttribute('aria-expanded', String(isActive));
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        if (isActive) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
  }
}

/* --------------------------------------------------------------------------
   4. Spotlight Cursor Tracker (Optimized for Pointer/Mouse Devices)
   -------------------------------------------------------------------------- */
function initSpotlight() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  let ticking = false;
  document.addEventListener('mousemove', (e) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const cards = document.querySelectorAll('.spotlight-card');
        cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          if (
            e.clientX >= rect.left - 50 &&
            e.clientX <= rect.right + 50 &&
            e.clientY >= rect.top - 50 &&
            e.clientY <= rect.bottom + 50
          ) {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   4b. Case Study Table of Contents ScrollSpy (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initCaseStudyTOC() {
  const tocLinks = document.querySelectorAll('.toc-link');
  const sections = document.querySelectorAll('.case-section');
  if (!tocLinks.length || !sections.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        tocLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/* --------------------------------------------------------------------------
   5. Live GitHub Synchronizer
   -------------------------------------------------------------------------- */
async function initLiveGitHub() {
  const syncIcon = document.getElementById('sync-icon');
  const syncMsg = document.getElementById('sync-status-msg');

  try {
    if (syncIcon) syncIcon.classList.add('fa-spin');

    // 1. Fetch User Profile
    const uRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (uRes.ok) {
      const user = await uRes.json();
      if (user.avatar_url) {
        const av = document.getElementById('hero-avatar');
        if (av) av.src = user.avatar_url;
      }
      if (user.public_repos !== undefined) {
        const rEl = document.getElementById('stat-repos-count');
        const qEl = document.getElementById('quick-repo-total');
        if (rEl) rEl.textContent = user.public_repos;
        if (qEl) qEl.textContent = `${user.public_repos}+`;
      }
      if (user.followers !== undefined) {
        const fEl = document.getElementById('stat-followers-count');
        if (fEl) fEl.textContent = `${user.followers}+`;
      }
    }

    // 2. Fetch Repositories
    const rRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
    if (rRes.ok) {
      const raw = await rRes.json();
      if (Array.isArray(raw) && raw.length > 0) {
        repositories = raw.map(r => ({
          name: r.name,
          description: r.description || getFallbackDesc(r.name),
          language: r.language || 'Code',
          stars: r.stargazers_count,
          forks: r.forks_count,
          html_url: r.html_url,
          homepage: r.homepage || '',
          updated_at: r.updated_at
        }));
      }
    }

    if (syncMsg) syncMsg.textContent = `Live Connected (@${GITHUB_USERNAME})`;
  } catch (err) {
    console.warn('GitHub API rate limited or unreachable. Using verified snapshot:', err);
    if (syncMsg) syncMsg.textContent = `Verified Snapshot (@${GITHUB_USERNAME})`;
    repositories = CACHED_REPOS;
  } finally {
    if (syncIcon) syncIcon.classList.remove('fa-spin');
    renderRepositories();
    updateFilterCounts();
  }
}

function getFallbackDesc(name) {
  const match = CACHED_REPOS.find(r => r.name.toLowerCase() === name.toLowerCase());
  return match ? match.description : 'Open source software repository engineered by Adithya.';
}

/* --------------------------------------------------------------------------
   6. Repository Explorer Controls & Filtering
   -------------------------------------------------------------------------- */
function initExplorerControls() {
  const searchInput = document.getElementById('repo-search-input');
  const clearBtn = document.getElementById('clear-search-btn');
  const sortSelect = document.getElementById('repo-sort-select');
  const filterPills = document.querySelectorAll('.filter-pill');
  const resetBtn = document.getElementById('reset-filters-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchKeyword = e.target.value.trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = searchKeyword.length > 0 ? 'block' : 'none';
      renderRepositories();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchKeyword = '';
      clearBtn.style.display = 'none';
      renderRepositories();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderRepositories();
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');
      activeLanguage = pill.getAttribute('data-lang');
      renderRepositories();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchKeyword = '';
      if (clearBtn) clearBtn.style.display = 'none';
      activeLanguage = 'all';
      filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
        if (p.getAttribute('data-lang') === 'all') {
          p.classList.add('active');
          p.setAttribute('aria-selected', 'true');
        }
      });
      renderRepositories();
    });
  }
}

function updateFilterCounts() {
  const countAll = document.getElementById('count-all-badge');
  if (countAll) countAll.textContent = repositories.length;
}

function renderRepositories() {
  const container = document.getElementById('repos-container');
  const emptyState = document.getElementById('no-repos-found');
  if (!container) return;

  // Filter
  let list = repositories.filter(repo => {
    const langMatch = activeLanguage === 'all' || 
      (repo.language && repo.language.toLowerCase() === activeLanguage.toLowerCase());
    
    const searchMatch = searchKeyword === '' ||
      repo.name.toLowerCase().includes(searchKeyword) ||
      (repo.description && repo.description.toLowerCase().includes(searchKeyword)) ||
      (repo.language && repo.language.toLowerCase().includes(searchKeyword));

    return langMatch && searchMatch;
  });

  // Sort
  list.sort((a, b) => {
    if (currentSort === 'name') {
      return a.name.localeCompare(b.name);
    } else if (currentSort === 'stars') {
      return (b.stars + b.forks) - (a.stars + a.forks);
    } else {
      return new Date(b.updated_at) - new Date(a.updated_at);
    }
  });

  if (list.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  container.innerHTML = list.map(repo => {
    const langColor = LANGUAGE_COLORS[repo.language] || LANGUAGE_COLORS.default;
    const timeAgo = formatTimeAgo(repo.updated_at);

    return `
      <article class="repo-card-item glass-card spotlight-card">
        <div class="repo-top-row">
          <i class="fa-regular fa-folder repo-folder-icon" aria-hidden="true"></i>
          <div class="repo-metric-stats">
            ${repo.stars > 0 ? `<span class="metric-stat-unit"><i class="fa-regular fa-star"></i> ${repo.stars}</span>` : ''}
            ${repo.forks > 0 ? `<span class="metric-stat-unit"><i class="fa-solid fa-code-fork"></i> ${repo.forks}</span>` : ''}
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="link-btn-circle" title="View ${escapeHTML(repo.name)} on GitHub" aria-label="GitHub Repository ${escapeHTML(repo.name)}">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        <h3 class="repo-item-title">
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
            ${escapeHTML(repo.name)}
          </a>
        </h3>

        <p class="repo-item-summary">
          ${escapeHTML(repo.description || 'Open source software project engineered by Adithya.')}
        </p>

        <div class="repo-bottom-meta">
          <span class="repo-lang-tag">
            <span class="lang-dot" style="background-color: ${langColor};"></span>
            <span>${escapeHTML(repo.language || 'Code')}</span>
          </span>
          <span>Pushed ${timeAgo}</span>
        </div>
      </article>
    `;
  }).join('');
}

function formatTimeAgo(dateString) {
  if (!dateString) return 'recently';
  const d = new Date(dateString);
  const diffDays = Math.ceil(Math.abs(new Date() - d) / (1000 * 60 * 60 * 24));
  if (diffDays <= 1) return 'today';
  if (diffDays < 30) return `${diffDays}d ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
  return `${d.getFullYear()}`;
}

function escapeHTML(s) {
  if (!s) return '';
  return s.replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));
}

/* --------------------------------------------------------------------------
   7. Modals System (Resume & Project Details)
   -------------------------------------------------------------------------- */
function initModals() {
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtn = document.getElementById('open-resume-btn');
  const heroResumeTrigger = document.getElementById('hero-resume-trigger');
  const closeResumeModal = document.getElementById('close-resume-modal');
  const closeResumeSecondary = document.getElementById('modal-close-secondary');

  const projectModal = document.getElementById('project-detail-modal');
  const closeProjectModal = document.getElementById('close-project-modal');
  const pmTitle = document.getElementById('pm-title');
  const pmBody = document.getElementById('pm-body');
  const pmFooter = document.getElementById('pm-footer');

  function openResume() {
    if (resumeModal) {
      resumeModal.classList.add('active');
      resumeModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeAllModals() {
    if (resumeModal) {
      resumeModal.classList.remove('active');
      resumeModal.setAttribute('aria-hidden', 'true');
    }
    if (projectModal) {
      projectModal.classList.remove('active');
      projectModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (openResumeBtn && openResumeBtn.tagName === 'BUTTON') openResumeBtn.addEventListener('click', openResume);
  if (heroResumeTrigger && heroResumeTrigger.tagName === 'BUTTON') heroResumeTrigger.addEventListener('click', openResume);
  if (closeResumeModal) closeResumeModal.addEventListener('click', closeAllModals);
  if (closeResumeSecondary) closeResumeSecondary.addEventListener('click', closeAllModals);
  if (closeProjectModal) closeProjectModal.addEventListener('click', closeAllModals);

  // Close when clicking on backdrop
  window.addEventListener('click', (e) => {
    if (e.target === resumeModal || e.target === projectModal) {
      closeAllModals();
    }
  });

  // ESC key to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });

  // Project Detail Triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.btn-detail-trigger');
    if (!trigger) return;

    const key = trigger.getAttribute('data-project');
    const data = PROJECT_DETAILS[key];
    if (!data) return;

    pmTitle.innerHTML = data.title;
    pmBody.innerHTML = `
      <div class="modal-status-badge ${data.badgeClass}" style="display:inline-block; margin-bottom: 1rem; padding: 0.3rem 0.8rem; border-radius: 9999px; font-size: 0.8rem; font-family: var(--font-mono);">
        ${data.status}
      </div>
      <div class="resume-highlights-box">
        <h4>The Problem:</h4>
        <p>${data.problem}</p>
      </div>
      <div class="resume-highlights-box">
        <h4>Architecture & Solution:</h4>
        <p>${data.solution}</p>
      </div>
      <div class="resume-highlights-box">
        <h4>My Key Contributions:</h4>
        <p>${data.contribution}</p>
      </div>
      <div class="tech-tag-row" style="margin-top: 1rem;">
        ${data.stack.map(t => `<span class="tech-chip">${t}</span>`).join('')}
      </div>
    `;

    pmFooter.innerHTML = `
      ${data.links.map(l => `
        <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
          <i class="${l.icon}"></i> ${l.text}
        </a>
      `).join('')}
      <button class="btn btn-sm btn-glass" onclick="document.getElementById('project-detail-modal').classList.remove('active')">Close</button>
    `;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
  });
}

/* --------------------------------------------------------------------------
   8. Clipboard & Contact Form Handling
   -------------------------------------------------------------------------- */
function initClipboardAndForm() {
  const emailVal = 'adithyam357@gmail.com';
  const copyBtn = document.getElementById('about-copy-email');
  const copyCard = document.getElementById('oneclick-copy-card');

  function doCopy() {
    navigator.clipboard.writeText(emailVal).then(() => {
      showToast('Email copied to clipboard: ' + emailVal);
      const span = document.getElementById('about-copy-text');
      if (span) {
        span.textContent = 'Copied to Clipboard!';
        setTimeout(() => { span.textContent = 'Copy Email Address'; }, 2200);
      }
    }).catch(() => {
      showToast(emailVal);
    });
  }

  if (copyBtn) copyBtn.addEventListener('click', doCopy);
  if (copyCard) {
    copyCard.addEventListener('click', doCopy);
    copyCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        doCopy();
      }
    });
  }

  // Contact Form
  const form = document.getElementById('portfolio-contact-form');
  const feedback = document.getElementById('form-feedback-status');
  const submitBtn = document.getElementById('submit-btn');
  const submitBtnText = document.getElementById('submit-btn-text');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      if (submitBtnText) submitBtnText.textContent = 'Transmitting...';
      if (feedback) {
        feedback.className = 'form-feedback-box';
        feedback.textContent = 'Transmitting message to Adithya...';
      }

      const nameInput = document.getElementById('form-sender-name');
      const emailInput = document.getElementById('form-sender-email');
      const subjInput = document.getElementById('form-sender-subject');
      const msgInput = document.getElementById('form-sender-message');

      const senderName = nameInput ? nameInput.value.trim() : 'Portfolio Visitor';
      const senderEmail = emailInput ? emailInput.value.trim() : '';
      const senderSubj = subjInput && subjInput.value.trim() ? subjInput.value.trim() : `Portfolio Message from ${senderName}`;
      const senderMsg = msgInput ? msgInput.value.trim() : '';

      const emailVal = 'adithyam357@gmail.com';
      const mailtoBody = `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${senderMsg}`;
      const mailtoLink = `mailto:${emailVal}?subject=${encodeURIComponent(senderSubj)}&body=${encodeURIComponent(mailtoBody)}`;

      try {
        const formData = new FormData(form);
        const res = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          form.reset();
          if (feedback) {
            feedback.className = 'form-feedback-box success';
            feedback.innerHTML = '<i class="fa-solid fa-circle-check"></i> Message transmitted successfully! I will reply to you via email shortly.';
          }
          showToast('Message transmitted successfully!');
        } else {
          throw new Error('Backend form endpoint requires active Formspree ID');
        }
      } catch (err) {
        if (feedback) {
          feedback.className = 'form-feedback-box error';
          feedback.innerHTML = `
            <div style="display:flex; flex-direction:column; gap:10px; text-align:left;">
              <div style="display:flex; align-items:center; gap:8px;">
                <i class="fa-solid fa-triangle-exclamation" style="color:#F87171;"></i>
                <span>Direct API service is awaiting your Formspree Form ID in <code>index.html</code>.</span>
              </div>
              <a href="${mailtoLink}" class="btn btn-primary btn-sm" style="display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:10px 16px; border-radius:8px; font-weight:600; text-decoration:none;">
                <i class="fa-solid fa-paper-plane"></i> Send Pre-Filled Email to ${emailVal}
              </a>
            </div>
          `;
        }
        showToast('Click the button below to launch your email client!');
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (submitBtnText) submitBtnText.textContent = 'Send Message';
      }
    });
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = msg;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 3400);
}

function initFooterYear() {
  const y = document.getElementById('copyright-year');
  if (y) y.textContent = new Date().getFullYear();
}
