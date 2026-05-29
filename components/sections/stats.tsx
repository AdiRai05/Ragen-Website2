"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
  },
  {
    value: "99.9%",
    label: "Infrastructure Uptime",
  },
  {
    value: "15+",
    label: "Enterprise Systems Built",
  },
  {
    value: "$20M+",
    label: "Revenue Impact",
  },
];

export default function Stats() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container-width">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-sm uppercase tracking-[0.25em] text-zinc-400">
            Impact
          </span>

          <h2 className="mt-4 text-5xl font-semibold tracking-tight">
            Results that matter.
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            We focus on measurable business outcomes,
            not vanity metrics.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-800 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black p-10"
            >
              <h3 className="text-5xl font-semibold">
                {item.value}
              </h3>

              <p className="mt-4 text-zinc-400">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}