import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, Cloud, Cpu, Database, Shield, Blocks, CheckCircle } from "lucide-react";

const services = [
  { title: "Software Engineering", description: "Enterprise applications, SaaS products and custom software built for scale and long-term maintainability.", icon: Cpu, href: "/services/software-engineering", image: "/images/img4.jpg" },
  { title: "Artificial Intelligence", description: "AI Agents, RAG Systems, LLM Integration and intelligent automation that create measurable business impact.", icon: Brain, href: "/services/artificial-intelligence", image: "/images/img2.jpg" },
  { title: "Cloud & DevOps", description: "AWS, Azure, Kubernetes, Docker and enterprise infrastructure engineered for reliability and scale.", icon: Cloud, href: "/services/cloud-devops", image: "/images/img5.jpg" },
  { title: "Data Engineering", description: "Analytics platforms, ETL pipelines, data warehousing and business intelligence systems.", icon: Database, href: "/services/data-engineering", image: "/images/img7.jpg" },
  { title: "Cybersecurity", description: "Security architecture, authentication systems, compliance frameworks and threat monitoring.", icon: Shield, href: "/services/cybersecurity", image: "/images/img8.jpg" },
  { title: "Blockchain Solutions", description: "Smart contracts, Web3 applications, DeFi infrastructure and decentralized platforms.", icon: Blocks, href: "/services/blockchain-solutions", image: "/images/img10.jpg" },
];

const workHighlights = [
  { title: "AI Financial Intelligence Platform", description: "Built a reasoning engine combining sentiment analysis, technical indicators and alternative data into a single platform. The system processes over 4.2 million predictions, reducing research time by 60% while improving decision confidence across trading desks.", image: "/images/img10.jpg", metric: "4.2M Predictions", tag: "Artificial Intelligence" },
  { title: "Enterprise Automation System", description: "Implemented an automation layer integrating CRM systems, support workflows and operational processes across the organization. Reduced manual workload and accelerated execution speed by 72% across core business functions.", image: "/images/img2.jpg", metric: "72% Faster Operations", tag: "Automation" },
  { title: "Cloud-Native SaaS Platform", description: "Engineered cloud-native infrastructure with automated scaling, zero-downtime deployments and enterprise-grade reliability. Achieved 99.99% uptime while reducing infrastructure costs by 40% through optimization.", image: "/images/img11.jpg", metric: "99.99% Uptime", tag: "Infrastructure" },
  { title: "Product Architecture & UX Design", description: "Redesigned the complete product architecture and user experience for a growth-stage startup. The new system foundation and intuitive design resulted in 3x improvement in user retention and a scalable platform for future growth.", image: "/images/img1.jpg", metric: "3x User Retention", tag: "Product Design" },
];

const processSteps = [
  { number: "01", title: "Discovery", description: "We learn your business, goals and technical landscape to define clear requirements and success criteria." },
  { number: "02", title: "Architecture & Design", description: "System architecture, technology selection and detailed planning with scalability as a core priority." },
  { number: "03", title: "Development", description: "Agile engineering with regular demos, continuous integration and transparent progress tracking." },
  { number: "04", title: "Testing & QA", description: "Comprehensive testing including automated, performance and security validation before launch." },
  { number: "05", title: "Deployment", description: "Production deployment with monitoring, documentation, knowledge transfer and go-live support." },
  { number: "06", title: "Support & Evolution", description: "Ongoing maintenance, performance optimization and feature evolution as your business grows." },
];

const technologies = [
  "Next.js", "React", "TypeScript", "Node.js", "Python",
  "OpenAI", "Anthropic", "AWS", "Azure", "Docker",
  "Kubernetes", "MongoDB", "PostgreSQL", "LangChain",
];

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}

      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/img3.jpg" alt="Technology engineering" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-white/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>

        <div className="relative z-10 w-full pt-32 pb-24">
          <div className="container-width">
            <div className="max-w-4xl">
              <p className="inline-block rounded-full border border-zinc-300 bg-white/60 px-4 py-2 text-sm font-medium tracking-wide text-zinc-600 backdrop-blur">
                Enterprise Technology Engineering
              </p>

              <h1 className="mt-8 text-6xl font-semibold tracking-tight lg:text-8xl">
                We build software
                <br />
                that{" "}
                <span className="text-zinc-400">scales business.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-600">
                Ragen engineers enterprise software, AI systems and cloud infrastructure for organizations that demand reliability, scalability and long-term value. We combine deep engineering expertise with business understanding to build technology that drives growth.
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Start Your Project
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link href="/services" className="rounded-full border border-zinc-300 bg-white/60 px-8 py-4 font-medium backdrop-blur transition-all duration-300 hover:bg-white hover:border-black">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY MARQUEE ── */}

      <section className="overflow-hidden border-y border-zinc-200 bg-white py-8">
        <div className="animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          {[...technologies, ...technologies].map((tech, i) => (
            <span key={i} className="mx-8 inline-block text-lg font-medium text-zinc-400">{tech}</span>
          ))}
        </div>
      </section>

      {/* ── ABOUT RAGEN — Image + Text ── */}

      <section className="py-32 bg-white">
        <div className="container-width">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="relative h-[500px] overflow-hidden rounded-[40px]">
                <Image src="/images/img1.jpg" alt="Ragen engineering team" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 hidden lg:block">
                <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white font-bold text-lg">8+</div>
                    <div>
                      <p className="text-xs text-zinc-500">Technology</p>
                      <p className="font-semibold">Domains</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">About Ragen</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-tight">Engineering the future of business.</h2>
              <p className="mt-8 text-lg leading-9 text-zinc-600">
                Ragen is a technology engineering company focused on building scalable software, AI-powered systems, cloud infrastructure and enterprise solutions. We were founded with a simple belief: businesses deserve technology partners who think beyond implementation.
              </p>
              <p className="mt-6 text-lg leading-9 text-zinc-600">
                We combine engineering expertise, emerging technologies and business understanding to help organizations build systems that scale with confidence — whether you&apos;re a startup launching an MVP or an enterprise modernizing critical infrastructure.
              </p>
              <div className="mt-8 space-y-3">
                {["Engineering-first approach", "AI-native thinking", "Enterprise standards", "Business-driven decisions"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-zinc-400 shrink-0" />
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3">
                Learn more about us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES — Image Cards ── */}

      <section className="py-32 bg-zinc-50">
        <div className="container-width">
          <div className="flex items-end justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Services</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-tight">Technology solutions for every challenge.</h2>
              <p className="mt-6 text-lg text-zinc-600">From enterprise platforms to AI systems — we deliver engineering excellence across the full technology spectrum.</p>
            </div>
            <Link href="/services" className="hidden lg:inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white hover:border-black">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} href={service.href} className="group relative overflow-hidden rounded-[32px] border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)]">
                  <div className="relative h-[260px] overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  </div>
                  <div className="relative p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-2xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="mt-4 leading-7 text-zinc-600">{service.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3">
                      Learn More <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK — Rich Image + Text ── */}

      <section className="py-32 bg-white">
        <div className="container-width">
          <div className="flex items-end justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Selected Work</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-tight">Building products that scale.</h2>
              <p className="mt-6 text-lg text-zinc-600">A selection of projects where we&apos;ve helped organizations modernize, automate and scale their technology.</p>
            </div>
            <Link href="/work" className="hidden lg:inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white hover:border-black">
              View All Work <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-20 space-y-12">
            {workHighlights.map((project, i) => (
              <div key={project.title} className={`group overflow-hidden rounded-[32px] border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] ${i % 2 === 0 ? "" : ""}`}>
                <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={`relative min-h-[400px] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute left-6 top-6">
                      <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-medium backdrop-blur">{project.tag}</span>
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <p className="text-sm text-white/80">Result</p>
                      <h4 className="text-2xl font-semibold text-white">{project.metric}</h4>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-10 lg:p-14">
                    <h3 className="text-3xl font-semibold">{project.title}</h3>
                    <p className="mt-6 leading-8 text-zinc-600">{project.description}</p>
                    <div className="mt-8">
                      <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3">
                        View case study <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS — Numbered with Image ── */}

      <section className="py-32 bg-zinc-50">
        <div className="container-width">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Our Process</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-tight">How we turn ideas into software.</h2>
              <p className="mt-6 text-lg text-zinc-600">A structured, transparent approach to engineering — from discovery through deployment and ongoing evolution. Every step is designed for clarity, quality and results.</p>

              <div className="mt-12 grid gap-4">
                {processSteps.map((step) => (
                  <div key={step.number} className="group flex gap-5 rounded-[24px] border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-x-1 hover:border-black hover:shadow-md">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-sm font-medium text-zinc-500 transition-all duration-300 group-hover:bg-black group-hover:text-white">{step.number}</span>
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-zinc-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[650px] overflow-hidden rounded-[40px]">
                <Image src="/images/img9.jpg" alt="Engineering process" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden lg:block">
                <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-xl">
                  <p className="text-xs text-zinc-500">Delivery Model</p>
                  <p className="mt-1 text-lg font-semibold">End-to-End Ownership</p>
                  <p className="text-sm text-zinc-500">From architecture to production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY RAGEN — Cards ── */}

      <section className="py-32 bg-white">
        <div className="container-width">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Why Ragen</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight">Built for long-term technology partnerships.</h2>
            <p className="mt-6 text-lg text-zinc-600">We combine engineering expertise, modern technologies and business understanding to help organizations build systems that scale.</p>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            {[
              { number: "01", title: "Engineering First", desc: "We focus on architecture, scalability and maintainability before writing code, ensuring long-term success rather than short-term fixes." },
              { number: "02", title: "AI Native", desc: "Artificial intelligence is built into our thinking from day one, helping businesses automate operations and unlock new capabilities." },
              { number: "03", title: "Enterprise Standards", desc: "Security, reliability, documentation and performance are treated as core requirements, not afterthoughts." },
              { number: "04", title: "Business Driven", desc: "Technology decisions are aligned with business goals, growth strategies and measurable outcomes — we speak your language." },
              { number: "05", title: "Future Ready", desc: "Our solutions are designed to evolve with your organization as requirements and markets change over time." },
            ].map((reason) => (
              <div key={reason.number} className="group rounded-[32px] border border-zinc-200 p-10 transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-xl">
                <span className="text-sm font-medium text-zinc-400">{reason.number}</span>
                <h3 className="mt-4 text-3xl font-semibold">{reason.title}</h3>
                <p className="mt-4 leading-8 text-zinc-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}

      <section className="py-32 bg-zinc-50">
        <div className="container-width">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Testimonials</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight">Trusted by technology leaders.</h2>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              { quote: "Ragen helped us rethink our entire product architecture. The result was a platform capable of supporting significantly higher traffic while improving operational efficiency.", author: "Technology Director", company: "Financial Services Company" },
              { quote: "Their engineering approach stood out immediately. Instead of focusing on features alone, they focused on scalability, maintainability and long-term business value.", author: "Head of Operations", company: "Enterprise SaaS Organization" },
              { quote: "From discovery to deployment, the process was structured, transparent and highly collaborative. The final system exceeded our expectations.", author: "Product Lead", company: "Digital Platform Company" },
            ].map((t) => (
              <div key={t.author} className="rounded-[32px] border border-zinc-200 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-xl">
                <p className="leading-8 text-zinc-600">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-8 border-t border-zinc-100 pt-6">
                  <p className="font-semibold">{t.author}</p>
                  <p className="mt-1 text-sm text-zinc-500">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}

      <section className="border-y border-zinc-200 bg-white">
        <div className="container-width py-16">
          <div className="grid gap-10 md:grid-cols-4">
            {[
              { value: "8+", label: "Technology Domains" },
              { value: "100%", label: "Custom Built Solutions" },
              { value: "24/7", label: "Project Support" },
              { value: "End-to-End", label: "Delivery Ownership" },
            ].map((stat) => (
              <div key={stat.label} className="transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-5xl font-semibold tracking-tight">{stat.value}</h3>
                <p className="mt-3 text-zinc-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}

      <section className="py-32 bg-zinc-50">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-[40px]">
            <div className="relative h-[450px]">
              <Image src="/images/img3.jpg" alt="Contact" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/75" />
              <div className="absolute inset-0 flex items-center">
                <div className="w-full px-10 lg:px-20 text-center">
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Start Your Project</p>
                  <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white lg:text-7xl">
                    Let&apos;s build the next generation of your business.
                  </h2>
                  <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-300">
                    From enterprise software and AI systems to cloud infrastructure and automation, Ragen helps organizations transform ambitious ideas into scalable technology.
                  </p>
                  <div className="mt-12 flex flex-wrap justify-center gap-4">
                    <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      Contact Us <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <a href="mailto:ragen@ragen.org" className="rounded-full border border-zinc-500 px-8 py-4 font-medium text-white transition-all duration-300 hover:border-white">
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
