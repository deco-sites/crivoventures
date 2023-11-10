import { useEffect } from "preact/hooks";

function useTextElementOpacity() {
  const initializeElements = () => {
    const elements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, a:not(:has(figure)) , a > figure , img ,  hr , .cookie , details > summary > p , details > div > p , div > p",
    );
    for (const element of elements) {
      if (element instanceof HTMLElement) {
        element.classList.add("opacity-0");
      }
    }
  };

  const checkVisibility = () => {
    const elements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, a:not(:has(figure)) , a > figure , img ,  hr , .cookie , details > summary > p , details > div > p , div > p",
    );

    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      const isElementVisible = rect.top >= 0 &&
        rect.bottom <= window.innerHeight;

      if (element instanceof HTMLElement) {
        if (isElementVisible && !element.matches("details > div > p")) {
          element.style.transition = "opacity 0.9s 0.261818s ease";
          element.classList.add("opacity-100");
        }
      }
    }
  };

  const handleDetailsToggle = (event: Event) => {
    const details = event.target as HTMLElement;

    if (details && details instanceof HTMLDetailsElement) {
      const paragraphs = details.querySelectorAll("div > p");

      paragraphs.forEach((p) => {
        if (p instanceof HTMLElement) {
          p.style.transition = "opacity 0.9s 0.261818s ease";
          if (details.open) {
            p.classList.add("opacity-100");
          } else {
            p.classList.remove("opacity-100");
          }
        }
      });

      details.removeEventListener("toggle", handleDetailsToggle);
    }
  };

  useEffect(() => {
    initializeElements();
    setTimeout(() => {
      checkVisibility();
      addEventListener("scroll", checkVisibility);
    }, 1000);

    const detailsElements = document.querySelectorAll("details");
    detailsElements.forEach((details) => {
      details.addEventListener("toggle", handleDetailsToggle);
    });

    return () => {
      removeEventListener("scroll", checkVisibility);
      detailsElements.forEach((details) => {
        details.removeEventListener("toggle", handleDetailsToggle);
      });
    };
  }, []);
}

export default useTextElementOpacity;
