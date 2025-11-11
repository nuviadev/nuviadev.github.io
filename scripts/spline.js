// spline.js: montaje y optimización del fondo Spline
const viewer = document.getElementById('spline-viewer');
if (viewer) {
  document.addEventListener('visibilitychange', () => {
    viewer.style.visibility = document.hidden ? 'hidden' : 'visible';
  });
  // Quitar watermark si aparece
  const removeWatermark = () => {
    const root = viewer.shadowRoot;
    if (!root) return;
    const wm = root.querySelector('[class*="watermark"], [aria-label*="Spline"]');
    if (wm) wm.remove();
  };
  viewer.addEventListener('load', removeWatermark);
  setTimeout(removeWatermark, 2000);
}
