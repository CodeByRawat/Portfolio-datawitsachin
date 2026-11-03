"use client";
import React, { RefObject, useId } from 'react';
import { motion } from 'framer-motion';
import { PatchData } from '@/lib/portfolio/types';

interface PatchProps {
  patch: PatchData;
  constraintsRef: RefObject<HTMLElement | null>;
}

export function Patch({ patch, constraintsRef }: PatchProps) {
  const uid = useId().replace(/:/g, '');
  const clipId = `clip-${uid}`;
  const pathId = `path-${uid}`;

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.12}
      dragMomentum={false}
      initial={{ rotate: patch.rotate }}
      whileHover={{ scale: 1.04 }}
      whileDrag={{ scale: 1.08, rotate: patch.rotate + 8, zIndex: 40 }}
      transition={{ type: 'spring', stiffness: 400, damping: 26 }}
      className="absolute z-20 cursor-grab touch-none active:cursor-grabbing"
      style={{ left: patch.left, top: patch.top, width: patch.size, height: patch.size }}
      role="img"
      aria-label={`Draggable patch: ${patch.text.replace(/·/g, '').trim()}`}>
      
      <svg viewBox="0 0 200 200" className="h-full w-full drop-shadow-[4px_7px_0_rgba(0,0,0,0.28)]">
        <defs>
          <clipPath id={clipId}>
            <circle cx="100" cy="100" r="60" />
          </clipPath>
          <path id={pathId} d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" />
        </defs>
        <circle cx="100" cy="100" r="98" className="fill-ink" />
        <circle cx="100" cy="100" r="93" className="fill-paper" />
        <circle cx="100" cy="100" r="62" className={patch.ringClass} />
        <image
          href={patch.image}
          x="22"
          y="22"
          width="156"
          height="156"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${clipId})`} />
        
        <circle cx="100" cy="100" r="61" fill="none" className="stroke-ink" strokeWidth="4" />
        <text className="fill-ink font-mono" fontSize="17" fontWeight="700" letterSpacing="0.5">
          <textPath href={`#${pathId}`}>{patch.text}</textPath>
        </text>
      </svg>
    </motion.div>);

}