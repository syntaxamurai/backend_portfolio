(function () {

  /* ── THEME TOGGLE ───────────────────────────────────────── */
  var html  = document.documentElement;
  var saved = localStorage.getItem('ja-theme') || 'dark';
  html.setAttribute('data-theme', saved);

  document.getElementById('themeBtn').addEventListener('click', function () {
    var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('ja-theme', next);
  });

  /* ── HAMBURGER ──────────────────────────────────────────── */
  document.getElementById('burgerBtn').addEventListener('click', function () {
    document.getElementById('mobMenu').classList.toggle('open');
  });

  /* Close mobile menu when any link inside it is tapped */
  var mobLinks = document.querySelectorAll('.mob-menu a');
  for (var i = 0; i < mobLinks.length; i++) {
    mobLinks[i].addEventListener('click', function () {
      document.getElementById('mobMenu').classList.remove('open');
    });
  }

  /* ── ACTIVE NAV LINK ────────────────────────────────────── */
  /* Highlights the nav link that matches the current page */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.nav-links a');
  for (var j = 0; j < navLinks.length; j++) {
    var linkPage = navLinks[j].getAttribute('href');
    if (linkPage === currentPage) {
      navLinks[j].classList.add('active');
    }
  }

})();