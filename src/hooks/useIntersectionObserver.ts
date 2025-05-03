import { useEffect, useState, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useIntersectionObserver = <T extends Element>({
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
}: UseIntersectionObserverProps = {}): [RefObject<T | null>, boolean] => {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsVisible(isIntersecting);

        // If once is true and element is visible, unobserve it
        if (once && isIntersecting && elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      },
      { threshold, rootMargin }
    );

    const element = elementRef.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, once]);

  return [elementRef, isVisible];
};