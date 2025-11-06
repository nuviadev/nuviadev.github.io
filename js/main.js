/* main.js — ES module entrypoint */
import './header-footer.js';
import { initNav } from './nav.js';
import { initReveal } from './scroll-reveal.js';
import { initSlider } from './slider.js';
import { initForm } from './form.js';
import { initCounters } from './counters.js';
import { initFAQ } from './faq.js';

export function main() {
  // Initialize core modules
  initNav();
  initReveal({ selector: '[data-reveal]', threshold: 0.2, cascade: true });
  initSlider('.testimonials-slider');
  initForm();
  initCounters();
  initFAQ();

  // update year node
  const y = document.querySelector('.js-year');
  if (y) y.textContent = new Date().getFullYear();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', main);
else main();