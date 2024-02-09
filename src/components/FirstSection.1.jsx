export function FirstSection() {
  return (
    <section className="overflow-x-hidden py-20 lg:mb-48 lg:mt-24">
      <h2 className="mb-20 text-center text-3xl font-semibold text-[#1f3f5b]">
        Designed for the future
      </h2>
      <div className="flex w-full flex-col-reverse items-center justify-center gap-10 p-3 text-center lg:flex-row lg:justify-between lg:pl-36 lg:text-left">
        <div className="text-[#1f3f5b] lg:w-[60%]">
          <div>
            <h3 className="mx-auto mb-4 w-2/3 text-2xl font-semibold lg:mx-0 lg:mb-6 lg:w-full">
              Introducing an extensible editor
            </h3>
            <p className="mx-auto mb-8 w-[73%] lg:mx-0">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>

            <h3 className="mx-auto mb-4 w-2/3 text-2xl font-semibold text-[#1f3f5b] lg:mx-0 lg:w-full">
              Robust content management
            </h3>
            <p className="mx-auto mb-8 w-[73%] lg:mx-0">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
        <picture>
          source
          <img
            className="-right-[12%] w-auto overflow-x-hidden lg:absolute lg:h-full lg:scale-[1.2]"
            alt=""
            // src={"./images/illustration-editor-mobile.svg"}
            src={"./images/illustration-editor-desktop.svg"}
          />
        </picture>
      </div>
    </section>
  );
}
