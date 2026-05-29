export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Ragen helped us rethink our platform architecture and significantly improved system performance.",
      author: "CTO",
      company: "Fintech Startup",
    },
    {
      quote:
        "The team moved quickly, communicated clearly, and delivered exactly what we needed.",
      author: "Founder",
      company: "SaaS Company",
    },
    {
      quote:
        "Their engineering-first approach helped us avoid months of technical debt.",
      author: "Head of Product",
      company: "Technology Firm",
    },
  ];

  return (
    <section className="py-32">
      <div className="container-width">
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-semibold tracking-tight">
            Trusted by ambitious teams.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-zinc-200 bg-white p-8"
            >
              <p className="leading-8 text-zinc-700">
                "{item.quote}"
              </p>

              <div className="mt-8">
                <p className="font-semibold">
                  {item.author}
                </p>

                <p className="text-zinc-500">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}