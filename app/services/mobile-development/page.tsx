import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Smartphone, Monitor, Cpu, Zap, Globe, Shield, BarChart3, Users } from "lucide-react";
import ServiceHero from "@/components/sections/service-hero";
import ContactCTA from "@/components/sections/contact-cta";

const offerings = [
  { title: "iOS Development", description: "Native iOS applications built with Swift and SwiftUI for exceptional performance and App Store success.", icon: Smartphone },
  { title: "Android Development", description: "Native Android apps with Kotlin and Jetpack Compose delivering smooth, responsive user experiences.", icon: Monitor },
  { title: "React Native", description: "Cross-platform applications sharing code between iOS and Android for faster delivery and consistent UX.", icon: Cpu },
  { title: "Flutter", description: "Beautiful, natively compiled applications from a single codebase with expressive, customizable UI.", icon: Zap },
  { title: "Mobile Architecture", description: "Scalable architecture design with offline support, state management and clean code patterns.", icon: Globe },
  { title: "App Security", description: "Secure data storage, biometric authentication, certificate pinning and encrypted communication channels.", icon: Shield },
  { title: "Performance Optimization", description: "App profiling, memory optimization, smooth 60fps animations and sub-second launch times.", icon: BarChart3 },
  { title: "Mobile UX Design", description: "Intuitive, accessible mobile interfaces designed for touch interactions and platform conventions.", icon: Users },
];

export default function MobileDevelopmentPage() {
  return (
    <main>
      <ServiceHero
        label="Mobile Development"
        title="Mobile applications engineered for performance and scale."
        description="Native and cross-platform mobile development for iOS and Android — designed for exceptional user experience, performance and reliability."
        image="/images/img6.jpg"
      />

      {/* METRICS */}

      <section className="border-y border-zinc-200 bg-white">
        <div className="container-width py-14">
          <div className="grid gap-10 md:grid-cols-4">
            {[
              { value: "500K+", label: "App Downloads" },
              { value: "4.8★", label: "Avg App Store Rating" },
              { value: "99.9%", label: "Crash-Free Sessions" },
              { value: "Dual", label: "iOS + Android Platform" },
            ].map((m) => (
              <div key={m.label} className="text-center transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-5xl font-semibold tracking-tight">{m.value}</h3>
                <p className="mt-3 text-zinc-600">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERINGS */}

      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
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

      {/* TECH + IMAGE */}

      <section className="py-32 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative z-10 container-width">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="relative h-[500px] overflow-hidden rounded-[40px]">
                <Image src="/images/img1.jpg" alt="Mobile development" fill className="object-cover" />
              </div>
            </div>
            <div><h2 className="mt-4 text-5xl font-semibold tracking-tight">Modern mobile technologies.</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                From native Swift to cross-platform Flutter — we choose the right technology
                for your specific requirements, audience and timeline.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { cat: "iOS", techs: ["Swift", "SwiftUI", "UIKit", "Combine"] },
                  { cat: "Android", techs: ["Kotlin", "Jetpack Compose", "Room", "Coroutines"] },
                  { cat: "Cross-Platform", techs: ["React Native", "Flutter", "Expo", "TypeScript"] },
                  { cat: "Infra", techs: ["Firebase", "Fastlane", "TestFlight", "CI/CD"] },
                ].map((g) => (
                  <div key={g.cat} className="group rounded-[20px] border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-md">
                    <h4 className="font-semibold">{g.cat}</h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {g.techs.map((t) => (
                        <span key={t} className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                          {t}
                        </span>
                      ))}
                    </div>
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
