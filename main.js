// Eliminar watermark de Spline con MutationObserver
function removeSplineWatermark() {
  const viewer = document.getElementById('spline-viewer');
  if (!viewer) return;
  function tryRemove() {
    const root = viewer.shadowRoot;
    if (!root) return false;
    const wm = root.querySelector('[aria-label*="Built with Spline"], [class*="watermark"], [data-testid*="watermark"], [aria-label*="Spline"]');
    if (wm) {
      wm.remove();
      return true;
    }
    return false;
  }
  // Observa el shadowRoot por cambios
  const obs = new MutationObserver(() => { tryRemove(); });
  const startObs = () => {
    if (viewer.shadowRoot) {
      obs.observe(viewer.shadowRoot, { childList: true, subtree: true });
      tryRemove();
    } else {
      setTimeout(startObs, 200);
    }
  };
  startObs();
}
window.addEventListener('DOMContentLoaded', removeSplineWatermark);
// Eliminar watermark de Spline tras renderizado
function removeSplineWatermark() {
  const viewer = document.getElementById('spline-viewer');
  if (!viewer) return;
  const tryRemove = () => {
    // Buscar watermark por aria-label, clase o texto
    const wm = viewer.shadowRoot?.querySelector('[aria-label*="Built with Spline"], [class*="watermark"], [data-testid*="watermark"]');
    if (wm) {
      wm.remove();
      return true;
    }
    // Buscar en light DOM por si acaso
    const wm2 = viewer.querySelector('[aria-label*="Built with Spline"], [class*="watermark"], [data-testid*="watermark"]');
    if (wm2) {
      wm2.remove();
      return true;
    }
    return false;
  };
  // Intentar varias veces por si tarda en renderizar
  let tries = 0;
  const interval = setInterval(() => {
    if (tryRemove() || ++tries > 20) clearInterval(interval);
  }, 300);
}
window.addEventListener('DOMContentLoaded', removeSplineWatermark);
// Pausar el render del fondo Spline cuando la pestaña no está activa
document.addEventListener('visibilitychange', () => {
  const v = document.getElementById('spline-viewer');
  if (!v) return;
  v.style.visibility = document.hidden ? 'hidden' : 'visible';
});