import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const SITES = [
  {
    name: 'Dental Helth',
    url: 'https://dental-helth.vercel.app',
    image: '/dental/dental-helth.webp',
    designer: 'Nixtio',
    credit: 'https://dribbble.com/shots/19948281-Dental-Clinic-Landing-Page',
  },
  {
    name: 'Happy Dental',
    url: 'https://happy-dental-brown.vercel.app',
    image: '/dental/happy-dental.webp',
    designer: 'Kanji Hyped',
    credit: 'https://dribbble.com/shots/21958171-Dental-Clinic-Landing-Page-Design',
  },
  {
    name: 'Alveo Clinic',
    url: 'https://alveo-clinic.vercel.app',
    image: '/dental/alveo-clinic.webp',
    designer: 'Alex Pavlov',
    credit: 'https://dribbble.com/shots/27222369-Dental-Clinic-Landing-Page-by-Alex-Pavlov',
  },
  {
    name: 'GlowDent',
    url: 'https://glowdent-xi.vercel.app',
    image: '/dental/glowdent.webp',
    designer: 'One Week Wonders',
    credit: 'https://dribbble.com/shots/25897844-GlowD-nt-Dentist-Appointment-Website',
  },
]

/* Live dental demo builds, each crediting the designer whose design it uses */
export function DentalSites() {
  return (
    <section id="dental" className="mx-auto max-w-[1180px] px-6 pb-24 sm:px-10 md:pb-32">
      <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
        <h2 className="text-4xl font-normal tracking-[-0.02em] sm:text-6xl">Dental websites</h2>
        <p className="max-w-[360px] text-[15px] leading-relaxed text-ink/75">
          Live demo builds for fictional clinics. Development by me, designs credited and used with permission.
        </p>
      </div>

      <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2">
        {SITES.map((s) => (
          <li key={s.name}>
            <a href={s.url} target="_blank" rel="noreferrer" aria-label={`Open the ${s.name} demo site`} className="group block">
              <div className="overflow-hidden bg-ink/[0.06] p-5 sm:p-7">
                <img
                  src={s.image}
                  alt={`${s.name} home page`}
                  width={1200}
                  height={750}
                  loading="lazy"
                  className="h-auto w-full transition-transform duration-500 ease-out-strong group-hover:scale-[1.03] motion-reduce:transition-none"
                />
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <h3 className="text-2xl tracking-[-0.01em] sm:text-[1.75rem]">{s.name}</h3>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/25 transition-colors duration-200 ease-out-strong group-hover:border-accent group-hover:bg-accent group-hover:text-paper">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </div>
            </a>
            <p className="mt-1 text-[15px] text-muted">
              Design by{' '}
              <a href={s.credit} target="_blank" rel="noreferrer" className="underline underline-offset-4 transition-colors duration-200 hover:text-accent">
                {s.designer}
              </a>
              , development by Sachin
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
