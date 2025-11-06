/**
 * header-footer.js
 * Gestiona la inserción y comportamiento del header y footer en todas las páginas
 */

// IIFE para evitar contaminación del scope global
(function() {
    'use strict';

    const HEADER_TEMPLATE = `<!-- Header parcial - Incluir en todas las páginas -->
<header class="site-header">
    <!-- ... (contenido de header.html) ... -->
</header>`;

    const FOOTER_TEMPLATE = `<!-- Footer parcial - Incluir en todas las páginas -->
<footer class="site-footer">
    <!-- ... (contenido de footer.html) ... -->
</footer>`;

    /**
     * Inserta el header y footer en la página si no existen
     */
    function initializeHeaderFooter() {
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');

        // Si no hay header o está vacío, insertarlo
        if (!header || !header.innerHTML.trim()) {
            document.body.insertAdjacentHTML('afterbegin', HEADER_TEMPLATE);
        }

        // Si no hay footer o está vacío, insertarlo
        if (!footer || !footer.innerHTML.trim()) {
            document.body.insertAdjacentHTML('beforeend', FOOTER_TEMPLATE);
        }
    }

    /**
     * Configura el trap focus para el menú móvil
     * @param {HTMLElement} menuContainer - El contenedor del menú
     */
    function setupFocusTrap(menuContainer) {
        const focusableElements = menuContainer.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];

        menuContainer.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    /**
     * Configura comportamientos comunes del header
     */
    function setupHeaderBehavior() {
        const header = document.querySelector('.site-header');
        const mobileToggle = header.querySelector('.nav__mobile-toggle');
        const navMenu = header.querySelector('.nav__menu');

        // Toggle menú móvil
        mobileToggle?.addEventListener('click', () => {
            const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            mobileToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('nav__menu--active');
            
            if (!isExpanded) {
                setupFocusTrap(navMenu);
            }
        });

        // Cerrar menú al presionar ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('nav__menu--active')) {
                mobileToggle.click();
            }
        });

        // Scroll behavior
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                header.classList.remove('site-header--hidden');
                return;
            }
            
            if (currentScroll > lastScroll && !header.classList.contains('site-header--hidden')) {
                header.classList.add('site-header--hidden');
            } else if (currentScroll < lastScroll && header.classList.contains('site-header--hidden')) {
                header.classList.remove('site-header--hidden');
            }
            
            lastScroll = currentScroll;
        });
    }

    /**
     * Configura comportamientos del footer
     */
    function setupFooterBehavior() {
        // Actualizar año en el copyright
        const yearSpan = document.querySelector('.js-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    /**
     * Inicialización cuando el DOM está listo
     */
    function init() {
        initializeHeaderFooter();
        setupHeaderBehavior();
        setupFooterBehavior();
    }

    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();