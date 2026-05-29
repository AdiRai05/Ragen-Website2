
import "./globals.css";
import type { Metadata } from "next";
import SmoothScroll from "@/components/providers/smooth-scroll";

export const metadata = {
  title: {
    default: "Ragen",
    template: "%s | Ragen",
  },

  description:
    "Software development, AI systems, automation and cloud engineering.",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

