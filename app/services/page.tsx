export default function ServicesPage() {
  return (
    <main className="pt-40 pb-32">

      <div className="container-width">

        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          Services
        </p>

        <h1 className="mt-6 text-6xl font-semibold tracking-tight">
          What we do.
        </h1>

        <div className="mt-20 grid gap-8">

          <div className="rounded-3xl border border-zinc-200 p-10">
            <h2 className="text-3xl font-semibold">
              Software Engineering
            </h2>

            <p className="mt-4 text-zinc-600">
              Custom web platforms, SaaS products and enterprise systems.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-10">
            <h2 className="text-3xl font-semibold">
              AI Systems
            </h2>

            <p className="mt-4 text-zinc-600">
              AI integrations, copilots, automation and intelligent workflows.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-10">
            <h2 className="text-3xl font-semibold">
              Cloud Infrastructure
            </h2>

            <p className="mt-4 text-zinc-600">
              Secure, scalable and reliable infrastructure architecture.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}