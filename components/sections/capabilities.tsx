"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Enterprise Software",
    description:
      "Scalable business applications, SaaS products and internal platforms.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "AI agents, copilots, RAG systems and intelligent automation.",
  },
  {
    title: "Cloud Transformation",
    description:
      "Cloud-native architecture, migration and infrastructure modernization.",
  },
  {
    title: "Data Platforms",
    description:
      "Data engineering, warehousing, analytics and reporting systems.",
  },
  {
    title: "Cybersecurity",
    description:
      "Security architecture, authentication and compliance solutions.",
  },
  {
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, infrastructure automation and operational excellence.",
  },
  {
    title: "Mobile Engineering",
    description:
      "Native and cross-platform mobile applications built for scale.",
  },
  {
    title: "Blockchain Solutions",
    description:
      "Smart contracts, decentralized applications and Web3 infrastructure.",
  },
];

export default function Capabilities() {
  return (
    <section className="py-32 bg-white">
      <div className="container-width">

        <div className="max-w-3xl"><h2 className="mt-4 text-5xl font-semibold tracking-tight">
            End-to-end technology expertise.
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            From enterprise platforms and AI systems to cloud
            infrastructure and cybersecurity, Ragen delivers
            technology solutions designed for long-term growth.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="group rounded-[32px] border border-zinc-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold">
                {capability.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}