/* ============================================
   DIMITRI REY — ONE-PAGE PORTFOLIO JS
   Mode présentation (scroll-snap slides)
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Header scroll effect --- */
  var header = document.querySelector('.header');
  var scrollThreshold = 50;

  function updateHeader() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* --- Active nav link on scroll (snap-aware) --- */
  var navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  var sections = [];

  navLinks.forEach(function (link) {
    var id = link.getAttribute('href').substring(1);
    var section = document.getElementById(id);
    if (section) sections.push({ el: section, link: link });
  });

  var snapObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
        navLinks.forEach(function (l) { l.classList.remove('nav__link--active'); });
        var match = sections.find(function (s) { return s.el === entry.target; });
        if (match) match.link.classList.add('nav__link--active');
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(function (s) { snapObserver.observe(s.el); });

  /* --- Keyboard navigation (arrows / page up-down) --- */
  var allSlides = document.querySelectorAll('section[id], .hero');
  var slideArray = Array.prototype.slice.call(allSlides);

  function getCurrentSlideIndex() {
    var scrollY = window.scrollY;
    var best = 0;
    slideArray.forEach(function (slide, i) {
      if (slide.offsetTop <= scrollY + window.innerHeight / 2) {
        best = i;
      }
    });
    return best;
  }

  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    var currentIndex = getCurrentSlideIndex();

    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      if (currentIndex < slideArray.length - 1) {
        slideArray[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
      }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      if (currentIndex > 0) {
        slideArray[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  /* --- Mobile menu --- */
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  var overlay = document.querySelector('.nav-overlay');

  function openMenu() {
    nav.classList.add('nav--open');
    menuToggle.classList.add('menu-toggle--active');
    overlay.classList.add('nav-overlay--active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('nav--open');
    menuToggle.classList.remove('menu-toggle--active');
    overlay.classList.remove('nav-overlay--active');
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      if (nav.classList.contains('nav--open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  var ctaLink = document.querySelector('.nav__cta a');
  if (ctaLink) ctaLink.addEventListener('click', closeMenu);

  /* --- Scroll reveal (triggered when section is visible) --- */
  var reveals = document.querySelectorAll('.reveal');

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px 0px 0px'
  });

  reveals.forEach(function (el) {
    revealObserver.observe(el);
  });

  /* --- Veille tabs --- */
  var tabBtns = document.querySelectorAll('.veille-tab');
  var tabPanels = document.querySelectorAll('.veille-panel');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = this.getAttribute('data-tab');

      tabBtns.forEach(function (b) { b.classList.remove('veille-tab--active'); });
      tabPanels.forEach(function (p) { p.classList.remove('veille-panel--active'); });

      this.classList.add('veille-tab--active');
      var panel = document.getElementById(target);
      if (panel) panel.classList.add('veille-panel--active');
    });
  });

  /* --- Project filter --- */
  var filterBtns = document.querySelectorAll('[data-filter]');
  var projectCards = document.querySelectorAll('[data-category]');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = this.getAttribute('data-filter');

      filterBtns.forEach(function (b) { b.classList.remove('btn--primary'); b.classList.add('btn--secondary'); });
      this.classList.remove('btn--secondary');
      this.classList.add('btn--primary');

      projectCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* --- Slide indicator (optional visual cue) --- */
  var indicator = document.createElement('div');
  indicator.className = 'slide-indicator';
  document.body.appendChild(indicator);

  var dots = [];
  slideArray.forEach(function (slide, i) {
    var dot = document.createElement('button');
    dot.className = 'slide-indicator__dot';
    dot.title = slide.id || 'accueil';
    dot.addEventListener('click', function () {
      slide.scrollIntoView({ behavior: 'smooth' });
    });
    indicator.appendChild(dot);
    dots.push(dot);
  });

  var dotObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
        var idx = slideArray.indexOf(entry.target);
        dots.forEach(function (d, i) {
          d.classList.toggle('slide-indicator__dot--active', i === idx);
        });
      }
    });
  }, { threshold: 0.5 });

  slideArray.forEach(function (s) { dotObserver.observe(s); });

});
