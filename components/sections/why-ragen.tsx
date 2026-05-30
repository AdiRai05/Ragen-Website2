"use client";

const reasons = [
  {
    number: "01",
    title: "Engineering First",
    description:
      "We focus on architecture, scalability and maintainability before writing code, ensuring long-term success rather than short-term fixes.",
  },
  {
    number: "02",
    title: "AI Native",
    description:
      "Artificial intelligence is built into our thinking from day one, helping businesses automate operations and unlock new capabilities.",
  },
  {
    number: "03",
    title: "Enterprise Standards",
    description:
      "Security, reliability, documentation and performance are treated as core requirements, not afterthoughts.",
  },
  {
    number: "04",
    title: "Business Driven",
    description:
      "Technology decisions are aligned with business goals, growth strategies and measurable outcomes.",
  },
  {
    number: "05",
    title: "Future Ready",
    description:
      "Our solutions are designed to evolve with your organization as requirements and markets change.",
  },
];

export default function WhyRagen() {
  return (
    <section className="py-32 bg-white">
      <div className="container-width">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Why Ragen
          </p>

          <h2 className="mt-4 text-5xl font-semibold tracking-tight">
            Built for long-term technology partnerships.
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            We combine engineering expertise, modern technologies
            and business understanding to help organizations
            build systems that scale.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="rounded-[32px] border border-zinc-200 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-xl"
            >
              <span className="text-sm font-medium text-zinc-400">
                {reason.number}
              </span>

              <h3 className="mt-4 text-3xl font-semibold">
                {reason.title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}