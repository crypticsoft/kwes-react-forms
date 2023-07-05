import { useRef, useEffect, useState } from 'react';

/**
 * Use element on screen checks to see when it's intersecting in the DOM
 * then loads the application within the container based on the attributes.
 * 
 * Example usage:
 * 
    const [ containerRef, isVisible ] = useElementOnScreen({
      root: null,
      rootMargin: "0px",
      threshold:1.0
    })
 * @param {object} options 
 * @returns 
 */
const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentElement = containerRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

export default useElementOnScreen;
