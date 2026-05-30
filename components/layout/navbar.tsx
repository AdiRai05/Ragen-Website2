"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200 bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-width flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight transition-opacity duration-300 hover:opacity-70"
        >
          RAGEN
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}

        <button
          className="flex lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}

      {mobileOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-white lg:hidden">
          <nav className="container-width flex flex-col gap-6 py-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-medium text-zinc-700 transition-colors duration-300 hover:text-black"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-6 border-t border-zinc-200 pt-6">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex rounded-full bg-black px-8 py-4 text-white font-medium"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
