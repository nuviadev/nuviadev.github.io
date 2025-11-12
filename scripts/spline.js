// spline.js: montaje y optimización del fondo Spline
const viewer = document.getElementById('spline-viewer');
if (viewer) {
  // Pausar cuando la pestaña está inactiva
  document.addEventListener('visibilitychange', () => {
    viewer.style.visibility = document.hidden ? 'hidden' : 'visible';
  });
  
  // Quitar watermark si aparece (una sola vez)
  const removeWatermark = () => {
    try {
      const root = viewer.shadowRoot;
      if (!root) return;
      const wm = root.querySelector('[class*="watermark"], [aria-label*="Spline"]');
      if (wm) wm.remove();
    } catch (e) {
      // Ignorar errores
    }
  };
  
  viewer.addEventListener('load', removeWatermark, { once: true });
  setTimeout(removeWatermark, 1500);
}
