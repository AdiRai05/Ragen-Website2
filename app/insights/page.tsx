import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const insights = [
  {
    title: "The Rise of AI Agents in Enterprise Software",
    excerpt: "How autonomous AI agents are transforming enterprise workflows — from customer support to complex decision-making pipelines.",
    date: "May 15, 2026",
    readTime: "6 min read",
    category: "Artificial Intelligence",
    image: "/images/img2.jpg",
  },
  {
    title: "Cloud-Native Architecture: Best Practices for 2026",
    excerpt: "Key patterns and practices for building resilient, scalable cloud-native applications in the current landscape.",
    date: "May 8, 2026",
    readTime: "8 min read",
    category: "Cloud & DevOps",
    image: "/images/img5.jpg",
  },
  {
    title: "RAG Systems: The Future of Enterprise AI",
    excerpt: "Why retrieval-augmented generation is becoming the standard approach for enterprise AI deployments.",
    date: "April 28, 2026",
    readTime: "5 min read",
    category: "Artificial Intelligence",
    image: "/images/img11.jpg",
  },
  {
    title: "Building Scalable Data Pipelines for Modern Applications",
    excerpt: "Architecture patterns for data engineering at scale — from ingestion to analytics and machine learning.",
    date: "April 20, 2026",
    readTime: "7 min read",
    category: "Data Engineering",
    image: "/images/img7.jpg",
  },
  {
    title: "Cybersecurity for SaaS Platforms: A Practical Guide",
    excerpt: "Essential security practices for SaaS platforms — authentication, data protection and compliance considerations.",
    date: "April 12, 2026",
    readTime: "6 min read",
    category: "Cybersecurity",
    image: "/images/img8.jpg",
  },
  {
    title: "The State of Blockchain in Enterprise: 2026 Edition",
    excerpt: "How enterprises are adopting blockchain technology — trends, use cases and implementation strategies.",
    date: "April 5, 2026",
    readTime: "8 min read",
    category: "Blockchain",
    image: "/images/img10.jpg",
  },
  {
    title: "From Monolith to Microservices: A Migration Playbook",
    excerpt: "A step-by-step approach to breaking down monolithic applications into scalable microservices.",
    date: "March 28, 2026",
    readTime: "10 min read",
    category: "Software Engineering",
    image: "/images/img4.jpg",
  },
  {
    title: "Mobile Development Trends Shaping 2026",
    excerpt: "The technologies, frameworks and patterns defining mobile application development this year.",
    date: "March 20, 2026",
    readTime: "5 min read",
    category: "Mobile Development",
    image: "/images/img6.jpg",
  },
  {
    title: "Technology Consulting: Building a Digital Transformation Roadmap",
    excerpt: "How to approach digital transformation strategically — aligning technology with business outcomes.",
    date: "March 12, 2026",
    readTime: "7 min read",
    category: "Technology Consulting",
    image: "/images/img1.jpg",
  },
];

const categories = [
  "All",
  "Artificial Intelligence",
  "Cloud & DevOps",
  "Data Engineering",
  "Cybersecurity",
  "Software Engineering",
  "Blockchain",
  "Mobile Development",
];

export default function InsightsPage() {
  return (
    <main className="pt-40 pb-32">
      {/* HERO */}

      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/img4.jpg" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-white/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50/40 to-transparent rounded-full blur-3xl" />
        <div className="relative z-10 container-width"><h1 className="mt-6 max-w-5xl text-6xl font-semibold tracking-tight lg:text-8xl">
            Engineering perspectives on technology and business.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-600">
            Articles, guides and thought leadership on software engineering,
            AI, cloud architecture and digital transformation.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="pb-16">
        <div className="container-width">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:border-black hover:bg-black hover:text-white ${
                  cat === "All" ? "border-black bg-black text-white" : "border-zinc-200 bg-white text-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}

      <section className="pb-24">
        <div className="container-width">
          <div className="overflow-hidden rounded-[40px] border border-zinc-200 bg-white">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[400px]">
                <Image
                  src="/images/img3.jpg"
                  alt="Featured"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-10 lg:p-16">
                <span className="rounded-full bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-600 w-fit">
                  Featured
                </span>

                <h2 className="mt-6 text-4xl font-semibold">
                  How Ragen Approaches Enterprise Technology Engineering
                </h2>

                <p className="mt-6 leading-8 text-zinc-600">
                  A deep dive into our engineering philosophy — how we think
                  about architecture, scalability, AI integration and long-term
                  technology investment.
                </p>

                <div className="mt-6 flex items-center gap-6 text-sm text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    May 22, 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    12 min read
                  </span>
                </div>

                <div className="mt-8">
                  <span className="group inline-flex items-center gap-2 font-medium transition-all duration-300 hover:gap-3 cursor-pointer">
                    Read Article
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}

      <section>
        <div className="container-width">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {insights.map((article) => (
              <div
                key={article.title}
                className="group overflow-hidden rounded-[32px] border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)]"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium backdrop-blur">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-zinc-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold leading-snug">
                    {article.title}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-600">
                    {article.excerpt}
                  </p>

                  <div className="mt-6">
                    <span className="group inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3 cursor-pointer">
                      Read More
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}

      <section className="mt-32">
        <div className="container-width">
          <div className="rounded-[40px] bg-zinc-50 border border-zinc-200 px-10 py-24 text-center"><h2 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold tracking-tight">
              Get engineering insights in your inbox.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
              Deep dives on AI, cloud architecture, software engineering
              and digital transformation — delivered monthly.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full max-w-md rounded-full border border-zinc-300 bg-white px-6 py-4 text-sm outline-none transition-all duration-300 focus:border-black"
              />
              <button className="rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
