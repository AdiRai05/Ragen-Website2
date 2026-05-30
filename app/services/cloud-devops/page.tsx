import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cloud, Server, Container, Globe, Shield, Settings, BarChart3, Zap } from "lucide-react";
import ServiceHero from "@/components/sections/service-hero";
import ContactCTA from "@/components/sections/contact-cta";

const offerings = [
  { title: "Cloud Architecture", description: "Design and implementation of cloud-native architectures on AWS and Azure for maximum scalability and cost efficiency.", icon: Cloud },
  { title: "Infrastructure as Code", description: "Terraform, Pulumi and CloudFormation for reproducible, version-controlled infrastructure deployments.", icon: Settings },
  { title: "Containerization", description: "Docker and Kubernetes orchestration for portable, scalable and resilient application deployment.", icon: Container },
  { title: "CI/CD Pipelines", description: "Automated build, test and deployment pipelines for faster, more reliable software releases.", icon: Zap },
  { title: "Cloud Migration", description: "Seamless migration from on-premise or legacy infrastructure to modern cloud platforms with minimal downtime.", icon: Server },
  { title: "Multi-Cloud Strategy", description: "Vendor-agnostic architectures leveraging the best of AWS, Azure and hybrid environments.", icon: Globe },
  { title: "Security & Compliance", description: "Cloud security posture management, IAM, encryption and compliance frameworks.", icon: Shield },
  { title: "Monitoring & Observability", description: "Comprehensive logging, metrics, tracing and alerting for full infrastructure visibility.", icon: BarChart3 },
];

export default function CloudDevOpsPage() {
  return (
    <main>
      <ServiceHero
        label="Cloud & DevOps"
        title="Infrastructure that scales with your ambition."
        description="Cloud-native architecture, containerization, CI/CD automation and enterprise infrastructure engineering on AWS and Azure."
        image="/images/img5.jpg"
      />

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

      {/* BENEFITS with image */}

      <section className="py-32 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-50/30 to-transparent rounded-full blur-3xl" />
        <div className="relative z-10 container-width">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div><h2 className="mt-4 text-5xl font-semibold tracking-tight">Infrastructure metrics that matter.</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">Our cloud engineering delivers measurable improvements in reliability, cost and deployment speed.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { value: "99.99%", label: "Uptime SLA" },
                  { value: "40-60%", label: "Cost Reduction" },
                  { value: "10x", label: "Faster Deployments" },
                  { value: "Zero", label: "Downtime Releases" },
                ].map((b) => (
                  <div key={b.label} className="rounded-[20px] border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-md">
                    <h4 className="text-2xl font-semibold">{b.value}</h4>
                    <p className="mt-1 text-sm text-zinc-600">{b.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[550px] overflow-hidden rounded-[40px]">
                <Image src="/images/img3.jpg" alt="Cloud infrastructure" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}

      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="relative z-10 container-width">
          <div className="max-w-3xl"><h2 className="mt-4 text-5xl font-semibold tracking-tight">Enterprise cloud technologies.</h2>
          </div>
          <div className="mt-16 flex flex-wrap gap-4">
            {["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Pulumi", "GitHub Actions", "ArgoCD", "Prometheus", "Grafana", "ELK Stack", "Istio"].map((tech) => (
              <div key={tech} className="rounded-full border border-zinc-200 px-6 py-4 text-sm font-medium transition-all duration-300 hover:border-black hover:bg-black hover:text-white hover:scale-105">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
