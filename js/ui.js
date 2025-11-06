/**
 * ui.js
 * Utilidades de UI y microinteracciones
 */

(function() {
    'use strict';

    /**
     * Comprueba si el usuario prefiere reducir el movimiento
     * @returns {boolean}
     */
    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    /**
     * Crea un trap focus para elementos modales
     * @param {HTMLElement} element - Elemento que debe mantener el foco
     * @returns {Function} Función para eliminar el trap focus
     */
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        function handleFocus(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        lastFocusable.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        firstFocusable.focus();
                        e.preventDefault();
                    }
                }
            }
        }

        element.addEventListener('keydown', handleFocus);
        firstFocusable.focus();

        return () => {
            element.removeEventListener('keydown', handleFocus);
        };
    }

    /**
     * Aplica efecto ripple a botones
     * @param {HTMLElement} button - El botón al que aplicar el efecto
     */
    function addRippleEffect(button) {
        if (prefersReducedMotion()) return;

        button.addEventListener('click', function(e) {
            const rect = button.getBoundingClientRect();
            const ripple = document.createElement('span');
            
            ripple.className = 'ripple';
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            
            button.appendChild(ripple);
            
            ripple.addEventListener('animationend', () => {
                ripple.remove();
            });
        });
    }

    /**
     * Aplica efecto tilt a tarjetas
     * @param {HTMLElement} card - La tarjeta a la que aplicar el efecto
     */
    function addTiltEffect(card) {
        if (prefersReducedMotion()) return;

        const height = card.clientHeight;
        const width = card.clientWidth;

        function handleMove(e) {
            const xVal = e.offsetX;
            const yVal = e.offsetY;
            
            const yRotation = 20 * ((xVal - width / 2) / width);
            const xRotation = -20 * ((yVal - height / 2) / height);
            
            const transform = `perspective(500px) scale(1.02) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
            
            card.style.transform = transform;
        }

        function handleOut() {
            card.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
        }

        card.addEventListener('mousemove', handleMove);
        card.addEventListener('mouseout', handleOut);
    }

    /**
     * Aplica lazy loading a imágenes
     */
    function setupLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        } else {
            // Fallback para navegadores que no soportan lazy loading nativo
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lozad.js/1.16.0/lozad.min.js';
            script.onload = function() {
                const observer = lozad();
                observer.observe();
            };
            document.body.appendChild(script);
        }
    }

    /**
     * Configura el toggle de tema claro/oscuro
     */
    function setupThemeToggle() {
        const toggle = document.querySelector('.theme-toggle');
        if (!toggle) return;

        function setTheme(isDark) {
            document.documentElement.classList.toggle('theme--dark', isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }

        // Verificar preferencia guardada o del sistema
        const prefersDark = localStorage.getItem('theme') === 'dark' || 
                           window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        setTheme(prefersDark);

        toggle.addEventListener('click', () => {
            const isDark = document.documentElement.classList.contains('theme--dark');
            setTheme(!isDark);
        });
    }

    /**
     * Inicialización de efectos UI
     */
    function init() {
        // Aplicar efectos a botones
        document.querySelectorAll('.btn').forEach(addRippleEffect);

        // Aplicar efectos a tarjetas
        document.querySelectorAll('.card').forEach(addTiltEffect);

        // Configurar lazy loading
        setupLazyLoading();

        // Configurar toggle de tema
        setupThemeToggle();
    }

    // Exportar utilidades para uso en otros módulos
    window.NuviaDev = window.NuviaDev || {};
    window.NuviaDev.ui = {
        prefersReducedMotion,
        trapFocus
    };

    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();