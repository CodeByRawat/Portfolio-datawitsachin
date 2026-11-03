"use client";
import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { collageUrl, projects } from '@/lib/portfolio/data';

export function WorkSection() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" aria-labelledby="work-heading" className="w-full bg-navy px-5 py-20 text-paper md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="work-heading" className="text-5xl font-black tracking-tight md:text-7xl">
            Selected work
          </h2>
          <p className="max-w-sm text-paper/60">Systems people rely on all day. Case studies available on request.</p>
        </div>

        <article className="mt-12 grid overflow-hidden rounded-2xl border-2 border-ink bg-paper text-ink shadow-[8px_8px_0_#000] md:grid-cols-[1.3fr_1fr]">
          <img src={collageUrl} alt={`${featured.title} project artwork`} className="h-64 w-full object-cover md:h-full" />
          <div className="flex flex-col p-6 md:p-10">
            <p className="font-mono text-sm text-ink/60">
              {featured.client} · {featured.year}
            </p>
            <h3 className="mt-2 text-3xl font-black leading-none md:text-5xl">{featured.title}</h3>
            <p className="mt-4 text-lg leading-snug text-ink/75">{featured.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.tags.map((t) =>
              <span key={t} className="rounded-full border-2 border-ink px-3 py-1 text-sm font-semibold">
                  {t}
                </span>
              )}
            </div>
            <a
              href="#contact"
              className="mt-auto inline-flex w-fit items-center gap-2 pt-8 font-bold text-jacket hover:underline">
              
              Ask for the case study <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </article>

        <ul className="mt-14 border-t border-paper/15">
          {rest.map((p) =>
          <li key={p.id} className="border-b border-paper/15">
              <a
              href="#contact"
              className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-6 md:grid-cols-[80px_1.2fr_1.6fr_auto]">
              
                <span className="font-mono text-sm text-paper/50 md:order-none">{p.year}</span>
                <span className="col-span-2 text-2xl font-extrabold leading-tight transition-colors duration-150 ease-out group-hover:text-mustard md:col-span-1 md:text-3xl">
                  {p.title}
                </span>
                <span className="col-span-2 text-paper/65 md:col-span-1">
                  <span className="font-semibold text-paper/85">{p.client}</span> — {p.summary}
                </span>
                <ArrowUpRightIcon className="hidden h-6 w-6 text-paper/50 transition-transform duration-150 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-mustard md:block" />
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>);

}