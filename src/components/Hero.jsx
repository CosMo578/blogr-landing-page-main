export function Hero() {
  return (
    <main className="absolute left-0 right-0 top-0 z-[1] mt-[15vh] flex h-[80vh] flex-col items-center justify-center text-white">
      <h1 className="mx-auto mb-4 w-[75%] text-center text-4xl lg:mb-6 lg:text-5xl">
        A modern publishing platform
      </h1>
      <p className="mb-10 w-[60%] text-center font-thin lg:text-lg">
        Grow your audience and build your online brand
      </p>
      <div className="space-x-5 font-bold">
        <button className="rounded-full border bg-white px-4 py-2 text-[#ff525d] hover:border-[#ff7a85] hover:bg-[#ff7a85] hover:text-white">
          Start for Free
        </button>
        <button className="rounded-full border px-4 py-2 hover:bg-white hover:text-[#ff7a85]">
          Learn More
        </button>
      </div>
    </main>
  );
}
