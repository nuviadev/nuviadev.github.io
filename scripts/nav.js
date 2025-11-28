// nav.js: Enhanced navigation with glassmorphism, mobile menu, and smooth scrolling
console.log('🚀 nav.js iniciando...');

function initNav() {
  const hamburger = document.getElementById('headerBurger');
  const mobileMenu = document.getElementById('headerMobileMenu');
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-menu-link');

  console.log('Elementos encontrados:', { hamburger, mobileMenu, header });

  let menuOpen = false;

  // Enhanced mobile menu toggle
  if (hamburger && mobileMenu) {
    console.log('✅ Inicializando menú hamburguesa mejorado');
    
    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      menuOpen = !menuOpen;
      
      if (menuOpen) {
        mobileMenu.classList.add('active', 'show');
        hamburger.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        
        // Animar líneas del hamburguesa
        const lines = hamburger.querySelectorAll('.burger-line');
        lines[0].style.transform = 'translateY(15px) rotate(45deg)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'translateY(-15px) rotate(-45deg)';
      } else {
        mobileMenu.classList.remove('active');
        setTimeout(() => mobileMenu.classList.remove('show'), 300);
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        
        // Reset líneas
        const lines = hamburger.querySelectorAll('.burger-line');
        lines[0].style.transform = '';
        lines[1].style.opacity = '';
        lines[2].style.transform = '';
      }
    });
    
    // Close menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (menuOpen) {
          menuOpen = false;
          mobileMenu.classList.remove('active');
          setTimeout(() => mobileMenu.classList.remove('show'), 300);
          hamburger.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
          
          const lines = hamburger.querySelectorAll('.burger-line');
          lines[0].style.transform = '';
          lines[1].style.opacity = '';
          lines[2].style.transform = '';
        }
      });
    });
    
    // Close menu on outside click
    document.addEventListener('click', function(e) {
      if (menuOpen && !hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        menuOpen = false;
        mobileMenu.classList.remove('active');
        setTimeout(() => mobileMenu.classList.remove('show'), 300);
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        
        const lines = hamburger.querySelectorAll('.burger-line');
        lines[0].style.transform = '';
        lines[1].style.opacity = '';
        lines[2].style.transform = '';
      }
    });
    
    // Close menu on ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menuOpen) {
        menuOpen = false;
        mobileMenu.classList.remove('active');
        setTimeout(() => mobileMenu.classList.remove('show'), 300);
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        
        const lines = hamburger.querySelectorAll('.burger-line');
        lines[0].style.transform = '';
        lines[1].style.opacity = '';
        lines[2].style.transform = '';
      }
    });
  }

  // Enhanced scroll effect
  let lastScroll = 0;
  const scrollThreshold = 50;
  
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    
    if (header) {
      if (y > scrollThreshold) {
        header.classList.add('nav--compact');
      } else {
        header.classList.remove('nav--compact');
      }
    }
    
    lastScroll = y;
  }, { passive: true });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Enhanced pill/chip functionality
  const chips = document.querySelectorAll('.chip');
  if (chips.length > 0) {
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });
  }

  // Add active state to current navigation item
  navLinks.forEach(link => {
    if (link.getAttribute('aria-current') === 'page') {
      link.classList.add('active');
    }
  });

  console.log('✅ nav.js completamente cargado');
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNav);
} else {
  initNav();
}



