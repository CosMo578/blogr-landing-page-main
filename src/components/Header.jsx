import { useState } from "react";
import arrow from "/images/icon-arrow-light.svg";
import logo from "/images/logo.svg";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="absolute left-0 right-0 top-0 z-[2] flex h-[15vh] items-center justify-between px-8 py-10 text-white lg:justify-start lg:px-32 lg:py-6 ">
      <img className="w-20" src={logo} alt="" />

      <nav
        className={`dropdown lg:ml-6 lg:flex lg:items-center lg:gap-8 hover:[&_button]:cursor-pointer ${
          isOpen === false ? "hidden" : "inline-block"
        }`}
      >
        <div className="dropbtn inline-block">
          <p className="cursor-pointer hover:underline">
            Product{" "}
            <img
              className={`ml-1 inline-block rotate-180 transition-transform`}
              src={arrow}
              alt=""
            />
          </p>
          <div className="dropdown-content w-full p-4">
            <ul className=" absolute z-[999] -translate-x-6 space-y-2 rounded-md bg-white py-4 pl-6 pr-8 text-black [&_li]:cursor-pointer hover:[&_li]:font-semibold">
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </div>
        </div>
        <div className="dropbtn inline-block">
          <p className="cursor-pointer hover:underline">
            Company{" "}
            <img
              className={`ml-1 inline-block rotate-180 transition-transform`}
              src={arrow}
              alt=""
            />
          </p>
          <div className="dropdown-content w-full p-4">
            <ul className="absolute z-[999] -translate-x-6 space-y-2 rounded-md bg-white py-4 pl-6 pr-8 text-black [&_li]:cursor-pointer hover:[&_li]:font-semibold">
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Features</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div className="dropbtn inline-block">
          <p className="cursor-pointer hover:underline">
            Connect{" "}
            <img
              className={`ml-1 inline-block rotate-180 transition-transform`}
              src={arrow}
              alt=""
            />
          </p>
          <div className="dropdown-content w-full p-4">
            <ul className="absolute z-[999] -translate-x-6 space-y-2 rounded-md bg-white py-4 pl-6 pr-8 text-black [&_li]:cursor-pointer hover:[&_li]:font-semibold">
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="ml-auto hidden space-x-8 lg:inline-block">
        <button className="font-bold">Login</button>
        <button className="rounded-full bg-white px-8 py-3 font-bold text-[#ff525d] hover:bg-[#ff7a85] hover:text-white">
          Sign Up
        </button>
      </div>

      <button className="hover:cursor-pointer" onClick={toggleOpen}>
        <img
          className="w-full lg:hidden"
          src={isOpen ? "/images/icon-hamburger.svg" : "/images/icon-close.svg"}
          alt=""
        />
      </button>
    </header>
  );
}
