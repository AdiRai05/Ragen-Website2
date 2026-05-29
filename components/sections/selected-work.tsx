import Image from "next/image";

const projects = [
  {
    title: "AI Financial Intelligence Platform",
    description:
      "Built a reasoning engine combining sentiment, technical and alternative data.",
    image: "/images/img10.jpg",
    metric: "4.2M Predictions",
    tag: "Artificial Intelligence",
  },
  {
    title: "Enterprise Automation System",
    description:
      "Automated business operations across CRM, support and sales workflows.",
    image: "/images/img2.jpg",
    metric: "72% Faster Operations",
    tag: "Automation",
  },
  {
    title: "Product Architecture & UX",
    description:
      "Designed scalable systems and product foundations for growth-stage startups.",
    image: "/images/img1.jpg",
    metric: "3x User Retention",
    tag: "Product Design",
  },
  {
    title: "Cloud SaaS Platform",
    description:
      "Engineered modern cloud-native infrastructure with enterprise reliability.",
    image: "/images/img11.jpg",
    metric: "99.99% Uptime",
    tag: "Infrastructure",
  },
];

export default function SelectedWork() {
  return (
    <section className="py-32">
      <div className="container-width">

        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="max-w-3xl text-5xl font-semibold tracking-tight">
            Building products that scale.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
className="group overflow-hidden rounded-[32px] border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)]"            >
             <div className="relative h-[420px] overflow-hidden">
                <Image
  src={project.image}
  alt={project.title}
  fill
  className="object-cover transition duration-700 group-hover:scale-110"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

<div className="absolute left-6 top-6">
  <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-medium backdrop-blur">
    {project.tag}
  </span>
</div>

<div className="absolute bottom-6 left-6">
  <p className="text-sm text-white/80">
    Result
  </p>

  <h4 className="text-2xl font-semibold text-white">
    {project.metric}
  </h4>
</div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 text-zinc-600 leading-7">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}