"use client";

const faqs = [
  {
    question: "What types of projects does Ragen work on?",
    answer:
      "We build enterprise software, SaaS platforms, AI systems, cloud infrastructure, automation solutions, mobile applications and blockchain-based products.",
  },
  {
    question: "Do you work with startups or enterprises?",
    answer:
      "We work with startups, growth-stage companies and established enterprises looking to modernize systems, launch products or scale operations.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes. We frequently integrate with existing CRMs, ERPs, databases, APIs and third-party platforms to ensure smooth adoption.",
  },
  {
    question: "Do you offer AI development services?",
    answer:
      "Yes. We build AI agents, RAG systems, copilots, automation workflows and custom AI-powered business solutions.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Our stack includes Next.js, React, TypeScript, Node.js, Python, AWS, Azure, PostgreSQL, MongoDB, Docker, Kubernetes and modern AI frameworks.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer maintenance, monitoring, optimization and long-term engineering support after launch.",
  },
];

export default function FAQ() {
  return (
    <section className="py-32 bg-zinc-50">
      <div className="container-width">

        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-semibold tracking-tight">
            Frequently asked questions.
          </h2>
        </div>

        <div className="mt-20 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[32px] border border-zinc-200 bg-white p-8"
            >
              <h3 className="text-xl font-semibold">
                {faq.question}
              </h3>

              <p className="mt-4 leading-8 text-zinc-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}