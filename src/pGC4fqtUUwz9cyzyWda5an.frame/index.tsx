import React, { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Globe } from 'lucide-react'

import { Preloader } from './components/Preloader'

export const args = {
  name: 'Sachin',
  photo: '/portrait.jpg',
  location: 'Located in the Netherlands',
  role: 'Designer & Developer',
  email: 'hello@yourname.com',
  phone: '+31 6 12 34 56 78',
  intro: true,
}

export const argTypes = {
  name: { control: 'text' },
  photo: { control: 'text' },
  location: { control: 'text' },
  role: { control: 'text' },
  email: { control: 'text' },
  phone: { control: 'text' },
  intro: { control: 'boolean' },
}

type Props = Partial<typeof args>

export default function Home(props: Props) {
  const { name, photo, location, role, email, phone, intro } = { ...args, ...props }
  const firstName = name.split(' ')[0]

  return (
    <div className="bg-paper font-sans text-ink">
      <Preloader key={String(intro)} enabled={intro} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative h-[720px] overflow-hidden bg-hero text-paper md:h-[900px]">
        <img
          src={photo}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
        />

        <header className="relative z-10 flex items-center justify-between px-6 pt-6 text-[15px] font-medium sm:px-10 sm:pt-8">
          <a href="#top" className="group flex items-center gap-1 whitespace-nowrap">
            <span className="inline-block transition-transform duration-300 ease-out-strong group-hover:rotate-[360deg]">©</span>
            <span>Code by {firstName}</span>
          </a>
          <nav className="flex items-center gap-5 sm:gap-8">
            {['Work', 'About', 'Blog', 'Contact'].map((item) => (
              <a key={item} href={item === 'Blog' ? '/blog/' : `#${item.toLowerCase()}`} className="group relative flex flex-col items-center whitespace-nowrap">
                {item}
                <span className="absolute -bottom-2.5 h-[5px] w-[5px] scale-0 rounded-full bg-paper transition-transform duration-200 ease-out-strong group-hover:scale-100" />
              </a>
            ))}
          </nav>
        </header>

        {/* Location tab */}
        <div className="absolute left-0 top-[44%] z-10 hidden items-center gap-8 rounded-r-full bg-ink py-3 pl-8 pr-3 md:flex">
          <p className="max-w-[7.5rem] text-[17px] leading-snug">{location}</p>
          <span className="flex h-[84px] w-[84px] items-center justify-center rounded-full bg-hero">
            <Globe className="h-9 w-9" strokeWidth={1.25} />
          </span>
        </div>

        {/* Role */}
        <div className="absolute right-6 top-[40%] z-10 sm:right-[8%]">
          <ArrowDownRight className="mb-6 h-6 w-6 sm:mb-10" strokeWidth={1.5} />
          <p className="text-2xl leading-tight sm:text-[2.6rem]">Freelance</p>
          <p className="text-2xl leading-tight sm:text-[2.6rem]">{role}</p>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-6 left-0 z-10 w-full overflow-hidden sm:bottom-10">
          <div className="animate-marquee flex w-max whitespace-nowrap">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="pr-12 text-[5.5rem] font-medium leading-none tracking-[-0.03em] sm:text-[11rem] lg:text-[14rem]">
                {name} —
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <section id="about" className="relative mx-auto max-w-[1180px] px-6 pb-24 pt-20 sm:px-10 md:pb-36 md:pt-36">
        <div className="grid gap-10 md:grid-cols-[1.7fr_1fr] md:gap-20">
          <h2 className="text-[1.75rem] leading-[1.35] tracking-[-0.01em] sm:text-[2.3rem]">
            Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.
          </h2>
          <div>
            <p className="text-[17px] leading-relaxed text-ink/80">
              The combination of my passion for design, code &amp; interaction positions me in a unique place in the web design world.
            </p>
          </div>
        </div>
        <a
          href="#about"
          className="mt-14 flex h-36 w-36 items-center justify-center rounded-full bg-ink text-[15px] text-paper transition-colors duration-200 ease-out-strong hover:bg-accent md:absolute md:right-[18%] md:-bottom-6 md:mt-0 md:h-[180px] md:w-[180px] md:text-base"
        >
          About me
        </a>
      </section>

      {/* ── Recent work ──────────────────────────────────── */}
      <WorkList />

      {/* ── Sliding images ───────────────────────────────── */}
      <SlidingRows />

      {/* ── Footer ───────────────────────────────────────── */}
      <Footer name={name} photo={photo} email={email} phone={phone} />
    </div>
  )
}

/* Recent work with a cursor-following preview */
function WorkList() {
  const [hovered, setHovered] = useState<number | null>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 260, damping: 28 })
  const sy = useSpring(y, { stiffness: 260, damping: 28 })

  const onMove = (e: React.MouseEvent) => {
    const rect = listRef.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <section id="work" className="mx-auto max-w-[1180px] px-6 pb-24 sm:px-10 md:pb-32">
      <p className="mb-8 text-sm text-muted">Recent work</p>
      <div ref={listRef} className="relative" onMouseMove={onMove} onMouseLeave={() => setHovered(null)}>
        {PROJECTS.map((p, i) => (
          <a
            key={p.title}
            href="#work"
            onMouseEnter={() => setHovered(i)}
            className="group flex flex-col gap-2 border-t border-ink/15 py-10 last:border-b sm:flex-row sm:items-center sm:justify-between sm:py-14"
          >
            <h3
              className={`text-4xl font-normal tracking-[-0.02em] transition-[transform,opacity] duration-300 ease-out-strong sm:text-6xl md:group-hover:-translate-x-4 ${
                hovered !== null && hovered !== i ? 'md:opacity-40' : ''
              }`}
            >
              {p.title}
            </h3>
            <p
              className={`text-[15px] transition-[transform,opacity] duration-300 ease-out-strong md:group-hover:translate-x-4 ${
                hovered !== null && hovered !== i ? 'md:opacity-40' : ''
              }`}
            >
              {p.service}
            </p>
          </a>
        ))}

        <AnimatePresence>
          {hovered !== null && (
            <motion.div
              className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
              style={{ x: sx, y: sy }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2">
                <div className="h-[300px] w-[380px] overflow-hidden" style={{ backgroundColor: PROJECTS[hovered].color }}>
                  <img src={PROJECTS[hovered].image} alt="" className="h-full w-full object-cover p-8" />
                </div>
                <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-sm text-paper">
                  View
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="#work"
          className="rounded-full border border-ink/25 px-12 py-6 text-[15px] transition-colors duration-200 ease-out-strong hover:border-accent hover:bg-accent hover:text-paper"
        >
          More work <sup className="ml-0.5">8</sup>
        </a>
      </div>
    </section>
  )
}

/* Two rows of project tiles that drift in opposite directions on scroll */
function SlidingRows() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const left = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '-12%'])
  const right = useTransform(scrollYProgress, [0, 1], reduce ? ['-12%', '-12%'] : ['-12%', '0%'])

  const rowA = [...SLIDES, ...SLIDES.slice(0, 2)]
  const rowB = [...SLIDES.slice(2), ...SLIDES]

  return (
    <section ref={ref} className="overflow-hidden pb-24 md:pb-40">
      <motion.div style={{ x: left }} className="flex w-[140%] gap-4 sm:gap-6">
        {rowA.map((s, i) => (
          <Tile key={`a-${i}`} {...s} />
        ))}
      </motion.div>
      <motion.div style={{ x: right }} className="mt-4 flex w-[140%] gap-4 sm:mt-6 sm:gap-6">
        {rowB.map((s, i) => (
          <Tile key={`b-${i}`} {...s} />
        ))}
      </motion.div>
    </section>
  )
}

function Tile({ image, color }: { image: string; color: string }) {
  return (
    <div className="flex aspect-[4/3] min-w-0 flex-1 items-center justify-center" style={{ backgroundColor: color }}>
      <img src={image} alt="" className="h-[78%] w-[78%] object-cover" />
    </div>
  )
}

/* Contact footer */
function Footer({ name, photo, email, phone }: { name: string; photo: string; email: string; phone: string }) {
  const [time, setTime] = useState(() => formatTime())
  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1180px] px-6 pt-24 sm:px-10 md:pt-40">
        <h2 className="text-[3.25rem] font-normal leading-[1.05] tracking-[-0.03em] sm:text-7xl md:text-[6.5rem]">
          <span className="flex items-center gap-4 sm:gap-6">
            <img src={photo} alt={name} className="h-14 w-14 rounded-full object-cover object-top sm:h-24 sm:w-24" />
            Let’s work
          </span>
          <span className="block">together</span>
        </h2>

        <div className="relative mt-16 border-t border-paper/20 md:mt-24">
          <a
            href={`mailto:${email}`}
            className="absolute right-0 top-0 flex h-36 w-36 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-[15px] transition-colors duration-200 ease-out-strong hover:bg-accent-strong sm:right-[10%] md:h-[180px] md:w-[180px] md:text-base"
          >
            Get in touch
          </a>
        </div>

        <div className="flex flex-col gap-3 pt-28 sm:flex-row sm:flex-wrap sm:gap-4 md:pt-16">
          <a href={`mailto:${email}`} className="rounded-full border border-paper/25 px-8 py-5 text-center text-[15px] transition-colors duration-200 ease-out-strong hover:border-accent hover:bg-accent">
            {email}
          </a>
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="rounded-full border border-paper/25 px-8 py-5 text-center text-[15px] transition-colors duration-200 ease-out-strong hover:border-accent hover:bg-accent">
            {phone}
          </a>
        </div>

        <div className="mt-24 flex flex-col gap-8 pb-8 text-[15px] sm:flex-row sm:items-end sm:justify-between md:mt-32">
          <div className="flex gap-10">
            <div>
              <p className="mb-3 text-xs text-paper/50">Version</p>
              <p>{new Date().getFullYear()} © Edition</p>
            </div>
            <div>
              <p className="mb-3 text-xs text-paper/50">Local time</p>
              <p>{time} GMT+1</p>
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs text-paper/50">Socials</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {['Awwwards', 'Instagram', 'Twitter', 'LinkedIn'].map((s) => (
                <a key={s} href="#contact" className="group inline-flex items-center gap-1 whitespace-nowrap">
                  {s}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function formatTime() {
  return new Date().toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Europe/Amsterdam',
  }).toUpperCase()
}

const PROJECTS = [
  {
    title: 'TWICE',
    service: 'Interaction & Development',
    color: '#d8d2c9',
    image: 'https://cdn.magicpatterns.com/patterns/generated-images/8b0a7fa2-2682-4be7-a79e-efad5c719d9a.jpg',
  },
  {
    title: 'The Damai',
    service: 'Design & Development',
    color: '#2f4136',
    image: 'https://cdn.magicpatterns.com/patterns/generated-images/f1cda727-c837-4951-ba2c-5a4e0fb1b09e.jpg',
  },
  {
    title: 'FABRIC™',
    service: 'Design & Development',
    color: '#c9c9c7',
    image: 'https://cdn.magicpatterns.com/patterns/generated-images/c39f0e56-bdcd-44c7-9ec4-7bd42da8f13d.jpg',
  },
  {
    title: 'Aanstekelijk',
    service: 'Design & Development',
    color: '#e5874c',
    image: 'https://cdn.magicpatterns.com/patterns/generated-images/ff32a826-88f9-458b-a7ed-4a8aa6c267e0.jpg',
  },
]

const SLIDES = PROJECTS.map((p) => ({ image: p.image, color: p.color }))
