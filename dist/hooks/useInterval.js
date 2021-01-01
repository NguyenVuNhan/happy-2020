import {useEffect, useRef} from "../../web_modules/react.js";
const useInterval = (callback, delay) => {
  const callbackRef = useRef(() => {
  });
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  useEffect(() => {
    if (delay === null)
      return;
    const id = setInterval(() => callbackRef.current(), delay);
    return () => {
      clearTimeout(id);
    };
  }, [delay]);
};
export default useInterval;
