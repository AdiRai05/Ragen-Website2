"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, users, goals and technical requirements.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "We design scalable systems, workflows and technical foundations.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our team builds, tests and iterates rapidly using modern technologies.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "Deployment, monitoring, optimization and continuous improvement.",
  },
];

export default function Process() {
  return (
    <section className="py-32 bg-zinc-50">
      <div className="container-width">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Process
          </span>

          <h2 className="mt-4 text-5xl font-semibold tracking-tight">
            How we build
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            A structured engineering process focused on speed,
            reliability and long-term scalability.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">

          {steps.map((step) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-zinc-200 bg-white p-8"
            >
              <span className="text-sm font-medium text-zinc-400">
                {step.number}
              </span>

              <h3 className="mt-4 text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}