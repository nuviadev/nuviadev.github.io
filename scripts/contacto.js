// ============================================
// PÁGINA DE CONTACTO - INTERACTIVIDAD
// ============================================

console.log('contacto.js loaded');

function initializeContactPage() {
  initBudgetSlider();
  initFaqAccordion();
  initFormValidation();
  initScrollReveal();
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', initializeContactPage);

// Backup for late loads
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  setTimeout(initializeContactPage, 100);
}

// ============================================
// BUDGET SLIDER
// ============================================
function initBudgetSlider() {
  const slider = document.getElementById('presupuesto');
  const budgetValue = document.getElementById('budget-value');

  if (!slider || !budgetValue) {
    console.warn('Slider no encontrado');
    return;
  }

  function formatNumber(num) {
    return Math.round(num).toLocaleString('es-ES');
  }

  function updateBudget() {
    const value = parseInt(slider.value);
    budgetValue.textContent = formatNumber(value);
    console.log('Budget updated:', value);
  }

  // Actualizar mientras se mueve
  slider.addEventListener('input', (e) => {
    updateBudget();
    // Efecto visual
    slider.style.filter = 'brightness(1.1)';
  });

  // Cuando termina de mover
  slider.addEventListener('change', () => {
    slider.style.filter = 'brightness(1)';
    slider.style.boxShadow = `0 0 20px rgba(250, 204, 21, 0.5)`;
    setTimeout(() => {
      slider.style.boxShadow = `none`;
    }, 400);
  });

  // Inicializar valor
  updateBudget();
}

// ============================================
// FAQ ACCORDION
// ============================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle this one
      item.classList.toggle('active');

      // Animate toggle icon
      const toggle = question.querySelector('.faq-toggle');
      if (toggle) {
        toggle.style.animation = 'none';
        setTimeout(() => {
          toggle.style.animation = 'spin 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        }, 10);
      }
    });
  });

  // Add spin animation to style
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(45deg); }
    }
  `;
  document.head.appendChild(style);
}

// ============================================
// FORM VALIDATION & SUBMISSION
// ============================================
function initFormValidation() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const inputs = form.querySelectorAll('input, textarea, select');
  const submitBtn = form.querySelector('.btn-primary');
  const formMessage = form.querySelector('.form-message');

  // Add focus/blur animations
  inputs.forEach((input) => {
    input.addEventListener('focus', () => {
      input.parentElement.style.transform = 'scale(1.01)';
    });

    input.addEventListener('blur', () => {
      input.parentElement.style.transform = 'scale(1)';
    });
  });

  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate
    if (!validateForm(form)) {
      showMessage(formMessage, 'Por favor, completa todos los campos requeridos.', 'error');
      return;
    }

    // Collect data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Show loading state
    submitBtn.style.opacity = '0.6';
    submitBtn.style.pointerEvents = 'none';
    submitBtn.innerHTML = '<span class="btn-text">Enviando...</span><span class="btn-arrow">⏳</span>';

    // Simulate sending (in production, you'd send to a backend)
    setTimeout(() => {
      showMessage(formMessage, '¡Gracias por tu mensaje! Te responderemos en las próximas 24 horas.', 'success');

      // Reset form
      form.reset();

      // Reset button
      submitBtn.style.opacity = '1';
      submitBtn.style.pointerEvents = 'auto';
      submitBtn.innerHTML = '<span class="btn-text">Enviar consulta</span><span class="btn-arrow">→</span>';

      // Clear message after 5 seconds
      setTimeout(() => {
        formMessage.classList.remove('success', 'error');
        formMessage.textContent = '';
      }, 5000);
    }, 1500);
  });
}

function validateForm(form) {
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      // Visual feedback
      input.style.borderBottomColor = '#ef4444';
      setTimeout(() => {
        input.style.borderBottomColor = '';
      }, 2000);
    }
  });

  return isValid;
}

function showMessage(element, message, type) {
  if (!element) return;

  element.textContent = message;
  element.className = `form-message ${type}`;
  element.style.animation = 'slideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';

  // Add animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  if (!document.querySelector('style[data-contacto-animations]')) {
    style.setAttribute('data-contacto-animations', 'true');
    document.head.appendChild(style);
  }
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.hero-badge, .stat-item, .method-card, .faq-item, .floating-box'
  );

  if (!window.IntersectionObserver) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((el) => observer.observe(el));
}
