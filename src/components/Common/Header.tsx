import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import dynamic from "next/dynamic";

const Portal = dynamic(() => import("@/components/Portal/indxe"), {
  ssr: false,
});

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full py-4 bg-slate-50 h-[60px]">
      <div
        className="flex justify-end px-3 md:px-10 right-0 duration-200"
        style={{
          position: isOpen ? "fixed" : "relative",
          zIndex: 1000,
        }}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={24}
          distance="sm"
          color="#34454E"
          label="Show menu list"
          rounded
        />
      </div>
      <Portal id="menu-portal">
        <div
          className="fixed w-full h-full bg-slate-600 bg-opacity-30 duration-200"
          onClick={() => setOpen(false)}
          style={{
            visibility: isOpen ? "visible" : "hidden",
            opacity: isOpen ? 1 : 0,
            zIndex: 1000,
          }}
        >
          <div
            className="fixed right-0 h-full w-[32rem] bg-white duration-200 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              transform: isOpen ? `translateX(0)` : `translate(100%)`,
            }}
          ></div>
        </div>
      </Portal>
    </div>
  );
};

export default Header;
