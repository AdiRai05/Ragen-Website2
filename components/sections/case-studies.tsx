import Image from "next/image";

const studies = [
  {
    title: "AI Financial Intelligence Platform",
    image: "/images/img9.jpg",

    challenge:
      "Financial analysts relied on fragmented research sources, slowing decision-making and reducing visibility into market trends.",

    solution:
      "Built an AI-powered reasoning engine combining technical indicators, sentiment analysis and alternative datasets into a single intelligence platform.",

    outcome:
      "Processed over 4.2 million predictions while significantly reducing research time and improving decision confidence.",
  },

  {
    title: "Enterprise Automation System",
    image: "/images/img2.jpg",

    challenge:
      "Manual workflows across sales, customer support and operations created bottlenecks and inconsistent execution.",

    solution:
      "Implemented an enterprise automation layer integrating CRM systems, support workflows and operational processes.",

    outcome:
      "Reduced operational workload and accelerated execution speed by 72% across core business functions.",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-32 bg-zinc-50">
      <div className="container-width">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Case Studies
          </p>

          <h2 className="mt-4 text-5xl font-semibold tracking-tight">
            Solving complex business problems.
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            A closer look at how Ragen helps organizations
            modernize operations, leverage AI and scale digital
            platforms.
          </p>
        </div>

        <div className="mt-20 space-y-12">
          {studies.map((study) => (
            <div
              key={study.title}
              className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[420px]">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-10 lg:p-14">
                  <h3 className="text-3xl font-semibold">
                    {study.title}
                  </h3>

                  <div className="mt-10 space-y-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                        Challenge
                      </p>

                      <p className="mt-3 leading-8 text-zinc-600">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                        Solution
                      </p>

                      <p className="mt-3 leading-8 text-zinc-600">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                        Outcome
                      </p>

                      <p className="mt-3 font-medium leading-8 text-black">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}