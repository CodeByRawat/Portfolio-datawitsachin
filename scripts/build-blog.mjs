// Builds static, SEO-friendly blog pages into dist/ after `vite build`.
// Source: content/blog/*.md with a simple `key: value` frontmatter block.
import fs from 'node:fs'
import path from 'node:path'
import { marked } from 'marked'

const SITE = 'https://datawithsachin.com'
const AUTHOR = 'Sachin Rawat'
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const SRC = path.join(ROOT, 'content/blog')
const OUT = path.join(ROOT, 'dist')

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const slugify = (s) => s.toLowerCase().replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

function parse(file) {
  const raw = fs.readFileSync(path.join(SRC, file), 'utf8')
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!m) throw new Error(`Missing frontmatter in ${file}`)
  const meta = {}
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':')
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^"|"$/g, '')
  }
  const body = m[2]
  const slug = meta.slug || file.replace(/\.md$/, '')
  const words = body.split(/\s+/).filter(Boolean).length

  // Headings get stable ids; h2s feed the table of contents.
  const toc = []
  const renderer = new marked.Renderer()
  renderer.heading = function ({ tokens, depth }) {
    const text = this.parser.parseInline(tokens)
    const id = slugify(text)
    if (depth === 2) toc.push({ id, text: strip(text) })
    return `<h${depth} id="${id}">${text}</h${depth}>\n`
  }
  renderer.link = function ({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens)
    const ext = /^https?:\/\//.test(href) && !href.startsWith(SITE)
    return `<a href="${esc(href)}"${title ? ` title="${esc(title)}"` : ''}${ext ? ' target="_blank" rel="noopener"' : ''}>${text}</a>`
  }
  renderer.table = function (token) {
    const head = token.header.map((c) => `<th>${this.parser.parseInline(c.tokens)}</th>`).join('')
    const rows = token.rows.map((r) => `<tr>${r.map((c) => `<td>${this.parser.parseInline(c.tokens)}</td>`).join('')}</tr>`).join('')
    return `<div class="table"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>\n`
  }
  const html = marked.parse(body, { renderer, gfm: true })

  // FAQ: every h3 under the "Frequently asked questions" h2 becomes a FAQPage entry.
  const faq = []
  const faqMatch = body.match(/\n## Frequently asked questions\n([\s\S]*?)(?=\n## |\s*$)/)
  if (faqMatch) {
    const parts = faqMatch[1].split(/\n### /).slice(1)
    for (const p of parts) {
      const [q, ...rest] = p.split('\n')
      faq.push({ q: q.trim(), a: strip(marked.parse(rest.join('\n'))) })
    }
  }
  return { ...meta, slug, html, toc, faq, words, minutes: Math.max(1, Math.round(words / 230)) }
}

const CSS = `
:root{--ink:#242424;--ink-soft:#141517;--paper:#fff;--muted:#6b6b6b;--line:#f2f2f2;--line2:#e6e6e6;--tint:#f7f7f7;--accent:#455ce9;--accent-strong:#334bd3;--green:#1a8917;--sans:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;--serif:"Source Serif 4",Charter,"Bitstream Charter","Sitka Text",Cambria,Georgia,serif;--mono:"Source Code Pro",Menlo,Monaco,Consolas,monospace}
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%;scroll-padding-top:72px}
body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.5 var(--sans);-webkit-font-smoothing:antialiased}
a{color:inherit}img{max-width:100%}
.top{position:sticky;top:0;z-index:30;height:57px;display:flex;justify-content:space-between;align-items:center;padding:0 24px;background:rgba(255,255,255,.97);border-bottom:1px solid var(--line2);font-size:14px}
.top .brand{font:700 22px/1 var(--serif);letter-spacing:-.02em;text-decoration:none;color:var(--ink)}
.top nav{display:flex;align-items:center;gap:22px}.top nav a{color:var(--muted);text-decoration:none}.top nav a:hover{color:var(--ink)}
.top nav a.pill{color:#fff;background:var(--ink);padding:8px 16px;border-radius:999px}.top nav a.pill:hover{background:#000;color:#fff}
@media(max-width:560px){.top{padding:0 16px}.top nav{gap:16px}.top nav .hide-sm{display:none}}
.col{max-width:728px;margin:0 auto;padding:0 24px}
@media(max-width:560px){.col{padding:0 16px}}
.post{padding:44px 0 8px}
.post h1{font:700 42px/1.22 var(--sans);letter-spacing:-.016em;margin:0 0 12px}
.sub{font:400 22px/1.4 var(--sans);color:var(--muted);margin:0 0 32px}
@media(max-width:728px){.post{padding-top:28px}.post h1{font-size:30px;line-height:1.25}.sub{font-size:18px;margin-bottom:24px}}
.byline{display:flex;align-items:center;gap:12px;margin:0 0 28px}
.byline img{width:44px;height:44px;border-radius:50%;object-fit:cover;flex:none}
.byline .who{font-size:15px;line-height:1.5}
.byline .who b{font-weight:500}.byline .who a{text-decoration:none}
.byline .who .dot{color:var(--muted);margin:0 6px}.byline .who a.follow{color:var(--green);font-weight:500}.byline .who a.follow:hover{color:#0f730c}
.byline .when{color:var(--muted);font-size:14px}
.actions{display:flex;justify-content:space-between;align-items:center;gap:12px;border-top:1px solid var(--line2);border-bottom:1px solid var(--line2);padding:4px 2px;margin:0 0 36px}
.actions .tag{font-size:13px;color:var(--muted);text-decoration:none;background:var(--line);padding:5px 12px;border-radius:999px}.actions .tag:hover{color:var(--ink)}
.share{display:flex;gap:2px}
.share a,.share button{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;color:var(--muted);background:none;border:0;cursor:pointer;padding:0}
.share a:hover,.share button:hover{color:var(--ink);background:var(--line)}.share svg{width:20px;height:20px}
.share button.ok{color:var(--green)}
.toc{margin:0 0 40px;border:1px solid var(--line2);border-radius:8px;padding:0 20px;font-size:15px}
.toc summary{cursor:pointer;padding:14px 0;font-weight:500;list-style:none;display:flex;justify-content:space-between}
.toc summary::-webkit-details-marker{display:none}.toc summary:after{content:"+";color:var(--muted);font-size:18px;line-height:1}.toc[open] summary:after{content:"−"}
.toc ol{margin:0 0 16px;padding-left:20px;color:var(--muted)}.toc li{margin:6px 0}.toc a{color:var(--muted);text-decoration:none}.toc a:hover{color:var(--ink)}
.body{font-family:var(--serif);font-size:20px;line-height:32px;letter-spacing:-.003em;color:var(--ink);overflow-wrap:break-word}
.body p{margin:0 0 30px}
.body h2{font:700 24px/30px var(--sans);letter-spacing:-.016em;margin:52px 0 14px}
.body h3{font:700 20px/26px var(--sans);letter-spacing:-.01em;margin:38px 0 10px}
.body h2+p,.body h3+p{margin-top:0}
.body ul,.body ol{margin:0 0 30px;padding-left:28px}.body li{margin:0 0 12px;padding-left:4px}.body li>ul,.body li>ol{margin:12px 0 0}
.body a{text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:3px}.body a:hover{color:#000}
.body strong{font-weight:700}
.body blockquote{margin:0 0 30px;padding:0 0 0 20px;border-left:3px solid var(--ink);font-style:italic}.body blockquote p{margin:0}
.body code{font:15px/1.4 var(--mono);background:var(--line);padding:3px 5px;border-radius:4px}
.body pre{background:var(--tint);border:1px solid var(--line2);padding:20px;border-radius:6px;overflow-x:auto;font:14px/1.6 var(--mono);margin:0 0 30px}.body pre code{background:none;padding:0;font-size:inherit}
.table{overflow-x:auto;margin:0 0 30px;border:1px solid var(--line2);border-radius:8px}
table{border-collapse:collapse;width:100%;font:15px/1.5 var(--sans)}th,td{text-align:left;padding:11px 14px;border-bottom:1px solid var(--line2);vertical-align:top}
th{background:var(--tint);font-weight:600}tr:last-child td{border-bottom:0}
@media(max-width:728px){.body{font-size:18px;line-height:29px}.body p,.body ul,.body ol,.body blockquote,.body pre,.table{margin-bottom:24px}.body h2{font-size:21px;line-height:27px;margin-top:40px}.body h3{font-size:18px}}
.cta{margin:48px 0 0;padding:32px;border-radius:16px;background:var(--ink);color:var(--paper)}
.cta h2{font:600 24px/1.25 var(--sans);color:var(--paper);margin:0 0 8px;letter-spacing:-.01em}.cta p{color:#c9cbd0;margin:0 0 20px;font-size:16px;line-height:1.6}
.cta a{display:inline-block;background:var(--accent);color:#fff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:500}.cta a:hover{background:var(--accent-strong);color:#fff}
.tags{display:flex;flex-wrap:wrap;gap:8px;margin:40px 0 0}.tags a{background:var(--line);text-decoration:none;padding:8px 16px;border-radius:999px;font-size:14px}.tags a:hover{background:var(--line2)}
.endbar{display:flex;justify-content:flex-end;border-bottom:1px solid var(--line2);padding:16px 0 12px}
.author{display:grid;grid-template-columns:72px 1fr;gap:18px;align-items:start;padding:40px 0 48px}
.author img{width:72px;height:72px;border-radius:50%;object-fit:cover}
.author h2{font:600 22px/1.3 var(--sans);margin:2px 0 4px;letter-spacing:-.01em}.author h2 a{text-decoration:none}
.author .role{color:var(--muted);font-size:14px;margin:0 0 10px}.author p.bio{font-size:15px;line-height:1.6;margin:0 0 16px;color:#3d3d3d}
.author .btn{display:inline-block;background:var(--ink);color:#fff;text-decoration:none;padding:9px 18px;border-radius:999px;font-size:14px}.author .btn:hover{background:#000}
.btn-line{display:inline-block;margin-left:8px;border:1px solid var(--ink);text-decoration:none;padding:8px 17px;border-radius:999px;font-size:14px}
.more{background:var(--tint);border-top:1px solid var(--line2);padding:48px 0 64px}
.more h2{font:600 20px/1.3 var(--sans);margin:0 0 24px}
.mgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px 32px}
@media(max-width:640px){.mgrid{grid-template-columns:minmax(0,1fr)}}
.mcard{display:block;text-decoration:none}
.mcard .by{display:flex;align-items:center;gap:8px;font-size:13px;margin-bottom:8px}.mcard .by img{width:20px;height:20px;border-radius:50%}
.mcard h3{font:700 20px/1.3 var(--sans);letter-spacing:-.01em;margin:0 0 6px}.mcard:hover h3{text-decoration:underline;text-underline-offset:3px}
.mcard p{color:var(--muted);font-size:15px;line-height:1.5;margin:0 0 10px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.mcard .meta{font-size:13px;color:var(--muted)}
.meta{color:var(--muted);font-size:14px}
.profile{padding:48px 0 8px;display:flex;align-items:center;gap:20px}
.profile img{width:88px;height:88px;border-radius:50%;object-fit:cover;flex:none}
.profile h1{font:700 40px/1.15 var(--sans);letter-spacing:-.02em;margin:0 0 6px}.profile p{color:var(--muted);margin:0;font-size:16px;line-height:1.5}
@media(max-width:560px){.profile{flex-direction:column;align-items:flex-start;padding-top:32px}.profile h1{font-size:30px}}
.ptabs{scrollbar-width:none;display:flex;gap:24px;border-bottom:1px solid var(--line2);margin:28px 0 8px;font-size:14px;overflow-x:auto}
.ptabs::-webkit-scrollbar{display:none}.ptabs button{font:inherit;background:none;border:0;border-bottom:1px solid transparent;margin-bottom:-1px;padding:14px 0;color:var(--muted);cursor:pointer;white-space:nowrap}.ptabs button:hover{color:var(--ink)}.ptabs button.on{color:var(--ink);border-bottom-color:var(--ink)}
.feed{padding-bottom:64px}
.item{display:grid;grid-template-columns:minmax(0,1fr);padding:28px 0;border-bottom:1px solid var(--line2);text-decoration:none}
.item .by{display:flex;align-items:center;gap:8px;font-size:13px;margin-bottom:10px}.item .by img{width:24px;height:24px;border-radius:50%}
.item h2{font:700 22px/1.3 var(--sans);letter-spacing:-.016em;margin:0 0 8px}.item:hover h2{text-decoration:underline;text-underline-offset:3px}
.item p{font:400 16px/1.55 var(--serif);color:var(--muted);margin:0 0 12px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.item .meta{display:flex;flex-wrap:wrap;gap:6px 10px;align-items:center;font-size:13px}.item .meta .tag{background:var(--line);color:var(--ink);padding:3px 10px;border-radius:999px}
@media(max-width:560px){.item h2{font-size:19px}}
footer{border-top:1px solid var(--line2);color:var(--muted);padding:28px 24px;font-size:14px;display:flex;justify-content:center;flex-wrap:wrap;gap:8px 24px}
footer a{color:var(--muted);text-decoration:none}footer a:hover{color:var(--ink)}
body.has-bar{padding-bottom:76px}
.hbar{position:fixed;left:0;right:0;bottom:0;z-index:40;background:rgba(28,29,32,.96);backdrop-filter:blur(8px);color:#fff;border-top:1px solid rgba(255,255,255,.08);transform:translateY(0);transition:transform .3s ease}
.hbar.off{transform:translateY(110%)}
.hbar-in{max-width:1120px;margin:0 auto;padding:12px clamp(16px,4vw,40px);display:flex;align-items:center;gap:14px}
.hbar-dot{width:9px;height:9px;border-radius:50%;background:#3ddc84;box-shadow:0 0 0 4px rgba(61,220,132,.18);flex:none}
.hbar p{margin:0;flex:1;font-size:15px;line-height:1.4;color:#e8e9ec}.hbar p b{color:#fff;font-weight:600}
.hbar a.go{flex:none;background:var(--accent);color:#fff;text-decoration:none;padding:10px 20px;border-radius:999px;font-weight:500;font-size:15px;white-space:nowrap}.hbar a.go:hover{background:var(--accent-strong);color:#fff}
.hbar button,.hpop-x{background:none;border:0;color:#9a9da3;font-size:22px;line-height:1;cursor:pointer;padding:6px}.hbar button:hover,.hpop-x:hover{color:#fff}
@media(max-width:560px){.hbar p .long{display:none}.hbar-dot{display:none}.hbar a.go{padding:9px 16px}}
.hpop{position:fixed;inset:0;z-index:50;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(10,11,13,.55);opacity:0;pointer-events:none;transition:opacity .25s}
.hpop.on{opacity:1;pointer-events:auto}
.hpop-card{position:relative;width:100%;max-width:480px;background:var(--ink);color:#fff;border-radius:24px;padding:36px 32px 30px;box-shadow:0 30px 80px rgba(0,0,0,.35);transform:translateY(16px) scale(.98);transition:transform .3s ease;overflow:hidden}
.hpop.on .hpop-card{transform:none}
.hpop-card:before{content:"";position:absolute;inset:-40% -20% auto auto;width:320px;height:320px;background:radial-gradient(circle,rgba(69,92,233,.55),transparent 65%);pointer-events:none}
.hpop-x{position:absolute;top:12px;right:14px}
.hpop-tag{display:inline-block;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#aab6ff;background:rgba(69,92,233,.18);border:1px solid rgba(69,92,233,.4);padding:5px 10px;border-radius:999px;margin-bottom:16px}
.hpop h2{position:relative;font-size:clamp(24px,4vw,30px);line-height:1.2;letter-spacing:-.02em;font-weight:600;margin:0 0 10px;color:#fff}
.hpop p{position:relative;margin:0 0 18px;color:#c9cbd0;font-size:16px;line-height:1.6}
.hpop ul{position:relative;list-style:none;padding:0;margin:0 0 24px}.hpop li{padding:6px 0 6px 28px;position:relative;color:#e8e9ec;font-size:15px}
.hpop li:before{content:"✓";position:absolute;left:0;top:6px;width:20px;height:20px;border-radius:50%;background:rgba(61,220,132,.16);color:#3ddc84;font-size:12px;display:flex;align-items:center;justify-content:center}
.hpop a.go{position:relative;display:block;text-align:center;background:var(--accent);color:#fff;text-decoration:none;padding:15px 24px;border-radius:999px;font-weight:600;font-size:16px}.hpop a.go:hover{background:var(--accent-strong);color:#fff}
.hpop small{position:relative;display:block;text-align:center;color:#8d9096;font-size:13px;margin-top:12px}
@media(max-width:560px){.hpop{align-items:flex-end;padding:0}.hpop-card{border-radius:24px 24px 0 0;padding:30px 22px 24px}}
`

// Hire-intent pages (frontmatter `hire: <thing>`) get a premium popup and a sticky bottom bar.
const HIRE_COPY = {
  build: { verb: 'built', bar: "I'll build it for your business.", lead: 'Skip the trial and error. I design, build and launch it for you, connected to the tools your team already uses.', points: ['Built around your real process', 'Production-ready: tested, monitored, documented', 'Clear scope and price before we start'] },
  web: { verb: 'built', bar: "I'll design and build it for you.", lead: 'A fast, mobile-first website designed to turn visitors into enquiries, connected to your booking, WhatsApp and the tools you already use.', points: ['Custom design, not a recycled template', 'Fast, mobile-ready and SEO-friendly from day one', 'Clear scope and price before we start'] },
  app: { verb: 'built', bar: "I'll design and build it for you.", lead: 'A fast, reliable web or mobile app built around your users, from first prototype to App Store and Play Store launch, with AI and automations where they help.', points: ['Clickable prototype before we write code', 'iOS, Android and web, tested on real devices', 'Clear scope and price before we start'] },
  creative: { verb: 'made', bar: "I'll make it for your brand.", lead: 'Scroll-stopping motion, ads and promo videos for your brand, from storyboard to final export, ready for every platform.', points: ['Storyboard approved before production starts', 'Sized for Reels, Shorts, TikTok, YouTube and ads', 'Clear scope and price before we start'] },
}
const hireBlock = (thing, kind = 'build') => { const c = HIRE_COPY[kind] || HIRE_COPY.build; return `
<div class="hpop" id="hpop" role="dialog" aria-modal="true" aria-labelledby="hpop-t" aria-hidden="true"><div class="hpop-card">
<button class="hpop-x" type="button" aria-label="Close">×</button>
<span class="hpop-tag">Done for you</span>
<h2 id="hpop-t">Want ${esc(thing)} ${c.verb} for your business?</h2>
<p>${esc(c.lead)}</p>
<ul>${c.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
<a class="go" href="/#contact" data-hire="popup">Contact me now</a>
<small>Tell me what you need. I reply personally.</small>
</div></div>
<div class="hbar off" id="hbar"><div class="hbar-in"><span class="hbar-dot"></span><p><b>Want ${esc(thing)} for you?</b><span class="long"> ${esc(c.bar)}</span></p><a class="go" href="/#contact" data-hire="bar">Contact now</a><button type="button" aria-label="Hide">×</button></div></div>
<script>(function(){var s={get:function(k){try{return sessionStorage.getItem(k)}catch(e){return null}},set:function(k){try{sessionStorage.setItem(k,'1')}catch(e){}}};
var pop=document.getElementById('hpop'),bar=document.getElementById('hbar'),shown=false;
if(!s.get('hbar-x')){bar.classList.remove('off');document.body.classList.add('has-bar')}
bar.querySelector('button').onclick=function(){bar.classList.add('off');document.body.classList.remove('has-bar');s.set('hbar-x')};
function open(){if(shown||s.get('hpop-x'))return;shown=true;s.set('hpop-x');pop.classList.add('on');pop.setAttribute('aria-hidden','false');pop.querySelector('a.go').focus({preventScroll:true})}
function close(){pop.classList.remove('on');pop.setAttribute('aria-hidden','true')}
pop.querySelector('.hpop-x').onclick=close;pop.onclick=function(e){if(e.target===pop)close()};
document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
setTimeout(open,25000);
addEventListener('scroll',function(){var h=document.documentElement;if(h.scrollTop/(h.scrollHeight-h.clientHeight)>0.45)open()},{passive:true});
})();</script>` }

const head = ({ title, description, url, type = 'website', jsonLd = [] }) => `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="${type}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${url}"><meta property="og:site_name" content="Data with Sachin">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,700;1,8..60,400&display=swap" rel="stylesheet">
<style>${CSS}</style>
${jsonLd.map((j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`).join('\n')}
</head><body>
<header class="top"><a class="brand" href="/blog/">Data with Sachin</a><nav><a class="hide-sm" href="/">Home</a><a class="hide-sm" href="/#work">Work</a><a href="/blog/">Blog</a><a class="pill" href="/#contact">Work with me</a></nav></header>`

const foot = `<footer><span>© ${new Date().getFullYear()} ${AUTHOR}</span><a href="/">Home</a><a href="/blog/">All stories</a><a href="/#work">Work</a><a href="/#contact">Contact</a></footer></body></html>`

const AVATAR = '/sachin-avatar.jpg'
const ROLE = 'AI & automation engineer · websites, apps and motion design'
const BIO = 'I build AI agents, automations, websites, apps and motion design for businesses. These guides answer the questions people actually search, written from hands-on experience building them.'
const CLUSTERS = { agents: 'AI Agents', 'ai-basics': 'AI Basics', automation: 'Automation', business: 'Business', careers: 'Careers', legal: 'Legal Tech', data: 'Data', creative: 'Creative', web: 'Web & Apps' }
const subtitle = (d) => { let t = String(d).split(/:\s|\.\s/)[0].trim(); if (t.length > 170) { t = t.slice(0, 160); t = t.slice(0, t.lastIndexOf(' ')) + '…' } return t.replace(/[,;]$/, '') }
const fmtDate = (d) => { const t = new Date(`${d}T00:00:00Z`); return isNaN(t) ? d : t.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) }
const ICON = {
  x: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.2h1.7L7.4 4.7H5.58l11.1 14.5Z"/></svg>',
  in: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.25H3V9.75Zm7 0h3.83v1.54h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.3-1.92 2.63V21h-4V9.75Z"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5.1 5.24-1.37A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.1.82.83-3.03-.2-.31a8.2 8.2 0 1 1 6.95 3.85Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22a7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.31c-.23.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.17 1.73 2.64 4.2 3.7.58.26 1.04.41 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.29Z"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5"/></svg>',
}
const share = (url, title) => `<div class="share"><a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}" target="_blank" rel="noopener" aria-label="Share on X">${ICON.x}</a><a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}" target="_blank" rel="noopener" aria-label="Share on LinkedIn">${ICON.in}</a><a href="https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}" target="_blank" rel="noopener" aria-label="Share on WhatsApp">${ICON.wa}</a><button type="button" class="copy" data-url="${url}" aria-label="Copy link">${ICON.link}</button></div>`
const copyJs = `<script>document.querySelectorAll('button.copy').forEach(function(b){b.onclick=function(){var u=b.getAttribute('data-url');(navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(function(){b.classList.add('ok');b.setAttribute('aria-label','Link copied');setTimeout(function(){b.classList.remove('ok');b.setAttribute('aria-label','Copy link')},1600)}).catch(function(){prompt('Copy this link:',u)})}})</script>`
const card = (p) => `<a class="mcard" href="/blog/${p.slug}/"><span class="by"><img src="${AVATAR}" alt="" width="20" height="20" loading="lazy">${AUTHOR}</span><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><span class="meta">${p.minutes} min read · ${fmtDate(p.updated || p.date)}</span></a>`
const item = (p) => `<a class="item" data-c="${p.cluster || ''}" href="/blog/${p.slug}/"><div><span class="by"><img src="${AVATAR}" alt="" width="24" height="24" loading="lazy">${AUTHOR}</span><h2>${esc(p.title)}</h2><p>${esc(subtitle(p.description))}</p><span class="meta"><span>${fmtDate(p.updated || p.date)}</span><span>·</span><span>${p.minutes} min read</span>${CLUSTERS[p.cluster] ? `<span class="tag">${CLUSTERS[p.cluster]}</span>` : ''}</span></div></a>`

const posts = fs.readdirSync(SRC).filter((f) => f.endsWith('.md')).map(parse)
  .sort((a, b) => (b.date || '').localeCompare(a.date || '') || (Number(b.order || 0) - Number(a.order || 0)))

for (const p of posts) {
  const url = `${SITE}/blog/${p.slug}/`
  const jsonLd = [
    { '@context': 'https://schema.org', '@type': 'Article', headline: p.title, description: p.description, datePublished: p.date, dateModified: p.updated || p.date, mainEntityOfPage: url, wordCount: p.words, author: { '@type': 'Person', name: AUTHOR, url: SITE, image: `${SITE}${AVATAR}` }, publisher: { '@type': 'Person', name: AUTHOR } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Blog', item: `${SITE}/blog/` }, { '@type': 'ListItem', position: 2, name: p.title, item: url }] },
  ]
  if (p.faq.length) jsonLd.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })
  const related = posts.filter((o) => o.slug !== p.slug && (o.cluster === p.cluster)).concat(posts.filter((o) => o.slug !== p.slug && o.cluster !== p.cluster)).slice(0, 4)
  const page = `${head({ title: `${p.title} | Data with Sachin`, description: p.description, url, type: 'article', jsonLd })}
<main class="col"><article class="post">
<h1>${esc(p.title)}</h1>
<p class="sub">${esc(subtitle(p.description))}</p>
<div class="byline"><img src="${AVATAR}" alt="${AUTHOR}" width="44" height="44"><div><div class="who"><b><a href="/blog/">${AUTHOR}</a></b><span class="dot">·</span><a class="follow" href="/#contact">Work with me</a></div><div class="when">${p.minutes} min read · ${fmtDate(p.updated || p.date)}</div></div></div>
<div class="actions">${CLUSTERS[p.cluster] ? `<a class="tag" href="/blog/">${CLUSTERS[p.cluster]}</a>` : '<span></span>'}${share(url, p.title)}</div>
${p.toc.length > 2 ? `<details class="toc"><summary>In this article</summary><ol>${p.toc.map((t) => `<li><a href="#${t.id}">${esc(t.text)}</a></li>`).join('')}</ol></details>` : ''}
<div class="body">
${p.html}
</div>
<div class="cta"><h2>${p.hire ? `Want ${esc(p.hire)} ${p.hirekind === 'creative' ? 'made' : 'built'} for your business?` : 'Want this built for your business?'}</h2><p>${p.hirekind === 'app' ? 'I design and build web and mobile apps that people actually use, from prototype to launch, with AI and automations built in. Tell me about your idea.' : p.hirekind === 'web' ? 'I design and build fast, modern websites that turn visitors into customers, with booking, WhatsApp and automations built in. Tell me about your business.' : p.hirekind === 'creative' ? 'I create motion design, ad creatives and promo videos that make people stop scrolling. Tell me what you are launching.' : "I design and build AI agents and automations that run in production, not just in demos. Tell me which process is eating your team's week."}</p><a href="/#contact">Start a conversation</a></div>
<div class="tags">${CLUSTERS[p.cluster] ? `<a href="/blog/">${CLUSTERS[p.cluster]}</a>` : ''}<a href="/blog/">Guides</a><a href="/#contact">Hire Sachin</a></div>
<div class="endbar">${share(url, p.title)}</div>
<section class="author"><img src="${AVATAR}" alt="${AUTHOR}" width="72" height="72" loading="lazy"><div><h2>Written by <a href="/blog/">${AUTHOR}</a></h2><p class="role">${esc(ROLE)}</p><p class="bio">${esc(BIO)}</p><a class="btn" href="/#contact">Work with me</a><a class="btn-line" href="/blog/">More stories</a></div></section>
</article></main>
<section class="more"><div class="col"><h2>More from ${AUTHOR}</h2><div class="mgrid">${related.map((r) => card(r)).join('')}</div></div></section>
${p.hire ? hireBlock(p.hire, p.hirekind) : ''}
${copyJs}
${foot}`
  fs.mkdirSync(path.join(OUT, 'blog', p.slug), { recursive: true })
  fs.writeFileSync(path.join(OUT, 'blog', p.slug, 'index.html'), page)
}

const indexPage = `${head({ title: 'AI & Automation Guides | Data with Sachin', description: 'In-depth, practical guides to AI agents, RPA, workflow automation and generative AI — written by someone who builds them.', url: `${SITE}/blog/`, jsonLd: [{ '@context': 'https://schema.org', '@type': 'Blog', name: 'Data with Sachin — AI & Automation Guides', url: `${SITE}/blog/`, author: { '@type': 'Person', name: AUTHOR } }] })}
<main class="col"><div class="profile"><img src="${AVATAR}" alt="${AUTHOR}" width="88" height="88"><div><h1>${AUTHOR}</h1><p>${esc(ROLE)}. ${posts.length} in-depth guides on AI, automation, websites, apps and growth.</p></div></div>
<div class="ptabs" role="tablist"><button type="button" class="on" data-c="">All stories</button>${Object.entries(CLUSTERS).filter(([k]) => posts.some((p) => p.cluster === k)).map(([k, v]) => `<button type="button" data-c="${k}">${v}</button>`).join('')}</div>
<div class="feed">${posts.map((p) => item(p)).join('')}</div></main>
<script>(function(){var bs=document.querySelectorAll('.ptabs button'),it=document.querySelectorAll('.feed .item');bs.forEach(function(b){b.onclick=function(){var c=b.getAttribute('data-c');bs.forEach(function(x){x.classList.toggle('on',x===b)});it.forEach(function(i){i.style.display=!c||i.getAttribute('data-c')===c?'':'none'})}})})()</script>
${foot}`
fs.mkdirSync(path.join(OUT, 'blog'), { recursive: true })
fs.writeFileSync(path.join(OUT, 'blog', 'index.html'), indexPage)

const today = new Date().toISOString().slice(0, 10)
const urls = [{ loc: `${SITE}/`, lastmod: today }, { loc: `${SITE}/blog/`, lastmod: today }, ...posts.map((p) => ({ loc: `${SITE}/blog/${p.slug}/`, lastmod: p.updated || p.date }))]
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n')}\n</urlset>\n`)
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)
console.log(`Blog: built ${posts.length} posts (${posts.reduce((n, p) => n + p.words, 0)} words) + index, sitemap.xml, robots.txt`)
