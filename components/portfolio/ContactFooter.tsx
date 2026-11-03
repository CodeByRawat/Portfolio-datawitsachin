"use client";
import React, { useState } from 'react';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { email, socials } from '@/lib/portfolio/data';

export function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <footer id="contact" className="corduroy w-full px-5 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border-2 border-ink bg-paper p-8 shadow-[8px_10px_0_rgba(0,0,0,0.3)] md:p-14">
          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-ink md:text-7xl">
            Got a gnarly system?
            <br />
            <span className="text-jacket">Let’s untangle it.</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${email}`}
              className="rounded-lg border-2 border-ink bg-ink px-5 py-3 text-lg font-bold text-mustard shadow-[4px_4px_0_rgba(0,0,0,0.3)] transition-transform duration-150 ease-out hover:-translate-y-0.5">
              
              {email}
            </a>
            <button
              type="button"
              onClick={copy}
              aria-live="polite"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-ink px-4 py-3 font-bold text-ink transition-colors duration-150 ease-out hover:bg-ink/5">
              
              {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
              {copied ? 'Copied' : 'Copy email'}
            </button>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t-2 border-ink/10 pt-6 text-ink/60">
            <p>© 2026 Sachin — designed with a zipper.</p>
            <nav aria-label="Social" className="flex gap-5 font-semibold">
              {socials.map((s) =>
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-ink">
                  {s.label}
                </a>
              )}
            </nav>
          </div>
        </div>
      </div>
    </footer>);

}