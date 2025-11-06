/**
 * nav.js
 * Gestiona la navegación y estado activo de los enlaces
 */

/* nav.js
 * Accessible navigation module. Export initNav() for the app entrypoint.
 */

function focusableWithin(container) {
    return container.querySelectorAll('a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])');
}

function trapFocus(container) {
    const focusable = Array.from(focusableWithin(container));
    if (!focusable.length) return () => {};
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function handleKey(e) {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
            if (document.activeElement === first) {
                last.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === last) {
                first.focus();
                e.preventDefault();
            }
        }
    }

    container.addEventListener('keydown', handleKey);
    return () => container.removeEventListener('keydown', handleKey);
}

function lockScroll(lock = true) {
    if (lock) document.documentElement.style.overflow = 'hidden';
    else document.documentElement.style.overflow = '';
}

function setActiveNavItem() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav__menu a').forEach(link => {
        try {
            const href = link.getAttribute('href') || '';
            const isActive = href !== '/' && currentPath.includes(href.replace(/\/$/, '')) || (href === '/' && currentPath === '/');
            link.classList.toggle('active', isActive);
            if (isActive) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
        } catch (e) { /* ignore */ }
    });
}

export function initNav() {
    setActiveNavItem();

    // smooth internal scrolling
    document.addEventListener('click', (e) => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
    });

    const toggle = document.querySelector('.nav__mobile-toggle') || document.querySelector('.nav__toggle');
    const menu = document.querySelector('.nav__menu');
    if (!toggle || !menu) return;

    let removeTrap = null;

    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        menu.classList.toggle('is-open');
        if (!expanded) {
            removeTrap = trapFocus(menu);
            lockScroll(true);
            const first = menu.querySelector('a,button'); if (first) first.focus();
        } else {
            removeTrap && removeTrap();
            lockScroll(false);
            toggle.focus();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('is-open')) toggle.click();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900 && menu.classList.contains('is-open')) {
            menu.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
            removeTrap && removeTrap();
            lockScroll(false);
        }
    });

    window.addEventListener('popstate', setActiveNavItem);
}