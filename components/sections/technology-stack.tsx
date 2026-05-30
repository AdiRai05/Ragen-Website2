"use client";

const techCategories = [
  {
    title: "Frontend",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    title: "Cloud & DevOps",
    technologies: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
  },
  {
    title: "Artificial Intelligence",
    technologies: [
      "OpenAI",
      "Anthropic",
      "LangChain",
      "RAG Systems",
      "AI Agents",
    ],
  },
  {
    title: "Data Engineering",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Vector Databases",
      "Analytics Pipelines",
    ],
  },
  {
    title: "Blockchain",
    technologies: [
      "Ethereum",
      "Solidity",
      "Web3.js",
      "Smart Contracts",
      "DeFi Infrastructure",
    ],
  },
];

export default function TechnologyStack() {
  return (
    <section className="py-32 bg-zinc-50">
      <div className="container-width">
        <div className="max-w-3xl"><h2 className="mt-4 text-5xl font-semibold tracking-tight">
            Modern technologies. Enterprise reliability.
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            We leverage proven technologies and modern engineering
            practices to build scalable software platforms,
            intelligent systems and enterprise-grade infrastructure.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-[32px] border border-zinc-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium transition-all duration-300 group-hover:border-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}