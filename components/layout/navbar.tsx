
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl">
      <div className="container-width flex items-center justify-between py-5">

        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight"
        >
          Ragen
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="hidden md:block rounded-full bg-black px-5 py-2 text-sm text-white"
        >
          Book Call
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-zinc-200 bg-white md:hidden">

          <nav className="container-width flex flex-col gap-6 py-6">

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-black px-5 py-3 text-center text-white"
              onClick={() => setOpen(false)}
            >
              Book Call
            </Link>

          </nav>

        </div>
      )}
    </header>
  );
}

