import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Target, Eye, Lightbulb, Heart } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ragen â Engineering Digital Systems for Business",
  description: "Ragen is a technology engineering company building scalable software, AI-powered systems, cloud infrastructure and enterprise solutions since 2020.",
};


export default function AboutPage() {
  return (
    <main>
      {/* ── HERO with Image ── */}

      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/img1.jpg" alt="Ragen technology engineering background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-white/90" />
          <div className="absolute inset-0 bg-gradient-to-b pointer-events-none from-white/80 via-white/60 to-white" />
        </div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-bl pointer-events-none from-blue-50/40 to-transparent rounded-full blur-3xl" />

        <div className="relative z-10 container-width"><h1 className="mt-6 max-w-5xl text-6xl font-semibold tracking-tight lg:text-8xl">
            Engineering digital systems for the next generation of businesses.
          </h1>
          <p className="mt-10 max-w-3xl text-lg sm:text-xl leading-8 sm:leading-9 text-zinc-600">
            Ragen is a technology engineering company focused on building scalable
            software, AI-powered systems, cloud infrastructure and enterprise solutions
            that create lasting business value.
          </p>
        </div>
      </section>

      {/* ── MISSION — Image + Text ── */}

      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="absolute top-10 right-10 w-[400px] h-[250px] lg:h-[400px] glow-blue pointer-events-none opacity-40" />
        <div className="relative z-10 container-width">
          <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="relative h-[300px] lg:h-[500px] overflow-hidden rounded-[40px]">
                <Image src="/images/img9.jpg" alt="Ragen mission and values" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 hidden lg:block">
                <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                      <Target size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Founded</p>
                      <p className="font-semibold">2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div><h2 className="mt-4 text-5xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Building technology that drives growth.</h2>
              <p className="mt-8 text-lg leading-9 text-zinc-600">
                Our mission is to help organizations leverage modern engineering,
                artificial intelligence and scalable digital infrastructure to accelerate
                innovation and create long-term business value.
              </p>
              <p className="mt-6 text-lg leading-9 text-zinc-600">
                We believe businesses deserve technology partners who think beyond
                implementation — partners who understand the business context, the
                user needs, and the long-term implications of every technical decision.
              </p>
              <div className="mt-8 space-y-3">
                {["Engineered for scale, not just features", "AI-native thinking from day one", "Enterprise reliability as standard", "Long-term partnership mindset"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-zinc-400 shrink-0" />
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE PRINCIPLES — with bg-grid ── */}

      <section className="py-16 lg:py-32 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-0 w-[400px] h-[250px] lg:h-[400px] bg-gradient-to-br pointer-events-none from-blue-50/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[250px] lg:h-[400px] bg-gradient-to-tl pointer-events-none from-zinc-100/40 to-transparent rounded-full blur-3xl" />

        <div className="relative z-10 container-width">
          <div className="max-w-3xl"><h2 className="mt-4 text-5xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">What drives every decision we make.</h2>
          </div>

          <div className="mt-12 lg:mt-20 grid gap-8 md:grid-cols-2">
            {[
              { icon: Target, title: "Engineering Excellence", desc: "We prioritize architecture, scalability and maintainability in every solution we build. Clean code, thoughtful design and rigorous testing are non-negotiable standards." },
              { icon: Lightbulb, title: "AI-Driven Innovation", desc: "Artificial intelligence is integrated where it creates measurable value — automating operations, surfacing insights and enabling new capabilities that weren't possible before." },
              { icon: Eye, title: "Business Alignment", desc: "Technology decisions are tied directly to business outcomes and growth strategies. We speak your language and measure success by the value we create for your organization." },
              { icon: Heart, title: "Long-Term Thinking", desc: "We build systems designed to evolve with organizations over time — not throwaway prototypes. Every line of code is written with the future in mind." },
            ].map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} className="group rounded-[32px] border border-zinc-200 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{principle.title}</h3>
                  <p className="mt-4 leading-8 text-zinc-600">{principle.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY WE STARTED — Image + Text ── */}

      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] lg:h-[500px] glow-violet pointer-events-none opacity-40" />
        <div className="relative z-10 container-width">
          <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
            <div><h2 className="mt-4 text-5xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Technology should create opportunities, not obstacles.</h2>
              <p className="mt-8 text-lg leading-9 text-zinc-600">
                Ragen was founded with a simple belief: businesses deserve technology
                partners who think beyond implementation. Too many agencies focus on
                shipping features without considering architecture, scalability or
                long-term maintainability.
              </p>
              <p className="mt-6 text-lg leading-9 text-zinc-600">
                We combine deep engineering expertise, emerging technologies and business
                understanding to help organizations build systems that scale with confidence
                — whether you&apos;re a startup launching an MVP or an enterprise modernizing
                critical infrastructure.
              </p>
              <Link href="/contact" className="mt-8 group inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Start a Conversation
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="relative h-[300px] lg:h-[550px] overflow-hidden rounded-[40px]">
                <Image src="/images/img3.jpg" alt="Ragen company origin story" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden lg:block">
                <div className="rounded-[24px] border border-zinc-200 bg-white p-5 shadow-xl">
                  <p className="text-xs text-zinc-500">Delivery</p>
                  <p className="text-lg font-semibold">Global Remote</p>
                  <p className="text-sm text-zinc-500">India-based team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}

      <section className="border-y border-zinc-200 bg-white">
        <div className="container-width py-16">
          <div className="grid gap-10 md:grid-cols-4">
            {[
              { value: "2020", label: "Founded" },
              { value: "50+", label: "Projects Delivered" },
              { value: "8+", label: "Technology Domains" },
              { value: "Global", label: "Client Base" },
            ].map((stat) => (
              <div key={stat.label} className="text-center transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">{stat.value}</h3>
                <p className="mt-3 text-zinc-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}

      <section className="py-16 lg:py-32 bg-zinc-50">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-[40px]">
            <div className="relative h-[250px] lg:h-[400px]">
              <Image src="/images/img1.jpg" alt="Ragen engineering and technology solutions" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-6 text-center">
                  <h2 className="max-w-3xl text-5xl sm:text-4xl lg:text-5xl font-semibold text-white">Ready to work with us?</h2>
                  <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-300">
                    Let&apos;s discuss how Ragen can help accelerate your technology initiatives.
                  </p>
                  <div className="mt-10">
                    <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black font-medium transition-all duration-300 hover:scale-105">
                      Contact Us <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
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
