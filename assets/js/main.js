// fade-in semplice
const elements = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);
});


// ===== MENU HAMBURGER =====
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}


// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="/#"], a[href^="/it/#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // se NON siamo in home, lascia comportamento normale
    if (!window.location.pathname.includes('/it/') || href.startsWith('/it/#')) {
      // siamo già in /it/ oppure torniamo lì → gestiamo scroll
      e.preventDefault();

      const id = href.split('#')[1];
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        if (menu) menu.classList.remove('active');
      } else {
        // fallback: vai alla home
        window.location.href = href;
      }
    }
  });
});



