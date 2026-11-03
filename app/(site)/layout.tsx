import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: "Practical guides, free tools and hands-on help for business process automation, RPA, AI agents and custom software.",
  openGraph: { type: "website", siteName: SITE.name },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="site">
          <div className="wrap">
            <p>
              {SITE.name}: automation, AI agents and custom software. <Link href="/contact">Get in touch</Link> ·{" "}
              <Link href="/blog">Guides</Link> · <Link href="/tools">Tools</Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
