export default function AboutPage() {
  return (
    <main className="pt-40 pb-32">

      <div className="container-width">

        <div className="max-w-4xl">

          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            About Ragen
          </p>

          <h1 className="mt-6 text-6xl font-semibold tracking-tight lg:text-7xl">
            Engineering systems that scale.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-600">
            Ragen is an engineering-first digital company focused on
            building software platforms, AI solutions, automation
            systems and cloud infrastructure for ambitious businesses.
          </p>

        </div>

      </div>

      <section className="mt-32">
        <div className="container-width grid gap-12 lg:grid-cols-2">

          <div>
            <h2 className="text-3xl font-semibold">
              Our Mission
            </h2>

            <p className="mt-6 leading-8 text-zinc-600">
              We help organizations leverage technology to move faster,
              operate smarter and build sustainable competitive
              advantages.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">
              Our Approach
            </h2>

            <p className="mt-6 leading-8 text-zinc-600">
              Every project begins with understanding business goals,
              designing scalable architecture and delivering systems
              that create measurable outcomes.
            </p>
          </div>

        </div>
      </section>

      <section className="mt-32">
        <div className="container-width">

          <div className="rounded-[40px] bg-black p-16 text-white">

            <h2 className="text-4xl font-semibold">
              What We Build
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              <div>• SaaS Platforms</div>
              <div>• Enterprise Software</div>
              <div>• AI Systems</div>
              <div>• Workflow Automation</div>
              <div>• Cloud Infrastructure</div>
              <div>• Internal Business Tools</div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}