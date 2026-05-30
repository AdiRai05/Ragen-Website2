"use client";

const testimonials = [
  {
    quote:
      "Ragen helped us rethink our entire product architecture. The result was a platform capable of supporting significantly higher traffic while improving operational efficiency.",
    author: "Technology Director",
    company: "Financial Services Company",
  },
  {
    quote:
      "Their engineering approach stood out immediately. Instead of focusing on features alone, they focused on scalability, maintainability and long-term business value.",
    author: "Head of Operations",
    company: "Enterprise SaaS Organization",
  },
  {
    quote:
      "From discovery to deployment, the process was structured, transparent and highly collaborative. The final system exceeded expectations.",
    author: "Product Lead",
    company: "Digital Platform Company",
  },
  {
    quote:
      "Working with Ragen felt like having an elite engineering team as part of our organization. The quality and attention to detail were exceptional.",
    author: "CTO",
    company: "Healthcare Technology Firm",
  },
  {
    quote:
      "They didn't just build what we asked for — they challenged our assumptions and delivered something better than we imagined.",
    author: "VP of Engineering",
    company: "E-Commerce Platform",
  },
  {
    quote:
      "The combination of technical depth and business understanding made Ragen an invaluable partner in our digital transformation.",
    author: "CEO",
    company: "Manufacturing Company",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-zinc-50">
      <div className="container-width">
        <div className="max-w-3xl"><h2 className="mt-4 text-5xl font-semibold tracking-tight">
            Trusted by technology leaders.
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            Hear from executives and engineering leaders who have
            partnered with Ragen on their most important initiatives.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="group rounded-[32px] border border-zinc-200 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-xl"
            >
              <p className="leading-8 text-zinc-600">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-8 border-t border-zinc-100 pt-6">
                <p className="font-semibold">{t.author}</p>
                <p className="mt-1 text-sm text-zinc-500">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
