(function () {
  var nav = document.getElementById('nav-links');
  var hamburger = document.getElementById('hamburger');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function closeMenu() {
    if (!nav || !hamburger) return;
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('[data-hero-slideshow]').forEach(function (slideshow) {
    var slides = Array.prototype.slice.call(slideshow.querySelectorAll('[data-slide]'));
    var progress = slideshow.querySelector('[data-slide-progress]');
    var controls = progress ? Array.prototype.slice.call(progress.querySelectorAll('[data-slide-to]')) : [];
    var current = 0;
    var timer = null;
    var interval = Number(slideshow.getAttribute('data-interval')) || 5000;
    var touchStartX = 0;

    function showSlide(next) {
      if (!slides.length) return;
      current = (next + slides.length) % slides.length;
      slides.forEach(function (slide, index) {
        var active = index === current;
        slide.classList.toggle('active', active);
        slide.setAttribute('aria-hidden', String(!active));
      });
      controls.forEach(function (control, index) {
        control.classList.toggle('active', index === current);
        control.setAttribute('aria-current', index === current ? 'true' : 'false');
      });
    }

    function stop() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    function start() {
      stop();
      if (!reducedMotion && slides.length > 1) {
        timer = window.setInterval(function () { showSlide(current + 1); }, interval);
      }
    }

    controls.forEach(function (control) {
      control.addEventListener('click', function () {
        showSlide(Number(control.getAttribute('data-slide-to')) || 0);
        start();
      });
    });
    slideshow.addEventListener('pointerenter', stop);
    slideshow.addEventListener('pointerleave', start);
    slideshow.addEventListener('focusin', stop);
    slideshow.addEventListener('focusout', start);
    slideshow.addEventListener('touchstart', function (event) {
      touchStartX = event.touches[0].clientX;
      stop();
    }, { passive: true });
    slideshow.addEventListener('touchend', function (event) {
      var distance = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(distance) > 40) showSlide(current + (distance < 0 ? 1 : -1));
      start();
    }, { passive: true });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else start();
    });
    showSlide(0);
    start();
  });

  document.querySelectorAll('[data-highlight-carousel]').forEach(function (carousel) {
    var viewport = carousel.querySelector('[data-carousel-viewport]');
    var track = carousel.querySelector('[data-carousel-track]');
    var items = track ? Array.prototype.slice.call(track.querySelectorAll('[data-carousel-item]')) : [];
    var previous = carousel.querySelector('[data-carousel-prev]');
    var next = carousel.querySelector('[data-carousel-next]');
    var progress = carousel.querySelector('[data-carousel-progress]');
    var index = 0;
    var touchStartX = 0;
    var didSwipe = false;
    var resizeFrame = null;

    if (!viewport || !track || !items.length) return;

    function perPage() {
      if (window.innerWidth <= 640) return 2;
      return 4;
    }

    function maxIndex() {
      return Math.max(0, items.length - perPage());
    }

    function buildProgress() {
      if (!progress) return;
      progress.innerHTML = '';
      for (var i = 0; i <= maxIndex(); i += 1) {
        var control = document.createElement('button');
        control.type = 'button';
        control.className = 'slide-progress-segment';
        control.setAttribute('aria-label', 'Show research highlights starting at item ' + (i + 1));
        control.setAttribute('data-carousel-to', String(i));
        control.innerHTML = '<span></span>';
        progress.appendChild(control);
      }
    }

    function update(animate) {
      var limit = maxIndex();
      index = Math.max(0, Math.min(index, limit));
      var itemWidth = items[0].getBoundingClientRect().width;
      var gap = parseFloat(window.getComputedStyle(track).columnGap || window.getComputedStyle(track).gap) || 0;
      if (!animate) track.style.transition = 'none';
      track.style.transform = 'translateX(-' + (index * (itemWidth + gap)) + 'px)';
      if (!animate) window.requestAnimationFrame(function () { track.style.transition = ''; });
      if (previous) previous.disabled = index === 0;
      if (next) next.disabled = index === limit;
      if (progress && progress.children.length !== limit + 1) buildProgress();
      if (progress) {
        Array.prototype.forEach.call(progress.children, function (control, controlIndex) {
          control.classList.toggle('active', controlIndex === index);
          control.setAttribute('aria-current', controlIndex === index ? 'true' : 'false');
        });
      }
      items.forEach(function (item, itemIndex) {
        item.setAttribute('aria-hidden', String(itemIndex < index || itemIndex >= index + perPage()));
      });
    }

    if (previous) previous.addEventListener('click', function () { index -= 1; update(true); });
    if (next) next.addEventListener('click', function () { index += 1; update(true); });
    if (progress) {
      progress.addEventListener('click', function (event) {
        var control = event.target.closest('[data-carousel-to]');
        if (!control) return;
        index = Number(control.getAttribute('data-carousel-to')) || 0;
        update(true);
      });
    }
    viewport.addEventListener('touchstart', function (event) {
      touchStartX = event.touches[0].clientX;
      didSwipe = false;
    }, { passive: true });
    viewport.addEventListener('touchend', function (event) {
      var distance = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(distance) > 40) {
        didSwipe = true;
        index += distance < 0 ? 1 : -1;
        update(true);
      }
    }, { passive: true });
    viewport.addEventListener('click', function (event) {
      if (!didSwipe) return;
      event.preventDefault();
      event.stopPropagation();
      didSwipe = false;
    }, true);
    carousel.tabIndex = 0;
    carousel.addEventListener('keydown', function (event) {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      index += event.key === 'ArrowRight' ? 1 : -1;
      update(true);
    });
    window.addEventListener('resize', function () {
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(function () {
        buildProgress();
        update(false);
      });
    });

    buildProgress();
    update(false);
  });

  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    group.addEventListener('click', function (event) {
      var button = event.target.closest('.fbtn');
      if (!button) return;
      group.querySelectorAll('.fbtn').forEach(function (item) { item.classList.toggle('active', item === button); });
      var filter = button.getAttribute('data-filter');
      var scope = group.parentElement;
      scope.querySelectorAll('[data-category]').forEach(function (item) {
        var categories = (item.getAttribute('data-category') || '').split(/\s+/);
        item.hidden = filter !== 'all' && categories.indexOf(filter) === -1;
      });
      scope.querySelectorAll('.pub-year-grp').forEach(function (year) {
        year.hidden = !year.querySelector('[data-category]:not([hidden])');
      });
    });
  });
})();
