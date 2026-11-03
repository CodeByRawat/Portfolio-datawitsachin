"use client";
import React from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import { MailIcon, RotateCcwIcon } from 'lucide-react';
import { email, portraitUrl, socials } from '@/lib/portfolio/data';

export function IdBadge() {
  const rotate = useMotionValue(0);

  const swing = (velocity: number) =>
  animate(rotate, 0, { type: 'spring', stiffness: 110, damping: 5, velocity });

  return (
    <motion.div
      className="absolute left-[6%] top-[33%] z-30 flex origin-top flex-col items-center"
      style={{ rotate, touchAction: 'pan-y' }}
      onHoverStart={() => swing(70)}
      onPan={(_, info) => rotate.set(Math.max(-38, Math.min(38, info.offset.x * 0.18)))}
      onPanEnd={(_, info) => swing(info.velocity.x * 0.05)}>
      
      {/* Lanyard strap */}
      <div className="relative h-[16vh] w-[clamp(12px,1.6vw,22px)] border-x-2 border-ink bg-mustard">
        <div className="absolute inset-x-[-4px] top-[38%] h-[18%] rounded-sm border-2 border-ink bg-tomato" />
        <div className="absolute inset-x-[-2px] bottom-0 h-[22%] rounded-t-sm border-2 border-ink bg-tomato" />
      </div>

      <article
        aria-label="ID badge for Sachin, Data & Automation"
        className="relative w-[clamp(120px,19vw,290px)] cursor-grab select-none rounded-[clamp(12px,1.6vw,24px)] border-[3px] border-ink bg-mustard p-[clamp(8px,1.1vw,16px)] shadow-[6px_8px_0_rgba(0,0,0,0.3)] active:cursor-grabbing">
        
        <div className="mx-auto mb-[clamp(6px,0.9vw,14px)] h-[clamp(6px,0.7vw,10px)] w-[30%] rounded-full bg-ink/25" />
        <RotateCcwIcon aria-hidden className="absolute right-[8%] top-[4%] h-[clamp(10px,1.3vw,20px)] w-[clamp(10px,1.3vw,20px)] text-ink" />

        <div className="overflow-hidden rounded-xl border-[3px] border-ink bg-magenta">
          <img src={portraitUrl} alt="Pop-art portrait of Sachin" className="aspect-square w-full object-cover" draggable={false} />
        </div>

        <div className="mt-[clamp(8px,1.2vw,18px)] border-2 border-ink bg-paper text-center">
          <p className="border-b-2 border-ink py-[clamp(2px,0.4vw,6px)] text-[clamp(0.8rem,1.7vw,1.6rem)] font-bold leading-tight text-ink">Sachin</p>
          <p className="py-[clamp(2px,0.3vw,5px)] text-[clamp(0.6rem,1.15vw,1.1rem)] font-medium leading-tight text-ink">Data & Automation</p>
        </div>

        <nav aria-label="Social links" className="mt-[clamp(8px,1.3vw,20px)] flex justify-between gap-1">
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            className="grid aspect-square w-[22%] place-items-center rounded-md bg-ink text-mustard transition-transform duration-150 ease-out hover:-translate-y-0.5">
            
            <MailIcon className="h-[55%] w-[55%]" />
          </a>
          {socials.map((s) =>
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="grid aspect-square w-[22%] place-items-center rounded-md bg-ink text-[clamp(0.6rem,1.2vw,1.15rem)] font-black text-mustard transition-transform duration-150 ease-out hover:-translate-y-0.5">
            
              {s.short}
            </a>
          )}
        </nav>
      </article>
    </motion.div>);

}