/**
 * NUVIADEV - PREMIUM DIGITAL AGENCY
 * Core JavaScript Engine v3.0
 * Pure Vanilla JS - No Dependencies
 */

// === 1. INTERNATIONALIZATION DATABASE ===
const i18nDB = {
    cat: {
        // Navigation
        nav_services: "Serveis",
        nav_work: "Projectes",
        nav_about: "Agència",
        nav_contact: "Contacte",
        home: "Inici",
        services: "Serveis",
        work: "Projectes",
        about: "Agència",
        contact: "Contacte",
        
        // Hero
        hero_label: "Agència Digital Barcelona",
        hero_1: "Premium",
        hero_2: "Digital",
        hero_3: "Engineering",
        hero_desc: "Creem experiències digitals que redefineixen el límit entre l'art i la tecnologia. Especialistes en desenvolupament web premium i estratègia digital.",
        cta_start: "Començar Projecte",
        cta_work: "Veure Treballs",
        scroll: "Scroll",
        
        // Services
        services_title: "La nostra",
        services_desc: "Oferim solucions digitals d'alt rendiment que combinen disseny excepcional amb enginyeria de primer nivell.",
        service_1_title: "Desenvolupament Web",
        service_1_desc: "Aplicacions web d'alt rendiment amb React, Next.js i tecnologies cutting-edge. Escalables, ràpides i optimitzades per a SEO.",
        service_2_title: "Experiències 3D",
        service_2_desc: "Creació d'experiències immersives amb WebGL, Three.js i Shaders customitzats. Renders en temps real optimitzats per a web.",
        service_3_title: "Design Systems",
        service_3_desc: "Sistemes de disseny atòmics que escalen des d'MVP fins a aplicacions Enterprise. Documentació completa i components reutilitzables.",
        service_4_title: "E-Commerce Premium",
        service_4_desc: "Botigues online d'alt rendiment amb Shopify Plus, WooCommerce o solucions custom. Optimitzades per a conversió i experiència d'usuari.",
        service_5_title: "Estratègia Digital",
        service_5_desc: "Consultoria estratègica per a la transformació digital del teu negoci. SEO, Analytics, Performance Marketing i Growth Hacking.",
        service_6_title: "Brand Identity",
        service_6_desc: "Construcció de marca des de zero o rebranding. Logo, identitat visual, brand guidelines i assets digitals.",
        
        // Work
        work_title: "Projectes",
        view_all: "Veure Tots els Projectes",
        
        // Testimonials
        testimonials_title: "Què diuen els",
        
        // About
        about_title: "Enginyeria digital",
        about_text: "Som un estudi digital de Barcelona especialitzat en crear experiències digitals excepcionals. Des del 2010, hem ajudat a més de 50 empreses globals a transformar les seves idees en productes digitals d'èxit.",
        process_1: "Discovery & Strategy",
        process_2: "Design & Prototype",
        process_3: "Development & QA",
        process_4: "Launch & Growth",
        
        // CTA
        cta_title: "Tens un projecte en ment?",
        cta_text: "Parlem de com podem fer realitat la teva visió digital. Contacta'ns per una consulta gratuïta.",
        cta_contact: "Contacta'ns Ara"
    },
    
    es: {
        // Navigation
        nav_services: "Servicios",
        nav_work: "Proyectos",
        nav_about: "Agencia",
        nav_contact: "Contacto",
        home: "Inicio",
        services: "Servicios",
        work: "Proyectos",
        about: "Agencia",
        contact: "Contacto",
        
        // Hero
        hero_label: "Agencia Digital Barcelona",
        hero_1: "Ingeniería",
        hero_2: "Digital",
        hero_3: "Premium",
        hero_desc: "Creamos experiencias digitales que redefinen el límite entre el arte y la tecnología. Especialistas en desarrollo web premium y estrategia digital.",
        cta_start: "Empezar Proyecto",
        cta_work: "Ver Trabajos",
        scroll: "Scroll",
        
        // Services
        services_title: "Nuestra",
        services_desc: "Ofrecemos soluciones digitales de alto rendimiento que combinan diseño excepcional con ingeniería de primer nivel.",
        service_1_title: "Desarrollo Web",
        service_1_desc: "Aplicaciones web de alto rendimiento con React, Next.js y tecnologías de vanguardia. Escalables, rápidas y optimizadas para SEO.",
        service_2_title: "Experiencias 3D",
        service_2_desc: "Creación de experiencias inmersivas con WebGL, Three.js y Shaders personalizados. Renders en tiempo real optimizados para web.",
        service_3_title: "Design Systems",
        service_3_desc: "Sistemas de diseño atómicos que escalan desde MVP hasta aplicaciones Enterprise. Documentación completa y componentes reutilizables.",
        service_4_title: "E-Commerce Premium",
        service_4_desc: "Tiendas online de alto rendimiento con Shopify Plus, WooCommerce o soluciones custom. Optimizadas para conversión y experiencia de usuario.",
        service_5_title: "Estrategia Digital",
        service_5_desc: "Consultoría estratégica para la transformación digital de tu negocio. SEO, Analytics, Performance Marketing y Growth Hacking.",
        service_6_title: "Brand Identity",
        service_6_desc: "Construcción de marca desde cero o rebranding. Logo, identidad visual, brand guidelines y assets digitales.",
        
        // Work
        work_title: "Proyectos",
        view_all: "Ver Todos los Proyectos",
        
        // Testimonials
        testimonials_title: "Qué dicen",
        
        // About
        about_title: "Ingeniería digital",
        about_text: "Somos un estudio digital de Barcelona especializado en crear experiencias digitales excepcionales. Desde 2010, hemos ayudado a más de 50 empresas globales a transformar sus ideas en productos digitales de éxito.",
        process_1: "Discovery & Strategy",
        process_2: "Design & Prototype",
        process_3: "Development & QA",
        process_4: "Launch & Growth",
        
        // CTA
        cta_title: "¿Tienes un proyecto en mente?",
        cta_text: "Hablemos de cómo podemos hacer realidad tu visión digital. Contáctanos para una consulta gratuita.",
        cta_contact: "Contáctanos Ahora"
    },
    
    en: {
        // Navigation
        nav_services: "Services",
        nav_work: "Work",
        nav_about: "Agency",
        nav_contact: "Contact",
        home: "Home",
        services: "Services",
        work: "Work",
        about: "Agency",
        contact: "Contact",
        
        // Hero
        hero_label: "Digital Agency Barcelona",
        hero_1: "Premium",
        hero_2: "Digital",
        hero_3: "Engineering",
        hero_desc: "We create digital experiences that redefine the boundary between art and technology. Specialists in premium web development and digital strategy.",
        cta_start: "Start Project",
        cta_work: "View Work",
        scroll: "Scroll",
        
        // Services
        services_title: "Our",
        services_desc: "We offer high-performance digital solutions that combine exceptional design with world-class engineering.",
        service_1_title: "Web Development",
        service_1_desc: "High-performance web applications with React, Next.js and cutting-edge technologies. Scalable, fast and SEO optimized.",
        service_2_title: "3D Experiences",
        service_2_desc: "Creating immersive experiences with WebGL, Three.js and custom Shaders. Real-time renders optimized for web.",
        service_3_title: "Design Systems",
        service_3_desc: "Atomic design systems that scale from MVP to Enterprise applications. Complete documentation and reusable components.",
        service_4_title: "Premium E-Commerce",
        service_4_desc: "High-performance online stores with Shopify Plus, WooCommerce or custom solutions. Optimized for conversion and user experience.",
        service_5_title: "Digital Strategy",
        service_5_desc: "Strategic consulting for your business digital transformation. SEO, Analytics, Performance Marketing and Growth Hacking.",
        service_6_title: "Brand Identity",
        service_6_desc: "Building brands from scratch or rebranding. Logo, visual identity, brand guidelines and digital assets.",
        
        // Work
        work_title: "Projects",
        view_all: "View All Projects",
        
        // Testimonials
        testimonials_title: "What our",
        
        // About
        about_title: "Digital engineering",
        about_text: "We are a Barcelona-based digital studio specialized in creating exceptional digital experiences. Since 2010, we have helped over 50 global companies transform their ideas into successful digital products.",
        process_1: "Discovery & Strategy",
        process_2: "Design & Prototype",
        process_3: "Development & QA",
        process_4: "Launch & Growth",
        
        // CTA
        cta_title: "Have a project in mind?",
        cta_text: "Let's talk about how we can bring your digital vision to life. Contact us for a free consultation.",
        cta_contact: "Contact Us Now"
    }
};

// === 2. MAIN APPLICATION CLASS ===
class NuviaApp {
    constructor() {
        this.state = {
            lang: localStorage.getItem('nuvia_lang') || 'cat',
            isMenuOpen: false,
            scrollY: 0,
            targetScrollY: 0,
            isDesktop: window.innerWidth >= 1024
        };
        
        this.dom = {
            body: document.body,
            scrollWrapper: document.querySelector('.smooth-wrapper'),
            navbar: document.querySelector('.navbar'),
            cursor: document.getElementById('cursor'),
            cursorDot: document.querySelector('.cursor-dot'),
            cursorCircle: document.querySelector('.cursor-circle'),
            preloader: document.getElementById('preloader'),
            menuBtn: document.querySelector('.menu-btn'),
            fullscreenMenu: document.querySelector('.fullscreen-menu')
        };
        
        this.init();
    }
    
    async init() {
        // Initialize all components
        await this.preloader();
        this.setupI18n();
        this.setupNavigation();
        this.setupCursor();
        this.setupSmoothScroll();
        this.setupScrollAnimations();
        this.setupMagneticButtons();
        this.setupServiceCards();
        this.setupImageParallax();
        this.bindEvents();
        
        // Animate hero
        this.animateHero();
    }
    
    // === PRELOADER ===
    preloader() {
        return new Promise(resolve => {
            const counter = this.dom.preloader.querySelector('.counter');
            const progress = this.dom.preloader.querySelector('.loader-progress');
            let count = 0;
            
            const interval = setInterval(() => {
                count += Math.floor(Math.random() * 15) + 5;
                if (count > 100) count = 100;
                
                if (counter) counter.textContent = `${count}%`;
                if (progress) progress.style.width = `${count}%`;
                
                if (count === 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        this.dom.preloader.style.opacity = '0';
                        this.dom.preloader.style.visibility = 'hidden';
                        resolve();
                    }, 500);
                }
            }, 40);
        });
    }
    
    // === INTERNATIONALIZATION ===
    setupI18n() {
        this.applyLanguage(this.state.lang);
        
        // Language switchers
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.applyLanguage(lang);
                this.closeMenu();
            });
        });
    }
    
    applyLanguage(lang) {
        this.state.lang = lang;
        localStorage.setItem('nuvia_lang', lang);
        
        const translations = i18nDB[lang];
        
        // Update all data-key elements
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.dataset.key;
            if (translations[key]) {
                el.textContent = translations[key];
            }
        });
        
        // Update language button states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Re-animate hero if on index page
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            this.updateHeroTitle(translations);
        }
    }
    
    updateHeroTitle(translations) {
        const heroTitle = document.querySelector('.hero-title');
        if (!heroTitle) return;
        
        heroTitle.innerHTML = `
            <span class="line"><span class="word">${translations.hero_1}</span></span>
            <span class="line"><span class="word">${translations.hero_2}</span></span>
            <span class="line"><span class="word">${translations.hero_3}</span></span>
        `;
        
        setTimeout(() => this.animateHero(), 100);
    }
    
    animateHero() {
        const words = document.querySelectorAll('.hero-title .word');
        words.forEach((word, i) => {
            setTimeout(() => {
                word.parentElement.classList.add('reveal-active');
            }, 150 * i);
        });
    }
    
    // === NAVIGATION ===
    setupNavigation() {
        // Menu toggle
        this.dom.menuBtn?.addEventListener('click', () => {
            this.toggleMenu();
        });
        
        // Close menu when clicking links
        document.querySelectorAll('.fs-link').forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });
        
        // Navbar scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            
            if (currentScroll > 100) {
                this.dom.navbar?.classList.add('scrolled');
            } else {
                this.dom.navbar?.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }
    
    toggleMenu() {
        this.state.isMenuOpen = !this.state.isMenuOpen;
        
        if (this.state.isMenuOpen) {
            this.openMenu();
        } else {
            this.closeMenu();
        }
    }
    
    openMenu() {
        this.dom.body.classList.add('menu-open');
        this.dom.fullscreenMenu?.classList.add('active');
        this.state.isMenuOpen = true;
    }
    
    closeMenu() {
        this.dom.body.classList.remove('menu-open');
        this.dom.fullscreenMenu?.classList.remove('active');
        this.state.isMenuOpen = false;
    }
    
    // === CUSTOM CURSOR ===
    setupCursor() {
        if (!this.dom.cursor || window.matchMedia("(hover: none)").matches) {
            return;
        }
        
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        
        // Update mouse position
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Instant dot movement
            if (this.dom.cursorDot) {
                this.dom.cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
            }
        });
        
        // Smooth circle follow
        const animateCursor = () => {
            const speed = 0.15;
            
            cursorX += (mouseX - cursorX) * speed;
            cursorY += (mouseY - cursorY) * speed;
            
            if (this.dom.cursorCircle) {
                this.dom.cursorCircle.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
            }
            
            requestAnimationFrame(animateCursor);
        };
        
        animateCursor();
        
        // Hover effects on more elements
        const hoverElements = document.querySelectorAll('a, button, .card, .service-card, .work-link, .project-link, input, textarea, .testimonial-card, .info-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.dom.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => this.dom.body.classList.remove('hovering'));
        });
    }
    
    // === SMOOTH SCROLL ===
    setupSmoothScroll() {
        if (!this.state.isDesktop || !this.dom.scrollWrapper) {
            // Disable smooth scroll on mobile
            if (this.dom.scrollWrapper) {
                this.dom.scrollWrapper.style.position = 'relative';
                this.dom.scrollWrapper.style.transform = 'none';
            }
            document.body.style.height = 'auto';
            return;
        }
        
        // Set body height for scroll
        const updateBodyHeight = () => {
            const height = this.dom.scrollWrapper.getBoundingClientRect().height;
            document.body.style.height = `${height}px`;
        };
        
        updateBodyHeight();
        window.addEventListener('resize', updateBodyHeight);
        
        // Smooth scroll loop
        const smoothScroll = () => {
            this.state.targetScrollY = window.scrollY;
            
            // Lerp (linear interpolation) for smooth effect
            this.state.scrollY += (this.state.targetScrollY - this.state.scrollY) * 0.08;
            
            // Apply transform with slight skew for "elastic" feel
            const diff = this.state.targetScrollY - this.state.scrollY;
            const skew = diff * 0.004;
            
            this.dom.scrollWrapper.style.transform = `translateY(-${this.state.scrollY}px) skewY(${skew}deg)`;
            
            requestAnimationFrame(smoothScroll);
        };
        
        smoothScroll();
    }
    
    // === SCROLL ANIMATIONS ===
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe all fade-up elements
        document.querySelectorAll('.fade-up').forEach(el => {
            observer.observe(el);
        });
    }
    
    // === MAGNETIC BUTTONS ===
    setupMagneticButtons() {
        const magneticButtons = document.querySelectorAll('.magnetic, .btn-primary, .btn-secondary');
        
        magneticButtons.forEach(btn => {
            let mouseX = 0;
            let mouseY = 0;
            let posX = 0;
            let posY = 0;
            
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                mouseX = e.clientX - rect.left - rect.width / 2;
                mouseY = e.clientY - rect.top - rect.height / 2;
            });
            
            btn.addEventListener('mouseenter', () => {
                const animate = () => {
                    posX += (mouseX - posX) * 0.2;
                    posY += (mouseY - posY) * 0.2;
                    
                    btn.style.transform = `translate(${posX * 0.4}px, ${posY * 0.4}px)`;
                    
                    if (Math.abs(mouseX - posX) > 0.5 || Math.abs(mouseY - posY) > 0.5) {
                        requestAnimationFrame(animate);
                    }
                };
                animate();
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });
    }
    
    // === SERVICE CARDS HOVER EFFECT ===
    setupServiceCards() {
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach(card => {
            const hoverBg = card.querySelector('.service-hover-bg');
            
            if (!hoverBg) return;
            
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                
                card.style.setProperty('--mouse-x', `${x}%`);
                card.style.setProperty('--mouse-y', `${y}%`);
            });
        });
    }
    
    // === IMAGE PARALLAX ===
    setupImageParallax() {
        const parallaxImages = document.querySelectorAll('.work-image img, .grid-item img');
        
        if (!this.state.isDesktop) return;
        
        window.addEventListener('scroll', () => {
            parallaxImages.forEach(img => {
                const rect = img.getBoundingClientRect();
                const scrolled = window.scrollY;
                const elementTop = rect.top + scrolled;
                const elementHeight = rect.height;
                const windowHeight = window.innerHeight;
                const distanceToCenter = (elementTop + elementHeight / 2) - (scrolled + windowHeight / 2);
                
                // Advanced parallax effect with dampening
                const move = (distanceToCenter * 0.08);
                const scale = 1 + (Math.abs(distanceToCenter) * 0.0001);
                
                img.style.transform = `translateY(${move}px) scale(${scale})`;
                img.style.filter = `brightness(${1 + Math.abs(move) * 0.001})`;
            });
        });
    }
    
    // === BIND EVENTS ===
    bindEvents() {
        // Contact form (if exists)
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(e.target);
            });
        }
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Window resize
        window.addEventListener('resize', () => {
            const wasDesktop = this.state.isDesktop;
            this.state.isDesktop = window.innerWidth >= 1024;
            
            // Reinitialize smooth scroll if desktop state changed
            if (wasDesktop !== this.state.isDesktop) {
                this.setupSmoothScroll();
            }
        });
    }
    
    handleFormSubmit(form) {
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Enviant...</span>';
        
        // Prepare email parameters
        const emailParams = {
            from_name: data.name || 'Guest',
            from_email: data.email || 'no-reply@example.com',
            to_email: 'hello@nuvia.dev',
            subject: `Nou projecte de ${data.name || 'Client'}`,
            company: data.company || 'No especificat',
            phone: data.phone || 'No proporcionat',
            service: data.service || 'No seleccionat',
            budget: data.budget || 'No especificat',
            message: data.message || 'Sense missatge'
        };
        
        // Send email using EmailJS
        // Note: Replace 'service_xxxxx' and 'template_xxxxx' with your actual EmailJS credentials
        // You can get these from your EmailJS dashboard
        emailjs.send(
            'service_xxxxxxxxxxxx',  // Replace with your Service ID from EmailJS dashboard
            'template_xxxxxxxxxxxx',  // Replace with your Template ID from EmailJS dashboard
            emailParams
        ).then(
            (response) => {
                console.log('Email sent successfully:', response);
                
                // Hide form and show success message
                form.style.display = 'none';
                const successDiv = form.closest('.contact-form-wrapper').querySelector('.form-success');
                if (successDiv) {
                    successDiv.style.display = 'block';
                }
                
                // Reset button state
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            },
            (error) => {
                console.error('Email send failed:', error);
                
                // Show error message
                alert('Error en enviar la missatge. Intenta de nou més tard.');
                
                // Reset button state
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        );
    }
}

// === 3. INITIALIZE APP ===
window.addEventListener('DOMContentLoaded', () => {
    new NuviaApp();
});

// === 4. UTILITY FUNCTIONS ===

// Lerp (Linear Interpolation)
function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

// Clamp number between min and max
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

// Map number from one range to another
function map(value, in_min, in_max, out_min, out_max) {
    return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// === 5. EXPORTS FOR MODULAR USE ===
window.NuviaUtils = {
    lerp,
    clamp,
    map,
    debounce
};
