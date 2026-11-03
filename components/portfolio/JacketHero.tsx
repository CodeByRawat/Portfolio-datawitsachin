"use client";
import React, { useRef } from "react";
import { motion } from 'framer-motion';
import { useZipperMotion } from '@/lib/portfolio/useZipperMotion';
import { patches } from '@/lib/portfolio/data';
import { FolderId } from '@/lib/portfolio/types';
import { HeroCard } from './HeroCard';
import { Patch } from './Patch';
import { Pocket } from './Pocket';
import { RevealIntro } from './RevealIntro';
import { ZipperPull } from './ZipperPull';

interface JacketHeroProps {
  onOpenFolder: (id: FolderId) => void;
}

export function JacketHero({ onOpenFolder }: JacketHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const leftAreaRef = useRef<HTMLDivElement>(null);
  const z = useZipperMotion(sectionRef, stageRef);

  return (
    <section ref={sectionRef} aria-label="Intro" className="relative h-[320vh]">
      <div ref={stageRef} className="sticky top-0 h-screen w-full overflow-hidden bg-navy">
        <RevealIntro scale={z.revealScale} opacity={z.revealOpacity} onOpenFolder={onOpenFolder} />

        {/* Left half of the jacket */}
        <motion.div className="pointer-events-none absolute inset-0 z-10" style={{ x: z.leftX }}>
          <motion.div className="corduroy pointer-events-auto absolute inset-0" style={{ clipPath: z.leftClip }}>
            <div ref={leftAreaRef} className="absolute inset-y-0 left-0 w-[calc(50%-18px)]">
              <HeroCard />
              {patches.map((p) =>
              <Patch key={p.id} patch={p} constraintsRef={leftAreaRef} />
              )}
            </div>
          </motion.div>
          <motion.div
            aria-hidden
            className="zip-side absolute left-0 w-[14px] origin-bottom-right border-l-2 border-dashed border-paper/70"
            style={{ x: z.leftTeethX, top: z.teethTop, height: z.teethLength, rotate: z.leftTeethRotate }} />
          
        </motion.div>

        {/* Right half of the jacket */}
        <motion.div className="pointer-events-none absolute inset-0 z-10" style={{ x: z.rightX }}>
          <motion.div className="corduroy pointer-events-auto absolute inset-0" style={{ clipPath: z.rightClip }}>
            <div className="absolute inset-y-0 right-0 w-1/2">
              <Pocket onOpenFolder={onOpenFolder} />
            </div>
          </motion.div>
          <motion.div
            aria-hidden
            className="zip-side zip-side-offset absolute left-0 w-[14px] origin-bottom-left border-r-2 border-dashed border-paper/70"
            style={{ x: z.centerX, top: z.teethTop, height: z.teethLength, rotate: z.teethAngle }} />
          
        </motion.div>

        {/* Closed (interlocked) chain below the slider */}
        <motion.div
          aria-hidden
          className="absolute left-0 z-20 flex w-[28px]"
          style={{ x: z.leftTeethX, top: z.pullY, height: z.closedHeight }}>
          
          <div className="zip-side h-full w-[14px] border-l-2 border-dashed border-paper/70" />
          <div className="zip-side zip-side-offset h-full w-[14px] border-r-2 border-dashed border-paper/70" />
        </motion.div>

        <ZipperPull x={z.centerX} y={z.pullY} opacity={z.tabOpacity} />
      </div>
    </section>);

}