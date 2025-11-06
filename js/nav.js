/**
 * nav.js
 * Gestiona la navegación y estado activo de los enlaces
 */

(function() {
    'use strict';

    /**
     * Marca el enlace activo según la URL actual
     */
    function setActiveNavItem() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav__link');
        
        navLinks.forEach(link => {
            const activePattern = link.getAttribute('data-active');
            if (activePattern && currentPath.includes(activePattern)) {
                link.classList.add('nav__link--active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('nav__link--active');
                link.removeAttribute('aria-current');
            }
        });
    }

    /**
     * Configura la navegación suave al hacer clic en enlaces internos
     */
    function setupSmoothScroll() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (!link) return;

            const targetId = link.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    /**
     * Gestiona el estado del menú móvil
     */
    function setupMobileMenu() {
        const mobileToggle = document.querySelector('.nav__mobile-toggle');
        const navMenu = document.querySelector('.nav__menu');
        
        if (!mobileToggle || !navMenu) return;

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('nav__menu--active') &&
                !e.target.closest('.nav__menu') &&
                !e.target.closest('.nav__mobile-toggle')) {
                mobileToggle.click();
            }
        });

        // Cerrar menú al cambiar tamaño de ventana
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024 && navMenu.classList.contains('nav__menu--active')) {
                mobileToggle.click();
            }
        });
    }

    /**
     * Inicialización cuando el DOM está listo
     */
    function init() {
        setActiveNavItem();
        setupSmoothScroll();
        setupMobileMenu();

        // Actualizar estado activo al navegar con el botón atrás/adelante
        window.addEventListener('popstate', setActiveNavItem);
    }

    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();