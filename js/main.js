/* ============================================
   PORTFOLIO DIMITRI REY - JAVASCRIPT
   Interactions et animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialisation
  initMobileMenu();
  initScrollAnimations();
  initSmoothScroll();
  initHeaderScroll();
  initActiveNavLink();
  initSkillBars();
  initFormValidation();
});

/* ============================================
   MENU MOBILE
   ============================================ */

function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const overlay = document.querySelector('.nav-overlay');
  const navLinks = document.querySelectorAll('.nav__link');

  if (!menuToggle || !nav) return;

  // Toggle menu
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    menuToggle.classList.toggle('menu-toggle--active');

    if (overlay) {
      overlay.classList.toggle('nav-overlay--visible', isOpen);
    }

    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when clicking overlay
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
      closeMenu();
    }
  });

  function closeMenu() {
    nav.classList.remove('nav--open');
    menuToggle.classList.remove('menu-toggle--active');
    if (overlay) {
      overlay.classList.remove('nav-overlay--visible');
    }
    document.body.style.overflow = '';
  }
}

/* ============================================
   ANIMATIONS AU SCROLL
   ============================================ */

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

  if (!animatedElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */

function initSmoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');

      // Skip if it's just "#"
      if (href === '#') return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ============================================
   HEADER AU SCROLL
   ============================================ */

function initHeaderScroll() {
  const header = document.querySelector('.header');

  if (!header) return;

  let lastScroll = 0;
  const scrollThreshold = 50;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Add/remove scrolled class
    if (currentScroll > scrollThreshold) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

/* ============================================
   LIEN NAV ACTIF
   ============================================ */

function initActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav__link');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');

    if (href === currentPath ||
        (currentPath === '' && href === 'index.html') ||
        (currentPath === 'index.html' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });
}

/* ============================================
   BARRES DE COMPÉTENCES ANIMÉES
   ============================================ */

function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar__fill');

  if (!skillBars.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.dataset.width || '0%';

        // Small delay for visual effect
        setTimeout(() => {
          bar.style.width = width;
        }, 200);

        observer.unobserve(bar);
      }
    });
  }, observerOptions);

  skillBars.forEach(bar => {
    // Store the target width and reset to 0
    const style = bar.getAttribute('style');
    const widthMatch = style?.match(/width:\s*(\d+%)/);
    if (widthMatch) {
      bar.dataset.width = widthMatch[1];
      bar.style.width = '0%';
    }
    observer.observe(bar);
  });
}

/* ============================================
   VALIDATION FORMULAIRE
   ============================================ */

function initFormValidation() {
  const form = document.querySelector('.form');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');

    // Reset previous errors
    form.querySelectorAll('.form__error').forEach(el => el.remove());
    form.querySelectorAll('.form__input--error, .form__textarea--error').forEach(el => {
      el.classList.remove('form__input--error', 'form__textarea--error');
    });

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        showFieldError(field, 'Ce champ est requis');
      } else if (field.type === 'email' && !isValidEmail(field.value)) {
        isValid = false;
        showFieldError(field, 'Veuillez entrer une adresse email valide');
      }
    });

    if (!isValid) {
      e.preventDefault();
    }
  });

  function showFieldError(field, message) {
    field.classList.add(field.tagName === 'TEXTAREA' ? 'form__textarea--error' : 'form__input--error');

    const error = document.createElement('span');
    error.className = 'form__error';
    error.textContent = message;
    error.style.cssText = 'color: var(--danger); font-size: var(--text-sm); margin-top: var(--space-1); display: block;';

    field.parentNode.appendChild(error);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

/* ============================================
   TYPING EFFECT (optionnel)
   ============================================ */

function initTypingEffect(element, texts, speed = 100, pause = 2000) {
  if (!element || !texts.length) return;

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      element.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let timeout = speed;

    if (!isDeleting && charIndex === currentText.length) {
      timeout = pause;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      timeout = speed / 2;
    }

    setTimeout(type, timeout);
  }

  type();
}

/* ============================================
   COUNTER ANIMATION
   ============================================ */

function animateCounter(element, target, duration = 2000) {
  if (!element) return;

  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * easeOut);

    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target;
    }
  }

  requestAnimationFrame(update);
}

/* ============================================
   PROJECT FILTER (pour projets.html)
   ============================================ */

function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projects.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      filterButtons.forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');

      // Filter projects
      projects.forEach(project => {
        const category = project.dataset.category;

        if (filter === 'all' || category === filter) {
          project.style.display = '';
          setTimeout(() => {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
          }, 50);
        } else {
          project.style.opacity = '0';
          project.style.transform = 'translateY(20px)';
          setTimeout(() => {
            project.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Initialize filter if on projects page
if (document.querySelector('.filter-btn')) {
  initProjectFilter();
}

/* ============================================
   TABS (pour veille.html)
   ============================================ */

function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  if (!tabButtons.length || !tabPanels.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;

      // Update active button
      tabButtons.forEach(b => b.classList.remove('tab-btn--active'));
      btn.classList.add('tab-btn--active');

      // Show corresponding panel
      tabPanels.forEach(panel => {
        if (panel.id === tabId) {
          panel.classList.add('tab-panel--active');
        } else {
          panel.classList.remove('tab-panel--active');
        }
      });
    });
  });
}

// Initialize tabs if present
if (document.querySelector('.tab-btn')) {
  initTabs();
}
