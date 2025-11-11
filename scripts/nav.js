// nav.js: sticky header glass, pills, mobile menu
import { qs, on } from './core.js';
const header = qs('.header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 48) header.classList.add('nav--compact');
  else header.classList.remove('nav--compact');
  lastScroll = y;
});
// Pills active
qsAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    qsAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  });
});
// Mobile menu (to implement)
