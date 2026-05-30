interface ServiceHeroProps {
  label: string;
  title: string;
  description: string;
}

export default function ServiceHero({
  label,
  title,
  description,
}: ServiceHeroProps) {
  return (
    <section className="pt-28 lg:pt-40 pb-24">
      <div className="container-width"><h1 className="mt-6 max-w-5xl text-4xl sm:text-5xl lg:text-8xl font-semibold tracking-tight">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-lg sm:text-xl leading-8 sm:leading-9 text-zinc-600">
          {description}
        </p>

      </div>
    </section>
  );
}