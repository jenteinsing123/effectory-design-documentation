(function () {
  // Apply saved theme + portal before nav renders to avoid flash
  (function applyTheme() {
    var theme = localStorage.getItem('theme');
    if (theme) document.documentElement.setAttribute('data-theme', theme);
    var portal = localStorage.getItem('portal') || 'coordinator';
    document.documentElement.setAttribute('data-portal', portal);
  })();

  // Auto-load icons.js so every page has access to the icon library
  (function loadIconScript() {
    if (document.querySelector('script[src$="icons.js"]')) return;
    var s = document.createElement('script');
    s.src = 'icons.js';
    document.head.appendChild(s);
  })();

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
      // Wire up portal selector
      var portalSel = document.getElementById('portal-select');
      function getPortal() { return localStorage.getItem('portal') || 'coordinator'; }
      function setPortal(val) {
        localStorage.setItem('portal', val);
        document.documentElement.setAttribute('data-portal', val);
        document.dispatchEvent(new CustomEvent('portalchange', { detail: val }));
      }
      if (portalSel) {
        portalSel.value = getPortal();
        portalSel.addEventListener('change', function () { setPortal(this.value); });
      }

      // Wire up theme toggle
      var btn = document.getElementById('theme-toggle');
      var sunIcon = document.getElementById('theme-icon-sun');
      var moonIcon = document.getElementById('theme-icon-moon');

      function getEffectiveTheme() {
        var stored = localStorage.getItem('theme');
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }

      function updateToggleIcon() {
        var isDark = getEffectiveTheme() === 'dark';
        if (sunIcon) sunIcon.style.display = isDark ? 'block' : 'none';
        if (moonIcon) moonIcon.style.display = isDark ? 'none' : 'block';
      }

      if (btn) {
        updateToggleIcon();
        btn.addEventListener('click', function () {
          var current = getEffectiveTheme();
          var next = current === 'dark' ? 'light' : 'dark';
          localStorage.setItem('theme', next);
          document.documentElement.setAttribute('data-theme', next);
          updateToggleIcon();
          document.dispatchEvent(new CustomEvent('themechange', { detail: next }));
        });
      }
    })
    .catch(function (err) {
      console.warn('[nav.js] Could not load nav.html:', err);
    });
})();
