// scroll.js: IntersectionObserver para [data-animate]
import { qsa, prefersReducedMotion } from './core.js';
if (!prefersReducedMotion()) {
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-inview');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  qsa('[data-animate]').forEach(el => observer.observe(el));
}
