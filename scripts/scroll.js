// scroll.js: IntersectionObserver para [data-animate]
// Scroll Reveal Animations - NuviaDev
// Animaciones fluidas, accesibles y minimalistas

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function revealInit() {
  if (prefersReducedMotion) {
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.dataset.delay || '0', 10);
        setTimeout(() => {
          el.classList.add('visible');
        }, delay);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', revealInit);
} else {
  revealInit();
}
