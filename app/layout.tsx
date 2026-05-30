import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FloatingCTA from "@/components/ui/floating-cta";
import SmoothScrollProvider from "@/components/providers/smooth-scroll";
import PageTransition from "@/components/providers/page-transition";
import JsonLd from "@/components/seo/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL("https://ragen.org"),
  title: {
    default: "Ragen — Enterprise Software, AI Systems & Digital Platforms",
    template: "%s | Ragen",
  },
  description:
    "Ragen engineers enterprise software, AI systems, cloud infrastructure and digital platforms for ambitious organizations worldwide. Software development, AI agents, cloud DevOps.",
  keywords: [
    "software engineering",
    "AI development",
    "cloud DevOps",
    "enterprise software",
    "digital transformation",
    "SaaS development",
    "technology consulting",
    "Ragen",
    "ragen.org",
  ],
  authors: [{ name: "Ragen" }],
  creator: "Ragen",
  publisher: "Ragen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ragen.org",
    siteName: "Ragen",
    title: "Ragen — Enterprise Software, AI Systems & Digital Platforms",
    description:
      "Engineering enterprise software, AI systems, cloud infrastructure and digital platforms for ambitious organizations worldwide.",
    images: [
      {
        url: "/logo.png",
        width: 140,
        height: 36,
        alt: "Ragen Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ragen — Enterprise Software, AI Systems & Digital Platforms",
    description:
      "Engineering enterprise software, AI systems and digital platforms for ambitious organizations.",
    images: ["/logo.png"],
    creator: "@ragen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
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
        <JsonLd />
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
