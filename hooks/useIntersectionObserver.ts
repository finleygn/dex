import { RefObject, useEffect } from 'react';

const useIntersectionObserver = ({
  target,
  onIntersect,
  enabled = true,
}: {
  target: RefObject<HTMLElement>;
  onIntersect: () => void;
  enabled: boolean;
}): void => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const el = target && target.current;

    if (!el) {
      return;
    }

    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => entry.isIntersecting && onIntersect())
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [target.current, enabled]);
};

export default useIntersectionObserver;
