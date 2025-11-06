/* header-footer.js
 * Load header/footer fragments and wire menu behaviors.
 * The script will try a few relative paths when fetching partials so it works
 * from pages in the root or in `/html/` subfolder.
 */
(function () {
    'use strict';

    // Candidate paths (tries in order)
    const headerCandidates = [
        '/partials/header-fragment.html',
        'partials/header-fragment.html',
        '../partials/header-fragment.html'
    ];

    const footerCandidates = [
        '/partials/footer.html',
        'partials/footer.html',
        '../partials/footer.html'
    ];

    async function tryFetch(candidates) {
        for (const p of candidates) {
            try {
                const res = await fetch(p, { cache: 'no-store' });
                if (res.ok) return await res.text();
            } catch (e) {
                // ignore and continue to next
            }
        }
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