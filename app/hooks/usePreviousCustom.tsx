import { useRef, useEffect } from 'react';

const usePrevious = (value) => {
  const previousValueRef = useRef();

  useEffect(() => {
    // Update the previous value after the component has rendered
    previousValueRef.current = value;
  }, [value]);

  // Return the previous value
  return previousValueRef.current;
};

export default usePrevious;
