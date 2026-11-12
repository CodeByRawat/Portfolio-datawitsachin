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
:root{--ink:#1c1d20;--ink-soft:#141517;--paper:#fff;--muted:#6b6e73;--line:#e6e7ea;--tint:#f5f6f8;--accent:#455ce9;--accent-strong:#334bd3}
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--paper);color:var(--ink);font:17px/1.7 Inter,ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
a{color:var(--accent)}a:hover{color:var(--accent-strong)}
.top{display:flex;justify-content:space-between;align-items:center;padding:22px clamp(16px,4vw,40px);font-size:15px;font-weight:500;border-bottom:1px solid var(--line)}
.top a{color:var(--ink);text-decoration:none}.top nav{display:flex;gap:clamp(14px,3vw,32px)}.top nav a:hover{color:var(--accent)}
.wrap{max-width:1120px;margin:0 auto;padding:0 clamp(16px,4vw,40px)}
.hero{padding:clamp(48px,8vw,96px) 0 32px}.hero h1{font-size:clamp(36px,6vw,72px);line-height:1.05;letter-spacing:-.03em;font-weight:500;margin:0 0 16px}
.hero p{color:var(--muted);font-size:19px;max-width:640px;margin:0}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;padding:24px 0 96px}
.card{display:flex;flex-direction:column;border:1px solid var(--line);border-radius:18px;padding:26px;text-decoration:none;color:var(--ink);transition:border-color .2s,transform .2s}
.card:hover{border-color:var(--accent);transform:translateY(-2px);color:var(--ink)}
.card h2{font-size:21px;line-height:1.3;font-weight:600;letter-spacing:-.01em;margin:0 0 10px}.card p{color:var(--muted);font-size:15px;line-height:1.6;margin:0 0 16px;flex:1}
.meta{color:var(--muted);font-size:14px}
.post{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:64px;padding:48px 0 80px}
@media(max-width:960px){.post{grid-template-columns:minmax(0,1fr)}.toc{display:none}}
article{max-width:720px;min-width:0}
article h1{font-size:clamp(32px,5vw,52px);line-height:1.1;letter-spacing:-.025em;font-weight:600;margin:12px 0 18px}
article .lede{font-size:20px;color:#3a3c41;line-height:1.6}
article h2{font-size:clamp(24px,3vw,30px);line-height:1.25;letter-spacing:-.015em;font-weight:600;margin:56px 0 14px;scroll-margin-top:24px}
article h3{font-size:20px;line-height:1.35;font-weight:600;margin:34px 0 8px;scroll-margin-top:24px}
article p,article li{color:#2b2d31}article li{margin:6px 0}article strong{color:var(--ink)}
article blockquote{margin:28px 0;padding:18px 22px;border-left:3px solid var(--accent);background:var(--tint);border-radius:0 12px 12px 0}
article blockquote p{margin:0}
article code{background:var(--tint);padding:2px 6px;border-radius:6px;font-size:.88em}
article pre{background:var(--ink-soft);color:#e8e9ec;padding:18px;border-radius:12px;overflow-x:auto;font-size:14px;line-height:1.55}article pre code{background:none;padding:0;color:inherit}
.table{overflow-x:auto;margin:24px 0;border:1px solid var(--line);border-radius:12px}
table{border-collapse:collapse;width:100%;font-size:15px;line-height:1.5}th,td{text-align:left;padding:11px 14px;border-bottom:1px solid var(--line);vertical-align:top}
th{background:var(--tint);font-weight:600}tr:last-child td{border-bottom:0}
.toc{position:sticky;top:24px;align-self:start;font-size:14px;line-height:1.45}
.toc p{font-weight:600;margin:0 0 10px}.toc ol{list-style:none;padding:0;margin:0;border-left:1px solid var(--line)}
.toc a{display:block;padding:6px 0 6px 14px;color:var(--muted);text-decoration:none}.toc a:hover{color:var(--accent)}
.cta{margin:56px 0 0;padding:32px;border-radius:20px;background:var(--ink);color:var(--paper)}
.cta h2{color:var(--paper);margin:0 0 8px;font-size:26px}.cta p{color:#c9cbd0;margin:0 0 20px}
.cta a{display:inline-block;background:var(--accent);color:#fff;text-decoration:none;padding:13px 24px;border-radius:999px;font-weight:500}.cta a:hover{background:var(--accent-strong);color:#fff}
.related{border-top:1px solid var(--line);padding:40px 0 80px}.related h2{font-size:22px;margin:0 0 6px}.related .grid{padding:16px 0 0}
footer{background:var(--ink);color:#c9cbd0;padding:40px clamp(16px,4vw,40px);font-size:14px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px}
footer a{color:#fff;text-decoration:none}
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
const hireBlock = (thing) => `
<div class="hpop" id="hpop" role="dialog" aria-modal="true" aria-labelledby="hpop-t" aria-hidden="true"><div class="hpop-card">
<button class="hpop-x" type="button" aria-label="Close">×</button>
<span class="hpop-tag">Done for you</span>
<h2 id="hpop-t">Want ${esc(thing)} built for your business?</h2>
<p>Skip the trial and error. I design, build and launch it for you, connected to the tools your team already uses.</p>
<ul><li>Built around your real process</li><li>Production-ready: tested, monitored, documented</li><li>Clear scope and price before we start</li></ul>
<a class="go" href="/#contact" data-hire="popup">Contact me now</a>
<small>Tell me what you need. I reply personally.</small>
</div></div>
<div class="hbar off" id="hbar"><div class="hbar-in"><span class="hbar-dot"></span><p><b>Want ${esc(thing)} for you?</b><span class="long"> I'll build it for your business.</span></p><a class="go" href="/#contact" data-hire="bar">Contact now</a><button type="button" aria-label="Hide">×</button></div></div>
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
})();</script>`

const head = ({ title, description, url, type = 'website', jsonLd = [] }) => `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="${type}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${url}"><meta property="og:site_name" content="Data with Sachin">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>${CSS}</style>
${jsonLd.map((j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`).join('\n')}
</head><body>
<header class="top"><a href="/">© Code by Sachin</a><nav><a href="/#work">Work</a><a href="/blog/">Blog</a><a href="/#contact">Contact</a></nav></header>`

const foot = `<footer><span>© ${new Date().getFullYear()} ${AUTHOR} · AI &amp; automation, built properly.</span><span><a href="/blog/">All guides</a> · <a href="/#contact">Work with me</a></span></footer></body></html>`

const card = (p, tag = 'h2') => `<a class="card" href="/blog/${p.slug}/"><${tag}>${esc(p.title)}</${tag}><p>${esc(p.description)}</p><span class="meta">${p.minutes} min read</span></a>`

const posts = fs.readdirSync(SRC).filter((f) => f.endsWith('.md')).map(parse)
  .sort((a, b) => (b.date || '').localeCompare(a.date || '') || (Number(a.order || 99) - Number(b.order || 99)))

for (const p of posts) {
  const url = `${SITE}/blog/${p.slug}/`
  const jsonLd = [
    { '@context': 'https://schema.org', '@type': 'Article', headline: p.title, description: p.description, datePublished: p.date, dateModified: p.updated || p.date, mainEntityOfPage: url, wordCount: p.words, author: { '@type': 'Person', name: AUTHOR, url: SITE }, publisher: { '@type': 'Person', name: AUTHOR } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Blog', item: `${SITE}/blog/` }, { '@type': 'ListItem', position: 2, name: p.title, item: url }] },
  ]
  if (p.faq.length) jsonLd.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })
  const related = posts.filter((o) => o.slug !== p.slug && (o.cluster === p.cluster)).concat(posts.filter((o) => o.slug !== p.slug && o.cluster !== p.cluster)).slice(0, 3)
  const page = `${head({ title: `${p.title} | Data with Sachin`, description: p.description, url, type: 'article', jsonLd })}
<div class="wrap"><div class="post"><article>
<p class="meta"><a href="/blog/">← All guides</a></p>
<h1>${esc(p.title)}</h1>
<p class="meta">By ${AUTHOR} · ${p.minutes} min read · Updated ${p.updated || p.date}</p>
${p.html}
<div class="cta"><h2>${p.hire ? `Want ${esc(p.hire)} built for your business?` : 'Want this built for your business?'}</h2><p>I design and build AI agents and automations that run in production, not just in demos. Tell me which process is eating your team's week.</p><a href="/#contact">Start a conversation</a></div>
</article>
<aside class="toc"><p>On this page</p><ol>${p.toc.map((t) => `<li><a href="#${t.id}">${esc(t.text)}</a></li>`).join('')}</ol></aside></div>
<section class="related"><h2>Keep reading</h2><div class="grid">${related.map((r) => card(r, 'h3')).join('')}</div></section></div>
${p.hire ? hireBlock(p.hire) : ''}
${foot}`
  fs.mkdirSync(path.join(OUT, 'blog', p.slug), { recursive: true })
  fs.writeFileSync(path.join(OUT, 'blog', p.slug, 'index.html'), page)
}

const indexPage = `${head({ title: 'AI & Automation Guides | Data with Sachin', description: 'In-depth, practical guides to AI agents, RPA, workflow automation and generative AI — written by someone who builds them.', url: `${SITE}/blog/`, jsonLd: [{ '@context': 'https://schema.org', '@type': 'Blog', name: 'Data with Sachin — AI & Automation Guides', url: `${SITE}/blog/`, author: { '@type': 'Person', name: AUTHOR } }] })}
<div class="wrap"><div class="hero"><h1>AI &amp; automation guides</h1><p>Long-form, practical answers to the questions people actually ask about AI agents, automation and generative AI.</p></div>
<div class="grid">${posts.map((p) => card(p)).join('')}</div></div>
${foot}`
fs.mkdirSync(path.join(OUT, 'blog'), { recursive: true })
fs.writeFileSync(path.join(OUT, 'blog', 'index.html'), indexPage)

const today = new Date().toISOString().slice(0, 10)
const urls = [{ loc: `${SITE}/`, lastmod: today }, { loc: `${SITE}/blog/`, lastmod: today }, ...posts.map((p) => ({ loc: `${SITE}/blog/${p.slug}/`, lastmod: p.updated || p.date }))]
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n')}\n</urlset>\n`)
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)
console.log(`Blog: built ${posts.length} posts (${posts.reduce((n, p) => n + p.words, 0)} words) + index, sitemap.xml, robots.txt`)
