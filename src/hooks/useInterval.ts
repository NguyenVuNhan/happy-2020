import { useEffect, useRef } from 'react';

const useInterval = (callback: Function, delay: number) => {
  const callbackRef = useRef<Function>(() => {});

  // Save original callback
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => callbackRef.current(), delay);
    return () => {
      clearTimeout(id);
    };
  }, [delay]);
};

export default useInterval;
