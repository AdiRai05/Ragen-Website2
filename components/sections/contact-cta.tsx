export default function ContactCTA() {
  return (
    <section className="py-16 lg:py-32 bg-zinc-50">
      <div className="container-width text-center"><h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-tight lg:text-7xl">
          Let&apos;s build the next generation of your business.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-600">
          From enterprise software and AI systems to cloud
          infrastructure and automation, Ragen helps organizations
          transform ambitious ideas into scalable technology.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Contact Us
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>

          <a
            href="mailto:ragen@ragen.org"
            className="rounded-full border border-zinc-300 px-8 py-4 font-medium transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
          >
            ragen@ragen.org
          </a>
        </div>
      </div>
    </section>
  );
}
