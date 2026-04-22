(function () {
  // Resolve nav.html relative to this script's location
  var scriptSrc = document.querySelector('script[src$="nav.js"]');
  var base = scriptSrc
    ? scriptSrc.src.replace(/nav\.js(\?.*)?$/, '')
    : '';

  fetch(base + 'nav.html')
    .then(function (r) { return r.text(); })
    .then(function (html) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = html;

      // Inject top nav
      var topnav = wrapper.querySelector('.topnav');
      var topnavPlaceholder = document.getElementById('topnav-placeholder');
      if (topnav && topnavPlaceholder) {
        topnavPlaceholder.replaceWith(topnav);
      }

      // Inject sidebar
      var sidebar = wrapper.querySelector('.sidebar');
      var sidebarPlaceholder = document.getElementById('sidebar-placeholder');
      if (sidebar && sidebarPlaceholder) {
        sidebarPlaceholder.replaceWith(sidebar);
      }

      // Mark the correct nav item as active based on current filename
      var currentFile = location.pathname.split('/').pop() || 'index.html';
      // Preview servers often serve index.html at root
      if (currentFile === '') currentFile = 'index.html';

      document.querySelectorAll('.nav-item').forEach(function (link) {
        link.classList.remove('active');
        var href = (link.getAttribute('href') || '').split('/').pop();
        if (href === currentFile) {
          link.classList.add('active');
        }
      });
    })
    .catch(function (err) {
      console.warn('[nav.js] Could not load nav.html:', err);
    });
})();
