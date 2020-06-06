import { useState, useEffect, useRef } from "react";

const useNearScreen = () => {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver === "undefined"
        ? import("intersection-observer")
        : window.IntersectionObserver
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });
  }, [element]);
  return [show, element];
};

export default useNearScreen;
