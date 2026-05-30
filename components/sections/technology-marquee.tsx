"use client";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "OpenAI",
  "Anthropic",
  "AWS",
  "Azure",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "LangChain",
];

export default function TechnologyMarquee() {
  return (
    <section className="overflow-hidden border-y border-zinc-200 py-8">
      <div className="animate-[marquee_25s_linear_infinite] whitespace-nowrap">

        {[...technologies, ...technologies].map((tech, index) => (
          <span
            key={index}
            className="mx-8 inline-block text-lg font-medium text-zinc-600"
          >
            {tech}
          </span>
        ))}

      </div>
    </section>
  );
}