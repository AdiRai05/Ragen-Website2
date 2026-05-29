export default function ContactCTA() {
  return (
    <section className="py-32">
      <div className="container-width">

        <div className="overflow-hidden rounded-[40px] bg-black px-10 py-24 text-center text-white">

          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Start a Project
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-tight lg:text-7xl">
            Let's build something exceptional.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
            Whether you're launching a platform, integrating AI,
            automating operations or modernizing infrastructure,
            we're ready to help.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <button className="rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105">
              Schedule a Discovery Call
            </button>

            <button className="rounded-full border border-zinc-700 px-8 py-4 text-white transition hover:bg-zinc-900">
              View Our Work
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}