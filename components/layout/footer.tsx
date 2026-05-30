import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-width py-20">
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block transition-opacity duration-300 hover:opacity-80">
              <Image src="/logo.png" alt="Ragen" width={140} height={36} className="h-8 w-auto brightness-0 invert" />
            </Link>

            <p className="mt-6 text-zinc-400 leading-7 max-w-sm">
              Engineering enterprise software, AI systems and digital
              platforms for ambitious organizations worldwide.
            </p>

            <a
              href="mailto:ragen@ragen.org"
              className="mt-6 inline-block text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              ragen@ragen.org
            </a>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-zinc-300">
              Services
            </h4>

            <ul className="mt-6 space-y-3 text-zinc-400">
              <li>
                <Link href="/services/software-engineering" className="transition-colors duration-300 hover:text-white">
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/artificial-intelligence" className="transition-colors duration-300 hover:text-white">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-devops" className="transition-colors duration-300 hover:text-white">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link href="/services/data-engineering" className="transition-colors duration-300 hover:text-white">
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="transition-colors duration-300 hover:text-white">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/blockchain-solutions" className="transition-colors duration-300 hover:text-white">
                  Blockchain Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-zinc-300">
              Company
            </h4>

            <ul className="mt-6 space-y-3 text-zinc-400">
              <li>
                <Link href="/about" className="transition-colors duration-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="transition-colors duration-300 hover:text-white">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/industries" className="transition-colors duration-300 hover:text-white">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/insights" className="transition-colors duration-300 hover:text-white">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors duration-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-zinc-300">
              Connect
            </h4>

            <ul className="mt-6 space-y-3 text-zinc-400">
              <li>Global Remote Delivery</li>
              <li>
                <a href="mailto:ragen@ragen.org" className="transition-colors duration-300 hover:text-white">
                  ragen@ragen.org
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/ragentechnology?igsh=MWRpamt6OHlwZnI2&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-white hover:text-white hover:scale-110"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1FASA4qxdi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-white hover:text-white hover:scale-110"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/ragentechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-white hover:text-white hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-20 border-t border-zinc-800 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Ragen. All rights reserved.</p>
          <p>Engineering the future of business.</p>
        </div>
      </div>
    </footer>
  );
}
