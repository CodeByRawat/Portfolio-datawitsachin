import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

/* Full-screen greeting that cycles through languages, then lifts away to reveal the page. */
export function Preloader({ enabled = true }: { enabled?: boolean }) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(!enabled || !!reduce)

  useEffect(() => {
    if (done) return
    const isLast = index === GREETINGS.length - 1
    // First word lingers so it reads; the rest flick past.
    const delay = index === 0 ? 1000 : isLast ? 260 : 140
    const id = setTimeout(() => {
      if (isLast) setDone(true)
      else setIndex((i) => i + 1)
    }, delay)
    return () => clearTimeout(id)
  }, [index, done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-soft text-paper"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="flex items-center gap-3 text-4xl font-medium tracking-[-0.02em] sm:text-6xl">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-paper sm:h-3 sm:w-3" />
            <motion.span
              key={index}
              initial={{ opacity: index === 0 ? 0 : 0.75 }}
              animate={{ opacity: 1 }}
              transition={{ duration: index === 0 ? 0.2 : 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="whitespace-nowrap"
            >
              {GREETINGS[index]}
            </motion.span>
          </p>

          {/* Curved bottom edge that flattens as the screen lifts */}
          <svg
            className="absolute left-0 top-full h-[120px] w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.path
              className="fill-ink-soft"
              initial={{ d: 'M0 0 L100 0 Q50 100 0 0 Z' }}
              exit={{ d: 'M0 0 L100 0 Q50 0 0 0 Z' }}
              transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const GREETINGS = ['Hello', 'Bonjour', 'Ciao', 'Olá', 'やあ', 'Hallå', 'Guten Tag', 'Hallo']
