import { useEffect } from 'react';
import { useNavigationType, useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === 'PUSH') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}
