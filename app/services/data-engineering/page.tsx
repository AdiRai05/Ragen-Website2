import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Database, BarChart3, Layers, Workflow, Cpu, Shield, Globe, Zap } from "lucide-react";
import ServiceHero from "@/components/sections/service-hero";
import ContactCTA from "@/components/sections/contact-cta";

const offerings = [
  { title: "Data Warehousing", description: "Scalable data warehouses on Snowflake, BigQuery and Redshift for enterprise-grade analytics and reporting.", icon: Database },
  { title: "ETL Pipelines", description: "Robust extract, transform and load pipelines that process data reliably at any scale with monitoring and error handling.", icon: Workflow },
  { title: "Business Intelligence", description: "Interactive dashboards and reports that turn raw data into actionable business insights for decision makers.", icon: BarChart3 },
  { title: "Data Lake Architecture", description: "Modern data lake designs combining structured and unstructured data for advanced analytics and ML workloads.", icon: Layers },
  { title: "Real-time Analytics", description: "Streaming data processing for real-time dashboards, alerts and automated decision systems.", icon: Zap },
  { title: "ML Pipelines", description: "End-to-end machine learning pipelines from data preparation through model training and deployment.", icon: Cpu },
  { title: "Data Governance", description: "Data quality, cataloging, lineage tracking and access control frameworks for trustworthy data.", icon: Shield },
  { title: "API Integration", description: "Connect and consolidate data from multiple sources through robust, documented API integrations.", icon: Globe },
];

export default function DataEngineeringPage() {
  return (
    <main>
      <ServiceHero
        label="Data Engineering"
        title="Turn your data into a competitive advantage."
        description="Data warehousing, analytics platforms, ETL pipelines and business intelligence systems built for scale and reliability."
        image="/images/img7.jpg"
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

      {/* PIPELINE FLOW with image */}

      <section className="py-32 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50/30 to-transparent rounded-full blur-3xl" />
        <div className="relative z-10 container-width">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Approach</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-tight">From raw data to business insight.</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                We build end-to-end data platforms that ingest, transform, store and surface
                data — turning scattered information into unified, analysis-ready assets.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { step: "01", title: "Ingest", desc: "Connect and collect data from databases, APIs, events and files." },
                  { step: "02", title: "Transform", desc: "Clean, model and enrich data into analysis-ready datasets." },
                  { step: "03", title: "Store", desc: "Optimized storage in warehouses, lakes and operational databases." },
                  { step: "04", title: "Analyze", desc: "Dashboards, reports and ML models that drive business decisions." },
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
                <Image src="/images/img9.jpg" alt="Data pipeline" fill className="object-cover" />
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
            <h2 className="mt-4 text-5xl font-semibold tracking-tight">Modern data technologies.</h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3 xl:grid-cols-7">
            {["PostgreSQL", "MongoDB", "Redis", "Snowflake", "BigQuery", "Redshift", "dbt", "Airflow", "Kafka", "Spark", "Python", "Vector DBs", "Tableau", "Power BI"].map((tech) => (
              <div key={tech} className="rounded-[24px] border border-zinc-200 bg-white p-5 text-center text-sm font-medium transition-all duration-300 hover:border-black hover:bg-black hover:text-white hover:scale-105">
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
