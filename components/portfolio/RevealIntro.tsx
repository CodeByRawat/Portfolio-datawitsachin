"use client";
import React from 'react';
import { MotionValue, motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
import { FolderId } from '@/lib/portfolio/types';

interface RevealIntroProps {
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  onOpenFolder: (id: FolderId) => void;
}

export function RevealIntro({ scale, opacity, onOpenFolder }: RevealIntroProps) {
  return (
    <motion.div
      style={{ scale, opacity }}
      className="absolute inset-0 flex flex-col items-center justify-center bg-navy px-6 text-center">
      
      <p className="font-mono text-sm text-mustard md:text-base">*zzzip* — you found the inside.</p>
      <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.95] tracking-tight text-paper md:text-7xl">
        Hi, I’m Sachin. I make complicated work feel <span className="text-jacket">obvious.</span>
      </h2>
      <p className="mt-6 max-w-xl text-base text-paper/70 md:text-lg">
        Automation, AI agents and custom software for teams drowning in busywork. (Placeholder copy — final text coming from your résumé.)
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-ink bg-mustard px-5 py-3 font-bold text-ink shadow-[4px_4px_0_#000] transition-transform duration-150 ease-out hover:-translate-y-0.5">
          
          See the work <ArrowDownIcon className="h-4 w-4" />
        </a>
        <button
          type="button"
          onClick={() => onOpenFolder('resume')}
          className="rounded-lg border-2 border-paper/40 px-5 py-3 font-bold text-paper transition-colors duration-150 ease-out hover:border-paper hover:bg-paper/10">
          
          Open résumé
        </button>
      </div>
    </motion.div>);

}