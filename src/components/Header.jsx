import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [isActiveThree, setIsActiveThree] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="absolute left-0 right-0 top-0 z-[2] flex items-center justify-between px-8 py-10 text-white lg:justify-start lg:px-32 lg:py-6 ">
      <img className="w-20" src="./images/logo.svg" alt="" />

      <nav
        className={`lg:ml-6 lg:flex lg:items-center lg:gap-8 hover:[&_button]:cursor-pointer ${
          isOpen === false ? "hidden" : "inline-block"
        }`}
      >
        <div className="dropdown inline-block">
          <p
            onClick={() => setIsActive((prev) => !prev)}
            className="cursor-pointer hover:underline"
          >
            Product{" "}
            <img
              className={`inline-block transition-transform ${isActive ? "rotate-180" : "rotate-0"}`}
              src="../images/icon-arrow-light.svg"
              alt=""
            />
          </p>
          <ul
            className={`absolute z-[999] -translate-x-6 translate-y-4 space-y-2 rounded-md bg-white py-4 pl-6 pr-8 text-black [&_li]:cursor-pointer hover:[&_li]:font-semibold ${
              isActive === true ? "block" : "hidden"
            }`}
          >
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="dropdown inline-block">
          <p
            onClick={() => setIsActiveTwo((prev) => !prev)}
            className="cursor-pointer hover:underline"
          >
            Company{" "}
            <img
              className={`inline-block transition-transform ${isActiveTwo ? "rotate-180" : "rotate-0"}`}
              src="../images/icon-arrow-light.svg"
              alt=""
            />
          </p>
          <ul
            className={`absolute z-[999] -translate-x-6 translate-y-4 space-y-2 rounded-md bg-white py-4 pl-6 pr-8 text-black [&_li]:cursor-pointer hover:[&_li]:font-semibold ${
              isActiveTwo === true ? "block" : "hidden"
            }`}
          >
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Features</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="dropdown inline-block">
          <p
            onClick={() => setIsActiveThree((prev) => !prev)}
            className="cursor-pointer hover:underline"
          >
            Connect{" "}
            <img
              className={`inline-block transition-transform ${isActiveThree ? "rotate-180" : "rotate-0"}`}
              src="../images/icon-arrow-light.svg"
              alt=""
            />
          </p>
          <ul
            className={`absolute z-[999] -translate-x-6 translate-y-4 space-y-2 rounded-md bg-white py-4 pl-6 pr-8 text-black [&_li]:cursor-pointer hover:[&_li]:font-semibold ${
              isActiveThree === true ? "block" : "hidden"
            }`}
          >
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ul>
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
          src="../images/icon-hamburger.svg"
          alt=""
        />
      </button>
    </header>
  );
}
