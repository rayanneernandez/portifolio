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
    return `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-category">${project.category === 'mobile' ? 'Mobile' : 
                                              project.category === 'academico' ? 'Acadêmico' : 'web'}</div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.languages.map(lang => `<span class="project-tag">${lang}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github ? `
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            GitHub
                        </a>
                    ` : ''}
                    ${project.link ? `
                        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
                            Ver Projeto
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
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

function updateProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    let filteredProjects = projects;
    
    if (selectedCategory && selectedCategory !== 'todos') {
        filteredProjects = filteredProjects.filter(project => project.category ===selectedCategory);
    }
    
    if (selectedLanguage) {
        filteredProjects = filteredProjects.filter(project => 
            project.languages.includes(selectedLanguage)
        );
    }
    
    projectsGrid.innerHTML = filteredProjects.length > 0
        ? filteredProjects.map(project => createProjectCard(project)).join('')
        : '<p class="no-results">Nenhum projeto encontrado com os filtros selecionados.</p>';
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
}

// Event Listeners for Filters
document.querySelector('.category-filters').addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        document.querySelectorAll('.category-filters button').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        selectedCategory = e.target.dataset.category === 'todos' ? null : e.target.dataset.category;
        updateProjects();
    }
});

document.getElementById('languageButtons').addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        document.querySelectorAll('#languageButtons button').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        selectedLanguage = e.target.dataset.language || null;
        updateProjects();
    }
});

// Initialize Certifications
function initializeCertifications() {
    const certificationsGrid = document.getElementById('certificationsGrid');
    certificationsGrid.innerHTML = certifications.map(cert => createCertificationCard(cert)).join('');
}

const form = document.getElementById('contactForm');
const messageDiv = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Enviando...';

  const data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then(err => Promise.reject(err));
    }
  })
  .then(json => {
    messageDiv.style.display = 'block';
    messageDiv.style.background = 'var(--primary)';
    messageDiv.style.color = '#fff';
    messageDiv.style.padding = '1rem';
    messageDiv.style.borderRadius = '0.5rem';
    messageDiv.style.textAlign = 'center';
    messageDiv.textContent = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
    form.reset();
  })
  .catch(err => {
    console.error(err);
    messageDiv.style.display = 'block';
    messageDiv.style.background = '#f44336';
    messageDiv.style.color = '#fff';
    messageDiv.style.padding = '1rem';
    messageDiv.style.borderRadius = '0.5rem';
    messageDiv.style.textAlign = 'center';
    messageDiv.textContent = 'Erro ao enviar mensagem. Tente novamente mais tarde.';
  })
  .finally(() => {
    btn.disabled = false;
    btn.textContent = 'Enviar Mensagem';
    setTimeout(() => {
      messageDiv.style.display = 'none';
    }, 5000);
  });
});





// Footer Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode();
    initializeLanguageFilters();
    updateProjects();
    initializeCertifications();
    
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
    const text = "Olá, sou Desenvolvedora Full Stack!!";
    let index = 0;
  
    function type() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // velocidade da digitação
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
  