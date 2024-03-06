import { ListItem } from "../components/ListItem";
import { useState } from "react";

export default function MobileNav({ isOpen, arrowMobile }) {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <nav
      className={`absolute left-8 right-10 top-24 flex flex-col items-center rounded-lg bg-white p-8 text-[#1f3f5b] ${
        isOpen === false ? "hidden" : "inline-block"
      }`}
    >
      <div className="my-2 w-full text-center">
        <p
          className="cursor-pointer font-semibold"
          onClick={() => {
            setIsOpen1((prevState) => !prevState);
          }}
        >
          Product{" "}
          <img
            className={`ml-1 inline-block transition-transform ${
              isOpen1 ? "rotate-180" : "rotate-0"
            }`}
            src={arrowMobile}
            alt=""
          />
        </p>
        {isOpen1 ? (
          <ListItem>
            {["Overview", "Pricing", "Marketplace", "Features", "Integrations"]}
          </ListItem>
        ) : (
          ""
        )}
      </div>
      <div className="my-2 w-full text-center">
        <p
          className="cursor-pointer font-semibold"
          onClick={() => {
            setIsOpen2((prevState) => !prevState);
          }}
        >
          Company{" "}
          <img
            className={`ml-1 inline-block rotate-180 transition-transform ${
              isOpen2 ? "rotate-180" : "rotate-0"
            }`}
            src={arrowMobile}
            alt=""
          />
        </p>
        {isOpen2 ? (
          <ListItem>
            {["About", "Team", "Blog", "Features", "Careers"]}
          </ListItem>
        ) : (
          ""
        )}
      </div>
      <div className="my-2 w-full text-center">
        <p
          className="w-full cursor-pointer font-semibold"
          onClick={() => {
            setIsOpen3((prevState) => !prevState);
          }}
        >
          Connect{" "}
          <img
            className={`ml-1 inline-block rotate-180 transition-transform ${
              isOpen3 ? "rotate-180" : "rotate-0"
            }`}
            src={arrowMobile}
            alt=""
          />
        </p>
        {isOpen3 ? (
          <ListItem>{["Contact", "Newsletter", "LinkedIn"]}</ListItem>
        ) : (
          ""
        )}
      </div>

      <div className="mt-6 flex w-full flex-col items-center border-t pt-6">
        <button className="mb-6 ml-0 font-bold">Login</button>
        <button className="#ff525d rounded-full bg-[#ff7a85] bg-gradient-to-r px-8 py-3 font-bold text-white">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
