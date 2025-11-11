// core.js: utilidades, tema, prefers-reduced-motion
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
export function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}
export function getTheme() {
  return localStorage.getItem('theme') || 'dark';
}
export function qs(sel, ctx=document) { return ctx.querySelector(sel); }
export function qsa(sel, ctx=document) { return Array.from(ctx.querySelectorAll(sel)); }
export function on(el, ev, fn) { el.addEventListener(ev, fn); }
// Init theme
if (!localStorage.getItem('theme')) setTheme('dark');
setTheme(getTheme());
