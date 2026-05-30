import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, HeartPulse, ShoppingCart, Factory, Truck, GraduationCap, Building, Cpu, Globe, Landmark, Zap } from "lucide-react";

const industries = [
  {
    title: "Financial Services",
    description: "Trading platforms, risk analytics, regulatory compliance systems and digital banking solutions.",
    icon: Landmark,
    image: "/images/img10.jpg",
    highlights: ["Algorithmic Trading", "Risk Management", "RegTech", "Digital Banking"],
  },
  {
    title: "Healthcare",
    description: "Patient management systems, telemedicine platforms, health data analytics and HIPAA-compliant solutions.",
    icon: HeartPulse,
    image: "/images/img11.jpg",
    highlights: ["EHR Integration", "Telemedicine", "Health Analytics", "HIPAA Compliance"],
  },
  {
    title: "Retail & E-Commerce",
    description: "E-commerce platforms, inventory management, personalization engines and omnichannel retail systems.",
    icon: ShoppingCart,
    image: "/images/img1.jpg",
    highlights: ["E-Commerce", "Inventory Mgmt", "Personalization", "Payment Systems"],
  },
  {
    title: "Manufacturing",
    description: "Industrial IoT, supply chain optimization, quality control systems and smart factory solutions.",
    icon: Factory,
    image: "/images/img5.jpg",
    highlights: ["IoT Integration", "Supply Chain", "Quality Control", "Automation"],
  },
  {
    title: "Logistics & Transportation",
    description: "Fleet management, route optimization, warehouse automation and real-time tracking systems.",
    icon: Truck,
    image: "/images/img7.jpg",
    highlights: ["Fleet Tracking", "Route Planning", "Warehouse Mgmt", "Last-Mile Delivery"],
  },
  {
    title: "Education",
    description: "Learning management systems, edtech platforms, virtual classrooms and student analytics.",
    icon: GraduationCap,
    image: "/images/img2.jpg",
    highlights: ["LMS Platforms", "Virtual Classroom", "Content Delivery", "Analytics"],
  },
  {
    title: "Real Estate",
    description: "Property management platforms, smart building systems and real estate marketplaces.",
    icon: Building,
    image: "/images/img8.jpg",
    highlights: ["Property Mgmt", "Marketplaces", "Smart Building", "Analytics"],
  },
  {
    title: "Technology & SaaS",
    description: "SaaS platforms, API products, developer tools and cloud-native software products.",
    icon: Cpu,
    image: "/images/img4.jpg",
    highlights: ["SaaS Development", "API Design", "Cloud Native", "Developer Tools"],
  },
  {
    title: "Government & Public Sector",
    description: "Digital public services, data platforms, secure communication and citizen engagement systems.",
    icon: Building2,
    image: "/images/img3.jpg",
    highlights: ["Digital Services", "Data Platforms", "Security", "Accessibility"],
  },
  {
    title: "Energy",
    description: "Smart grid systems, energy trading platforms, sustainability analytics and renewable tech.",
    icon: Zap,
    image: "/images/img9.jpg",
    highlights: ["Smart Grid", "Energy Trading", "Analytics", "Sustainability"],
  },
];

const stats = [
  { value: "12+", label: "Industries Served" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "Global", label: "Delivery Capability" },
  { value: "Domain Experts", label: "Per Industry Vertical" },
];

export default function IndustriesPage() {
  return (
    <main className="pt-28 lg:pt-40 pb-32">
      {/* HERO */}

      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/img9.jpg" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-white/90" />
          <div className="absolute inset-0 bg-gradient-to-b pointer-events-none from-white/80 via-white/60 to-white" />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl pointer-events-none from-blue-50/40 to-transparent rounded-full blur-3xl" />
        <div className="relative z-10 container-width"><h1 className="mt-6 max-w-5xl text-6xl font-semibold tracking-tight lg:text-8xl">
            Deep expertise across sectors.
          </h1>
          <p className="mt-8 max-w-3xl text-lg sm:text-xl leading-8 sm:leading-9 text-zinc-600">
            We bring domain-specific knowledge and technology expertise
            to every engagement — understanding your industry as deeply
            as we understand engineering.
          </p>
        </div>
      </section>

      {/* STATS */}

      <section className="border-y border-zinc-200 bg-white">
        <div className="container-width py-16">
          <div className="grid gap-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">{stat.value}</h3>
                <p className="mt-3 text-zinc-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY DETAIL CARDS */}

      <section className="py-32">
        <div className="container-width">
          <div className="space-y-12">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.title}
                  className="group overflow-hidden rounded-[32px] border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)]"
                >
                  <div className="grid lg:grid-cols-[1fr_1.2fr]">
                    <div className="relative min-h-[250px] lg:h-[350px] overflow-hidden">
                      <Image
                        src={industry.image}
                        alt={industry.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex flex-col justify-center p-10 lg:p-14">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                          <Icon size={26} />
                        </div>
                        <h2 className="text-4xl font-semibold">{industry.title}</h2>
                      </div>

                      <p className="mt-6 leading-8 text-zinc-600">{industry.description}</p>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {industry.highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium transition-all duration-300 group-hover:border-zinc-400"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section>
        <div className="container-width">
          <div className="rounded-[40px] bg-black px-10 py-24 text-center text-white"><h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-tight">
              Technology solutions tailored to your sector.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Let&apos;s discuss how our cross-industry experience
              can accelerate your technology initiatives.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black font-medium transition-all duration-300 hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
