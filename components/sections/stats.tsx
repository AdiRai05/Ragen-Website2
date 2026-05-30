"use client";

const stats = [
  {
    value: "8+",
    label: "Technology Domains",
  },
  {
    value: "100%",
    label: "Custom Built Solutions",
  },
  {
    value: "24/7",
    label: "Project Support",
  },
  {
    value: "End-to-End",
    label: "Delivery Ownership",
  },
];

export default function Stats() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container-width">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-6xl font-semibold tracking-tight">
                {stat.value}
              </h3>

              <p className="mt-4 text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}