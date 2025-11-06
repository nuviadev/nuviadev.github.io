/* header-footer.js - Main navigation and layout functionality
 * Handles:
 * 1. Header/footer injection
 * 2. Mobile menu with accessibility
 * 3. Active state detection
 * 4. Smooth scrolling
 */
(function () {
    'use strict';

    // Utility: Calculate relative path to root based on current location
    function getRelativeRoot() {
        const path = window.location.pathname;
        return path.includes('/html/') ? '../' : './';
    }

    // Build paths relative to document location
    const relativeRoot = getRelativeRoot();
    const headerPath = relativeRoot + 'partials/header-fragment.html';
    const footerPath = relativeRoot + 'partials/footer.html';

    // Load fragment content with fallbacks
    async function loadFragment(path) {
        try {
            const res = await fetch(path, { cache: 'no-store' });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return await res.text();
        } catch (err) {
            console.error(`Failed to load ${path}:`, err);
            return null;
        }
    }

    // Insert fragments into the page
    async function insertFragments() {
        // Load header
        const headerContent = await loadFragment(headerPath);
        if (headerContent) {
            const headerTarget = document.querySelector('header') || document.createElement('header');
            headerTarget.innerHTML = headerContent;
            if (!headerTarget.parentNode) {
                document.body.insertBefore(headerTarget, document.body.firstChild);
            }
        }

        // Load footer
        const footerContent = await loadFragment(footerPath);
        if (footerContent) {
            const footerTarget = document.querySelector('footer') || document.createElement('footer');
            footerTarget.innerHTML = footerContent;
            if (!footerTarget.parentNode) {
                document.body.appendChild(footerTarget);
            }
        }

        // Initialize behaviors once fragments are loaded
        setupMobileMenu();
        setActiveNavItem();
        setupSmoothScroll();
        updateCopyrightYear();
    }

    // Mobile menu functionality with accessibility
    function setupMobileMenu() {
        const toggle = document.querySelector('.nav__mobile-toggle');
        const menu = document.querySelector('.nav__menu');
        if (!toggle || !menu) return;

        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !isExpanded);
            menu.classList.toggle('is-open');

            // Trap focus in menu when open
            if (!isExpanded) {
                const firstFocusable = menu.querySelector('a, button');
                if (firstFocusable) firstFocusable.focus();
            }
        });

        // Close menu on escape key
        menu.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                toggle.setAttribute('aria-expanded', 'false');
                menu.classList.remove('is-open');
                toggle.focus();
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !toggle.contains(e.target)) {
                toggle.setAttribute('aria-expanded', 'false');
                menu.classList.remove('is-open');
            }
        });
    }

    // Highlight current page in navigation
    function setActiveNavItem() {
        const currentPath = window.location.pathname.replace(/index\.html$/, '');
        document.querySelectorAll('.nav__link').forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;
            
            const linkPath = href.replace(/index\.html$/, '');
            const isActive = currentPath.endsWith(linkPath);
            link.classList.toggle('active', isActive);
            if (isActive) link.setAttribute('aria-current', 'page');
            else link.removeAttribute('aria-current');
        });
    }

    // Add smooth scrolling to anchor links
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (!href || href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Update URL without scroll
                    history.pushState(null, '', href);
                }
            });
        });
    }

    // Update copyright year
    function updateCopyrightYear() {
        const yearSpan = document.querySelector('.js-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertFragments);
    } else {
        insertFragments();
    }
})();
        return null;
    }

    async function insertFragments() {
        // If page already has header/footer, don't overwrite
        const existingHeader = document.querySelector('header');
        const existingFooter = document.querySelector('footer');

        if (!existingHeader) {
            const headerHtml = await tryFetch(headerCandidates);
            if (headerHtml) document.body.insertAdjacentHTML('afterbegin', headerHtml);
        }

        if (!existingFooter) {
            const footerHtml = await tryFetch(footerCandidates);
            if (footerHtml) document.body.insertAdjacentHTML('beforeend', footerHtml);
        }
    }

    /* Small focus-trap for mobile menu */
    function setupFocusTrap(container) {
        const focusables = container.querySelectorAll(
            'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return () => {};

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        function handleKey(e) {
            if (e.key !== 'Tab') return;
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }

        container.addEventListener('keydown', handleKey);
        return () => container.removeEventListener('keydown', handleKey);
    }

    function wireHeaderInteractions() {
        const header = document.querySelector('.site-header');
        if (!header) return;

        const toggle = header.querySelector('.nav__mobile-toggle');
        const menu = header.querySelector('.nav__menu');

        let removeTrap = null;

        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                const expanded = toggle.getAttribute('aria-expanded') === 'true';
                toggle.setAttribute('aria-expanded', String(!expanded));
                menu.classList.toggle('nav__menu--active');

                if (!expanded) {
                    removeTrap = setupFocusTrap(menu);
                    // focus first link
                    const firstLink = menu.querySelector('a, button');
                    firstLink?.focus();
                } else {
                    if (typeof removeTrap === 'function') removeTrap();
                }
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!header.contains(e.target) && menu?.classList.contains('nav__menu--active')) {
                menu.classList.remove('nav__menu--active');
                toggle?.setAttribute('aria-expanded', 'false');
                if (typeof removeTrap === 'function') removeTrap();
            }
        });

        // Close mobile menu when a nav link is clicked, and handle same-page anchors
        header.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;

            // If menu is open on mobile, close it on link click
            if (menu?.classList.contains('nav__menu--active')) {
                menu.classList.remove('nav__menu--active');
                toggle?.setAttribute('aria-expanded', 'false');
                if (typeof removeTrap === 'function') removeTrap();
            }

            const href = link.getAttribute('href');
            if (!href) return;

            // Handle hash links (same-page scrolling) without reloading
            if (href.startsWith('#')) {
                e.preventDefault();
                const id = href.slice(1);
                const target = document.getElementById(id);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
                return;
            }

            try {
                const url = new URL(href, window.location.href);
                const samePath = url.pathname === window.location.pathname || (url.pathname === '/' && window.location.pathname === '/index.html');
                if (samePath && url.hash) {
                    // link points to a hash on the same page
                    e.preventDefault();
                    const id = url.hash.slice(1);
                    const target = document.getElementById(id);
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                }
            } catch (err) {
                // ignore malformed URLs
            }
        });

        // Highlight the active link based on current path
        const setActiveLink = () => {
            const links = header.querySelectorAll('.nav__link');
            const current = window.location.pathname.replace(/\/index.html$/, '/');
            links.forEach(a => {
                try {
                    const u = new URL(a.getAttribute('href'), window.location.origin);
                    const linkPath = u.pathname.replace(/\/index.html$/, '/');
                    if (linkPath === current) {
                        a.classList.add('is-active');
                        a.setAttribute('aria-current', 'page');
                    } else {
                        a.classList.remove('is-active');
                        a.removeAttribute('aria-current');
                    }
                } catch (e) {
                    // skip
                }
            });
        };

        setActiveLink();
        // also update on history navigation
        window.addEventListener('popstate', setActiveLink);

        // Scroll hide/show behavior
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const curr = window.pageYOffset;
            if (curr <= 0) {
                header.classList.remove('site-header--hidden');
                lastScroll = curr;
                return;
            }
            if (curr > lastScroll && curr > 120) {
                header.classList.add('site-header--hidden');
            } else {
                header.classList.remove('site-header--hidden');
            }
            lastScroll = curr;
        });
    }

    function wireFooter() {
        // update any .js-year or #year nodes
        const yearNodes = document.querySelectorAll('.js-year, #year');
        yearNodes.forEach(n => { n.textContent = String(new Date().getFullYear()); });
    }

    async function init() {
        await insertFragments();
        wireHeaderInteractions();
        wireFooter();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();