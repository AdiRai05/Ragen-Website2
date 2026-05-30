import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Blocks, FileCode, Coins, Globe, Shield, Cpu, Workflow, BarChart3 } from "lucide-react";
import ServiceHero from "@/components/sections/service-hero";
import ContactCTA from "@/components/sections/contact-cta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blockchain Solutions â Smart Contracts, Web3 & DeFi",
  description: "Smart contracts, Web3 applications, token systems and DeFi infrastructure built with security and scalability in mind.",
};


const offerings = [
  { title: "Smart Contracts", description: "Secure, audited smart contracts on Ethereum, Polygon and other EVM-compatible chains with comprehensive testing.", icon: FileCode },
  { title: "Web3 Applications", description: "Decentralized applications with wallet integration, token systems and on-chain logic for real-world use cases.", icon: Globe },
  { title: "Token Systems", description: "ERC-20, ERC-721 and ERC-1155 token implementations for DeFi protocols, NFTs and loyalty programs.", icon: Coins },
  { title: "DeFi Infrastructure", description: "Decentralized finance protocols, liquidity pools, staking systems and yield optimization strategies.", icon: BarChart3 },
  { title: "Blockchain Infrastructure", description: "Node deployment, chain indexing, gas optimization and cross-chain bridge integration.", icon: Blocks },
  { title: "Security Audits", description: "Comprehensive smart contract auditing, vulnerability assessment and formal verification methodologies.", icon: Shield },
  { title: "Enterprise Blockchain", description: "Private and consortium chains for supply chain, identity management and enterprise use cases.", icon: Cpu },
  { title: "Smart Contract Integration", description: "Integrate blockchain capabilities into existing web and mobile applications seamlessly.", icon: Workflow },
];

export default function BlockchainPage() {
  return (
    <main>
      <ServiceHero
        label="Blockchain Solutions"
        title="Decentralized technology engineered for the real world."
        description="Smart contracts, Web3 applications, token systems and DeFi infrastructure built with security and scalability in mind."
        image="/images/img10.jpg"
      />

      {/* OFFERINGS */}

      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="relative z-10 container-width">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group rounded-[32px] border border-zinc-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-zinc-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLATFORMS + IMAGE */}

      <section className="py-16 lg:py-32 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative z-10 container-width">
          <div className="grid gap-6 lg:gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="relative h-[300px] lg:h-[500px] overflow-hidden rounded-[40px]">
                <Image src="/images/img11.jpg" alt="Blockchain technology platforms" fill className="object-cover" />
              </div>
            </div>
            <div><h2 className="mt-4 text-5xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Multi-chain expertise.</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                We build across leading blockchain platforms, choosing the right chain for each
                use case — from high-throughput L2s to privacy-focused networks.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Ethereum", "Polygon", "Arbitrum", "Optimism", "Base", "Avalanche", "Solana", "BSC"].map((p) => (
                  <div key={p} className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-black hover:bg-black hover:text-white hover:scale-105">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="relative z-10 container-width">
          <div className="max-w-3xl"><h2 className="mt-4 text-5xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">From concept to mainnet.</h2>
          </div>
          <div className="mt-12 lg:mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              { step: "01", title: "Design", desc: "Architecture, tokenomics and smart contract specification." },
              { step: "02", title: "Develop", desc: "Smart contract development with comprehensive unit and integration tests." },
              { step: "03", title: "Audit", desc: "Security auditing, gas optimization and formal verification." },
              { step: "04", title: "Deploy", desc: "Mainnet deployment with monitoring, verification and ongoing support." },
            ].map((s) => (
              <div key={s.step} className="group rounded-[32px] border border-zinc-200 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-xl">
                <span className="text-sm font-medium text-zinc-400">{s.step}</span>
                <h3 className="mt-4 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-4 leading-8 text-zinc-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
