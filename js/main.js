/**
 * main.js
 * Punto de entrada principal de la aplicación
 * 
 * Este archivo orquesta la inicialización de todos los módulos
 * y proporciona la API pública de la aplicación.
 */

<<<<<<< HEAD
(function() {
    'use strict';

    // Namespace global de la aplicación
    window.NuviaDev = window.NuviaDev || {};

    /**
     * Determina si estamos en una página específica
     * @param {string} pageName - Nombre de la página a verificar
     * @returns {boolean}
     */
    function isPage(pageName) {
        return window.location.pathname.includes(pageName);
    }

    /**
     * Carga scripts adicionales según la página
     */
    function loadPageSpecificScripts() {
        // Cargar form.js solo en la página de contacto
        if (isPage('contact')) {
            const formScript = document.createElement('script');
            formScript.src = '/js/form.js';
            document.body.appendChild(formScript);
        }
    }

    /**
     * Inicializa los módulos principales
     */
    function initializeModules() {
        // Los módulos se auto-inicializan al cargarse
        const scripts = [
            '/js/header-footer.js',
            '/js/nav.js',
            '/js/ui.js'
        ];

        scripts.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script);
        });
    }

    /**
     * Inicialización cuando el DOM está listo
     */
    function init() {
        initializeModules();
        loadPageSpecificScripts();
    }

    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

        /**
 * main.js
 * Punto de entrada principal de la aplicación
 * 
 * Este archivo orquesta la inicialización de todos los módulos
 * y proporciona la API pública de la aplicación.
 */

(function() {
    'use strict';

    // Namespace global de la aplicación
    window.NuviaDev = window.NuviaDev || {};

    /**
     * Determina si estamos en una página específica
     * @param {string} pageName - Nombre de la página a verificar
     * @returns {boolean}
     */
    function isPage(pageName) {
        return window.location.pathname.includes(pageName);
    }

    /**
     * Carga scripts adicionales según la página
     */
    function loadPageSpecificScripts() {
        // Cargar form.js solo en la página de contacto
        if (isPage('contact')) {
            const formScript = document.createElement('script');
            formScript.src = '/js/form.js';
            document.body.appendChild(formScript);
        }
    }

    /**
     * Inicializa los módulos principales
     */
    function initializeModules() {
        // Los módulos se auto-inicializan al cargarse
        const scripts = [
            '/js/header-footer.js',
            '/js/nav.js',
            '/js/ui.js'
        ];

        scripts.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script);
=======
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
>>>>>>> f30e268635fd6aac238f4159037b3cf9bc224030
        });
    }

    /**
     * Inicialización cuando el DOM está listo
     */
    function init() {
        initializeModules();
        loadPageSpecificScripts();
    }

    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

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