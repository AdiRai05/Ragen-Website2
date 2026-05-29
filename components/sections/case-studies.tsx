import Image from "next/image";

const studies = [
  {
    title: "AI Financial Intelligence Platform",
    result: "4.2M Predictions Processed",
    image: "/images/img9.jpg",
  },
  {
    title: "Enterprise Automation System",
    result: "72% Faster Operations",
    image: "/images/img2.jpg",
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
            Real systems. Real outcomes.
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            A selection of digital platforms,
            AI systems and enterprise solutions.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {studies.map((study) => (
            <div
              key={study.title}
              className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white"
            >
              <div className="relative h-[320px]">

                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-sm font-medium">
                  Result
                </div>

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-semibold">
                  {study.title}
                </h3>

                <p className="mt-4 text-zinc-600">
                  {study.result}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}