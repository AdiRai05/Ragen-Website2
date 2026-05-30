import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/img3.jpg"
          alt="Technology background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/85" />
        <div className="absolute inset-0 bg-gradient-to-b pointer-events-none from-transparent via-transparent to-white" />
      </div>

      <div className="relative z-10 w-full pt-32 pb-24">
        <div className="container-width">
          <div className="max-w-4xl">
            <p className="inline-block rounded-full border border-zinc-300 bg-white/60 px-4 py-2 text-sm font-medium tracking-wide text-zinc-600 backdrop-blur">
              Enterprise Technology Engineering
            </p>

            <h1 className="mt-8 text-6xl font-semibold tracking-tight lg:text-8xl">
              We build software
              <br />
              that{" "}
              <span className="text-zinc-400">scales business.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-8 sm:leading-9 text-zinc-600">
              Ragen engineers enterprise software, AI systems and cloud
              infrastructure for organizations that demand reliability,
              scalability and long-term value.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-zinc-300 bg-white/60 px-8 py-4 font-medium backdrop-blur transition-all duration-300 hover:bg-white hover:border-black"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
