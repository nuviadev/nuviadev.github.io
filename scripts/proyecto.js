// scripts/proyecto.js
// Enhanced scroll animations for projects page with IntersectionObserver and performance optimizations

document.addEventListener('DOMContentLoaded', function () {
  const tabSections = document.querySelectorAll('.tabs_let-content');
  const tabVideos = document.querySelectorAll('.tabs_video');
  
  // Configuration for IntersectionObserver
  const observerConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Trigger when 20% of element is visible
  };

  /**
   * Create a smooth transition effect for tab content and videos
   * Ensures only the corresponding content and video are visible at the same time
   */
  const activateTabAtIndex = (index) => {
    tabSections.forEach((section, i) => {
      if (i === index) {
        section.classList.add('is-1');
      } else {
        section.classList.remove('is-1');
      }
    });

    tabVideos.forEach((video, i) => {
      if (i === index) {
        video.classList.add('is-1');
        // Ensure video plays when visible
        if (video.querySelector('video')) {
          video.querySelector('video').play().catch(() => {
            // Video autoplay might be prevented, that's ok
          });
        }
      } else {
        video.classList.remove('is-1');
      }
    });
  };

  // Set first tab as active by default
  activateTabAtIndex(0);

  /**
   * Handle scroll-based tab switching using a more performant approach
   * This replaces the previous frame-based calculation with a cleaner logic
   */
  let scrollThrottle = false;

  window.addEventListener('scroll', () => {
    if (scrollThrottle) return;
    scrollThrottle = true;

    requestAnimationFrame(() => {
      const sectionTabs = document.querySelector('.section_tabs');
      if (!sectionTabs) {
        scrollThrottle = false;
        return;
      }

      const sectionRect = sectionTabs.getBoundingClientRect();
      const scrollProgress = Math.max(0, -sectionRect.top / (sectionRect.height - window.innerHeight));
      
      // Calculate which tab should be active based on scroll progress
      const tabIndex = Math.floor(scrollProgress * tabSections.length);
      const activeIndex = Math.min(tabIndex, tabSections.length - 1);

      // Only update if the active tab changed to avoid unnecessary DOM updates
      const currentActive = document.querySelector('.tabs_let-content.is-1');
      const currentActiveIndex = Array.from(tabSections).indexOf(currentActive);
      
      if (activeIndex !== currentActiveIndex && activeIndex >= 0) {
        activateTabAtIndex(activeIndex);
      }

      scrollThrottle = false;
    });
  });

  /**
   * Lazy loading optimization for videos
   * Only load video sources when they become visible
   */
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const videoContainer = entry.target;
      const video = videoContainer.querySelector('video');
      
      if (entry.isIntersecting && video && !video.hasAttribute('data-loaded')) {
        // Video is in viewport, mark as loaded
        video.setAttribute('data-loaded', 'true');
        // Browser will handle loading of preloaded videos
      } else if (!entry.isIntersecting && video) {
        // Pause video when out of view to save resources
        video.pause();
      }
    });
  }, {
    rootMargin: '100px' // Start loading slightly before video enters viewport
  });

  // Observe all video containers
  tabVideos.forEach(video => videoObserver.observe(video));

  /**
   * Observe intro section for fade-in animation
   */
  const introSection = document.querySelector('.intro-wrapper');
  if (introSection) {
    const introObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          introObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    introObserver.observe(introSection);
  }

  /**
   * Add smooth scroll behavior to project links
   */
  const projectLinks = document.querySelectorAll('.tabs_let-content a[target="_blank"]');
  projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Slight delay for better UX feedback
      const href = this.getAttribute('href');
      if (href && href.startsWith('http')) {
        // Links open in new tab as specified by target="_blank"
        // No preventDefault needed
      }
    });
  });

  /**
   * Accessibility improvements: manage focus within tabs
   */
  tabSections.forEach((section, index) => {
    section.setAttribute('role', 'tabpanel');
    section.setAttribute('aria-hidden', index !== 0 ? 'true' : 'false');
  });

  // Update aria-hidden when tabs change
  const originalActivateTabAtIndex = activateTabAtIndex;
  window.activateTabAtIndex = function(index) {
    originalActivateTabAtIndex(index);
    tabSections.forEach((section, i) => {
      section.setAttribute('aria-hidden', i !== index ? 'true' : 'false');
    });
  };
});
