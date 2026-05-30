import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, Bot, Cpu, Workflow, MessageSquare, BarChart3, Shield, Zap, Database } from "lucide-react";
import ServiceHero from "@/components/sections/service-hero";
import ContactCTA from "@/components/sections/contact-cta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artificial Intelligence â AI Agents, RAG Systems & LLM Integration",
  description: "AI agents, RAG systems, LLM integration and intelligent automation engineered to create measurable business impact.",
};


const offerings = [
  { title: "AI Agents", description: "Autonomous agents that execute complex tasks, make decisions and integrate with your systems.", icon: Bot },
  { title: "RAG Systems", description: "Retrieval-augmented generation that grounds AI in your proprietary data and documents.", icon: Database },
  { title: "LLM Integration", description: "Seamless integration of large language models into your products and workflows.", icon: Brain },
  { title: "Intelligent Automation", description: "AI-powered automation of repetitive tasks, document processing and workflows.", icon: Workflow },
  { title: "Conversational AI", description: "Chatbots, voice assistants and conversational interfaces powered by advanced LLMs.", icon: MessageSquare },
  { title: "Predictive Analytics", description: "ML models that forecast trends, detect anomalies and enable data-driven decisions.", icon: BarChart3 },
  { title: "AI Security & Governance", description: "Responsible AI deployment with guardrails, monitoring and compliance.", icon: Shield },
  { title: "AI Strategy Consulting", description: "Identify high-impact AI opportunities and build a roadmap for AI adoption.", icon: Zap },
];

export default function AIPage() {
  return (
    <main>
      <ServiceHero
        label="Artificial Intelligence"
        title="Intelligent systems that transform how you operate."
        description="AI agents, RAG systems, LLM integration and intelligent automation — engineered to create measurable business impact."
        image="/images/img2.jpg"
      />

      {/* OFFERINGS */}

      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="relative z-10 container-width">
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

      {/* CASE STUDIES with images */}

      <section className="py-16 lg:py-32 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-0 w-[400px] h-[250px] lg:h-[400px] bg-gradient-to-br pointer-events-none from-blue-50/30 to-transparent rounded-full blur-3xl" />
        <div className="relative z-10 container-width">
          <div className="max-w-3xl"><h2 className="mt-4 text-5xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">AI solutions in action.</h2>
            <p className="mt-6 text-lg text-zinc-600">Real projects where AI created measurable business impact for our clients.</p>
          </div>

          <div className="mt-12 lg:mt-20 space-y-12">
            {[
              {
                title: "Financial Intelligence Platform",
                desc: "AI reasoning engine processing 4.2M+ predictions combining sentiment analysis, technical indicators and alternative data sources into a unified intelligence platform.",
                image: "/images/img10.jpg",
                metric: "4.2M Predictions",
                highlights: ["LLM Integration", "Data Pipeline", "Analytics Dashboard", "Real-time Processing"],
              },
              {
                title: "Enterprise AI Automation",
                desc: "Intelligent automation system reducing manual operations by 72% across CRM, support and sales workflows through custom AI agents and workflow integration.",
                image: "/images/img2.jpg",
                metric: "72% Faster Operations",
                highlights: ["Workflow Automation", "CRM Integration", "Custom Dashboard", "AI Agents"],
              },
            ].map((study) => (
              <div key={study.title} className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)]">
                <div className="grid lg:grid-cols-2">
                  <div className="relative min-h-[380px] overflow-hidden">
                    <Image src={study.image} alt={study.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t pointer-events-none from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <p className="text-sm text-white/80">Result</p>
                      <h4 className="text-2xl font-semibold text-white">{study.metric}</h4>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-10 lg:p-14">
                    <h3 className="text-3xl font-semibold">{study.title}</h3>
                    <p className="mt-6 leading-8 text-zinc-600">{study.desc}</p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {study.highlights.map((h) => (
                        <span key={h} className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI APPROACH */}

      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="relative z-10 container-width">
          <div className="grid gap-6 lg:gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="relative h-[300px] lg:h-[500px] overflow-hidden rounded-[40px]">
                <Image src="/images/img11.jpg" alt="Artificial intelligence approach" fill className="object-cover" />
              </div>
            </div>
            <div><h2 className="mt-4 text-5xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Responsible AI, real results.</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                We build AI systems with guardrails, monitoring and human oversight built in from
                the start — not bolted on after deployment. Our approach ensures AI that is safe,
                reliable and delivers measurable business value.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Safety First", "Human in the Loop", "Data Privacy", "Observability"].map((p) => (
                  <div key={p} className="flex items-center gap-3 rounded-xl border border-zinc-200 p-4">
                    <div className="h-2 w-2 rounded-full bg-black" />
                    <span className="text-sm font-medium">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
