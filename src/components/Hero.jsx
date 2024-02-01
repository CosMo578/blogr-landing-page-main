export function Hero() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center">
      <h1 className="mx-auto mb-4 w-[75%] text-center text-4xl lg:mb-6 lg:text-5xl">
        A modern publishing platform
      </h1>
      <p className="mb-10 w-[60%] text-center lg:text-lg">
        Grow your audience and build your online brand
      </p>
      <div className="space-x-5 font-bold">
        <button className="rounded-full border bg-white px-4 py-2 text-[#ff525d] hover:bg-white">
          Start for Free
        </button>
        <button className="rounded-full border px-4 py-2 hover:bg-white">
          Learn More
        </button>
      </div>
    </main>
  );
}
