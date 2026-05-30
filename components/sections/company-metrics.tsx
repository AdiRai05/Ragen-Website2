export default function CompanyMetrics() {
  const metrics = [
    {
      value: "8+",
      label: "Technology Domains",
    },
    {
      value: "100%",
      label: "Custom Solutions",
    },
    {
      value: "24/7",
      label: "Project Support",
    },
    {
      value: "End-to-End",
      label: "Delivery Capability",
    },
  ];

  return (
    <section className="border-y border-zinc-200 bg-white">
      <div className="container-width py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <h3 className="text-4xl font-semibold">
                {metric.value}
              </h3>

              <p className="mt-2 text-zinc-600">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}