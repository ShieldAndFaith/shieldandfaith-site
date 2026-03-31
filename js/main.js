/* ===================================================
   Shield & Faith — Main JavaScript
   =================================================== */
(function () {
  'use strict';

  /* ---------- Mobile Navigation ---------- */
  const hamburger = document.querySelector('.hamburger');
  const mainNav   = document.querySelector('.main-nav');
  const overlay   = document.querySelector('.nav-overlay');

  function toggleNav() {
    hamburger.classList.toggle('active');
    mainNav.classList.toggle('open');
    overlay.classList.toggle('show');
    document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
  }

  function closeNav() {
    hamburger.classList.remove('active');
    mainNav.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleNav);
  }

  if (overlay) {
    overlay.addEventListener('click', closeNav);
  }

  // Close mobile nav when a link is clicked
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mainNav && mainNav.classList.contains('open')) {
      closeNav();
    }
  });

  /* ---------- Newsletter Form (Placeholder) ---------- */
  var nlForm = document.querySelector('.newsletter-form');
  if (nlForm) {
    nlForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = nlForm.querySelector('input[type="email"]');
      var btn   = nlForm.querySelector('button');
      if (input && input.value) {
        btn.textContent = '✓ Subscribed!';
        btn.disabled = true;
        input.disabled = true;
        setTimeout(function () {
          btn.textContent = 'Subscribe';
          btn.disabled = false;
          input.disabled = false;
          input.value = '';
        }, 3000);
      }
    });
  }

  /* ---------- Scroll-triggered fade-in ---------- */
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.category-card, .article-card, .category-detail').forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity .5s ease, transform .5s ease';
      observer.observe(el);
    });
  }

  // CSS class for fade-in
  var style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);

})();
