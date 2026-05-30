"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // ── Scroll to top on every page navigation ──
  useEffect(() => {
    // Fire once on next frame so DOM is ready
    requestAnimationFrame(() => {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
    });
  }, [pathname]);

  // ── Infosys-style: hide on scroll down, show on scroll up ──
  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;

    // At very top — always show, no background
    if (currentY <= 10) {
      setAtTop(true);
      setHidden(false);
      lastScrollY.current = currentY;
      return;
    }

    setAtTop(false);

    // Determine scroll direction
    if (currentY > lastScrollY.current + 5) {
      // Scrolling DOWN — hide navbar
      setHidden(true);
    } else if (currentY < lastScrollY.current - 5) {
      // Scrolling UP — show navbar
      setHidden(false);
    }

    lastScrollY.current = currentY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ── Lock body scroll when mobile menu open ──
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

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-400 px-4 ${
        hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`mx-auto mt-3 transition-all duration-400 ${
          atTop && !mobileOpen
            ? "bg-transparent max-w-[90rem]"
            : "max-w-[56rem] rounded-full border border-zinc-200/60 bg-white/75 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
        }`}
      >
        <div className="container-width flex h-[4.2rem] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
        >
          <Image
            src="/logo.png"
            alt="Ragen"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-black ${
                atTop ? "text-zinc-800" : "text-zinc-700"
              }`}
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
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-white lg:hidden">
          <nav className="container-width flex flex-col gap-6 py-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="text-2xl font-medium text-zinc-700 transition-colors duration-300 hover:text-black"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 border-t border-zinc-200 pt-6">
              <Link
                href="/contact"
                onClick={closeMobile}
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
