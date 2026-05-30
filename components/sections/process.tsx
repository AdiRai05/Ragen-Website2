"use client";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business, goals, challenges and technical landscape to define clear requirements and success criteria.",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "System design, technology selection and detailed architecture planning with scalability and maintainability as core priorities.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Agile engineering with regular demos, feedback loops and continuous integration — you see progress every sprint.",
  },
  {
    number: "04",
    title: "Testing & QA",
    description:
      "Comprehensive testing including automated tests, performance validation and security assessment.",
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "Production deployment with monitoring, documentation, knowledge transfer and go-live support.",
  },
  {
    number: "06",
    title: "Support & Evolution",
    description:
      "Ongoing maintenance, performance optimization and feature evolution as your business grows and requirements change.",
  },
];

export default function Process() {
  return (
    <section className="py-16 lg:py-32 bg-zinc-50">
      <div className="container-width">
        <div className="max-w-3xl"><h2 className="mt-4 text-5xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            How we turn ideas into software.
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            A structured, transparent approach to engineering — from
            discovery through deployment and ongoing product evolution.
          </p>
        </div>

        <div className="mt-12 lg:mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-[32px] border border-zinc-200 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-xl"
            >
              <span className="text-sm font-medium text-zinc-400">
                {step.number}
              </span>

              <h3 className="mt-4 text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
