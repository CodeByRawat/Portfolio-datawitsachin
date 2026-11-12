---
title: "What Is This Website Built With? How to Find the Platform, CMS, E-commerce Builder and Tech Stack of Any Site"
description: "How to find out what a website was built with: free tools (Wappalyzer, BuiltWith, WhatRuns), checking page source and URLs for WordPress, Shopify, Wix, Squarespace, Webflow and Framer, identifying e-commerce platforms, frameworks and hosting, detecting under-construction or parked sites, and how to use the findings for your own website."
date: 2026-11-12
cluster: web
order: 113
hire: a website like the one you found
hirekind: web
---

<p class="lede">The fastest way to see what a website is built with is a <strong>technology lookup tool</strong> such as <strong>Wappalyzer</strong> or <strong>WhatRuns</strong> (browser extensions) or <strong>BuiltWith</strong> (website lookup). They detect the <strong>CMS or website builder</strong> (WordPress, Shopify, Wix, Squarespace, Webflow, Framer), <strong>frameworks</strong> (React, Next.js), <strong>analytics, hosting and plugins</strong>. You can also check manually by viewing the <strong>page source</strong> and looking for telltale URLs and code.</p>

## Method 1: Use a technology lookup tool

| Tool | How to use | What it shows |
|---|---|---|
| **Wappalyzer** | Browser extension; click the icon on any site | CMS, e-commerce platform, frameworks, analytics, CDN, payment tools |
| **BuiltWith** | Enter the URL at builtwith.com | Detailed tech profile and history |
| **WhatRuns** | Browser extension | Platform, plugins, fonts, analytics |
| **W3Techs site info** | Website lookup | Technologies, server info |

Detection isn't perfect: custom or heavily optimised sites may hide signals.

## Method 2: Check the page source manually

Right-click › **View Page Source** (or Ctrl/Cmd+U) and search (Ctrl/Cmd+F) for these clues:

| Platform | Telltale signs |
|---|---|
| **WordPress** | `/wp-content/`, `/wp-includes/`, meta generator "WordPress"; try yoursite.com/wp-admin |
| **Shopify** | `cdn.shopify.com`, `Shopify.theme`, `myshopify.com` |
| **Wix** | `static.wixstatic.com`, `wix.com` scripts |
| **Squarespace** | `static1.squarespace.com`, "Squarespace" comments |
| **Webflow** | `data-wf-site`, `assets.website-files.com` or `cdn.prod.website-files.com` |
| **Framer** | `framerusercontent.com`, "framer" scripts |
| **WooCommerce** | `woocommerce` classes and scripts within WordPress |
| **BigCommerce** | `bigcommerce.com` CDN references |
| **Magento/Adobe Commerce** | `Magento_` or `mage/` scripts |
| **Next.js** | `/_next/` paths, `__NEXT_DATA__` |
| **Gatsby, Nuxt, Astro** | `___gatsby`, `__NUXT__`, `astro` asset paths |
| **Ghost** | `ghost` meta generator |
| **HubSpot CMS** | `hs-scripts`, `hubspot` |

## Method 3: Other clues

- **Footer credits:** "Powered by Shopify", "Built with Webflow", "Designed by [agency]"
- **Login URLs:** /wp-admin (WordPress), /admin (Shopify redirects), /user/login
- **Checkout pages:** Shopify checkout URLs and styling are recognisable
- **Browser DevTools › Network tab:** see which domains assets load from
- **HTTP headers** (via online header checkers): server, CDN (Cloudflare, Vercel, Netlify)

## How to tell what e-commerce platform a site is using

1. Run Wappalyzer or BuiltWith
2. Add a product to the cart and look at the **checkout URL and design**
3. Search source for `shopify`, `woocommerce`, `bigcommerce`, `magento`, `squarespace-commerce`, `wix-ecommerce`
4. Check the payment and shipping apps detected

## How to detect "under construction" or parked websites

- Page shows "coming soon", "under construction" or a registrar's parked page
- Source contains maintenance plugin names (e.g., "coming-soon", "maintenance")
- Very little content and no internal links
- WHOIS/RDAP lookups show domain registration dates (recently registered)
- The site returns HTTP 503 (maintenance) status
- Tools like BuiltWith show few technologies

Agencies and freelancers sometimes look for businesses with outdated, parked or under-construction sites as potential clients.

## What to do with this information

- **Choose your own platform** based on sites you like (see [What is the best website builder?](/blog/what-is-the-best-website-builder/))
- **Competitive research:** see what tools competitors use for analytics, chat, reviews, booking
- **Find the designer/agency** behind a site you admire (see [How to hire a web designer](/blog/how-to-hire-a-web-designer/))
- **Estimate costs** to build something similar (see [How much does a website cost?](/blog/how-much-does-a-website-cost/))

Remember: the platform matters less than design, content, speed and how well the site converts.

## Frequently asked questions

### How do I find out what a website is built with?
Use Wappalyzer, WhatRuns or BuiltWith, or view the page source and look for platform-specific paths such as /wp-content/ (WordPress) or cdn.shopify.com (Shopify).

### How can I tell if a site is WordPress?
Look for /wp-content/ or /wp-includes/ in the page source, a WordPress generator meta tag, or try visiting /wp-admin.

### How do I know if a website uses Shopify?
Search the source for cdn.shopify.com or myshopify.com, or use Wappalyzer. Shopify checkout pages are also distinctive.

### What platform is this website built on if tools show nothing?
It may be custom-built, use a headless setup, or hide signatures. Check network requests, headers and footer credits for clues.

### Is BuiltWith free?
BuiltWith offers free basic lookups of individual sites; detailed lead lists and historical data require paid plans.

### Can I copy a website's design if I know its platform?
You can use the same platform and draw inspiration, but copying design, content or code directly can infringe copyright; create your own original design.
