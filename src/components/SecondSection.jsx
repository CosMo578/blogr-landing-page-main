import illustrationPhone from "/images/illustration-phones.svg";
export function SecondSection() {
  return (
    <section className="section-2 mb-16 mt-[36%] flex flex-col items-center justify-center rounded-bl-[6rem] rounded-tr-[6rem] bg-[#2c2d3f] px-2 pb-20 lg:mb-36 lg:mt-0 lg:h-[58vh] lg:flex-row lg:px-32 ">
      <img
        className="-mt-[48%] w-full md:-mt-[36%] md:w-auto lg:mt-28"
        src={illustrationPhone}
        alt=""
      />

      <div className="text-center lg:ml-3 lg:text-left">
        <h2 className="mb-8 text-4xl font-semibold text-white lg:mb-6 lg:text-3xl">
          State of the Art Infrastructure
        </h2>
        <p className="mx-auto w-[85%] text-[#c8c8cb] lg:mx-0 lg:w-full">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </section>
  );
}
