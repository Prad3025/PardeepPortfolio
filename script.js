/* ==========================================
   PRADEEP KUMAR_ - Portfolio JS
   ========================================== */

// ── STATE ──
const state = {
  name: 'PRADEEP KUMAR_',
  role1: 'AI/ML STUDENT',
  role2: 'DATA ANALYST',
  location: 'INDIA',
  bio: 'I turn data into insights and build intelligent solutions. Passionate about AI, Machine Learning, and Data Science.',
  tagline: '>> CODE. ANALYZE. AUTOMATE. REPEAT_',
  github: '#', linkedin: '#', twitter: '#', email: '#',
  aboutBio: "I'm an AI & ML student who loves working with data to solve real-world problems. I enjoy building models, analyzing data and creating impactful applications.",
  years: 2, projects: 15, certs: 5,
  mantras: ['CALM OVER CHAOS', 'LEARN OVER COMFORT', 'BUILD OVER TALKING'],
  projectsList: [
    { num:'01', name:'SALES DASHBOARD', desc:'Interactive dashboard using Power BI to visualize sales performance and KPIs.', readUrl:'#', liveUrl:'#' },
    { num:'02', name:'CUSTOMER CHURN ANALYSIS', desc:'ML model to predict customer churn using classification algorithms.', readUrl:'#', liveUrl:'#' },
    { num:'03', name:'MARKET BASKET ANALYSIS', desc:'Association rule mining to find product relationships and patterns.', readUrl:'#', liveUrl:'#' },
    { num:'04', name:'AI CHATBOT', desc:'NLP based chatbot built with Python and open-source models.', readUrl:'#', liveUrl:'#' }
  ],
  servicesList: ['FRONTEND DEVELOPMENT','DATA ANALYSIS','MACHINE LEARNING','AUTOMATION TESTING','DATA VISUALIZATION','API INTEGRATION'],
  skillsList: [
    {icon:'🐍', name:'PYTHON'}, {icon:'🗄️', name:'SQL'}, {icon:'📊', name:'POWER BI'},
    {icon:'📗', name:'EXCEL'}, {icon:'🤖', name:'MACHINE LEARNING'}, {icon:'🐼', name:'PANDAS'}, {icon:'🔢', name:'NUMPY'}
  ]
};

// ── ASCII ART (Face-like portrait) ──
const asciiFrames = [
`        .::::::::::.
      .::::::::::::::::.
    .:::::''::::::::::::::
   ::::'  '::'     ':::::::
  ::::        ...   '::::::
  ::::.      :::::.  ::::::
  :::::..   .:::::: .::::::
   ':::::::::::::::::::::'
    ':::::::::::::::::::'
  .:::::::::::::::::::::::.
 :::::::::::::::::::::::::::
:::'  ':::::::::::::::'  '::
::     ::::::::::::::.     ::
':     ':::::::::::::     ::
 ::     ':::::::::::     :::
 ::::.   ':::::::::'   .::::
  ':::::::         ::::::::'
    ':::::::::::::::::::::
       '::::::::::::::::`
];

// Generate dynamic ASCII art with character variation
function generateASCII() {
  const chars = ' .:-=+*#%@█▓▒░│┼┤├┬┴┐┌└┘';
  const width = 52;
  const height = 38;
  const art = [];
  
  // Simulate a face-like ASCII art
  const portrait = [
    "                  .::.                   ",
    "              .:::::::::::.              ",
    "           .::::::::::::::::::.          ",
    "         .:::::::''::::''::::::::.       ",
    "        ::::::::  .::.  .::::::::::      ",
    "       ::::::::  :####: ::#######:::     ",
    "       ::::::::: .::.  ...::.  .::::     ",
    "       :::::::::.     .:::::.  .::::     ",
    "       :::::::::  ... :::::::::::::.     ",
    "        ::::::::......::::::::::::::     ",
    "        ':::::::::::::::::::::::::'      ",
    "         '::::::::::::::::::::::'        ",
    "    .:::::::::::::::::::::::::::::::.    ",
    "   ::::::::::::::::::::::::::::::::::::  ",
    "  ::::::'  ':::::::::::::::::'  '::::::  ",
    "  ::::       :::::::::::::::.     :::::  ",
    " ::::   ..   '::::::::::::::   .. .::::  ",
    " ::::  ::::   ::::::::::::::  ::::.:::::  ",
    " ':::  '::'  .::::::::::::::  '::'::::'   ",
    "  ::::      :::::::::::::::::.    .::::   ",
    "  :::::.   :::::::::::::::::::.  .::::    ",
    "   ':::::::::::::::::::::::::::::::::'    ",
    "    '::::::  '::::::::::::::'  ::::::     ",
    "     :::::.   '::::::::::'   .:::::       ",
    "      '::::::.            .:::::::'       ",
    "        ':::::::.......::::::::'          ",
    "           '::::::::::::::::'             ",
    "               '::::::::'                 ",
  ];
  
  return portrait.join('\n');
}

// ── FLOATING CHARS ──
function spawnFloatingChars() {
  const container = document.getElementById('floatingChars');
  if (!container) return;
  const chars = '01アイウエオカキクケコ∑∏∂∇⊕⊗∈∉⊂⊃ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  
  for (let i = 0; i < 25; i++) {
    const el = document.createElement('span');
    el.className = 'float-char';
    el.textContent = chars[Math.floor(Math.random() * chars.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.animationDuration = (8 + Math.random() * 15) + 's';
    el.style.animationDelay = (Math.random() * 10) + 's';
    el.style.fontSize = (0.6 + Math.random() * 0.6) + 'rem';
    container.appendChild(el);
  }
}

// ── PARALLAX ──
function setupParallax() {
  const bg = document.querySelector('.parallax-bg');
  const asciiPortrait = document.querySelector('.ascii-wrapper');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (bg) {
      bg.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
    if (asciiPortrait) {
      asciiPortrait.style.transform = `translateY(${scrollY * 0.08}px)`;
    }
  });

  // Mouse parallax on hero
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    if (bg) {
      bg.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
    }
    if (asciiPortrait) {
      asciiPortrait.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    }
  });
}

// ── SCROLL REVEAL ──
function setupReveal() {
  const revealEls = document.querySelectorAll('.section-header, .about-content > *, .stats-grid, .skill-tag, .project-item, .service-item, .contact-content, .mantras');
  
  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    if (i % 4 === 1) el.classList.add('reveal-delay-1');
    if (i % 4 === 2) el.classList.add('reveal-delay-2');
    if (i % 4 === 3) el.classList.add('reveal-delay-3');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── COUNTER ANIMATION ──
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start);
    }
  }, 16);
}

function setupCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const nums = e.target.querySelectorAll('.stat-num');
        nums.forEach(num => {
          const target = parseInt(num.dataset.target);
          animateCounter(num, target);
        });
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  const statsGrid = document.querySelector('.stats-grid');
  if (statsGrid) observer.observe(statsGrid);
}

// ── NAVBAR ──
function setupNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNav();
  });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close on link click (mobile)
  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

function updateActiveNav() {
  const sections = ['home','about','skills','projects','services','contact'];
  const scrollY = window.scrollY + 100;
  
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) current = id;
  });
  
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href').replace('#','');
    link.classList.toggle('active', href === current);
  });
}

// ── CURSOR DOT ──
function setupCursor() {
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);
  
  document.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
  });
  
  document.addEventListener('mouseleave', () => { dot.style.opacity = 0; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = 1; });
}

// ── GLITCH TRIGGER ──
function setupGlitch() {
  const hero = document.getElementById('heroTitle');
  if (!hero) return;
  setInterval(() => {
    hero.classList.add('glitching');
    setTimeout(() => hero.classList.remove('glitching'), 200);
  }, 4000);
}

// ── TYPE EFFECT ──
function typeEffect(el, text, speed = 50) {
  el.textContent = '';
  let i = 0;
  const timer = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

// ── CONTACT FORM ──
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = '>> SENDING...';
    setTimeout(() => {
      btn.textContent = '>> SENT! ✓';
      btn.style.borderColor = 'var(--green)';
      setTimeout(() => { btn.textContent = '> SEND MESSAGE'; }, 3000);
    }, 1200);
  });
}

// ── ADMIN PANEL ──
function setupAdmin() {
  const btn = document.getElementById('adminBtn');
  const overlay = document.getElementById('adminOverlay');
  const closeBtn = document.getElementById('adminClose');
  
  btn?.addEventListener('click', () => {
    overlay.classList.add('open');
    renderAdminProjects();
    renderAdminServices();
    renderAdminSkills();
  });
  
  closeBtn?.addEventListener('click', () => overlay.classList.remove('open'));
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });

  // Tab switching
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.admin-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('tab-' + tab.dataset.tab)?.classList.add('active');
    });
  });
}

function renderAdminProjects() {
  const container = document.getElementById('adminProjectsList');
  if (!container) return;
  container.innerHTML = '';
  state.projectsList.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'admin-project-entry';
    div.innerHTML = `
      <button class="admin-remove-btn" onclick="removeProject(${i})">✕</button>
      <div class="admin-field"><label>PROJECT NAME_</label>
        <input type="text" value="${p.name}" onchange="state.projectsList[${i}].name=this.value"></div>
      <div class="admin-field"><label>DESCRIPTION_</label>
        <textarea rows="2" onchange="state.projectsList[${i}].desc=this.value">${p.desc}</textarea></div>
      <div class="admin-field"><label>READ MORE URL_</label>
        <input type="text" value="${p.readUrl}" onchange="state.projectsList[${i}].readUrl=this.value"></div>
      <div class="admin-field"><label>LIVE SITE URL_</label>
        <input type="text" value="${p.liveUrl}" onchange="state.projectsList[${i}].liveUrl=this.value"></div>
    `;
    container.appendChild(div);
  });
}

function renderAdminServices() {
  const container = document.getElementById('adminServicesList');
  if (!container) return;
  container.innerHTML = '';
  state.servicesList.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'admin-service-entry';
    div.innerHTML = `
      <button class="admin-remove-btn" onclick="removeService(${i})">✕</button>
      <div class="admin-field"><label>SERVICE NAME_</label>
        <input type="text" value="${s}" onchange="state.servicesList[${i}]=this.value"></div>
    `;
    container.appendChild(div);
  });
}

function renderAdminSkills() {
  const container = document.getElementById('adminSkillsList');
  if (!container) return;
  container.innerHTML = '';
  state.skillsList.forEach((sk, i) => {
    const div = document.createElement('div');
    div.className = 'admin-skill-entry';
    div.innerHTML = `
      <button class="admin-remove-btn" onclick="removeSkill(${i})">✕</button>
      <div class="admin-field"><label>SKILL ICON (EMOJI)_</label>
        <input type="text" value="${sk.icon}" onchange="state.skillsList[${i}].icon=this.value"></div>
      <div class="admin-field"><label>SKILL NAME_</label>
        <input type="text" value="${sk.name}" onchange="state.skillsList[${i}].name=this.value"></div>
    `;
    container.appendChild(div);
  });
}

// Apply functions
function applyIdentity() {
  state.name = document.getElementById('adName').value;
  state.role1 = document.getElementById('adRole1').value;
  state.role2 = document.getElementById('adRole2').value;
  state.location = document.getElementById('adLocation').value;
  state.bio = document.getElementById('adBio').value;
  state.tagline = document.getElementById('adTagline').value;

  // Apply to DOM
  const glitchEls = document.querySelectorAll('.glitch');
  const titleParts = state.name.split(' ');
  if (glitchEls[0]) { glitchEls[0].textContent = titleParts[0] || ''; glitchEls[0].dataset.text = titleParts[0] || ''; }
  if (glitchEls[1]) { glitchEls[1].textContent = titleParts.slice(1).join(' ') || ''; glitchEls[1].dataset.text = titleParts.slice(1).join(' ') || ''; }
  
  const roles = document.querySelectorAll('.role-line');
  if (roles[0]) roles[0].textContent = state.role1;
  if (roles[1]) roles[1].textContent = state.role2;
  
  const loc = document.querySelector('.hero-location');
  if (loc) loc.innerHTML = `<span class="pin">⊙</span> ${state.location}`;
  
  const bio = document.querySelector('.hero-bio');
  if (bio) bio.textContent = state.bio;
  
  const tagline = document.querySelector('.hero-tagline');
  if (tagline) tagline.textContent = state.tagline;
  
  // Logo
  const logoName = document.querySelector('.logo-name');
  if (logoName) logoName.textContent = state.name;

  // Social links
  const socials = document.querySelectorAll('.social-icon');
  const links = [document.getElementById('adGithub'), document.getElementById('adLinkedin'), document.getElementById('adTwitter'), document.getElementById('adEmail')];
  socials.forEach((s, i) => { if (links[i]) s.href = links[i].value; });

  flashSaved();
}

function applyAbout() {
  const bio = document.querySelector('.about-bio');
  if (bio) bio.textContent = document.getElementById('adAboutBio').value;

  const nums = document.querySelectorAll('.stat-num');
  const targets = [parseInt(document.getElementById('adYears').value), parseInt(document.getElementById('adProjects').value), parseInt(document.getElementById('adCerts').value)];
  nums.forEach((n, i) => { if (targets[i] !== undefined) { n.textContent = targets[i]; n.dataset.target = targets[i]; } });
  
  // Mantras
  const m1 = document.getElementById('adM1').value.split(' OVER ');
  const m2 = document.getElementById('adM2').value.split(' OVER ');
  const m3 = document.getElementById('adM3').value.split(' OVER ');
  const mantras = document.querySelectorAll('.mantra');
  [m1,m2,m3].forEach((m, i) => {
    if (mantras[i]) mantras[i].innerHTML = `${m[0] || ''}<br><span>OVER ${m[1] || ''}</span>`;
  });
  
  flashSaved();
}

function applyProjects() {
  const list = document.getElementById('projectsList');
  if (!list) return;
  list.innerHTML = state.projectsList.map(p => `
    <div class="project-item reveal visible">
      <span class="proj-num">${p.num}.</span>
      <div class="proj-info">
        <h3 class="proj-name">${p.name}</h3>
        <p class="proj-desc">${p.desc}</p>
      </div>
      <div class="proj-links">
        <a href="${p.readUrl}" class="proj-link">READ MORE &gt;</a>
        <a href="${p.liveUrl}" class="proj-link">LIVE SITE &gt;</a>
      </div>
    </div>
  `).join('');
  flashSaved();
}

function applyServices() {
  const list = document.getElementById('servicesList');
  if (!list) return;
  list.innerHTML = state.servicesList.map(s => `
    <div class="service-item reveal visible">&gt; ${s}</div>
  `).join('');
  flashSaved();
}

function applySkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  grid.innerHTML = state.skillsList.map(sk => `
    <div class="skill-tag reveal visible">
      <span class="skill-icon">${sk.icon}</span> ${sk.name}
    </div>
  `).join('');
  flashSaved();
}

function addProject() {
  state.projectsList.push({
    num: String(state.projectsList.length + 1).padStart(2, '0'),
    name: 'NEW PROJECT', desc: 'Project description.', readUrl: '#', liveUrl: '#'
  });
  renderAdminProjects();
}

function removeProject(i) {
  state.projectsList.splice(i, 1);
  state.projectsList.forEach((p, idx) => p.num = String(idx+1).padStart(2,'0'));
  renderAdminProjects();
}

function addService() {
  state.servicesList.push('NEW SERVICE');
  renderAdminServices();
}

function removeService(i) {
  state.servicesList.splice(i, 1);
  renderAdminServices();
}

function addSkill() {
  state.skillsList.push({ icon: '⚡', name: 'NEW SKILL' });
  renderAdminSkills();
}

function removeSkill(i) {
  state.skillsList.splice(i, 1);
  renderAdminSkills();
}

function flashSaved() {
  const saves = document.querySelectorAll('.admin-save');
  saves.forEach(btn => {
    const orig = btn.textContent;
    btn.textContent = '✓ SAVED!';
    btn.style.background = 'var(--green)';
    btn.style.color = '#000';
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = '';
      btn.style.color = '';
    }, 1500);
  });
}

// ── TYPING TERMINAL EFFECT ──
function setupTypingEffect() {
  const tagline = document.querySelector('.hero-tagline');
  if (!tagline) return;
  const text = tagline.textContent;
  tagline.textContent = '';
  tagline.classList.add('typing-cursor');
  
  setTimeout(() => {
    typeEffect(tagline, text, 60);
    setTimeout(() => tagline.classList.remove('typing-cursor'), text.length * 60 + 500);
  }, 1500);
}

// ── SCAN LINE EFFECT ON HOVER ──
function setupHoverEffects() {
  document.querySelectorAll('.stat-card, .service-item, .project-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.position = 'relative';
    });
  });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  // ASCII portrait
  const ascii = document.getElementById('asciiArt');
  if (ascii) ascii.textContent = generateASCII();
  
  spawnFloatingChars();
  setupParallax();
  setupReveal();
  setupCounters();
  setupNav();
  setupCursor();
  setupGlitch();
  setupContactForm();
  setupAdmin();
  setupTypingEffect();
  setupHoverEffects();

  // Stagger skill tags animation
  document.querySelectorAll('.skill-tag').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.05}s`;
  });
  
  // Matrix-like column effect in background
  setupMatrixColumns();
});

function setupMatrixColumns() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;opacity:0.03;pointer-events:none;';
  document.body.prepend(canvas);
  
  const ctx = canvas.getContext('2d');
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  
  const cols = Math.floor(canvas.width / 20);
  const drops = new Array(cols).fill(1);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコ0123456789!@#$%^&*()';
  
  function draw() {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#39ff14';
    ctx.font = '14px Share Tech Mono';
    
    drops.forEach((y, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * 20, y * 20);
      if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }
  
  setInterval(draw, 60);
}
