// nav.js: sticky header glass, pills, mobile menu
console.log('🚀 nav.js iniciando...');

// Esperar a que el DOM esté listo
function initNav() {
  // Obtener elementos del DOM
  const hamburger = document.getElementById('headerBurger');
  const mobileMenu = document.getElementById('headerMobileMenu');
  const header = document.querySelector('.header');

  console.log('Elementos encontrados:', { hamburger, mobileMenu, header });

  let menuOpen = false;

  if (hamburger && mobileMenu) {
    console.log('✅ Inicializando menú hamburguesa');
    
    // Click en hamburguesa
    hamburger.addEventListener('click', function(e) {
      console.log('🍔 Hamburguesa clickeada, menuOpen es:', menuOpen);
      e.preventDefault();
      e.stopPropagation();
      
      menuOpen = !menuOpen;
      
      if (menuOpen) {
        console.log('📂 Abriendo menú');
        mobileMenu.classList.add('show');
        hamburger.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
      } else {
        console.log('📁 Cerrando menú');
        mobileMenu.classList.remove('show');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Click en links del menú para cerrar
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        console.log('Link clickeado');
        menuOpen = false;
        mobileMenu.classList.remove('show');
        hamburger.classList.remove('active');
      });
    });
    
    // Click fuera del menú para cerrar
    document.addEventListener('click', function(e) {
      if (menuOpen && !hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        console.log('Click fuera, cerrando');
        menuOpen = false;
        mobileMenu.classList.remove('show');
        hamburger.classList.remove('active');
      }
    });
    
    // ESC para cerrar
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menuOpen) {
        console.log('ESC presionado');
        menuOpen = false;
        mobileMenu.classList.remove('show');
        hamburger.classList.remove('active');
      }
    });
    
  } else {
    console.error('❌ No se encontraron elementos del menú');
  }

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (header) {
      if (y > 48) header.classList.add('nav--compact');
      else header.classList.remove('nav--compact');
    }
    lastScroll = y;
  });

  // Pills active
  const chips = document.querySelectorAll('.chip');
  if (chips.length > 0) {
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });
  }

  console.log('✅ nav.js completamente cargado');
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNav);
} else {
  initNav();
}



