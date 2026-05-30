import Image from "next/image";

interface ServiceHeroProps {
  label: string;
  title: string;
  description: string;
  image?: string;
}

export default function ServiceHero({
  label,
  title,
  description,
  image,
}: ServiceHeroProps) {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden">
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>
      )}

      {/* Grid Pattern Overlay for premium feel */}
      {!image && (
        <div className="absolute inset-0 bg-grid opacity-40" />
      )}

      {/* Glow accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-zinc-100/60 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 container-width">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          {label}
        </p>

        <h1 className="mt-6 max-w-5xl text-6xl font-semibold tracking-tight lg:text-8xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-600">
          {description}
        </p>
      </div>
    </section>
  );
}
