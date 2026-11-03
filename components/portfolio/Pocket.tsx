"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { collageUrl, folders } from '@/lib/portfolio/data';
import { FolderId } from '@/lib/portfolio/types';
import { IdBadge } from './IdBadge';

interface PocketProps {
  onOpenFolder: (id: FolderId) => void;
}

const FLAP = 'polygon(0 0, 100% 0, 100% 58%, 50% 100%, 0 58%)';

export function Pocket({ onOpenFolder }: PocketProps) {
  return (
    <div className="absolute right-[3%] top-[4vh] h-[64vh] w-[44vw] md:h-[84vh] md:w-[36vw]">
      {/* Folders sticking out of the pocket */}
      <div className="absolute inset-x-[1%] top-0 z-0 flex h-[26%] items-start gap-[1%]">
        {folders.map((f) =>
        <motion.button
          key={f.id}
          type="button"
          onClick={() => onOpenFolder(f.id)}
          initial={{ y: f.lift }}
          whileHover={{ y: f.lift - 18 }}
          whileTap={{ y: f.lift - 8 }}
          transition={{ type: 'spring', stiffness: 420, damping: 24 }}
          className={`relative h-full flex-1 rounded-t-xl border-2 border-ink ${f.bgClass} ${f.textClass} px-1 pt-[clamp(4px,1vw,14px)] text-center focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-paper`}>
          
            <span className="block whitespace-nowrap text-[clamp(0.55rem,1.35vw,1.3rem)] font-extrabold uppercase tracking-wide">
              {f.label}
            </span>
            <span className="mx-auto mt-[clamp(3px,0.6vw,10px)] block w-[78%] -rotate-3 rounded-sm border-2 border-ink bg-paper py-0.5 text-[clamp(0.4rem,0.7vw,0.7rem)] font-bold uppercase text-ink">
              <span className="block truncate">{f.sticker}</span>
            </span>
          </motion.button>
        )}
      </div>

      {/* Pocket body */}
      <div className="corduroy-red absolute inset-x-0 bottom-0 top-[30%] z-10 rounded-b-[clamp(14px,2vw,32px)] border-2 border-ink shadow-[8px_10px_0_rgba(0,0,0,0.25)]">
        <div className="absolute inset-[clamp(5px,0.8vw,12px)] rounded-b-[clamp(10px,1.6vw,24px)] border-2 border-dashed border-ink/60" />
      </div>

      {/* Flap with collage of work peeking out */}
      <div className="absolute inset-x-0 top-[18%] z-20 h-[24%] bg-ink" style={{ clipPath: FLAP }}>
        <div className="absolute inset-[3px] bg-cobalt" style={{ clipPath: FLAP }}>
          <img src={collageUrl} alt="Collage of illustrated design projects" className="h-full w-full object-cover" />
        </div>
      </div>

      <IdBadge />
    </div>);

}