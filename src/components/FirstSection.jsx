import editorMobile from "/images/illustration-editor-mobile.svg";
import editorDesktop from "/images/illustration-editor-desktop.svg";

export function FirstSection() {
  return (
    <section className="overflow-x-hidden py-20 lg:mb-48 lg:mt-24">
      <h2 className="mb-20 text-center text-3xl font-semibold text-[#1f3f5b]">
        Designed for the future
      </h2>
      <div className="flex w-full flex-col-reverse items-center justify-center gap-10 overflow-x-clip p-3 text-center lg:flex-row lg:justify-between lg:pl-16 lg:text-left xl:pl-32">
        <div className="text-[#1f3f5b] lg:w-[50%] xl:w-[60%]">
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
        <img className="w-full lg:hidden" src={editorMobile} />
        <img
          className="-right-[12%] hidden w-auto lg:absolute lg:inline-block lg:h-full lg:scale-[1.0] xl:scale-[1.2]"
          alt=""
          src={editorDesktop}
        />
      </div>
    </section>
  );
}
