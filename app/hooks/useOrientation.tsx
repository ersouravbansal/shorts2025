import { useState, useEffect } from 'react';

function useOrientation() {
  const [orientation, setOrientation] = useState(getOrientation());

  function getOrientation() {
    if (window.innerWidth === window.innerHeight) {
        return 'portrait';
      }
    return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
  }

  useEffect(() => {
    function handleOrientationChange() {
      setOrientation(getOrientation());
    }
    window.addEventListener('resize', handleOrientationChange);
    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return orientation;
}

export default useOrientation;
