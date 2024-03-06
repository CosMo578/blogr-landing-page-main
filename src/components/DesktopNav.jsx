export default function DesktopNav({ arrow }) {
  return (
    <nav
      className='lg:ml-6 lg:flex lg:items-center lg:gap-8 hover:[&_button]:cursor-pointer'
    >
      <div className="dropbtn inline-block">
        <p className="cursor-pointer hover:underline">
          Product{" "}
          <img
            className='ml-1 inline-block rotate-180 transition-transform'
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
  );
}
