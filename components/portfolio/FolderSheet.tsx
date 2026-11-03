"use client";
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, CopyIcon, DownloadIcon, XIcon } from 'lucide-react';
import { email, experience, folders, projects, socials } from '@/lib/portfolio/data';
import { FolderId } from '@/lib/portfolio/types';

interface FolderSheetProps {
  openId: FolderId | null;
  onClose: () => void;
}

export function FolderSheet({ openId, onClose }: FolderSheetProps) {
  const folder = folders.find((f) => f.id === openId);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openId, onClose]);

  return (
    <AnimatePresence>
      {folder &&
      <motion.div
        className="fixed inset-0 z-50 flex items-end justify-center p-0 md:items-center md:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}>
        
          <button type="button" aria-label="Close" onClick={onClose} className="absolute inset-0 bg-ink/60" />
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="folder-title"
          initial={{ y: 60, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 40, opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
          className="relative max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-t-2xl border-2 border-ink bg-paper shadow-[8px_10px_0_rgba(0,0,0,0.4)] md:rounded-2xl">
          
            <header className={`flex items-center justify-between border-b-2 border-ink px-6 py-4 ${folder.bgClass} ${folder.textClass}`}>
              <h2 id="folder-title" className="text-2xl font-black uppercase tracking-wide">
                {folder.label}
              </h2>
              <button
              type="button"
              autoFocus
              onClick={onClose}
              aria-label="Close folder"
              className="grid h-9 w-9 place-items-center rounded-md border-2 border-ink bg-paper text-ink transition-transform duration-150 ease-out hover:rotate-90">
              
                <XIcon className="h-5 w-5" />
              </button>
            </header>
            <div className="max-h-[calc(88vh-72px)] overflow-y-auto p-6 text-ink md:p-8">
              {folder.id === 'resume' && <ResumeBody />}
              {folder.id === 'portfolio' && <PortfolioBody onClose={onClose} />}
              {folder.id === 'contact' && <ContactBody />}
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}

function ResumeBody() {
  return (
    <>
      <p className="text-lg text-ink/70">Product designer focused on operational, data-heavy tools.</p>
      <ol className="mt-6 space-y-5 border-l-2 border-ink/15 pl-5">
        {experience.map((e) =>
        <li key={e.period} className="relative">
            <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-ink bg-mustard" />
            <p className="font-mono text-sm text-ink/55">{e.period}</p>
            <p className="text-xl font-extrabold leading-tight">
              {e.title} <span className="font-semibold text-ink/60">· {e.company}</span>
            </p>
            <p className="text-ink/70">{e.note}</p>
          </li>
        )}
      </ol>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="mt-8 inline-flex items-center gap-2 rounded-lg border-2 border-ink bg-ink px-5 py-3 font-bold text-mustard">
        
        <DownloadIcon className="h-4 w-4" /> Download PDF
      </a>
    </>);

}

function PortfolioBody({ onClose }: {onClose: () => void;}) {
  const go = () => {
    onClose();
    window.setTimeout(() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }), 220);
  };
  return (
    <>
      <p className="text-lg text-ink/70">Choose a project to jump to it.</p>
      <ul className="mt-5 divide-y-2 divide-ink/10">
        {projects.map((p) =>
        <li key={p.id}>
            <button type="button" onClick={go} className="group flex w-full items-baseline justify-between gap-4 py-4 text-left">
              <span>
                <span className="block text-xl font-extrabold leading-tight group-hover:text-cobalt">{p.title}</span>
                <span className="text-sm text-ink/60">
                  {p.client} · {p.role}
                </span>
              </span>
              <span className="font-mono text-sm text-ink/50">{p.year}</span>
            </button>
          </li>
        )}
      </ul>
    </>);

}

function ContactBody() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <>
      <p className="text-lg text-ink/70">Open to senior and lead roles, plus select freelance work.</p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href={`mailto:${email}`} className="rounded-lg border-2 border-ink bg-tomato px-5 py-3 font-bold text-white">
          {email}
        </a>
        <button
          type="button"
          onClick={copy}
          aria-live="polite"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-ink px-4 py-3 font-bold">
          
          {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <ul className="mt-8 grid grid-cols-3 gap-3">
        {socials.map((s) =>
        <li key={s.label}>
            <a
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border-2 border-ink px-3 py-3 font-bold transition-transform duration-150 ease-out hover:-translate-y-0.5">
            
              <span className="grid h-7 w-7 place-items-center rounded bg-ink text-sm text-mustard">{s.short}</span>
              <span className="truncate">{s.label}</span>
            </a>
          </li>
        )}
      </ul>
    </>);

}