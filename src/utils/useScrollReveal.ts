import { useEffect } from 'react';

/**
 * Initializes a single, high-performance IntersectionObserver instance
 * that monitors all elements with `.reveal-init` and `.reveal-scale-init`.
 * Once an element enters the viewport (15%-25%), the `.revealed` class is applied.
 * Once revealed, the observer unobserves the element to conserve CPU/memory.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-init, .reveal-scale-init').forEach((el) => {
        el.classList.add('revealed');
      });
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // triggers when roughly 10-15% enters viewport
      threshold: 0.08,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-init:not(.revealed), .reveal-scale-init:not(.revealed)');
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Re-check in case dynamic content loaded
    const timeout = setTimeout(observeElements, 500);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);
}
