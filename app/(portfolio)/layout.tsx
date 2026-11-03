import type { Metadata } from "next";
import { League_Spartan, Courier_Prime } from "next/font/google";
import "./portfolio.css";
import { SITE } from "@/lib/config";

const display = League_Spartan({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--font-display" });
const mono = Courier_Prime({ subsets: ["latin"], weight: "700", variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | Portfolio`, template: `%s | ${SITE.name}` },
  description: "Portfolio of Sachin: automation, AI agents and custom software.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${mono.variable}`}>
      <body className="relative">{children}</body>
    </html>
  );
}
