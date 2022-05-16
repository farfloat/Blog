import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, id }: { children: ReactNode; id: string }) => {
  const [mounted, setMounted] = useState(false);
  const elm = document.querySelector(`#${id}`);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted && elm ? createPortal(children, elm) : null;
};

export default Portal;
