import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-width py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-semibold tracking-tight">
              RAGEN
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
          </div>
        </div>

        <div className="mt-20 border-t border-zinc-800 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Ragen. All rights reserved.</p>
          <p>Engineering the future of business.</p>
        </div>
      </div>
    </footer>
  );
}
