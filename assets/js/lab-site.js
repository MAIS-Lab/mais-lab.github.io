(function () {
  var pages = Array.prototype.slice.call(document.querySelectorAll('.spa-page'));
  var nav = document.getElementById('nav-links');
  var hamburger = document.getElementById('hamburger');

  function closeMenu() {
    if (!nav || !hamburger) return;
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  function route() {
    if (!pages.length) return;
    var page = window.location.hash.replace('#', '') || 'home';
    if (!document.querySelector('.spa-page[data-page="' + page + '"]')) page = 'home';
    pages.forEach(function (section) {
      var active = section.getAttribute('data-page') === page;
      section.hidden = !active;
      section.classList.toggle('active', active);
    });
    document.querySelectorAll('.nav-btn[data-page]').forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('data-page') === page);
    });
    closeMenu();
    window.scrollTo(0, 0);
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });
  }

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

  window.addEventListener('hashchange', route);
  route();
})();
