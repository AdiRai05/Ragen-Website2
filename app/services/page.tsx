import Image from "next/image";
import Link from "next/link";
import {
  Brain, Cloud, Database, Shield, Workflow,
  Smartphone, Blocks, Cpu, ArrowRight, CheckCircle,
} from "lucide-react";

const services = [
  {
    title: "Software Engineering",
    description:
      "Custom software platforms, SaaS applications, enterprise systems and customer-facing digital experiences engineered for scale and long-term maintainability.",
    href: "/services/software-engineering",
    icon: Cpu,
    image: "/images/img4.jpg",
    capabilities: ["Web Applications", "Enterprise Platforms", "SaaS Development", "API Development"],
  },
  {
    title: "Artificial Intelligence",
    description:
      "AI-powered systems that automate workflows, improve decision-making and unlock new business capabilities through intelligent technology.",
    href: "/services/artificial-intelligence",
    icon: Brain,
    image: "/images/img2.jpg",
    capabilities: ["AI Agents", "RAG Systems", "LLM Integrations", "Intelligent Automation"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Modern cloud infrastructure designed for scalability, security and reliability — on AWS, Azure and hybrid environments.",
    href: "/services/cloud-devops",
    icon: Cloud,
    image: "/images/img5.jpg",
    capabilities: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    title: "Data Engineering",
    description:
      "Building data platforms that transform raw information into actionable business insights and competitive advantage.",
    href: "/services/data-engineering",
    icon: Database,
    image: "/images/img7.jpg",
    capabilities: ["Data Warehousing", "Analytics", "ETL Pipelines", "Business Intelligence"],
  },
  {
    title: "Cybersecurity",
    description:
      "Protecting digital assets through secure architecture, authentication systems and enterprise-grade security practices.",
    href: "/services/cybersecurity",
    icon: Shield,
    image: "/images/img8.jpg",
    capabilities: ["Authentication", "Access Control", "Security Audits", "Compliance"],
  },
  {
    title: "Enterprise Integration",
    description:
      "Connecting systems, platforms and business processes through seamless, scalable integrations and automation.",
    href: "/services/enterprise-integration",
    icon: Workflow,
    image: "/images/img11.jpg",
    capabilities: ["ERP Integration", "CRM Integration", "Legacy Modernization", "API Connectivity"],
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications built for exceptional performance, user experience and growth.",
    href: "/services/mobile-development",
    icon: Smartphone,
    image: "/images/img6.jpg",
    capabilities: ["iOS", "Android", "React Native", "Flutter"],
  },
  {
    title: "Blockchain Solutions",
    description:
      "Decentralized applications, smart contracts and blockchain-powered platforms engineered for the real world.",
    href: "/services/blockchain-solutions",
    icon: Blocks,
    image: "/images/img10.jpg",
    capabilities: ["Smart Contracts", "Web3", "Token Systems", "Blockchain Infrastructure"],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* ── HERO with Image ── */}

      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/img3.jpg" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-white/90" />
          <div className="absolute inset-0 bg-gradient-to-b pointer-events-none from-white/80 via-white/60 to-white" />
        </div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-bl pointer-events-none from-blue-50/40 to-transparent rounded-full blur-3xl" />

        <div className="relative z-10 container-width">
          <div className="max-w-5xl"><h1 className="mt-6 text-6xl font-semibold tracking-tight lg:text-8xl">
              Technology solutions designed to scale.
            </h1>
            <p className="mt-8 max-w-3xl text-lg sm:text-xl leading-8 sm:leading-9 text-zinc-600">
              Ragen delivers software engineering, AI systems, cloud infrastructure
              and enterprise technology solutions that help organizations innovate
              faster and build for the long term.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}

      <section className="border-y border-zinc-200 bg-white">
        <div className="container-width py-10">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { value: "8", label: "Service Domains" },
              { value: "50+", label: "Enterprise Projects" },
              { value: "12+", label: "Industries Served" },
              { value: "Global", label: "Delivery Capability" },
            ].map((s) => (
              <div key={s.label} className="text-center transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-4xl font-semibold tracking-tight">{s.value}</h3>
                <p className="mt-2 text-sm text-zinc-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS with Images ── */}

      <section className="py-16 lg:py-32 bg-white">
        <div className="container-width">
          <div className="space-y-10">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group block overflow-hidden rounded-[32px] border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)]"
                >
                  <div className="grid lg:grid-cols-[1fr_1.2fr_1fr]">
                    {/* Image */}
                    <div className="relative min-h-[280px] lg:min-h-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white lg:bg-gradient-to-r pointer-events-none lg:from-transparent lg:via-transparent lg:to-white" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 lg:p-10 lg:col-span-2">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                          <Icon size={26} />
                        </div>
                        <h2 className="text-4xl font-semibold">{service.title}</h2>
                      </div>

                      <p className="mt-5 max-w-2xl leading-8 text-zinc-600">
                        {service.description}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-4">
                        <div className="flex flex-wrap gap-2">
                          {service.capabilities.map((cap) => (
                            <span
                              key={cap}
                              className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium transition-all duration-300 group-hover:border-zinc-400"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>

                        <span className="ml-auto flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3">
                          Learn More
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY RAGEN FOR SERVICES ── */}

      <section className="py-16 lg:py-32 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[250px] lg:h-[400px] bg-gradient-to-tr pointer-events-none from-zinc-100/60 to-transparent rounded-full blur-3xl" />

        <div className="relative z-10 container-width">
          <div className="max-w-3xl"><h2 className="mt-4 text-5xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              A technology partner, not just a vendor.
            </h2>
            <p className="mt-6 text-lg text-zinc-600">
              Every engagement is grounded in engineering excellence, business
              understanding and a commitment to long-term success.
            </p>
          </div>

          <div className="mt-10 lg:mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "Engineering First", desc: "Architecture and scalability before features." },
              { title: "AI Native", desc: "Intelligence embedded from day one." },
              { title: "Enterprise Grade", desc: "Security, reliability and documentation as standard." },
              { title: "Business Aligned", desc: "Technology that drives measurable outcomes." },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[28px] border border-zinc-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-xl"
              >
                <CheckCircle size={24} className="text-zinc-400 transition-colors duration-300 group-hover:text-black" />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}

      <section className="py-16 lg:py-32 bg-white">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-[40px]">
            <div className="relative h-[280px] lg:h-[450px]">
              <Image src="/images/img1.jpg" alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-6 text-center">
                  <h2 className="max-w-3xl text-5xl sm:text-4xl lg:text-5xl font-semibold text-white lg:text-6xl">
                    Ready to start your next project?
                  </h2>
                  <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-300">
                    Let&apos;s discuss how Ragen can help accelerate your technology initiatives.
                  </p>
                  <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black font-medium transition-all duration-300 hover:scale-105"
                    >
                      Contact Us
                      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <a
                      href="mailto:ragen@ragen.org"
                      className="rounded-full border border-zinc-500 px-8 py-4 font-medium text-white transition-all duration-300 hover:border-white"
                    >
                      ragen@ragen.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
