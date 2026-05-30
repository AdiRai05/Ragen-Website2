import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Workflow, Link2, Database, Settings, Globe, Zap, Shield, Cpu } from "lucide-react";
import ServiceHero from "@/components/sections/service-hero";
import ContactCTA from "@/components/sections/contact-cta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Integration â ERP, CRM & API Connectivity",
  description: "ERP integration, CRM connectivity, API development and workflow automation that unify your technology ecosystem.",
};


const offerings = [
  { title: "ERP Integration", description: "Connect enterprise resource planning systems with modern applications for unified business operations and data flow.", icon: Settings },
  { title: "CRM Integration", description: "Seamlessly integrate customer relationship platforms with your sales, marketing and support workflows.", icon: Workflow },
  { title: "API Connectivity", description: "Design and build robust API layers connecting disparate systems, platforms and third-party services.", icon: Link2 },
  { title: "Legacy Modernization", description: "Transform legacy systems into modern, API-driven architectures without disrupting business operations.", icon: Database },
  { title: "Data Synchronization", description: "Real-time data sync ensuring consistent, accurate information across your entire technology stack.", icon: Globe },
  { title: "Workflow Automation", description: "Automate cross-system business processes to eliminate manual handoffs and reduce errors.", icon: Zap },
  { title: "Security Integration", description: "Unified authentication, SSO and access control across your entire application ecosystem.", icon: Shield },
  { title: "System Architecture", description: "Design scalable integration architectures that grow with your organization's technology needs.", icon: Cpu },
];

export default function EnterpriseIntegrationPage() {
  return (
    <main>
      <ServiceHero
        label="Enterprise Integration"
        title="Connecting systems that power your business."
        description="ERP integration, CRM connectivity, API development and workflow automation that unify your technology ecosystem."
        image="/images/img11.jpg"
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

      {/* PLATFORMS + IMAGE */}

      <section className="py-16 lg:py-32 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative z-10 container-width">
          <div className="grid gap-6 lg:gap-12 lg:grid-cols-2 items-center">
            <div><h2 className="mt-4 text-5xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">We integrate with the tools you use.</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Experienced with leading enterprise platforms, SaaS tools and custom systems.
                We connect your technology ecosystem so everything works together seamlessly.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Salesforce", "SAP", "Oracle", "Dynamics 365", "HubSpot", "Zendesk", "Shopify", "Stripe", "Twilio", "Slack", "Jira", "ServiceNow"].map((p) => (
                  <div key={p} className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-black hover:bg-black hover:text-white hover:scale-105">
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[300px] lg:h-[500px] overflow-hidden rounded-[40px]">
                <Image src="/images/img5.jpg" alt="Enterprise system integration" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}

      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="relative z-10 container-width">
          <div className="max-w-3xl"><h2 className="mt-4 text-5xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Integration without disruption.</h2>
          </div>
          <div className="mt-12 lg:mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              { step: "01", title: "Audit", desc: "Map your current systems, data flows and integration touchpoints." },
              { step: "02", title: "Design", desc: "Architect the integration layer with scalability and resilience." },
              { step: "03", title: "Connect", desc: "Build and test integrations with comprehensive error handling." },
              { step: "04", title: "Monitor", desc: "Ongoing monitoring, alerting and optimization of all integrations." },
            ].map((s) => (
              <div key={s.step} className="group rounded-[32px] border border-zinc-200 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-xl">
                <span className="text-sm font-medium text-zinc-400">{s.step}</span>
                <h3 className="mt-4 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-4 leading-8 text-zinc-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
