import { useTheme } from "next-themes";
import Link from "next/link";
import { Sun } from "@styled-icons/bootstrap/Sun";
import { MoonFill } from "@styled-icons/bootstrap/MoonFill";
import { useEffect, useState } from "react";
import Image from "next/image";
// import { useRouter } from "next/router";

const Header = () => {
  // const router = useRouter();
  // const [isActive, toggle] = useState(false);
  const [themIcon, setThemeIcon] = useState<JSX.Element | null>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setThemeIcon(
      theme === "light" ? <Sun size={15} /> : <MoonFill size={15} />
    );
  }, [theme]);

  return (
    <div className="w-full py-4 shadow dark:shadow-md bg-slate-50 dark:bg-slate-800">
      <div className="flex items-center px-8 md:px-10">
        <div className="text-slate-600 dark:text-slate-400">
          <Link href="/">
            <a className="flex items-center">
              <Image src="/Float.png" width={34} height={34} alt="" />
            </a>
          </Link>
        </div>
        {/* <div className="flex-1 flex justify-end">
          <div
            className={`w-10 h-10 cursor-pointer focus:outline-none toggle_container ${
              isActive ? `isActive` : ""
            }`}
            onClick={() => toggle(!isActive)}
          ></div>
        </div> */}
        <div className="flex flex-1 justify-end">
          <div
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="cursor-pointer max-w-[5rem] w-full"
          >
            {themIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
