"use client";
import React from 'react';
import { MotionValue, motion } from 'framer-motion';
import { ChevronsDownIcon } from 'lucide-react';

interface ZipperPullProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
}

export function ZipperPull({ x, y, opacity }: ZipperPullProps) {
  const handleClick = () => {
    window.scrollBy({ top: window.innerHeight * 1.6, behavior: 'smooth' });
  };

  return (
    <motion.div className="absolute left-0 top-0 z-40" style={{ x, y, opacity }}>
      <div className="flex -translate-x-1/2 -translate-y-[78%] flex-col items-center">
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll to unzip"
          whileHover={{ y: 4 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
          className="flex flex-col items-center rounded-lg border-[3px] border-mustard bg-navy px-3 pb-1.5 pt-1 text-paper shadow-[3px_4px_0_rgba(0,0,0,0.45)] ring-2 ring-ink focus-visible:outline focus-visible:outline-4 focus-visible:outline-paper md:px-4">
          
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
            
            <ChevronsDownIcon className="h-4 w-4 md:h-5 md:w-5" />
          </motion.span>
          <span className="-mt-0.5 text-sm font-bold tracking-tight md:text-lg">scroll</span>
        </motion.button>
        <div className="-mt-px h-5 w-6 rounded-b-md border-2 border-t-0 border-ink bg-[#2b2b2b]" />
      </div>
    </motion.div>);

}