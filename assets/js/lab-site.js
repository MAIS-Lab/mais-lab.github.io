(function () {
  var nav = document.getElementById('nav-links');
  var hamburger = document.getElementById('hamburger');

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
