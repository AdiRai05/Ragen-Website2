"use client";

const clients = [
  { name: "FinTech Innovations", industry: "Financial Services" },
  { name: "MediCore Systems", industry: "Healthcare" },
  { name: "ShopStream", industry: "E-Commerce" },
  { name: "CloudNine SaaS", industry: "Technology" },
  { name: "LogiTrack", industry: "Logistics" },
  { name: "EduVantage", industry: "Education" },
  { name: "PropTech Solutions", industry: "Real Estate" },
  { name: "GreenEnergy AI", industry: "Energy" },
  { name: "BlockSecure", industry: "Blockchain" },
  { name: "DataPulse", industry: "Data Analytics" },
  { name: "CyberShield", industry: "Cybersecurity" },
  { name: "GovDigital", industry: "Government" },
];

export default function ClientLogos() {
  return (
    <section className="border-y border-zinc-200 bg-white py-20">
      <div className="container-width">
        <p className="mb-12 text-center text-sm uppercase tracking-[0.25em] text-zinc-500">
          Trusted by organizations worldwide
        </p>

        <div className="grid gap-8 md:grid-cols-3 xl:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-100 bg-zinc-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-200 text-lg font-bold text-zinc-500 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                {client.name.charAt(0)}
              </div>

              <p className="mt-3 text-sm font-semibold text-zinc-700">
                {client.name}
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                {client.industry}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
