/* ==========================================================================
   FullBody theme — shared interactivity.
   Vanilla JS, no build step (Shopify themes ship as-is to the browser).
   ========================================================================== */
(function () {
  'use strict';

  function qs(sel, ctx) {
    return (ctx || document).querySelector(sel);
  }
  function qsa(sel, ctx) {
    return Array.prototype.slice.call((ctx || document).querySelectorAll(sel));
  }

  /* ------------------------------------------------------------------------
     Cart drawer
     ------------------------------------------------------------------------ */
  var cartDrawer = qs('[data-cart-drawer]');
  var cartOverlay = qs('[data-cart-drawer-overlay]');

  function openCartDrawer() {
    if (!cartDrawer) return;
    cartDrawer.classList.add('is-open');
    cartOverlay && cartOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeCartDrawer() {
    if (!cartDrawer) return;
    cartDrawer.classList.remove('is-open');
    cartOverlay && cartOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  qsa('[data-cart-open]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openCartDrawer();
    });
  });
  qsa('[data-cart-close]').forEach(function (btn) {
    btn.addEventListener('click', closeCartDrawer);
  });
  cartOverlay && cartOverlay.addEventListener('click', closeCartDrawer);

  document.addEventListener('cart:open', openCartDrawer);

  /* ------------------------------------------------------------------------
     Search modal
     ------------------------------------------------------------------------ */
  var searchOverlay = qs('[data-search-overlay]');

  function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.add('is-open');
    var input = qs('[data-search-input]', searchOverlay);
    setTimeout(function () { input && input.focus(); }, 50);
  }
  function closeSearch() {
    searchOverlay && searchOverlay.classList.remove('is-open');
  }
  qsa('[data-search-open]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openSearch();
    });
  });
  qsa('[data-search-close]').forEach(function (btn) {
    btn.addEventListener('click', closeSearch);
  });
  searchOverlay && searchOverlay.addEventListener('click', function (e) {
    if (e.target === searchOverlay) closeSearch();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeSearch();
      closeCartDrawer();
    }
  });

  /* ------------------------------------------------------------------------
     Mobile nav menu
     ------------------------------------------------------------------------ */
  var mobileMenu = qs('[data-mobile-menu]');
  qsa('[data-mobile-menu-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      mobileMenu && mobileMenu.classList.toggle('is-open');
    });
  });

  /* ------------------------------------------------------------------------
     Header nav dropdown (products)
     ------------------------------------------------------------------------ */
  qsa('[data-nav-dropdown-toggle]').forEach(function (btn) {
    var parent = btn.closest('[data-nav-dropdown]');
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      parent && parent.classList.toggle('is-open');
    });
  });
  document.addEventListener('click', function (e) {
    qsa('[data-nav-dropdown].is-open').forEach(function (dd) {
      if (!dd.contains(e.target)) dd.classList.remove('is-open');
    });
  });

  /* ------------------------------------------------------------------------
     WhatsApp floating button
     ------------------------------------------------------------------------ */
  var waFab = qs('[data-whatsapp-fab]');
  if (waFab) {
    var isMobile = window.matchMedia('(max-width: 767px)').matches;
    var waBtn = qs('[data-whatsapp-fab-btn]', waFab);
    waBtn && waBtn.addEventListener('click', function (e) {
      if (isMobile) return; // default link behavior opens WhatsApp directly
      e.preventDefault();
      waFab.classList.toggle('is-open');
    });
    document.addEventListener('click', function (e) {
      if (!waFab.contains(e.target)) waFab.classList.remove('is-open');
    });
  }

  /* ------------------------------------------------------------------------
     Generic autoplay carousel (used by hero-carousel + testimonial-slider)
     data-carousel, data-carousel-slide, data-carousel-dot, data-carousel-prev/next
     ------------------------------------------------------------------------ */
  qsa('[data-carousel]').forEach(function (carousel) {
    var slides = qsa('[data-carousel-slide]', carousel);
    var dots = qsa('[data-carousel-dot]', carousel);
    var interval = parseInt(carousel.getAttribute('data-carousel-interval') || '5000', 10);
    var current = 0;
    var timer;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle('is-active', i === current);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === current);
      });
    }

    function next() { show(current + 1); }
    function prev() { show(current - 1); }

    function startAutoplay() {
      stopAutoplay();
      timer = setInterval(next, interval);
    }
    function stopAutoplay() {
      if (timer) clearInterval(timer);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        show(i);
        startAutoplay();
      });
    });
    qsa('[data-carousel-next]', carousel).forEach(function (btn) {
      btn.addEventListener('click', function () { next(); startAutoplay(); });
    });
    qsa('[data-carousel-prev]', carousel).forEach(function (btn) {
      btn.addEventListener('click', function () { prev(); startAutoplay(); });
    });

    if (slides.length > 1) {
      show(0);
      startAutoplay();
      carousel.addEventListener('mouseenter', stopAutoplay);
      carousel.addEventListener('mouseleave', startAutoplay);
    }
  });

  /* ------------------------------------------------------------------------
     Filter accordion (product catalog sidebar)
     ------------------------------------------------------------------------ */
  qsa('[data-filter-section-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var section = btn.closest('[data-filter-section]');
      section && section.classList.toggle('is-open');
    });
  });
  qsa('[data-mobile-filters-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panel = qs('[data-mobile-filters-panel]');
      panel && panel.classList.toggle('is-open');
    });
  });
})();
