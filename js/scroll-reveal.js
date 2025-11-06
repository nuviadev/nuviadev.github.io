// scroll-reveal.js
// IntersectionObserver-based reveal animation with cascading delays and reduced-motion support

export function initReveal(options = {}) {
  const selector = options.selector || '[data-reveal]';
  const threshold = options.threshold ?? 0.2;
  const rootMargin = options.rootMargin || '0px 0px -10% 0px';
  const cascade = options.cascade ?? true;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    // Make elements visible immediately
    document.querySelectorAll(selector).forEach(el => el.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      // compute delay for cascading effects (based on index among siblings)
      if (cascade) {
        const siblings = Array.from(el.parentElement?.children || []);
        const idx = siblings.indexOf(el);
        const delay = Math.min((idx || 0) * 80, 400); // max 400ms
        // prefer setting a CSS variable so styles control the final behavior
        el.style.setProperty('--reveal-delay', `${delay}ms`);
      }
      el.classList.add('in');
      observer.unobserve(el);
    });
  }, { threshold, rootMargin });

  document.querySelectorAll(selector).forEach(el => {
    // set initial state
    el.classList.add('reveal');
    observer.observe(el);
  });
}
