"use client";

import { motion } from "framer-motion";
import GridBackground from "@/components/animations/grid-background";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-48 pb-36">
      <GridBackground />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_40%)]" />

      <div className="container-width grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

        {/* LEFT SIDE */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600 shadow-sm"
          >
            Engineering-first digital systems company
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8 max-w-5xl text-6xl lg:text-8xl font-semibold leading-[0.95] tracking-tight"
          >
            Engineering modern digital systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-lg text-lg leading-8 text-zinc-600"
          >
            Ragen builds scalable software platforms, AI systems,
            automation workflows and enterprise infrastructure
            for ambitious businesses.
          </motion.p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-full bg-black px-6 py-3 text-white transition hover:opacity-90">
              Book a Call
            </button>

            <button className="rounded-full border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100">
              View Work
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-2xl shadow-zinc-200/50">

            <div className="space-y-6">

              <div className="rounded-3xl border border-zinc-200 p-6">

                <p className="text-sm text-zinc-500">
                  Architecture Overview
                </p>

                <div className="mt-8 space-y-6">

                  <div className="rounded-2xl bg-zinc-100 px-4 py-3 text-center font-medium">
                    Client Applications
                  </div>

                  <div className="flex justify-center text-zinc-400 text-xl">
                    ↓
                  </div>

                  <div className="rounded-2xl bg-zinc-100 px-4 py-3 text-center font-medium">
                    API Layer
                  </div>

                  <div className="flex justify-center text-zinc-400 text-xl">
                    ↓
                  </div>

                  <div className="rounded-2xl bg-zinc-100 px-4 py-3 text-center font-medium">
                    AI & Automation
                  </div>

                  <div className="flex justify-center text-zinc-400 text-xl">
                    ↓
                  </div>

                  <div className="rounded-2xl bg-zinc-100 px-4 py-3 text-center font-medium">
                    Cloud Infrastructure
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

