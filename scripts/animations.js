// animations.js - Enhanced animations and interactions for index page
console.log('🎨 animations.js cargando...');

function initAnimations() {
  // Intersection Observer para animaciones on-scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Animar cards, features, services al scroll
  const elementsToAnimate = document.querySelectorAll(
    '.feature-card, .service-card, .cta-card, .section-title'
  );

  elementsToAnimate.forEach((el) => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });

  // Enhanced hover effects for service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    
    card.addEventListener('mouseenter', function() {
      serviceCards.forEach(c => {
        if (c !== card) c.style.opacity = '0.7';
      });
    });

    card.addEventListener('mouseleave', function() {
      serviceCards.forEach(c => {
        c.style.opacity = '1';
      });
    });
  });

  // Button ripple effect
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (hero) {
        hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
      }
    }, { passive: true });
  }

  // Counter animation for numbers in text
  const counterElements = document.querySelectorAll('[data-counter]');
  counterElements.forEach(el => {
    const target = parseInt(el.getAttribute('data-counter'));
    const duration = 2000;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    observer.observe(el);
    const originalCallback = observer.callback;
    
    el.addEventListener('visible', () => {
      requestAnimationFrame(animate);
    });
  });

  console.log('✅ animations.js completamente cargado');
}

// CSS para animaciones
const animationStyles = `
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  .btn {
    position: relative;
    overflow: hidden;
  }
`;

// Inyectar estilos
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
