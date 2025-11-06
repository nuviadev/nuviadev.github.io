// slider.js
// Lightweight slider for testimonials: autoplay, pause on hover, drag/touch, ARIA roles

export function initSlider(selector = '.testimonials-slider', opts = {}) {
  const root = document.querySelector(selector);
  if (!root) return;

  const track = root.querySelector('.testimonials-track') || root.querySelector('.testimonials-slider > .slider-track') || root;
  const slides = Array.from(track.querySelectorAll('.testimonial-card'));
  if (!slides.length) return;

  let current = 0;
  let autoplay = opts.autoplay ?? true;
  let interval = opts.interval ?? 5000;
  let timer = null;
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;

  function goTo(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach((s, idx) => {
      s.style.display = idx === current ? 'block' : 'none';
      s.setAttribute('aria-hidden', idx === current ? 'false' : 'true');
    });
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  // autoplay
  function start() { if (autoplay) timer = setInterval(next, interval); }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }

  // pause on hover/focus
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', start);

  // simple drag support
  root.addEventListener('pointerdown', (e) => {
    isDragging = true; startX = e.clientX; stop();
  });
  window.addEventListener('pointermove', (e) => {
    if (!isDragging) return; currentTranslate = e.clientX - startX;
  });
  window.addEventListener('pointerup', (e) => {
    if (!isDragging) return; isDragging = false;
    if (currentTranslate < -40) next();
    else if (currentTranslate > 40) prev();
    currentTranslate = 0; start();
  });

  // controls (optional)
  const nextBtn = root.querySelector('.testimonial-next');
  const prevBtn = root.querySelector('.testimonial-prev');
  nextBtn?.addEventListener('click', () => { stop(); next(); start(); });
  prevBtn?.addEventListener('click', () => { stop(); prev(); start(); });

  // init
  goTo(0);
  start();
}
