import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Lock, Fingerprint, Eye, FileCheck, AlertTriangle, Server, Users } from "lucide-react";
import ServiceHero from "@/components/sections/service-hero";
import ContactCTA from "@/components/sections/contact-cta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity â Security Architecture, Compliance & Audits",
  description: "Security architecture, authentication systems, compliance frameworks and threat monitoring designed to protect your digital assets.",
};


const offerings = [
  { title: "Security Architecture", description: "Design secure systems from the ground up with defense-in-depth strategies and zero-trust principles.", icon: Shield },
  { title: "Authentication & IAM", description: "Robust identity and access management with SSO, MFA and role-based access control.", icon: Fingerprint },
  { title: "Data Protection", description: "Encryption at rest and in transit, key management and data loss prevention strategies.", icon: Lock },
  { title: "Security Audits", description: "Comprehensive security assessments, vulnerability scanning and penetration testing.", icon: Eye },
  { title: "Compliance", description: "SOC 2, HIPAA, GDPR and ISO 27001 compliance preparation and ongoing management.", icon: FileCheck },
  { title: "Threat Monitoring", description: "Real-time threat detection, incident response and 24/7 security operations.", icon: AlertTriangle },
  { title: "Infrastructure Security", description: "Network security, firewall configuration and cloud security posture management.", icon: Server },
  { title: "Security Training", description: "Developer security training, secure coding practices and organizational awareness programs.", icon: Users },
];

export default function CybersecurityPage() {
  return (
    <main>
      <ServiceHero
        label="Cybersecurity"
        title="Protecting your digital assets with enterprise-grade security."
        description="Security architecture, authentication systems, compliance frameworks and threat monitoring designed to protect your business."
        image="/images/img8.jpg"
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

      {/* STANDARDS + IMAGE */}

      <section className="py-16 lg:py-32 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative z-10 container-width">
          <div className="grid gap-6 lg:gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="relative h-[300px] lg:h-[500px] overflow-hidden rounded-[40px]">
                <Image src="/images/img7.jpg" alt="Cybersecurity standards and compliance" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden lg:block">
                <div className="rounded-[24px] border border-zinc-200 bg-white p-5 shadow-xl">
                  <Shield size={24} className="text-black" />
                  <p className="mt-2 text-sm font-semibold">Enterprise-Grade</p>
                  <p className="text-xs text-zinc-500">Security by Design</p>
                </div>
              </div>
            </div>
            <div><h2 className="mt-4 text-5xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Built to global compliance standards.</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Our security practices align with industry-leading frameworks and regulatory requirements.
                We embed security into every phase of the development lifecycle.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["SOC 2", "HIPAA", "GDPR", "ISO 27001", "PCI DSS", "NIST", "OWASP", "CIS Benchmarks"].map((std) => (
                  <div key={std} className="group rounded-xl border border-zinc-200 bg-white p-4 text-center text-sm font-medium transition-all duration-300 hover:border-black hover:bg-black hover:text-white">
                    {std}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}

      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="relative z-10 container-width">
          <div className="max-w-3xl"><h2 className="mt-4 text-5xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Security by design.</h2>
          </div>
          <div className="mt-12 lg:mt-20 grid gap-8 md:grid-cols-3">
            {[
              { step: "01", title: "Assess", desc: "Identify vulnerabilities, threats and compliance requirements specific to your business context." },
              { step: "02", title: "Protect", desc: "Implement layered security controls, encryption and robust access management." },
              { step: "03", title: "Monitor", desc: "Continuous monitoring, threat detection and rapid incident response capabilities." },
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
