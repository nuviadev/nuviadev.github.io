document.addEventListener('visibilitychange', () => {

// NuviaDev Interactividad y Animaciones
// =====================

// Eliminar watermark de Spline
const removeSplineWatermark = () => {
  const observer = new MutationObserver(() => {
    const watermark = document.querySelector('spline-viewer')?.shadowRoot?.querySelector('[data-watermark], [aria-label*="Spline"], [class*="watermark"]');
    if (watermark) watermark.remove();
  });
  const viewer = document.getElementById('spline-viewer');
  if (viewer) {
    viewer.addEventListener('load', () => {
      if (viewer.shadowRoot) {
        observer.observe(viewer.shadowRoot, { childList: true, subtree: true });
      }
    });
  }
};
window.addEventListener('DOMContentLoaded', removeSplineWatermark);

// Animaciones on-scroll solo en páginas que no sean index
if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
  const revealElements = document.querySelectorAll('[data-reveal], .card, .trabajos-grid, .footer');
  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealOnScroll.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealElements.forEach(el => {
    el.setAttribute('data-reveal', '');
    revealOnScroll.observe(el);
  });
}

// Modo oscuro/claro con persistencia
const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;
const setTheme = (dark) => {
  if (dark) {
    root.classList.add('dark');
    themeToggle?.querySelector('.icon-moon')?.style && (themeToggle.querySelector('.icon-moon').style.display = 'none');
    themeToggle?.querySelector('.icon-sun')?.style && (themeToggle.querySelector('.icon-sun').style.display = 'inline');
    localStorage.setItem('theme', 'dark');
  } else {
    root.classList.remove('dark');
    themeToggle?.querySelector('.icon-moon')?.style && (themeToggle.querySelector('.icon-moon').style.display = 'inline');
    themeToggle?.querySelector('.icon-sun')?.style && (themeToggle.querySelector('.icon-sun').style.display = 'none');
    localStorage.setItem('theme', 'light');
  }
};
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark');
themeToggle?.addEventListener('click', () => {
  setTheme(!root.classList.contains('dark'));
});

// Menú móvil animado
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.classList.remove('active');
    });
  });
}

// Scroll suave en navegación
// Scroll suave solo en index
if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId) || document.querySelector(`[id='${targetId}']`);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Header reduce altura y aplica sombra al hacer scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  // Footer aparece con transición suave
  const footer = document.querySelector('.footer');
  if (footer) {
    if (window.scrollY + window.innerHeight > document.body.offsetHeight - 100) {
      footer.classList.add('show-footer');
    } else {
      footer.classList.remove('show-footer');
    }
  }
});

// Pausar Spline cuando la pestaña esté inactiva
const splineViewer = document.getElementById('spline-viewer');
let splinePaused = false;
const pauseSpline = () => {
  if (splineViewer && splineViewer.contentWindow) {
    splineViewer.contentWindow.postMessage('pause', '*');
    splinePaused = true;
  }
};
const playSpline = () => {
  if (splineViewer && splineViewer.contentWindow) {
    splineViewer.contentWindow.postMessage('play', '*');
    splinePaused = false;
  }
};
document.addEventListener('visibilitychange', () => {
  if (document.hidden) pauseSpline();
  else playSpline();
});

// Validación y animación de formulario de contacto
// Validación solo en contacto
if (window.location.pathname.endsWith('contacto.html')) {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const nombre = contactForm.nombre.value.trim();
      const email = contactForm.email.value.trim();
      const mensaje = contactForm.mensaje.value.trim();
      const msg = contactForm.querySelector('.form-message');
      if (!nombre || !email || !mensaje) {
        msg.textContent = 'Por favor, completa todos los campos.';
        msg.style.color = '#ef4444';
        return;
      }
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        msg.textContent = 'Correo electrónico no válido.';
        msg.style.color = '#ef4444';
        return;
      }
      msg.textContent = '¡Mensaje enviado!';
      msg.style.color = 'var(--color-accent)';
      contactForm.reset();
      setTimeout(() => { msg.textContent = ''; }, 3000);
    });
  }
}
});