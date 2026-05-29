export default function TrustBar() {
  const technologies = [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "AI Systems",
    "Cloud Infrastructure",
    "Automation",
    "PostgreSQL",
  ];

  return (
    <section className="border-y border-zinc-200 bg-white">
      <div className="container-width py-10">

        <p className="mb-6 text-center text-sm uppercase tracking-[0.2em] text-zinc-500">
          Technologies We Build With
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2 text-sm"
            >
              {tech}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}