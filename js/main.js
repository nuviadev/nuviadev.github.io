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
        const navItems = document.querySelectorAll('.nav-links a');
        
        navItems.forEach(link => {
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
});
window.addEventListener('load', () => {
    const menu = document.querySelector('.navbar__menu');
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    }
});