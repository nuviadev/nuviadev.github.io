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
    // Referencias a elementos
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    
    // Menú móvil
    if (mobileMenuToggle && navLinks) {
        const toggleMenu = () => {
            const isExpanded = navLinks.classList.toggle('is-active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
            mobileMenuToggle.classList.toggle('is-active');
        };

        mobileMenuToggle.addEventListener('click', toggleMenu);
        
        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.main-nav') && navLinks.classList.contains('is-active')) {
                toggleMenu();
            }
        });
    }

    // Modo oscuro
    if (darkModeToggle) {
        // Verificar preferencia guardada
        const prefersDark = localStorage.getItem('darkMode') === 'true' || 
                           window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const setDarkMode = (isDark) => {
            document.documentElement.classList.toggle('dark-mode', isDark);
            localStorage.setItem('darkMode', isDark);
            darkModeToggle.setAttribute('aria-label', 
                isDark ? 'Activar modo claro' : 'Activar modo oscuro');
        };

        // Aplicar preferencia inicial
        setDarkMode(prefersDark);

        // Manejar cambios
        darkModeToggle.addEventListener('click', () => {
            const isDark = !document.documentElement.classList.contains('dark-mode');
            setDarkMode(isDark);
        });
    }

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