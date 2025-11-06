# Nuvia — Sitio estático

Este repositorio contiene una plantilla minimalista, tipográfica y accesible para Nuvia, una empresa que ofrece servicios web. Está implementado en HTML5 + CSS3 + JS vanilla, sin frameworks.

Principales características:
- Mobile-first, responsive (360px → 1600px)
- Tipografía: Inter/Poppins para titulares; system UI para cuerpo
- Palette basada en variables CSS (ver `css/theme.css`)
- Animaciones on-scroll con `IntersectionObserver` (`js/scroll-reveal.js`)
- Navbar accesible con menú móvil (`js/nav.js`)
- Slider testimonios sin dependencias (`js/slider.js`)
- Formulario con validación y envío simulado (`js/form.js`)
- Componentes BEM-friendly y utilidades CSS

Estructura relevante:
- `index.html` — Home (ejemplo de secciones)
- `css/` — `base.css`, `theme.css`, `components.css`, `utils.css`
- `js/` — `main.js`, `nav.js`, `scroll-reveal.js`, `slider.js`, `form.js`, `header-footer.js`
- `partials/` — header/footer (plantillas)

Cómo probar localmente (servidor estático):

En PowerShell (Windows):

```powershell
# Si tienes Python 3
python -m http.server 8000
# o con Node.js + serve (instálalo si es necesario)
# npx serve -s .
```

Abrir http://localhost:8000 en el navegador.

Convenciones y cómo extender:
- CSS: usa variables en `css/theme.css` y sigue la escala `--space-1..--space-8`.
- BEM: bloques como `.hero`, elementos `.hero__title`, modificadores `.btn--primary`.
- JS: cada módulo exporta una función initXXX(), y `js/main.js` orquesta la inicialización.

Accesibilidad y SEO:
- Skip-link, focus-visible, roles y `aria-*` en toggles.
- Meta tags OG/Twitter y JSON-LD básico en `index.html`.

Siguientes pasos recomendados:
- Reemplazar imágenes por AVIF/WebP optimizados.
- Añadir contenidos específicos y textos locales.
- Ejecutar Lighthouse y ajustar critical CSS según resultados.

¡Listo! Si quieres, continúo generando las páginas secundarias (`about`, `services`, `contact`) con el mismo sistema de componentes.