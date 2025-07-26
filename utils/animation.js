export const initAnimations = () => {
  if (typeof window !== 'undefined') {
    // Import ScrollReveal dynamically to avoid server-side rendering issues
    import('scrollreveal').then((module) => {
      const ScrollReveal = module.default;
      const sr = ScrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay: 100,
        easing: 'ease-out',
        reset: false
      });

      sr.reveal('.animate-on-scroll', {
        interval: 100
      });
    });

    // Add event listeners to track elements in view
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }
};

// Function to add class when element is in viewport
export const isInViewport = (element) => {
  if (typeof window !== 'undefined' && element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  return false;
};

// Animations for framer-motion
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
