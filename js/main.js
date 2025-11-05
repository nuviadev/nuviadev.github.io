/**
 * main.js - Funcionalidad principal del sitio
 * Ubicación: /js/main.js
 * 
 * Gestiona:
 * - Navegación responsive
 * - Modo oscuro
 * - Estados activos
 */

document.addEventListener('DOMContentLoaded', () => {
    // Toggle menú móvil
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('is-open');
        });
    }

    // Toggle modo oscuro
    const darkToggle = document.querySelector('.dark-toggle');
    if (darkToggle) {
        const prefersDark = localStorage.getItem('darkMode') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.toggle('dark-mode', prefersDark);
        darkToggle.addEventListener('click', () => {
            const isDark = !document.body.classList.contains('dark-mode');
            document.body.classList.toggle('dark-mode', isDark);
            localStorage.setItem('darkMode', isDark);
        });
    }

    // Marcar enlace activo
    const markActiveLink = () => {
        const currentPath = window.location.pathname;
        document.querySelectorAll('.nav__menu a').forEach(link => {
            const linkPath = link.getAttribute('href');
            const isActive = currentPath.endsWith(linkPath);
            link.classList.toggle('active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    };
    markActiveLink();

    // Animación scroll reveal
    const revealEls = document.querySelectorAll('[data-reveal]');
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.2 });
    revealEls.forEach(el => revealObs.observe(el));

    // Parallax backgrounds
    document.querySelectorAll('.parallax').forEach(bg => {
        window.addEventListener('scroll', () => {
            const offset = window.pageYOffset;
            bg.style.backgroundPositionY = (offset * 0.5) + 'px';
        });
    });

    // Carga progresiva de imágenes
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = 1;
            img.style.transition = 'opacity 0.5s';
        });
        img.style.opacity = 0;
    });

    // Microinteracciones logo
    document.querySelectorAll('.nav__logo img, .footer__brand img').forEach(logo => {
        logo.addEventListener('mouseover', () => {
            logo.style.transform = 'scale(1.15) rotate(-6deg)';
        });
        logo.addEventListener('mouseout', () => {
            logo.style.transform = 'none';
        });
    });
});