import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import logo from "/images/logo.svg";
import arrow from "/images/icon-arrow-light.svg";
import arrowMobile from "/images/icon-arrow-dark.svg";
import DesktopNav from "/src/components/DesktopNav";
import MobileNav from "/src/components/MobileNav";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();
  const breakpoint = 1024;

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="absolute left-0 right-0 top-0 z-[2] flex h-[15vh] items-center justify-between px-8 py-10 text-white lg:justify-start lg:px-16 xl:px-32 lg:py-6 ">
      <img className="w-20" src={logo} alt="" />

      <div>
        {width > breakpoint ? (
          <DesktopNav isOpen={isOpen} arrow={arrow} />
        ) : (
          <MobileNav isOpen={isOpen} arrowMobile={arrowMobile} />
        )}
      </div>

      <div className="ml-auto hidden space-x-8 lg:inline-block">
        <button className="font-bold">Login</button>
        <button className="rounded-full bg-white px-8 py-3 font-bold text-[#ff525d] hover:bg-[#ff7a85] hover:text-white">
          Sign Up
        </button>
      </div>

      <button className="hover:cursor-pointer" onClick={toggleOpen}>
        <img
          className="w-full lg:hidden"
          src={
            !isOpen ? "/images/icon-hamburger.svg" : "/images/icon-close.svg"
          }
          alt=""
        />
      </button>
    </header>
  );
}
