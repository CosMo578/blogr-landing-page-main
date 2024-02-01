import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="sticky flex w-full items-center justify-between px-8 py-10 lg:justify-start lg:px-20 lg:py-6 ">
      <img className="w-20" src="./images/logo.svg" alt="" />

      <nav
        className={`lg:ml-6 lg:flex lg:items-center              lg:gap-8 ${
          isOpen === false ? "hidden" : "inline-block"
        }`}
      >
        <div className="inline-block">
          <p>
            Product{" "}
            <img
              className="inline-block"
              src="../images/icon-arrow-light.svg"
              alt=""
            />
          </p>
          <ul className="hidden">
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="inline-block">
          <p>
            {" "}
            Company{" "}
            <img
              className="inline-block"
              src="../images/icon-arrow-light.svg"
              alt=""
            />
          </p>
          <ul className="hidden">
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Features</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="inline-block">
          <p>
            {" "}
            Connect{" "}
            <img
              className="inline-block"
              src="../images/icon-arrow-light.svg"
              alt=""
            />
          </p>
          <ul className="hidden">
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </nav>

      <div className="ml-auto hidden space-x-8 lg:inline-block">
        <button className="cursor-pointer font-bold">Login</button>
        <button className="rounded-full bg-white px-8 py-3 font-bold text-[#ff525d]">
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
