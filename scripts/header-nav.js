// Animación de aparición al hacer scroll para elementos con [data-animate]
const revealElements = document.querySelectorAll('[data-animate]');
const revealOnScroll = new window.IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-inview');
      revealOnScroll.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealElements.forEach(el => revealOnScroll.observe(el));
// (Eliminado IntersectionObserver duplicado; la animación scroll está en scroll.js)
// nav capsule and responsive menu for header
const navList = document.getElementById('headerNavList');
const burger = document.querySelector('.header-burger');
const header = document.querySelector('.header');
let ticking = false;
function onScroll() {
  const curr = window.scrollY;
  if (curr > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(onScroll);
    ticking = true;
  }
});
function toggleNav() {
  navList.classList.toggle('open');
}
if (burger) {
  burger.addEventListener('click', toggleNav);
}
function handleResize() {
  if (window.innerWidth < 900) {
    burger.style.display = 'block';
    navList.style.display = navList.classList.contains('open') ? 'flex' : 'none';
    navList.style.flexDirection = 'column';
    navList.style.position = 'absolute';
    navList.style.top = '70px';
    navList.style.left = '0';
    navList.style.right = '0';
    navList.style.margin = '0 auto';
    navList.style.background = 'rgba(255,255,255,0.98)';
    navList.style.boxShadow = '0 8px 32px 0 rgba(250,204,21,0.18)';
    navList.style.padding = '2em 0';
    navList.style.borderRadius = '2em';
    navList.style.zIndex = '100';
    navList.style.gap = '1.5em';
  } else {
    burger.style.display = 'none';
    navList.style.display = 'flex';
    navList.style.flexDirection = 'row';
    navList.style.position = '';
    navList.style.top = '';
    navList.style.left = '';
    navList.style.right = '';
    navList.style.margin = '';
    navList.style.background = 'rgba(255,255,255,0.85)';
    navList.style.boxShadow = '0 8px 32px 0 rgba(250,204,21,0.10),0 2px 12px rgba(250,204,21,0.06)';
    navList.style.padding = '1.1em 3.5em';
    navList.style.borderRadius = '2.7em';
    navList.style.zIndex = '';
    navList.style.gap = '3em';
  }
}
window.addEventListener('resize', handleResize);
handleResize();
