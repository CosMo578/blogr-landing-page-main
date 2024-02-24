import illustrationMobile from '/images/illustration-laptop-mobile.svg';
import illustrationDesktop from '/images/illustration-laptop-desktop.svg';

export function ThirdSection() {
  return (
    <section className="mb-10 flex flex-col items-center justify-center px-3 py-12 text-center lg:mb-20 lg:mr-36 lg:mt-24 lg:flex-row lg:text-left">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={illustrationDesktop}
        />
        <img
          className="mb-20 scale-[1.4] lg:h-[60vh] lg:w-auto lg:-translate-x-[19%] lg:scale-[1.6]"
          src={illustrationMobile}
          alt=""
        />
      </picture>

      <div className="text-[#1f3f5b] lg:ml-auto lg:w-[42%]">
        <h3 className="mb-4 text-2xl font-bold ">Free, open, simple</h3>
        <p className="">
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>

        <h3 className="mb-4 mt-12 text-2xl font-bold">Powerful tooling</h3>
        <p className="">
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </section>
  );
}
