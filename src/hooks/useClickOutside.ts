import { RefObject, useEffect } from "react";

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  func: () => void
) => {
  const listener = (e: Event) => {
    const elm = ref.current;
    if (!elm || elm.contains(e.target as Node)) {
      return;
    }
    func();
  };

  useEffect(() => {
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, func]);
};
