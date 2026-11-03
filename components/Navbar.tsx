import Link from "next/link";
import { SITE } from "@/lib/config";

export default function Navbar() {
  return (
    <header className="site">
      <div className="bar">
        <Link href="/" className="brand">{SITE.name}</Link>
        <nav className="main" aria-label="Main">
          <Link href="/#services">Services</Link>
          <Link href="/legal">Legal tech</Link>
          <Link href="/blog">Guides</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <span className="spacer" />
        <Link href="/tools/roi-calculator" className="signin">ROI calculator</Link>
        <Link href="/contact" className="btn">Get started</Link>
      </div>
    </header>
  );
}
