import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Globe, Layers, Smartphone, Workflow, Zap, Shield, Database } from "lucide-react";
import ServiceHero from "@/components/sections/service-hero";
import ContactCTA from "@/components/sections/contact-cta";

const offerings = [
  { title: "Enterprise Applications", description: "Business-critical systems built for performance, reliability and long-term maintainability. We architect solutions that scale with your organization.", icon: Cpu },
  { title: "SaaS Platforms", description: "Multi-tenant cloud platforms with subscription management, billing, analytics and seamless user experiences.", icon: Layers },
  { title: "Web Applications", description: "Responsive, accessible web apps built with modern frameworks, best practices and pixel-perfect design.", icon: Globe },
  { title: "Mobile Development", description: "Native and cross-platform mobile applications engineered for performance, smooth UX and platform conventions.", icon: Smartphone },
  { title: "API Development", description: "RESTful and GraphQL APIs designed for developer experience, security, performance and scalability.", icon: Workflow },
  { title: "Legacy Modernization", description: "Transform legacy systems into modern, maintainable platforms without disrupting business operations.", icon: Zap },
  { title: "Quality Engineering", description: "Automated testing, CI/CD pipelines and quality assurance built into every stage of the development lifecycle.", icon: Shield },
  { title: "Database Design", description: "Optimized data models, efficient migrations and query performance for PostgreSQL, MongoDB and beyond.", icon: Database },
];

export default function SoftwareEngineeringPage() {
  return (
    <main>
      <ServiceHero
        label="Software Engineering"
        title="Building software designed to scale."
        description="Custom software development, SaaS platforms, enterprise applications and digital products engineered for growth and long-term maintainability."
        image="/images/img4.jpg"
      />

      {/* OFFERINGS */}

      <section className="py-32 bg-white">
        <div className="container-width">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group rounded-[32px] border border-zinc-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-zinc-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMAGE SHOWCASE */}

      <section className="py-32 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50/30 to-transparent rounded-full blur-3xl" />
        <div className="relative z-10 container-width">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Our Approach</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-tight">Engineering discipline at every step.</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                We don&apos;t just write code — we engineer systems. Every project goes through rigorous
                architecture planning, iterative development with continuous feedback, and comprehensive
                testing before reaching production.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { step: "01", title: "Plan", desc: "Requirements, architecture design and technology selection." },
                  { step: "02", title: "Build", desc: "Iterative development with CI/CD and regular demos." },
                  { step: "03", title: "Test", desc: "Automated, performance and security validation." },
                  { step: "04", title: "Launch", desc: "Production deployment with monitoring and documentation." },
                ].map((s) => (
                  <div key={s.step} className="group flex gap-4 rounded-[20px] border border-zinc-200 bg-white p-4 transition-all duration-300 hover:-translate-x-1 hover:border-black hover:shadow-md">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-sm font-medium text-zinc-500 transition-all duration-300 group-hover:bg-black group-hover:text-white">{s.step}</span>
                    <div>
                      <h4 className="font-semibold">{s.title}</h4>
                      <p className="mt-1 text-sm text-zinc-600">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[600px] overflow-hidden rounded-[40px]">
                <Image src="/images/img9.jpg" alt="Software engineering process" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden lg:block">
                <div className="rounded-[24px] border border-zinc-200 bg-white p-5 shadow-xl">
                  <p className="text-xs text-zinc-500">Quality</p>
                  <p className="text-lg font-semibold">Built to Last</p>
                  <p className="text-sm text-zinc-500">Architecture-first approach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}

      <section className="py-32 bg-white">
        <div className="container-width">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Tech Stack</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight">Modern engineering technologies.</h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { cat: "Frontend", techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
              { cat: "Backend", techs: ["Node.js", "Python", "FastAPI", "Express"] },
              { cat: "Database", techs: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
              { cat: "DevOps", techs: ["Docker", "GitHub Actions", "Vercel", "AWS"] },
            ].map((g) => (
              <div key={g.cat} className="group rounded-[28px] border border-zinc-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-xl">
                <h3 className="text-xl font-semibold">{g.cat}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.techs.map((t) => (
                    <span key={t} className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
