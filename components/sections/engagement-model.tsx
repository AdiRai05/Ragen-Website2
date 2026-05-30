export default function EngagementModel() {
  const models = [
    {
      title: "Project Based",
      description:
        "End-to-end delivery for defined projects with clear scope, timeline and outcomes.",
    },
    {
      title: "Dedicated Team",
      description:
        "A dedicated engineering team working as an extension of your organization.",
    },
    {
      title: "Technology Consulting",
      description:
        "Architecture reviews, technology strategy and digital transformation guidance.",
    },
  ];

  return (
    <section className="py-32">
      <div className="container-width">

        <div className="max-w-3xl"><h2 className="mt-4 text-5xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Flexible ways to work together.
          </h2>
        </div>

        <div className="mt-12 lg:mt-20 grid gap-8 lg:grid-cols-3">
          {models.map((model) => (
            <div
              key={model.title}
              className="rounded-[32px] border border-zinc-200 p-8"
            >
              <h3 className="text-2xl font-semibold">
                {model.title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-600">
                {model.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}