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
    requestAnimationFrame(() => {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
    });
  }, [pathname]);

  // ── Hide on scroll down, show on scroll up ──
  const handleScroll = useCallback(() => {
    if (mobileOpen) return;
    const currentY = window.scrollY;

    if (currentY <= 10) {
      setAtTop(true);
      setHidden(false);
      lastScrollY.current = currentY;
      return;
    }

    setAtTop(false);

    if (currentY > lastScrollY.current + 5) {
      setHidden(true);
    } else if (currentY < lastScrollY.current - 5) {
      setHidden(false);
    }

    lastScrollY.current = currentY;
  }, [mobileOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ── Lock body scroll when mobile menu open ──
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-400 ${
          hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Navbar bar */}
        <div
          className={`mx-auto transition-all duration-400 ${
            atTop && !mobileOpen
              ? "bg-transparent max-w-[90rem]"
              : "bg-white border-b border-zinc-200 lg:border lg:border-zinc-200/60 lg:bg-white/80 backdrop-blur-xl max-w-full lg:max-w-[56rem] lg:rounded-full lg:mt-3 lg:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          }`}
        >
          <div className="container-width flex h-16 lg:h-[4.2rem] items-center justify-between">
            <Link href="/" className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80">
              <Image src="/logo.png" alt="Ragen" width={140} height={36} className="h-8 lg:h-10 w-auto" priority />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-black">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <Link href="/contact" className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Contact Us
              </Link>
            </div>

            {/* Hamburger */}
            <button className="flex lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col lg:hidden">
          <div className="h-16 shrink-0" />
          <nav className="container-width flex flex-col gap-5 py-8 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="text-2xl font-medium text-zinc-800 transition-colors duration-300 hover:text-black py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 border-t border-zinc-200 pt-8">
              <Link
                href="/contact"
                onClick={closeMobile}
                className="inline-flex w-full justify-center rounded-full bg-black px-8 py-4 text-white font-medium text-lg"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
