import logo from "/images/logo.svg";

export function Footer() {

  return (
    <footer className="lg:text-auto flex flex-col items-center justify-start gap-16 rounded-tr-[6rem] bg-[#25252d] px-20 py-16 text-center text-white lg:flex-row lg:items-start lg:gap-[18%] lg:px-36 lg:text-left">
      <img src={logo} alt="" />
      <div>
        <b>Product</b>
        <ul className="mt-5 space-y-1">
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
      </div>
      <div>
        <b>Company</b>
        <ul className="mt-5 space-y-1">
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <b>Connect</b>
        <ul className="mt-5 space-y-1">
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
}
