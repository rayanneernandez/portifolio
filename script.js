// Dark Mode
const darkModeToggle = document.getElementById('darkModeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function initializeDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
        document.documentElement.classList.toggle('dark', savedMode === 'true');
        updateDarkModeIcon();
    } else {
        document.documentElement.classList.toggle('dark', prefersDarkScheme.matches);
        updateDarkModeIcon();
    }
}

function updateDarkModeIcon() {
    const isDark = document.documentElement.classList.contains('dark');
    darkModeToggle.innerHTML = isDark 
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
}

darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
    updateDarkModeIcon();
});

// Navbar Scroll
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navItems = document.querySelector('.nav-items');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navItems.classList.toggle('active');
});

// Smooth Scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        if (navItems.classList.contains('active')) {
            mobileMenuBtn.classList.remove('active');
            navItems.classList.remove('active');
        }
    }
}

// Projects
function createProjectCard(project) {
    const hasGallery = Array.isArray(project.gallery) && project.gallery.length > 0;
    const dataImages = hasGallery ? ` data-images="${project.gallery.join('|')}"` : '';
    const viewBtn = '<button type="button" class="project-view-btn" aria-label="Ver imagens">Ver imagens</button>';

    const githubLink = project.github
        ? `
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link project-link--github">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
            </a>
        `
        : '<span class="project-link-placeholder"></span>';

    const projectLink = project.link
        ? `
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link project-link--demo">
                Ver Projeto
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a>
        `
        : '<span class="project-link-placeholder"></span>';

    return `
        <div class="project-card">
            <div class="project-image"${dataImages}>
                <img src="${project.image}" alt="${project.title}">
                ${viewBtn}
                <div class="project-category">${project.category === 'mobile' ? 'Mobile' : 
                                              project.category === 'academico' ? 'Acadêmico' : 'web'}</div>
            </div>
            <div class="project-content">
                <div class="project-date" style="color: var(--text-light); font-size: 0.85rem; margin-bottom: 0.25rem;">${project.date || ''}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.languages.map(lang => `<span class=\"project-tag\">${lang}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${githubLink}
                    ${projectLink}
                </div>
            </div>
        </div>
    `;
}

// Lightbox simples para galeria de projetos
let _lbState = { el: null, img: null, next: null, prev: null, close: null, list: [], idx: 0 };

function ensureLightbox() {
    if (_lbState.el) return;
    const overlay = document.createElement('div');
    overlay.id = 'lightboxOverlay';
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
        <button class="lb-btn lb-prev" aria-label="Anterior">‹</button>
        <img class="lightbox-img" alt="Pré-visualização do projeto" />
        <button class="lb-btn lb-next" aria-label="Próxima">›</button>
        <button class="lb-btn lb-close" aria-label="Fechar">✕</button>
    `;
    document.body.appendChild(overlay);
    _lbState.el = overlay;
    _lbState.img = overlay.querySelector('.lightbox-img');
    _lbState.next = overlay.querySelector('.lb-next');
    _lbState.prev = overlay.querySelector('.lb-prev');
    _lbState.close = overlay.querySelector('.lb-close');

    function close(){ overlay.classList.remove('open'); document.removeEventListener('keydown', onKey); }
    function show(){ overlay.classList.add('open'); }
    function onKey(e){ if(e.key==='Escape') close(); if(e.key==='ArrowRight') nav(1); if(e.key==='ArrowLeft') nav(-1); }
    function nav(dir){ if(!_lbState.list.length) return; _lbState.idx=( _lbState.idx + dir + _lbState.list.length)%_lbState.list.length; _lbState.img.src=_lbState.list[_lbState.idx]; }

    overlay.addEventListener('click', (e)=>{ if(e.target===overlay) close(); });
    _lbState.close.addEventListener('click', close);
    _lbState.next.addEventListener('click', ()=>nav(1));
    _lbState.prev.addEventListener('click', ()=>nav(-1));

    overlay.showLB = (list, start=0)=>{ _lbState.list=list; _lbState.idx=start; _lbState.img.src=list[start]; show(); document.addEventListener('keydown', onKey); };
}

function initializeProjectGallery(){
    ensureLightbox();
    const grid = document.getElementById('projectsGrid');
    if(!grid) return;

    grid.addEventListener('click', (e)=>{
        const wrap = e.target.closest('.project-image');
        if(!wrap) return;

        const attr = wrap.getAttribute('data-images');
        let imgs = attr ? attr.split('|').filter(Boolean) : [];

        if(!imgs.length){
            const imgEl = wrap.querySelector('img');
            const src = imgEl ? imgEl.getAttribute('src') : '';
            if(src) imgs = [src];
        }

        if(imgs.length){
            _lbState.el.showLB(imgs, 0);
        }
    });
}

function createCertificationCard(certification) {
    return `
        <div class="certification-card">
            <div class="certification-image">
                <img src="${certification.image}" alt="${certification.title}">
                <h3 class="certification-title">${certification.title}</h3>
            </div>
            <div class="certification-content">
                <div class="certification-info">
                    <span>${certification.issuer}</span>
                    <span>•</span>
                    <span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        ${certification.date}
                    </span>
                </div>
                ${certification.link ? `
                    <a href="${certification.link}" target="_blank" rel="noopener noreferrer" class="certification-link">
                        Ver Certificado
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                ` : ''}
            </div>
        </div>
    `;
}

// Initialize Projects
let selectedCategory = null;
let selectedLanguage = null;
let selectedYear = null;

const PROJECTS_PER_PAGE = 8;
let currentProjectsPage = 1;

function getProjectYear(dateStr) {
    if (!dateStr) return null;
    const m = String(dateStr).match(/(19|20)\d{2}/);
    return m ? Number(m[0]) : null;
}

function parseProjectDate(dateStr) {
    if (!dateStr) return 0;

    const s = String(dateStr)
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    const yearOnly = s.match(/^(19|20)\d{2}$/);
    if (yearOnly) {
        const y = Number(yearOnly[0]);
        return Date.UTC(y, 11, 31);
    }

    const yearMatch = s.match(/(19|20)\d{2}/);
    if (!yearMatch) return 0;

    const year = Number(yearMatch[0]);
    const rest = s.replace(yearMatch[0], '').trim();
    const monthToken = rest.split(/\s+/).filter(Boolean)[0] || '';

    const monthMap = {
        jan: 0,
        fev: 1,
        feb: 1,
        mar: 2,
        abr: 3,
        apr: 3,
        mai: 4,
        may: 4,
        jun: 5,
        jul: 6,
        ago: 7,
        aug: 7,
        set: 8,
        sep: 8,
        out: 9,
        oct: 9,
        nov: 10,
        dez: 11,
        dec: 11
    };

    const key = monthToken.slice(0, 3);
    const month = monthMap[key];

    if (typeof month === 'number') return Date.UTC(year, month, 1);

    const parsed = Date.parse(dateStr);
    return Number.isNaN(parsed) ? Date.UTC(year, 11, 31) : parsed;
}

function getProjectsPageButtons(current, total) {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

    const pages = new Set([1, total]);
    const start = Math.max(2, current - 2);
    const end = Math.min(total - 1, current + 2);

    for (let p = start; p <= end; p++) pages.add(p);

    return Array.from(pages).sort((a, b) => a - b);
}

function renderProjectsPagination(totalItems) {
    const el = document.getElementById('projectsPagination');
    if (!el) return;

    const totalPages = Math.max(1, Math.ceil(totalItems / PROJECTS_PER_PAGE));

    if (totalItems <= PROJECTS_PER_PAGE) {
        el.innerHTML = '';
        el.classList.add('is-hidden');
        return;
    }

    el.classList.remove('is-hidden');

    if (currentProjectsPage > totalPages) currentProjectsPage = totalPages;
    if (currentProjectsPage < 1) currentProjectsPage = 1;

    const btnPages = getProjectsPageButtons(currentProjectsPage, totalPages);

    let pagesHtml = '';
    let last = 0;
    for (const p of btnPages) {
        if (last && p - last > 1) pagesHtml += '<span class="page-ellipsis">…</span>';
        pagesHtml += `<button type="button" class="page-btn ${p === currentProjectsPage ? 'active' : ''}" data-page="${p}">${p}</button>`;
        last = p;
    }

    el.innerHTML = `
        <button type="button" class="page-btn" data-page="prev" ${currentProjectsPage === 1 ? 'disabled' : ''}>Anterior</button>
        ${pagesHtml}
        <span class="page-info">Página ${currentProjectsPage} de ${totalPages}</span>
        <button type="button" class="page-btn" data-page="next" ${currentProjectsPage === totalPages ? 'disabled' : ''}>Próxima</button>
    `;
}

function initializeProjectsPagination() {
    const el = document.getElementById('projectsPagination');
    if (!el) return;

    el.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-page]');
        if (!btn || btn.disabled) return;

        const page = btn.dataset.page;
        if (page === 'prev') currentProjectsPage -= 1;
        else if (page === 'next') currentProjectsPage += 1;
        else currentProjectsPage = Number(page) || 1;

        updateProjects();
    });
}

function updateProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    let filteredProjects = projects.slice();

    if (selectedCategory && selectedCategory !== 'todos') {
        filteredProjects = filteredProjects.filter(project => project.category === selectedCategory);
    }

    if (selectedLanguage) {
        filteredProjects = filteredProjects.filter(project => project.languages.includes(selectedLanguage));
    }

    if (selectedYear) {
        filteredProjects = filteredProjects.filter(project => getProjectYear(project.date) === selectedYear);
    }

    filteredProjects.sort((a, b) => {
        const da = parseProjectDate(a.date);
        const db = parseProjectDate(b.date);
        if (db !== da) return db - da;
        return String(a.title || '').localeCompare(String(b.title || ''), 'pt-BR');
    });

    const countEl = document.getElementById('projectsCount');
    if (countEl) {
        const totalAll = Array.isArray(projects) ? projects.length : 0;
        const totalFiltered = filteredProjects.length;
        const hasFilter = Boolean(selectedCategory || selectedLanguage || selectedYear);
        countEl.textContent = hasFilter ? `Projetos encontrados: ${totalFiltered} de ${totalAll}` : `Total de projetos: ${totalAll}`;
    }

    if (filteredProjects.length === 0) {
        projectsGrid.innerHTML = '<p class="no-results">Nenhum projeto encontrado com os filtros selecionados.</p>';
        renderProjectsPagination(0);
        return;
    }

    const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));
    if (currentProjectsPage > totalPages) currentProjectsPage = totalPages;
    if (currentProjectsPage < 1) currentProjectsPage = 1;

    const start = (currentProjectsPage - 1) * PROJECTS_PER_PAGE;
    const pageItems = filteredProjects.slice(start, start + PROJECTS_PER_PAGE);

    projectsGrid.innerHTML = pageItems.map(project => createProjectCard(project)).join('');
    renderProjectsPagination(filteredProjects.length);
}

// Initialize Language Filters
function initializeLanguageFilters() {
    const languageButtons = document.getElementById('languageButtons');
    const languages = Array.from(new Set(projects.flatMap(project => project.languages)));

    languageButtons.innerHTML = `
        <button class="active" data-language="">Todas</button>
        ${languages.map(language => `
            <button data-language="${language}">${language}</button>
        `).join('')}
    `;

    const btn = document.getElementById('languageDropdownBtn');
    if (btn) btn.textContent = `Linguagem: ${selectedLanguage || 'Todas'}`;
}

function initializeYearFilters() {
    const yearButtons = document.getElementById('yearButtons');
    if (!yearButtons) return;

    const years = Array.from(
        new Set(
            projects
                .map(p => getProjectYear(p.date))
                .filter((y) => typeof y === 'number')
        )
    ).sort((a, b) => b - a);

    yearButtons.innerHTML = `
        <button class="active" data-year="">Todos</button>
        ${years.map(year => `
            <button data-year="${year}">${year}</button>
        `).join('')}
    `;

    const btn = document.getElementById('yearDropdownBtn');
    if (btn) btn.textContent = `Ano: ${selectedYear || 'Todos'}`;
}

function initializeFilterDropdowns() {
    const pairs = [
        { btnId: 'languageDropdownBtn', menuId: 'languageButtons' },
        { btnId: 'yearDropdownBtn', menuId: 'yearButtons' }
    ];

    function closeAll() {
        pairs.forEach(({ btnId, menuId }) => {
            const btn = document.getElementById(btnId);
            const menu = document.getElementById(menuId);
            if (menu) menu.classList.add('hidden');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });
    }

    pairs.forEach(({ btnId, menuId }) => {
        const btn = document.getElementById(btnId);
        const menu = document.getElementById(menuId);
        if (!btn || !menu) return;

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = menu.classList.contains('hidden');
            closeAll();
            if (isHidden) {
                menu.classList.remove('hidden');
                btn.setAttribute('aria-expanded', 'true');
            }
        });

        menu.addEventListener('click', () => {
            closeAll();
        });
    });

    document.addEventListener('click', closeAll);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAll();
    });
}

function initializeSkillsAutoScroll() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    if (skillsGrid.scrollWidth <= skillsGrid.clientWidth + 1) return;

    const originalItems = Array.from(skillsGrid.children);
    originalItems.forEach(item => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        skillsGrid.appendChild(clone);
    });

    let paused = false;
    let lastTs = null;
    let resumeTimeoutId = null;

    function pause() {
        paused = true;
        if (resumeTimeoutId) {
            clearTimeout(resumeTimeoutId);
            resumeTimeoutId = null;
        }
    }

    function scheduleResume() {
        if (resumeTimeoutId) clearTimeout(resumeTimeoutId);
        resumeTimeoutId = setTimeout(() => {
            paused = false;
        }, 1200);
    }

    function step(ts) {
        if (lastTs === null) lastTs = ts;
        const delta = (ts - lastTs) / 1000;
        lastTs = ts;

        if (!paused) {
            const speed = 35;
            skillsGrid.scrollLeft += speed * delta;

            const half = skillsGrid.scrollWidth / 2;
            if (skillsGrid.scrollLeft >= half) {
                skillsGrid.scrollLeft -= half;
            }
        }

        window.requestAnimationFrame(step);
    }

    let isDragging = false;
    let dragStartX = 0;
    let dragStartScrollLeft = 0;
    let dragPointerId = null;

    function normalizeScroll() {
        const half = skillsGrid.scrollWidth / 2;
        if (skillsGrid.scrollLeft < 0) {
            skillsGrid.scrollLeft += half;
        } else if (skillsGrid.scrollLeft >= half) {
            skillsGrid.scrollLeft -= half;
        }
    }

    function startDrag(e) {
        if (e.pointerType === 'mouse' && e.button !== 0) return;

        isDragging = true;
        dragPointerId = e.pointerId;
        dragStartX = e.clientX;
        dragStartScrollLeft = skillsGrid.scrollLeft;

        pause();
        skillsGrid.classList.add('is-dragging');

        try {
            skillsGrid.setPointerCapture(e.pointerId);
        } catch (_) {}
    }

    function moveDrag(e) {
        if (!isDragging) return;
        if (dragPointerId !== null && e.pointerId !== dragPointerId) return;

        const dx = e.clientX - dragStartX;
        skillsGrid.scrollLeft = dragStartScrollLeft - dx;
        normalizeScroll();

        e.preventDefault();
    }

    function endDrag(e) {
        if (!isDragging) return;
        if (dragPointerId !== null && e.pointerId !== dragPointerId) return;

        isDragging = false;
        dragPointerId = null;
        skillsGrid.classList.remove('is-dragging');
        scheduleResume();
    }

    skillsGrid.addEventListener('mouseenter', pause);
    skillsGrid.addEventListener('mouseleave', scheduleResume);

    skillsGrid.addEventListener('wheel', (e) => {
        pause();

        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        skillsGrid.scrollLeft += delta;
        normalizeScroll();

        scheduleResume();
        e.preventDefault();
    }, { passive: false });

    skillsGrid.addEventListener('pointerdown', startDrag);
    skillsGrid.addEventListener('pointermove', moveDrag, { passive: false });
    skillsGrid.addEventListener('pointerup', endDrag);
    skillsGrid.addEventListener('pointercancel', endDrag);

    window.requestAnimationFrame(step);
}

// Event Listeners for Filters
document.querySelector('.category-filters').addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        document.querySelectorAll('.category-filters button').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        selectedCategory = e.target.dataset.category === 'todos' ? null : e.target.dataset.category;
        currentProjectsPage = 1;
        updateProjects();
    }
});

document.getElementById('languageButtons').addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        document.querySelectorAll('#languageButtons button').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        selectedLanguage = e.target.dataset.language || null;

        const btn = document.getElementById('languageDropdownBtn');
        if (btn) btn.textContent = `Linguagem: ${selectedLanguage || 'Todas'}`;

        currentProjectsPage = 1;
        updateProjects();
    }
});

document.getElementById('yearButtons')?.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        document.querySelectorAll('#yearButtons button').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        selectedYear = e.target.dataset.year ? Number(e.target.dataset.year) : null;

        const btn = document.getElementById('yearDropdownBtn');
        if (btn) btn.textContent = `Ano: ${selectedYear || 'Todos'}`;

        currentProjectsPage = 1;
        updateProjects();
    }
});

// Initialize Certifications
function initializeCertifications() {
    const certificationsGrid = document.getElementById('certificationsGrid');
    certificationsGrid.innerHTML = certifications.map(cert => createCertificationCard(cert)).join('');
}

// Footer Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode();
    initializeLanguageFilters();
    initializeYearFilters();
    initializeFilterDropdowns();
    initializeProjectsPagination();
    updateProjects();
    initializeCertifications();
    initializeSkillsAutoScroll();
    initializeProjectGallery();
    
    // Animate skill bars on scroll
    document.addEventListener("DOMContentLoaded", function () {
        const progressBars = document.querySelectorAll(".skill-progress");
      
        progressBars.forEach(bar => {
          const percent = bar.getAttribute("data-percent");
          setTimeout(() => {
            bar.style.width = percent;
          }, 100);
        });
      });
      
});

document.addEventListener("DOMContentLoaded", function () {
    const element = document.querySelector(".typing-text");
    const text = "Olá, sou Rayanne Ernandez<br>Desenvolvedora Full Stack!!";
    let index = 0;

    function type() {
        if (index <= text.length) {
            element.innerHTML = text.slice(0, index); // permite <br>
            index++;
            setTimeout(type, 50);
        }
    }

    type();
});

  
  function toggleChat() {
    const chat = document.getElementById("chat-container");
    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
  }

  function sendMessage() {
    const input = document.getElementById("whats-msg");
    const message = encodeURIComponent(`[PORTFÓLIO] ${input.value.trim()}`);
    const phoneNumber = "5521989191499"; 

    if (message.length > 0) {
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      input.value = ""; // limpa
    } else {
      alert("Por favor, digite uma mensagem.");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("section, div, article, header, footer");
  
    elements.forEach(el => el.classList.add("scroll-anim"));
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Se quiser que a animação aconteça só uma vez
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });
  
    elements.forEach(el => observer.observe(el));
  });
  