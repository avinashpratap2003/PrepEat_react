import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {    
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

export default ScrollToTop;
