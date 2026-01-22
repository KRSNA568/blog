import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Simple analytics hook for tracking page views
 * In production, integrate with Google Analytics, Mixpanel, or similar
 */
export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Log page view to console (replace with actual analytics service)
    console.log('[Analytics] Page view:', {
      path: location.pathname,
      search: location.search,
      timestamp: new Date().toISOString(),
    });

    // Example: Google Analytics tracking
    // if (typeof window.gtag !== 'undefined') {
    //   window.gtag('event', 'page_view', {
    //     page_path: location.pathname + location.search,
    //   });
    // }
  }, [location]);
}

/**
 * Hook for tracking custom events
 * Usage: trackEvent('blog_created', { title: 'My Blog' })
 */
export function useEventTracking() {
  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    console.log('[Analytics] Event:', eventName, properties);
    
    // Example: Google Analytics event tracking
    // if (typeof window.gtag !== 'undefined') {
    //   window.gtag('event', eventName, properties);
    // }
  };

  return { trackEvent };
}
