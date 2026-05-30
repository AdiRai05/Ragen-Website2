"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-50">
      <Link
        href="/contact"
        className="group flex items-center gap-2 lg:gap-3 rounded-full bg-black px-4 py-3 lg:px-6 lg:py-4 text-white shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">Contact Us</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}
