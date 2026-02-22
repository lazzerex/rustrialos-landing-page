/**
 * Scroll Animation Utility
 * Triggers animations when elements scroll into view using Intersection Observer
 */

export function initScrollAnimations() {
  // Check if we're in the browser
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Optionally unobserve after animation triggers (one-time animation)
          // observer.unobserve(entry.target);
        } else {
          // Remove class if you want animations to repeat when scrolling back
          // entry.target.classList.remove('in-view');
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters viewport
    }
  );

  // Observe all elements with scroll animation classes
  const animatedElements = document.querySelectorAll(
    '.animate-on-scroll, .scroll-fade-in, .scroll-fade-in-up, .scroll-slide-in-left, .scroll-slide-in-right, .scroll-scale-in'
  );

  animatedElements.forEach((el) => observer.observe(el));

  // Return cleanup function
  return () => {
    animatedElements.forEach((el) => observer.unobserve(el));
  };
}
