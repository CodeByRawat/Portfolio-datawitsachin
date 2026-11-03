---
title: "What Is RPA? Robotic Process Automation Explained (Software, Costs & When It's Worth It)"
description: "RPA explained in plain English: how robotic process automation works, what RPA software and companies offer, and when a custom build beats a license."
keyword: "rpa, rpa software, rpa companies"
date: 2026-10-27
tool: { href: "/tools/roi-calculator", label: "Automation ROI calculator" }
faq:
  - q: "What does RPA stand for?"
    a: "RPA stands for robotic process automation: software 'bots' that perform repetitive computer tasks by mimicking what a person does on screen or by calling application APIs."
  - q: "Is RPA the same as AI?"
    a: "No. Classic RPA follows fixed rules. AI adds judgement, such as reading unstructured documents or deciding what an email means. Combining them is usually called intelligent automation."
  - q: "Do I need to buy RPA software to automate a process?"
    a: "Not always. If your systems have APIs, a small custom automation is often cheaper and more reliable than a per-bot license. RPA tools shine when you must drive legacy screens with no API."
---

**RPA (robotic process automation)** is software that does repetitive computer work the way a person would: opening files, copying data between systems, filling forms, sending emails. Instead of a human clicking through the same ten screens, a "bot" does it, faster and without typos.

## How RPA works

An RPA bot is a script with a good user interface. You record or define the steps, point it at your applications, and it replays them on a schedule or when a trigger fires (a new email, a file landing in a folder, a row added to a sheet). There are two flavours:

- **UI-based bots** click and type in desktop or web apps, just like a person. Useful when the system has no API.
- **API-based automations** talk to systems directly. Faster, sturdier, and easier to maintain.

## What RPA is good at

RPA suits work that is **high-volume, rule-based and digital**: invoice entry, employee onboarding checklists, report generation, reconciliations, order status updates, data migration between legacy systems.

## Where RPA struggles

- **Unstructured inputs** (scanned PDFs, free-text emails) need OCR or AI in front of the bot.
- **Frequent UI changes** break screen-driven bots, so maintenance becomes a hidden cost.
- **Processes nobody has documented** can't be automated cleanly. Fix the process first.

## RPA software and companies: how to choose

The big RPA platforms (UiPath, Automation Anywhere, Microsoft Power Automate, Blue Prism and others) differ mostly in licensing, governance features and ecosystem. Newer regional tools exist too, such as Yingdao RPA (影刀) in China. When comparing RPA software and RPA companies, ask:

| Question | Why it matters |
|---|---|
| How is it priced: per bot, per user, per run? | Per-bot licensing gets expensive as you scale. |
| Can it call APIs, not just click screens? | API steps are more reliable. |
| What does monitoring and error handling look like? | Bots fail; you need to know when. |
| Can your team maintain it without the vendor? | Avoid lock-in on every small change. |

## Buy a platform or build custom?

If you have dozens of processes and an in-house automation team, a platform makes sense. If you have **one to five painful processes**, a purpose-built automation (Python, n8n, Make, or direct API integrations) usually costs less to run and is easier to change. There's no licence to renew and no vendor roadmap to wait on.

Not sure which side you're on? Run your numbers through the [automation ROI calculator](/tools/roi-calculator), or tell me about the process and I'll give you an honest recommendation, including "don't automate this".
