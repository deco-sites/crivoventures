import { useEffect } from "preact/hooks";

function useTextElementOpacity() {
  const initializeElements = () => {
    const elements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, div > p, span, a:not(:has(figure)) , a > figure , img , :is(p, details[open]) , hr , .cookie",
    );
    for (const element of elements) {
      if (element instanceof HTMLElement) {
        element.classList.add("opacity-0");
      }
    }
  };

  const checkVisibility = () => {
    const elements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, div > p, span, a:not(:has(figure)) , a > figure , img , :is(p, details[open]) , hr , .cookie",
    );
    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      const isElementVisible = rect.top >= 0 &&
        rect.bottom <= window.innerHeight;

      if (element instanceof HTMLElement) {
        if (isElementVisible) {
          element.style.transition = "opacity 0.9s 0.261818s ease";
          element.classList.add("opacity-100");
        }
      }
    }
  };

  useEffect(() => {
    initializeElements();
    setTimeout(() => {
      checkVisibility();
      addEventListener("scroll", checkVisibility);
    }, 1000);
    return () => {
      removeEventListener("scroll", checkVisibility);
    };
  }, []);
}

export default useTextElementOpacity;
