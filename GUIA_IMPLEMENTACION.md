# 📋 Guía de Implementación de Mejoras en Otras Páginas

Esta guía te ayudará a aplicar las mejoras realizadas en `index.html` a las demás páginas de NuviaDev.

---

## 🎯 Paso 1: Estructura HTML Base

### Reemplazar el header en todas las páginas

**Usar esta estructura limpia en lugar de estilos inline:**

```html
<header class="header" role="banner">
  <div class="header-wrapper">
    <div class="header-logo">
      <a href="index.html" class="logo-link">
        <span class="logo">nuviadev</span>
      </a>
    </div>
    <div class="header-main">
      <nav class="header-nav" aria-label="Principal">
        <ul class="header-nav-list" id="headerNavList">
          <li><a href="index.html" class="nav-link">Inicio</a></li>
          <li><a href="servicios.html" class="nav-link">Servicios</a></li>
          <li><a href="proyecto.html" class="nav-link">Proyectos</a></li>
          <li><a href="planes.html" class="nav-link">Precios</a></li>
          <li><a href="trabajos.html" class="nav-link">Trabajos</a></li>
          <li><a href="contacto.html" class="nav-link">Contacto</a></li>
        </ul>
        <button class="header-burger" id="headerBurger" aria-label="Abrir menú" aria-expanded="false">
          <span class="burger-line"></span>
          <span class="burger-line"></span>
          <span class="burger-line"></span>
        </button>
      </nav>
    </div>
    <div class="header-mobile-menu" id="headerMobileMenu">
      <ul class="mobile-menu-list">
        <li><a href="index.html" class="mobile-menu-link">Inicio</a></li>
        <li><a href="servicios.html" class="mobile-menu-link">Servicios</a></li>
        <li><a href="proyecto.html" class="mobile-menu-link">Proyectos</a></li>
        <li><a href="planes.html" class="mobile-menu-link">Precios</a></li>
        <li><a href="trabajos.html" class="mobile-menu-link">Trabajos</a></li>
        <li><a href="contacto.html" class="mobile-menu-link">Contacto</a></li>
      </ul>
    </div>
  </div>
</header>
```

### Reemplazar el footer en todas las páginas

```html
<footer class="footer" role="contentinfo">
  <div class="footer-main">
    <div class="footer-brand">
      <div class="footer-logo">NuviaDev</div>
      <p class="footer-contact">¿Tienes dudas o quieres hablar? <br> Escríbenos a <a href="mailto:hola@nuviadev.com" class="footer-email">hola@nuviadev.com</a></p>
      <div class="footer-copyright">© 2025 NuviaDev. Todos los derechos reservados.</div>
    </div>
    <div class="footer-links-wrapper">
      <div class="footer-links">
        <div class="footer-link-group">
          <div class="footer-link-title">Servicios</div>
          <ul class="footer-link-list">
            <li><a href="servicios.html">Desarrollo Web</a></li>
            <li><a href="servicios.html">Landing Pages</a></li>
            <li><a href="servicios.html">Mantenimiento</a></li>
            <li><a href="servicios.html">Consultoría</a></li>
          </ul>
        </div>
        <div class="footer-link-group">
          <div class="footer-link-title">Recursos</div>
          <ul class="footer-link-list">
            <li><a href="proyecto.html">Proyectos</a></li>
            <li><a href="sobre.html">Sobre nosotros</a></li>
            <li><a href="planes.html">Planes y precios</a></li>
            <li><a href="contacto.html">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-link-group">
          <div class="footer-link-title">Empresa</div>
          <ul class="footer-link-list">
            <li><a href="sobre.html">Equipo</a></li>
            <li><a href="sobre.html">Filosofía</a></li>
            <li><a href="contacto.html">Soporte</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-social-wrapper">
      <div class="footer-social-title">Síguenos</div>
      <div class="footer-social">
        <a href="https://www.linkedin.com/company/nuviadev" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-link">
          <svg width="24" height="24" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="6" fill="currentColor"/><path d="M9.5 11.5v7" stroke="white" stroke-width="2" stroke-linecap="round"/><circle cx="9.5" cy="9" r="1.5" fill="white"/><path d="M13.5 15.5V11.5h3v1.2c.4-.7 1.2-1.2 2-1.2 1.1 0 2 1 2 2.2v5h-2v-4c0-.6-.4-1-1-1s-1 .4-1 1v4h-2v-4z" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>
        </a>
        <a href="https://github.com/nuviadev" target="_blank" rel="noopener" aria-label="GitHub" class="social-link">
          <svg width="24" height="24" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="6" fill="currentColor"/><path d="M14 19.5c-3.3 0-6-2.7-6-6 0-2.6 1.7-4.8 4.1-5.7.3-.1.4.1.4.3v1.2c-1.7-.4-2.1.8-2.1.8-.3.7-.7.9-.7.9-.6.4 0 .4 0 .4.7 0 1.1.7 1.1.7.6 1.1 1.6.8 2 .6.1-.4.2-.7.4-.9-1.4-.2-2.9-.7-2.9-3.1 0-.7.2-1.2.6-1.7-.1-.2-.3-.8.1-1.7 0 0 .5-.2 1.7.6.5-.1 1.1-.2 1.7-.2s1.2.1 1.7.2c1.2-.8 1.7-.6 1.7-.6.4.9.2 1.5.1 1.7.4.5.6 1 .6 1.7 0 2.4-1.5 2.9-2.9 3.1.2.2.4.5.4.9v1.3c0 .2.1.4.4.3C18.3 14.3 20 16.5 20 19.5c0 3.3-2.7 6-6 6z" fill="white"/></svg>
        </a>
      </div>
      <div class="footer-address">Domicilio social:<br>Av. Digital 123, 28001 Madrid, España</div>
    </div>
  </div>
  <div class="footer-bottom">
    <span><a href="#privacy">Política de privacidad</a></span>
    <span> &nbsp;|&nbsp; </span>
    <span><a href="#terms">Términos de uso</a></span>
  </div>
</footer>
```

---

## 🎨 Paso 2: Actualizar CSS en cada página HTML

### Agregar en la sección `<head>` de cada página:

```html
<link rel="stylesheet" href="styles/base.css">
<link rel="stylesheet" href="styles/layout.css">
<link rel="stylesheet" href="styles/components.css">
<link rel="stylesheet" href="styles/pages.css">
<link rel="stylesheet" href="styles/pages/NOMBRE_PAGINA.css">
<!-- Reemplazar NOMBRE_PAGINA con: contacto, servicios, proyecto, planes, sobre, trabajos -->
```

---

## 🚀 Paso 3: Agregar Scripts Mejorados

### Agregar antes del `</body>`:

```html
<script type="module" src="/scripts/core.js"></script>
<script type="module" src="/scripts/nav.js"></script>
<script type="module" src="/scripts/header-nav.js"></script>
<script type="module" src="/scripts/scroll.js"></script>
<script type="module" src="/scripts/spline.js"></script>
<script type="module" src="/scripts/forms.js"></script>
<script type="module" src="/scripts/animations.js"></script>
<script type="module" src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"></script>
```

---

## 🎯 Paso 4: Actualizar Contenido de Páginas

### Usar nuevas clases CSS

#### Para títulos de sección:
```html
<h2 class="section-title">Título de la sección</h2>
```

#### Para cards de servicios:
```html
<div class="service-card">
  <h3 class="service-title">Título</h3>
  <p class="service-desc">Descripción del servicio</p>
  <a href="#" class="btn btn-secondary btn-sm">Más detalles</a>
</div>
```

#### Para botones:
```html
<!-- Botón primary -->
<a href="#" class="btn btn-primary">Click aquí</a>

<!-- Botón secondary -->
<a href="#" class="btn btn-secondary">Acción secundaria</a>

<!-- Botones con tamaños -->
<a href="#" class="btn btn-primary btn-sm">Pequeño</a>
<a href="#" class="btn btn-primary btn-lg">Grande</a>
```

#### Para grillas de elementos:
```html
<div class="features-grid">
  <div class="feature-card">
    <h3 class="feature-title">Característica</h3>
    <p class="feature-desc">Descripción</p>
  </div>
</div>
```

---

## 📋 Checklist por Página

### contacto.html
- [ ] Actualizar header/footer según template
- [ ] Agregar estilos linkados
- [ ] Aplicar clases CSS nuevas
- [ ] Agregar scripts
- [ ] Crear `styles/pages/contacto.css` si es necesario
- [ ] Probar formulario
- [ ] Probar responsive

### servicios.html
- [ ] Actualizar estructura
- [ ] Cambiar colores amarillo → azul
- [ ] Usar nuevas clases de cards
- [ ] Aplicar animaciones
- [ ] Probar mobile

### proyecto.html
- [ ] Actualizar header/footer
- [ ] Usar grid responsive
- [ ] Aplicar clases modernas
- [ ] Probar en móvil

### planes.html
- [ ] Aplicar nuevo design
- [ ] Usar clases de pricing cards
- [ ] Agregar animaciones

### sobre.html
- [ ] Actualizar layout
- [ ] Mejorar tipografía
- [ ] Aplicar nuevos estilos

### trabajos.html
- [ ] Actualizar galería
- [ ] Aplicar grid responsive
- [ ] Agregar animaciones

---

## 🎨 Sistema de Variables CSS

Para cambios globales, editar `styles/base.css`:

```css
:root {
  /* Cambiar colores principales */
  --brand-1: #0ea5e9;      /* Azul principal */
  --brand-2: #06b6d4;      /* Azul secundario */
  --ink: #1f2937;          /* Texto principal */
  --ink-light: #475569;    /* Texto secundario */
  
  /* Espaciado */
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  
  /* Sombras */
  --shadow-md: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 24px 0 rgba(0, 0, 0, 0.12);
  
  /* Transiciones */
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 📱 Clases Útiles para Responsive

```html
<!-- Container principal -->
<div class="container">
  <!-- Contenido con max-width y auto margin -->
</div>

<!-- Grid automática -->
<div class="grid">
  <!-- Items se adaptarán automáticamente -->
</div>

<!-- Espaciado consistente -->
<p class="space-md">Esto tiene margin bottom consistente</p>
```

---

## 🔍 Testing Checklist

Para cada página mejorada:

- [ ] ✅ Header funciona en desktop y mobile
- [ ] ✅ Footer visible y clickeable
- [ ] ✅ Animaciones fluidas (60fps)
- [ ] ✅ Responsive en: 480px, 640px, 768px, 1024px, 1440px
- [ ] ✅ Colores consistentes (azul)
- [ ] ✅ Botones funcionan
- [ ] ✅ Links activos destacados
- [ ] ✅ Formularios funcionan (si aplica)
- [ ] ✅ Accesibilidad OK (TAB navigation)
- [ ] ✅ Performance bueno (Lighthouse 90+)

---

## 💡 Tips Importantes

### 1. Mantener Consistencia
Usar siempre las mismas clases:
```html
.section-title      <!-- Títulos de sección -->
.service-card       <!-- Cards de servicio -->
.btn btn-primary    <!-- Botones -->
.feature-card       <!-- Características -->
```

### 2. Animaciones Automáticas
Los elementos con estas clases se animan automáticamente:
```css
.feature-card         /* Fade in on scroll */
.service-card         /* Fade in on scroll */
.cta-card             /* Fade in on scroll */
.section-title        /* Fade in on scroll */
```

### 3. Colores Globales
Cambiar todos los colores en UN SOLO LUGAR:
```css
/* En styles/base.css */
--brand-1: #nuevo-color;  /* Cambia en TODA la web */
```

### 4. Tipografía Responsive
Usar `clamp()` en lugar de media queries:
```css
font-size: clamp(1rem, 2vw, 1.5rem);  /* Responsive automático */
```

---

## 🚀 Orden Recomendado de Implementación

1. **index.html** ✅ (Completado)
2. **contacto.html** - Formularios ya con estilos
3. **servicios.html** - Cards de servicios
4. **proyecto.html** - Galería de proyectos
5. **planes.html** - Tabla de precios
6. **sobre.html** - Contenido simple
7. **trabajos.html** - Portfolio

---

## 📞 Soporte

Si tienes dudas:
- Ver `MEJORAS.md` para detalles técnicos
- Ver `CAMBIOS_VISUALES.md` para comparativas
- Ver `index.html` como referencia de estructura
- Revisar `styles/pages/index.css` para ejemplos

---

**¡Buena implementación!** 🚀

La consistencia es clave para una experiencia visual uniforme.
