import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FloatingCTA from "@/components/ui/floating-cta";
import SmoothScrollProvider from "@/components/providers/smooth-scroll";
import PageTransition from "@/components/providers/page-transition";

export const metadata: Metadata = {
  title: "Ragen — Enterprise Software, AI Systems & Digital Platforms",
  description:
    "Ragen engineers enterprise software, AI systems, cloud infrastructure and digital platforms for ambitious organizations worldwide.",
  keywords: [
    "software engineering",
    "AI development",
    "cloud DevOps",
    "enterprise software",
    "digital transformation",
    "SaaS development",
    "technology consulting",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Ragen — Enterprise Software, AI Systems & Digital Platforms",
    description:
      "Engineering enterprise software, AI systems and digital platforms for ambitious organizations.",
    url: "https://ragen.org",
    siteName: "Ragen",
    type: "website",
    images: [{ url: "/logo.svg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <FloatingCTA />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
