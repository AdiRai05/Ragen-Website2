import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-20">
      <div className="container-width">

        <div className="grid gap-12 lg:grid-cols-4">

          <div>
            <h3 className="text-2xl font-semibold">
              Ragen
            </h3>

            <p className="mt-4 max-w-xs text-zinc-600">
              Engineering modern digital systems,
              AI platforms and scalable infrastructure.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">
              Company
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-zinc-600">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">
              Services
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-zinc-600">
              <span>Software Engineering</span>
              <span>AI Systems</span>
              <span>Automation</span>
              <span>Cloud Infrastructure</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">
              Contact
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-zinc-600">
              <span>hello@ragen.org</span>
              <span>Worldwide Remote</span>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-zinc-200 pt-8 text-sm text-zinc-500">
          © 2026 Ragen. All rights reserved.
        </div>

      </div>
    </footer>
  );
}