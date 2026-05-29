
export default function ServicesPage() {
  const services = [
    {
      title: "Software Engineering",
      description:
        "Custom platforms, SaaS products and enterprise applications built for scale.",
    },
    {
      title: "AI Systems",
      description:
        "AI copilots, intelligent automation and custom machine learning solutions.",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud architecture, DevOps and infrastructure optimization.",
    },
    {
      title: "Automation",
      description:
        "Business workflow automation and operational efficiency systems.",
    },
  ];

  return (
    <main className="pt-40 pb-32">
      <div className="container-width">

        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Services
          </p>

          <h1 className="mt-6 text-6xl font-semibold tracking-tight lg:text-7xl">
            Engineering solutions for modern businesses.
          </h1>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[32px] border border-zinc-200 p-10"
            >
              <h2 className="text-3xl font-semibold">
                {service.title}
              </h2>

              <p className="mt-4 leading-8 text-zinc-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

