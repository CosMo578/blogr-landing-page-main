export function SecondSection() {
  return (
    <section className="section-2 mt-[36%] mb-16 flex flex-col items-center justify-center rounded-bl-[6rem] rounded-tr-[6rem] bg-[#2c2d3f] px-2 pb-20 lg:mt-0 lg:mb-36 lg:h-[58vh] lg:flex-row lg:px-36 ">
      <img className="lg:mt-28 -mt-[48%] md:-mt-[36%] w-full md:w-auto" src="./images/illustration-phones.svg" alt="" />

      <div className="text-center lg:ml-3 lg:text-left">
        <h2 className="mb-8 text-4xl lg:text-3xl font-semibold text-white lg:mb-6">
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
