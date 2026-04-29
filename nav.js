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
      // ── Theme popover ──
      var themeBtn = document.getElementById('theme-btn');
      var themePop = document.getElementById('theme-popover');

      function getPortal() { return localStorage.getItem('portal') || 'coordinator'; }
      function setPortal(val) {
        localStorage.setItem('portal', val);
        document.documentElement.setAttribute('data-portal', val);
        document.dispatchEvent(new CustomEvent('portalchange', { detail: val }));
      }
      function getEffectiveTheme() {
        var s = localStorage.getItem('theme');
        return s || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      }
      function setTheme(val) {
        localStorage.setItem('theme', val);
        document.documentElement.setAttribute('data-theme', val);
        document.dispatchEvent(new CustomEvent('themechange', { detail: val }));
      }

      function syncRadios() {
        var theme = getEffectiveTheme();
        var portal = getPortal();
        document.querySelectorAll('input[name="tpop-color"]').forEach(function(r) {
          r.checked = r.value === theme;
        });
        document.querySelectorAll('input[name="tpop-portal"]').forEach(function(r) {
          r.checked = r.value === portal;
        });
      }

      function openPopover() {
        syncRadios();
        themePop.hidden = false;
        themeBtn.setAttribute('aria-expanded', 'true');
      }
      function closePopover() {
        themePop.hidden = true;
        themeBtn.setAttribute('aria-expanded', 'false');
      }

      if (themeBtn && themePop) {
        themeBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          themePop.hidden ? openPopover() : closePopover();
        });

        themePop.addEventListener('change', function(e) {
          if (e.target.name === 'tpop-color') setTheme(e.target.value);
          if (e.target.name === 'tpop-portal') setPortal(e.target.value);
        });

        document.addEventListener('click', function(e) {
          if (!document.getElementById('theme-btn-wrap').contains(e.target)) closePopover();
        });

        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape') closePopover();
        });
      }
    })
    .catch(function (err) {
      console.warn('[nav.js] Could not load nav.html:', err);
    });
})();
