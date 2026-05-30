"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="/contact"
        className="group flex items-center gap-3 rounded-full bg-black px-6 py-4 text-white shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <MessageCircle size={18} />
        <span>Contact Us</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}
