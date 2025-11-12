// ============================================
// SERVICIOS PAGE - MODERN EFFECTS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded triggered');
  
  // Initialize all effects
  initCardEffects();
  initParallaxEffect();
  
  // Delay counter animation to ensure DOM is fully ready
  setTimeout(() => {
    console.log('Calling initCounterAnimation');
    initCounterAnimation();
  }, 500);
  
  initIntersectionObserver();
  initMouseTrackingEffect();
  initCardHoverGradient();
  initScrollReveal();
  initGlowEffect();
  initScrollAppearEffects();
});

// Also run on window load as backup
window.addEventListener('load', () => {
  console.log('Window load event');
  // Give another chance to init counters if not done yet
  setTimeout(() => {
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
      const firstCounter = counters[0];
      if (firstCounter.textContent === '0') {
        console.log('Counters not animated yet, forcing initialization');
        initCounterAnimation();
      }
    }
  }, 100);
});

// ============================================
// CARD HOVER EFFECTS
// ============================================
function initCardEffects() {
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach((card, index) => {
    // Add stagger animation delay
    card.style.setProperty('--stagger', index);

    card.addEventListener('mouseenter', function() {
      // Create ripple effect
      createRippleEffect(this);
      
      // Add glow effect
      this.classList.add('card-active');
      
      // Animate checkmarks
      const checks = this.querySelectorAll('.check');
      checks.forEach((check, idx) => {
        check.style.animation = `none`;
        setTimeout(() => {
          check.style.animation = `checkBounce 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${idx * 0.05}s`;
        }, 10);
      });
    });

    card.addEventListener('mouseleave', function() {
      this.classList.remove('card-active');
    });
  });
}

// Create ripple effect on card
function createRippleEffect(element) {
  const ripple = document.createElement('span');
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');

  // Remove previous ripples
  const existingRipples = element.querySelectorAll('.ripple');
  existingRipples.forEach(r => r.remove());

  element.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
}

// ============================================
// PARALLAX SCROLL EFFECT
// ============================================
function initParallaxEffect() {
  const floatingCards = document.querySelectorAll('.floating-card');

  if (floatingCards.length === 0) return;

  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    floatingCards.forEach((card) => {
      const speed = card.dataset.speed || 5;
      const x = (clientX - centerX) / 100 * speed;
      const y = (clientY - centerY) / 100 * speed;

      card.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}

// ============================================
// COUNTER ANIMATION
// ============================================
function initCounterAnimation() {
  console.log('=== initCounterAnimation START ===');
  const counters = document.querySelectorAll('.counter');
  console.log('Found counters:', counters.length);

  if (counters.length === 0) {
    console.error('No counters found!');
    return;
  }

  counters.forEach((counter, index) => {
    const dataTarget = counter.getAttribute('data-target');
    console.log(`Counter ${index}: data-target="${dataTarget}"`);
    
    if (!dataTarget) {
      console.error(`Counter ${index} has no data-target`);
      return;
    }
    
    const finalValue = parseInt(dataTarget);
    console.log(`Counter ${index}: finalValue=${finalValue}`);
    
    if (isNaN(finalValue)) {
      console.error(`Counter ${index}: NaN value`);
      return;
    }

    // Animate starting 500ms after page load, plus stagger
    setTimeout(() => {
      console.log(`Starting animation for counter ${index}: 0 → ${finalValue}`);
      
      let currentValue = 0;
      const increment = finalValue / 60; // 60 steps
      const stepTime = 2000 / 60; // 2 seconds total
      
      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(interval);
          console.log(`Counter ${index} complete!`);
          
          // Trigger effects
          counter.style.animation = 'counterCompletePulse 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
          createCounterSpark(counter);
          
          const card = counter.closest('.floating-card');
          if (card) {
            card.style.boxShadow = '0 0 40px rgba(250, 204, 21, 0.5), 0 8px 20px rgba(250, 204, 21, 0.3)';
            setTimeout(() => {
              card.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
            }, 800);
          }
        }
        counter.textContent = Math.floor(currentValue);
      }, stepTime);
    }, 500 + index * 300);
  });
  
  console.log('=== initCounterAnimation END ===');
}

// ============================================
// INTERSECTION OBSERVER FOR FADE-IN
// ============================================
function initIntersectionObserver() {
  const cards = document.querySelectorAll('.service-card');
  const heroSection = document.querySelector('.servicios-hero');
  const ctaSection = document.querySelector('.servicios-cta');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add reveal animation
          if (entry.target.classList.contains('service-card')) {
            entry.target.style.animation = `revealCard 0.6s ease-out forwards`;
          }
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }
  );

  cards.forEach((card, index) => {
    card.style.setProperty('--reveal-delay', `${index * 0.1}s`);
    observer.observe(card);
  });

  if (heroSection) observer.observe(heroSection);
  if (ctaSection) observer.observe(ctaSection);
}

// ============================================
// MOUSE TRACKING GRADIENT EFFECT
// ============================================
function initMouseTrackingEffect() {
  const cards = document.querySelectorAll('.service-card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
    });
  });
}

// ============================================
// CARD HOVER GRADIENT EFFECT
// ============================================
function initCardHoverGradient() {
  const cards = document.querySelectorAll('.service-card');

  cards.forEach((card) => {
    card.addEventListener('mouseenter', function() {
      // Add shine effect
      const shine = document.createElement('div');
      shine.classList.add('shine-effect');
      this.appendChild(shine);

      setTimeout(() => shine.remove(), 800);
    });
  });
}

// ============================================
// SCROLL REVEAL EFFECT
// ============================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.section-header, .service-card, .servicios-cta');

  const revealOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((el) => {
    revealOnScroll.observe(el);
  });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '') return;

    const targetElement = document.querySelector(href);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// ============================================
// BUTTON CLICK EFFECTS
// ============================================
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', function(e) {
    // Create particle effect
    createParticleEffect(this, e);
  });
});

function createParticleEffect(button, event) {
  const rect = button.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  for (let i = 0; i < 6; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    // Calculate angle for particle movement
    const angle = (i / 6) * Math.PI * 2;
    const distance = 80;
    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;
    
    particle.style.setProperty('--offset-x', offsetX + 'px');
    particle.style.setProperty('--offset-y', offsetY + 'px');

    button.appendChild(particle);

    setTimeout(() => particle.remove(), 600);
  }
}

// ============================================
// TEXT ANIMATION ON SCROLL
// ============================================
function animateTextOnScroll() {
  const heroTitle = document.querySelector('.hero-title');
  if (!heroTitle) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('text-animate');
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(heroTitle);
}

// Call text animation on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', animateTextOnScroll);
} else {
  animateTextOnScroll();
}

// ============================================
// DYNAMIC COLOR SHIFT ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.servicios-hero');
  if (!hero) return;

  const scrollPercent = window.scrollY / window.innerHeight;
  const hue = (scrollPercent * 30) % 360;

  hero.style.setProperty('--scroll-hue', hue);
});

// ============================================
// SPOTLIGHT EFFECT ON SCROLL
// ============================================
const spotlight = document.createElement('div');
spotlight.className = 'scroll-spotlight';
document.body.appendChild(spotlight);

window.addEventListener('scroll', () => {
  const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  const yPos = window.scrollY + window.innerHeight / 2;
  
  spotlight.style.top = `${yPos}px`;
  spotlight.style.opacity = Math.min(0.3, scrollPercent * 0.5);
});

// ============================================
// DYNAMIC GLOW EFFECT ON CARDS
// ============================================
function initGlowEffect() {
  const cards = document.querySelectorAll('.service-card');

  cards.forEach((card) => {
    const glowBg = document.createElement('div');
    glowBg.classList.add('glow-background');
    card.appendChild(glowBg);

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glowBg.style.setProperty('--glow-x', `${x}px`);
      glowBg.style.setProperty('--glow-y', `${y}px`);
      glowBg.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
      glowBg.style.opacity = '0';
    });
  });
}

// ============================================
// SCROLL APPEAR EFFECTS
// ============================================
function initScrollAppearEffects() {
  const elements = document.querySelectorAll('.service-card, .section-header, .servicios-cta, .floating-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add scroll appear animation
        entry.target.classList.add('scroll-appear');
        
        // Add extra effects for service cards
        if (entry.target.classList.contains('service-card')) {
          entry.target.style.animation = `scrollAppear 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
          const delay = Array.from(elements).indexOf(entry.target) * 0.08;
          entry.target.style.animationDelay = `${delay}s`;
          
          // Add glow effect on appear
          entry.target.style.boxShadow = '0 0 30px rgba(250, 204, 21, 0.3)';
          setTimeout(() => {
            entry.target.style.boxShadow = '0 24px 48px rgba(250, 204, 21, 0.15)';
          }, 700);
        }
        
        // Add effect for section header
        if (entry.target.classList.contains('section-header')) {
          entry.target.style.animation = `fadeInUp 0.8s ease-out forwards`;
        }
        
        // Add effect for CTA
        if (entry.target.classList.contains('servicios-cta')) {
          entry.target.style.animation = `scalePopIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
          entry.target.style.boxShadow = '0 0 50px rgba(250, 204, 21, 0.4)';
          setTimeout(() => {
            entry.target.style.boxShadow = '0 24px 48px rgba(250, 204, 21, 0.15)';
          }, 800);
        }
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });
  
  elements.forEach(el => observer.observe(el));
}

// ============================================
// CREATE COUNTER SPARK EFFECT
// ============================================
function createCounterSpark(element) {
  const rect = element.getBoundingClientRect();
  
  for (let i = 0; i < 8; i++) {
    const spark = document.createElement('div');
    spark.classList.add('counter-spark');
    spark.style.left = rect.left + rect.width / 2 + 'px';
    spark.style.top = rect.top + 'px';
    
    // Random angle and distance
    const angle = (i / 8) * Math.PI * 2;
    const distance = 50 + Math.random() * 30;
    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;
    
    spark.style.setProperty('--offset-x', offsetX + 'px');
    spark.style.setProperty('--offset-y', offsetY + 'px');
    
    document.body.appendChild(spark);
    
    setTimeout(() => spark.remove(), 800);
  }
}
window.addEventListener('scroll', () => {
  const serviceCards = document.querySelectorAll('.service-card.scroll-appear');
  const heroSection = document.querySelector('.servicios-hero');
  
  // Hero parallax effect
  if (heroSection) {
    const rect = heroSection.getBoundingClientRect();
    const scrollPercent = -rect.top / (window.innerHeight + rect.height);
    
    if (scrollPercent > -0.5 && scrollPercent < 1.5) {
      heroSection.style.transform = `translateY(${scrollPercent * 50}px)`;
      heroSection.style.opacity = Math.min(1, 1 - scrollPercent * 0.5);
    }
  }
  
  // Card 3D perspective effect
  serviceCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    
    if (scrollPercent > 0 && scrollPercent < 1) {
      const rotation = scrollPercent * 2;
      const scale = 0.95 + scrollPercent * 0.05;
      
      card.style.transform = `perspective(1000px) rotateX(${rotation}deg) scale(${scale})`;
      card.style.opacity = Math.min(1, scrollPercent + 0.5);
    }
  });
  
  // CTA section parallax
  const ctaSection = document.querySelector('.servicios-cta');
  if (ctaSection && ctaSection.classList.contains('scroll-appear')) {
    const rect = ctaSection.getBoundingClientRect();
    const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    
    if (scrollPercent > 0 && scrollPercent < 1) {
      const scale = 0.95 + scrollPercent * 0.1;
      ctaSection.style.transform = `scale(${scale})`;
    }
  }
});
