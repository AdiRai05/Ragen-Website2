import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "AI Financial Intelligence Platform",
    description: "Built a reasoning engine combining sentiment analysis, technical indicators and alternative datasets into a single intelligence platform processing over 4.2 million predictions.",
    image: "/images/img10.jpg",
    metric: "4.2M Predictions",
    tag: "Artificial Intelligence",
    deliverables: ["LLM Integration", "Data Pipeline", "Analytics Dashboard", "API Development"],
  },
  {
    title: "Enterprise Automation System",
    description: "Implemented an enterprise automation layer integrating CRM systems, support workflows and operational processes — reducing manual workload by 72%.",
    image: "/images/img2.jpg",
    metric: "72% Faster Operations",
    tag: "Automation",
    deliverables: ["Workflow Automation", "CRM Integration", "Custom Dashboard", "API Gateway"],
  },
  {
    title: "Cloud-Native SaaS Platform",
    description: "Engineered modern cloud-native infrastructure with automated scaling, zero-downtime deployments and enterprise-grade reliability.",
    image: "/images/img11.jpg",
    metric: "99.99% Uptime",
    tag: "Infrastructure",
    deliverables: ["Kubernetes Cluster", "CI/CD Pipeline", "Monitoring Stack", "Auto-scaling"],
  },
  {
    title: "Product Architecture & UX Design",
    description: "Designed scalable systems and product foundations for growth-stage startups — resulting in 3x user retention improvement.",
    image: "/images/img1.jpg",
    metric: "3x User Retention",
    tag: "Product Design",
    deliverables: ["UX Research", "Design System", "Prototype", "Frontend Development"],
  },
  {
    title: "Data Analytics Platform",
    description: "Built a comprehensive analytics platform consolidating data from multiple sources into unified dashboards and reports.",
    image: "/images/img7.jpg",
    metric: "5 Data Sources Unified",
    tag: "Data Engineering",
    deliverables: ["ETL Pipeline", "Data Warehouse", "BI Dashboards", "API Layer"],
  },
  {
    title: "Mobile Banking Application",
    description: "Developed a secure, high-performance mobile banking app with biometric authentication and real-time transaction processing.",
    image: "/images/img6.jpg",
    metric: "500K+ Downloads",
    tag: "Mobile Development",
    deliverables: ["iOS App", "Android App", "Security Audit", "Payment Integration"],
  },
];

const filters = ["All", "Artificial Intelligence", "Automation", "Infrastructure", "Product Design", "Data Engineering", "Mobile Development"];

export default function WorkPage() {
  return (
    <main className="pt-28 lg:pt-40 pb-32">
      {/* HERO */}

      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/img3.jpg" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-white/90" />
          <div className="absolute inset-0 bg-gradient-to-b pointer-events-none from-white/80 via-white/60 to-white" />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl pointer-events-none from-blue-50/40 to-transparent rounded-full blur-3xl" />
        <div className="relative z-10 container-width"><h1 className="mt-6 max-w-5xl text-6xl font-semibold tracking-tight lg:text-8xl">
            Projects that demonstrate our expertise.
          </h1>
          <p className="mt-8 max-w-3xl text-lg sm:text-xl leading-8 sm:leading-9 text-zinc-600">
            A selection of enterprise software, AI systems, cloud infrastructure
            and digital platforms we&apos;ve engineered for our clients.
          </p>
        </div>
      </section>

      {/* FILTERS */}

      <section className="pb-16">
        <div className="container-width">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:border-black hover:bg-black hover:text-white ${
                  filter === "All" ? "border-black bg-black text-white" : "border-zinc-200 bg-white text-zinc-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}

      <section>
        <div className="container-width">
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-[32px] border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)]"
              >
                <div className="relative h-[280px] lg:h-[420px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t pointer-events-none from-black/70 via-black/10 to-transparent" />
                  <div className="absolute left-6 top-6">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-medium backdrop-blur">
                      {project.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-sm text-white/80">Result</p>
                    <h4 className="text-2xl font-semibold text-white">{project.metric}</h4>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-4 leading-7 text-zinc-600">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.deliverables.map((d) => (
                      <span key={d} className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="mt-32">
        <div className="container-width">
          <div className="rounded-[40px] bg-black px-10 py-24 text-center text-white"><h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-tight">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              We&apos;d love to learn about your technology challenges and
              explore how we can help.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black font-medium transition-all duration-300 hover:scale-105"
              >
                Start a Project
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
