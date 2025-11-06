// counters.js
// Animate numeric KPI counters when they enter the viewport using requestAnimationFrame

export function initCounters(selector = '[data-counter]') {
  const els = Array.from(document.querySelectorAll(selector));
  if (!els.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    els.forEach(e => e.textContent = e.getAttribute('data-target'));
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target') || '0', 10);
      const duration = parseInt(el.getAttribute('data-duration') || '1200', 10);
      animateValue(el, 0, target, duration);
      obs.unobserve(el);
    });
  }, { threshold: 0.4 });

  els.forEach(el => obs.observe(el));
}

function animateValue(el, start, end, duration) {
  const startTime = performance.now();
  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(start + (end - start) * easeOutCubic(progress));
    el.textContent = String(value);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function easeOutCubic(t){ return 1 - Math.pow(1 - t, 3); }
