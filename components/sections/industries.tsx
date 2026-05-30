"use client";

const industries = [
  "Financial Services",
  "Healthcare",
  "Retail",
  "Manufacturing",
  "Logistics",
  "Education",
  "Real Estate",
  "Technology",
  "SaaS",
  "E-Commerce",
  "Government",
  "Energy",
];

export default function Industries() {
  return (
    <section className="py-16 lg:py-32 bg-zinc-50">
      <div className="container-width">

        <div className="max-w-3xl"><h2 className="mt-4 text-5xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Experience across industries.
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            We help organizations modernize systems,
            automate operations and create digital experiences
            across diverse industries.
          </p>
        </div>

        <div className="mt-12 lg:mt-20 flex flex-wrap gap-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-full border border-zinc-200 bg-white px-6 py-4 text-sm font-medium transition hover:border-black"
            >
              {industry}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}