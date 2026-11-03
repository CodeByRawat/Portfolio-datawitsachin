import { Experience, Folder, PatchData, Project, Social } from './types';

export const portraitUrl = "/portfolio/portrait.jpg";


export const collageUrl = "/portfolio/001b6b65-8cc0-4f52-ad5b-648990eb25a0.jpg";


export const email = 'hello@datawithsachin.com';

export const folders: Folder[] = [
{ id: 'resume', label: 'Résumé', sticker: 'Download', bgClass: 'bg-mustard', textClass: 'text-ink', lift: 14 },
{ id: 'portfolio', label: 'Portfolio', sticker: 'Choose', bgClass: 'bg-cobalt', textClass: 'text-white', lift: 26 },
{ id: 'contact', label: 'Contact', sticker: 'Check contacts', bgClass: 'bg-tomato', textClass: 'text-white', lift: 0 }];


export const patches: PatchData[] = [
{
  id: 'lifestyle',
  text: "THIS IS NOT A PHASE, IT'S A LIFESTYLE · ",
  image: "/portfolio/01310271-525c-4fd2-8e4c-5c0c93a212fe.jpg",
  ringClass: 'fill-cobalt',
  left: '62%',
  top: '11%',
  size: 'clamp(72px, 12vw, 172px)',
  rotate: 8
},
{
  id: 'tested',
  text: 'TRUST ME · I TESTED IT · TRUST ME · ',
  image: "/portfolio/5c4bdeb2-6968-48eb-a7cb-3a3871a12f35.jpg",
  ringClass: 'fill-tomato',
  left: '44%',
  top: '54%',
  size: 'clamp(66px, 11vw, 160px)',
  rotate: -6
},
{
  id: 'damn',
  text: 'DESIGN LIKE YOU GIVE A DAMN · ',
  image: "/portfolio/8e931e09-cf8c-474a-afd1-da4f850f9fba.jpg",
  ringClass: 'fill-mustard',
  left: '14%',
  top: '60%',
  size: 'clamp(66px, 11vw, 160px)',
  rotate: -12
}];


export const projects: Project[] = [
{
  id: 'atlas',
  title: 'Atlas Fleet Console',
  client: 'Northwind Logistics',
  year: '2026',
  role: 'Lead Product Designer',
  summary:
  'Rebuilt a 14-tool dispatch workflow into one console. Dispatchers now route a truck in 3 clicks instead of 11.',
  tags: ['Enterprise', 'Design system', 'Research']
},
{
  id: 'ledger',
  title: 'Ledger Reconciliation',
  client: 'Brightpay',
  year: '2025',
  role: 'Senior UX Designer',
  summary: 'Turned month-end reconciliation from a spreadsheet marathon into a guided exception queue.',
  tags: ['Fintech', 'Data-dense UI']
},
{
  id: 'pulse',
  title: 'Pulse Clinical Triage',
  client: 'Mercy Health',
  year: '2024',
  role: 'UX Designer',
  summary: 'Designed a nurse-first triage board tested across three ER shifts and 40+ clinicians.',
  tags: ['Healthcare', 'Accessibility']
},
{
  id: 'orbit',
  title: 'Orbit Permissions',
  client: 'Stackline',
  year: '2023',
  role: 'UX Designer',
  summary: 'Made role-based access legible for admins managing 2,000+ seats.',
  tags: ['B2B SaaS', 'IA']
},
{
  id: 'kiln',
  title: 'Kiln Design Tokens',
  client: 'Internal',
  year: '2021',
  role: 'Designer',
  summary: 'A token pipeline that shipped one theme to web, iOS and Android from a single source.',
  tags: ['Systems', 'Tooling']
}];


export const experience: Experience[] = [
{ period: '2024 — Now', title: 'Lead Product Designer', company: 'Northwind Logistics', note: 'Owning the ops platform & its design system.' },
{ period: '2022 — 2024', title: 'Senior UX Designer', company: 'Brightpay', note: 'Finance tooling for 3,000+ accounting teams.' },
{ period: '2020 — 2022', title: 'UX Designer', company: 'Mercy Health Digital', note: 'Clinical workflows, accessibility champion.' }];


export const socials: Social[] = [
{ label: 'LinkedIn', short: 'in', href: 'https://linkedin.com' },
{ label: 'Behance', short: 'Bē', href: 'https://behance.net' },
{ label: 'Medium', short: 'M', href: 'https://medium.com' }];