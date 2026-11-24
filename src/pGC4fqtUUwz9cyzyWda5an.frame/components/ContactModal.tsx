import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

// "Inquiry" Google Sheet (fakebros.in@gmail.com) > Apps Script "Inquiry log".
// Rows tagged "datawithsachin" go to the "sachin" tab.
const SHEET_URL =
  'https://script.google.com/macros/s/AKfycbz7X9CqrcRhEMAtfEozxCtr91pbOS1CFdFgeXLua_3Nie0cSqy9yLEzvpNrU1lmIv-a/exec'

const SERVICES = ['AI agent or automation', 'Website', 'Web or mobile app', 'Video or ad creative', 'Something else']

function sendToSheet(fields: Record<string, string>) {
  const data = new URLSearchParams({ site: 'datawithsachin', page: window.location.href, ...fields })
  try {
    if (navigator.sendBeacon && navigator.sendBeacon(SHEET_URL, data)) return
  } catch {}
  fetch(SHEET_URL, { method: 'POST', mode: 'no-cors', body: data, keepalive: true }).catch(() => {})
}

const field =
  'mt-2 w-full border-0 border-b border-ink/25 bg-transparent px-0 py-2 text-[15px] text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none focus:ring-0'
const label = 'block text-xs uppercase tracking-[0.14em] text-ink/60'

export function ContactModal({ open, onClose, email }: { open: boolean; onClose: () => void; email: string }) {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const first = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return
    setSent(false)
    setError('')
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => first.current?.focus(), 60)
    return () => {
      clearTimeout(t)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    if (!d.name?.trim()) {
      setError('Please add your name.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email?.trim() || '')) {
      setError('Please add a valid email address.')
      return
    }
    const digits = (d.phone || '').replace(/\D/g, '')
    if (!/^[+\d\s().-]+$/.test(d.phone?.trim() || '') || digits.length < 10 || digits.length > 15) {
      setError('Please add your WhatsApp number with country code.')
      return
    }
    sendToSheet({
      form: 'Get in touch',
      name: d.name.trim(),
      email: d.email?.trim() || '',
      phone: d.phone?.trim() || '',
      concern: d.service || '',
      details: d.message?.trim() || '',
    })
    setSent(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-ink/70" onClick={onClose} />
          <motion.div
            className="relative max-h-[92vh] w-full max-w-[560px] overflow-y-auto bg-paper px-6 py-8 text-ink sm:px-10 sm:py-10"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button type="button" onClick={onClose} aria-label="Close" className="absolute right-5 top-5 text-ink/60 hover:text-ink">
              <X size={20} strokeWidth={1.5} />
            </button>

            {sent ? (
              <div className="py-10">
                <p className={label}>Message sent</p>
                <h2 id="contact-title" className="mt-4 text-[32px] leading-[1.1] tracking-[-0.02em]">
                  Thanks, I'll be in touch soon
                </h2>
                <p className="mt-4 max-w-[400px] text-[15px] leading-[1.6] text-ink/70">
                  I usually reply within a day. If it's urgent, email{' '}
                  <a href={`mailto:${email}`} className="underline underline-offset-4">
                    {email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-10 rounded-full border border-ink px-6 py-3 text-[14px] transition-colors hover:bg-ink hover:text-paper"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <p className={label}>Get in touch</p>
                <h2 id="contact-title" className="mt-4 text-[32px] leading-[1.1] tracking-[-0.02em]">
                  Tell me about your project
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <label className="sm:col-span-2">
                    <span className={label}>Your name</span>
                    <input ref={first} name="name" required autoComplete="name" className={field} />
                  </label>
                  <label>
                    <span className={label}>Email</span>
                    <input name="email" type="email" required autoComplete="email" className={field} />
                  </label>
                  <label>
                    <span className={label}>WhatsApp number</span>
                    <input name="phone" type="tel" required autoComplete="tel" className={field} />
                  </label>
                  <label className="sm:col-span-2">
                    <span className={label}>What do you need?</span>
                    <select name="service" defaultValue={SERVICES[0]} className={field}>
                      {SERVICES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </label>
                  <label className="sm:col-span-2">
                    <span className={label}>Project details</span>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="What are you building, and by when?"
                      className={`${field} resize-none`}
                    />
                  </label>
                </div>

                {error && (
                  <p role="alert" className="mt-6 text-[14px] text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-10 w-full rounded-full bg-accent px-6 py-4 text-[15px] text-paper transition-colors hover:bg-accent-strong"
                >
                  Send message
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
