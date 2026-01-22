import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top of page when route changes
 * Use this component at the top level of your app
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}
