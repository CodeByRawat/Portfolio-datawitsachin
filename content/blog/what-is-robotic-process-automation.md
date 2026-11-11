---
title: What Is Robotic Process Automation (RPA)? The Complete 2026 Guide
description: What RPA stands for, how software robots work, real examples by department, RPA vs intelligent automation vs AI agents, costs, tools, and how to decide if RPA is still right for you in 2026.
date: 2026-11-11
cluster: automation
order: 3
---

<p class="lede"><strong>Robotic process automation (RPA)</strong> is software that mimics the clicks and keystrokes a person makes in computer applications, so that repetitive, rule-based tasks (copying data between systems, filling forms, downloading reports, processing invoices) run automatically. The "robots" are not physical; they are software bots that operate your existing applications through the user interface, just like an employee would.</p>

RPA has been one of the fastest-growing segments of enterprise software for a decade, and despite the AI agent boom it is still growing: Mordor Intelligence projects the market to rise from about $8.1 billion in 2026 to $28.6 billion by 2031 ([GlobeNewswire](https://www.globenewswire.com/news-release/2026/01/19/3221170/0/en/Robotic-Process-Automation-Market-Set-to-Expand-to-28-6-Billion-by-2031-Driven-by-Generative-AI-Integration)). But what RPA *is* has changed. In 2026, most serious RPA deployments are combined with AI to handle documents, judgement calls and exceptions.

This guide covers everything: what RPA stands for, how it works, examples, benefits, limits, how it compares to intelligent automation and AI agents, and how to decide if it is right for your organisation.

## What does RPA stand for in technology?

**RPA stands for Robotic Process Automation.**

- **Robotic:** a software "robot" (bot) does the work instead of a person.
- **Process:** a sequence of steps that achieves a business outcome, such as onboarding a new employee or paying an invoice.
- **Automation:** the steps run without human effort.

The word "robotic" causes endless confusion. There are no physical robots. An RPA bot is a program that sits on a computer (or a virtual machine in the cloud) and operates software applications: opening them, reading the screen, typing, clicking, copying and pasting, exactly as a human would.

## How does RPA work?

### The basic idea
A human shows the bot what to do, or a developer designs the steps in a visual editor. The bot then repeats those steps, perfectly and tirelessly, whenever it is triggered.

### The three components of an RPA platform

Almost every RPA product, whether UiPath, Automation Anywhere, Microsoft Power Automate or Blue Prism (now part of SS&C), has the same three parts:

1. **Studio / designer:** a drag-and-drop environment where you build the automation as a flowchart of activities: "open Excel", "read cell B2", "type into SAP field Vendor ID", "click Save". Many studios include a recorder that captures your clicks as a starting point.
2. **Robots / bots:** the runtime that executes the automation. There are two kinds:
   - **Attended bots** run on an employee's desktop and are triggered by them, helping with part of a task (for example, a call-centre agent clicks a button and the bot pulls the customer's details from five systems).
   - **Unattended bots** run on servers with no human present, triggered by a schedule, a file arriving, or an email, and process work queues end to end.
3. **Orchestrator / control room:** the central console that schedules bots, distributes work, stores credentials securely, logs every action and reports on performance.

### How a bot "sees" applications
Bots interact with applications in several ways, from most to least reliable:

- **APIs**, where available (fast and stable).
- **UI element selectors**: identifying a button or field by its underlying properties (ID, name, type).
- **Computer vision / OCR**: recognising elements visually, used for remote desktops (Citrix) or legacy systems.
- **Surface automation**: coordinates and keystrokes as a last resort.

This is RPA's superpower and its weakness. It can automate *any* application, including 30-year-old mainframe screens with no API, without changing the application. But if the screen layout changes, the bot can break.

## A step-by-step example: invoice processing

Here is a classic accounts-payable automation, before and after.

**Before (manual):** An AP clerk opens the shared mailbox, downloads each PDF invoice, reads the supplier, invoice number, amount and PO number, logs into the ERP, finds the matching purchase order, checks the amounts match, enters the invoice, and files the email. About 6–10 minutes per invoice.

**After (RPA + document AI):**

1. An unattended bot checks the mailbox every 15 minutes.
2. It saves attachments and sends them to a document-understanding model, which extracts supplier, invoice number, date, line items, totals and PO number.
3. Low-confidence extractions go to a human validation queue.
4. The bot logs into the ERP and looks up the PO.
5. If the invoice and PO match within tolerance, the bot enters the invoice and moves the email to "Processed".
6. If not, it creates an exception ticket with the details and the mismatch.
7. Every step is logged in the orchestrator for audit.

Typical results from this kind of automation are 60–80% of invoices processed without human touch, with the remainder arriving at a human already pre-filled and explained.

## Common RPA use cases by department

| Department | Typical RPA automations |
|---|---|
| **Finance & accounting** | Invoice processing, bank and account reconciliations, journal entries, expense report checks, month-end report generation, vendor master data updates |
| **HR** | Employee onboarding/offboarding across systems, payroll data input, benefits enrolment, background check requests, timesheet compliance |
| **Customer service** | Pulling customer data from multiple systems into one view, address changes, refunds within policy, order status updates |
| **Insurance** | First notice of loss intake, policy administration, claims data entry, underwriting data gathering |
| **Banking** | KYC checks, account opening, loan processing data collection, fraud alert triage, regulatory reporting |
| **Healthcare** | Patient registration, insurance eligibility checks, claims submission, prior authorisation data gathering |
| **IT** | User provisioning, password resets, license management, report distribution |
| **Supply chain** | Order entry from emails or portals, shipment tracking updates, inventory reconciliation, supplier portal downloads |

## Benefits of RPA

- **Speed:** bots work 24/7 and complete tasks in seconds or minutes.
- **Accuracy:** no typos, no skipped steps, as long as the inputs are clean.
- **No system changes:** you automate on top of existing applications without replacing them or waiting for IT to build integrations.
- **Fast payback:** a well-chosen RPA process often pays back within 6–12 months.
- **Auditability:** every action is logged, which compliance teams love.
- **Scalability:** add bots during peaks (month-end, open enrolment) instead of temporary staff.
- **Employee experience:** people move from copy-paste work to exceptions, analysis and customer conversations.

## The limitations of RPA (be honest about these)

RPA has a reputation problem, and it is earned when RPA is used for the wrong things.

1. **It is brittle.** A changed field name, a new pop-up or a slow-loading page can break a bot. Maintenance often costs 20–30% or more of the original build effort per year.
2. **It only follows rules.** Classic RPA cannot read an email and understand what the customer wants, or decide what to do with an invoice that does not quite match.
3. **It needs structured inputs.** Scanned documents, free-text emails and handwritten forms require additional AI (OCR and document understanding).
4. **It automates bad processes too.** Automating a broken 14-step process gives you a fast broken 14-step process. Fix the process first.
5. **Licensing and infrastructure costs add up.** Enterprise RPA platforms charge per bot, per user or per consumption unit, plus infrastructure and a Centre of Excellence team.
6. **"Bot sprawl."** Without governance, organisations end up with hundreds of fragile bots nobody fully understands.

These limits are exactly why the industry moved from "RPA" to "intelligent automation" and now to "agentic automation".

## RPA vs intelligent automation vs AI agents

This is one of the most searched questions about RPA, and the terms are often used loosely, so here are clear definitions.

| | Classic RPA | Intelligent automation (IA / IPA) | AI agents / agentic automation |
|---|---|---|---|
| **What it is** | Bots that follow fixed rules in applications | RPA + AI (document understanding, machine learning, NLP) + process orchestration | LLM-based systems that pursue a goal, choose their own steps and use tools |
| **Handles unstructured data?** | No | Yes (documents, emails) | Yes |
| **Makes judgement calls?** | No | Limited (classification, predictions) | Yes, within set boundaries |
| **When something unexpected happens** | Fails or raises an exception | Routes to a human with context | Re-plans, tries alternatives, or escalates |
| **Best for** | Stable, high-volume, rules-based tasks | End-to-end processes involving documents and decisions | Variable, multi-step work that needs reasoning |
| **Predictability** | Very high | High | Lower; needs evaluation and guardrails |

### How does robotic process automation differ from intelligent automation?
**RPA is a component of intelligent automation.** RPA does the "hands" work: clicking, typing, moving data. Intelligent automation (also called **intelligent process automation, IPA**) adds the "eyes and brain": AI that reads documents, understands language, makes predictions and orchestrates the whole process across bots, people and systems.

**An example of an intelligent automation solution:** a mortgage application process where document AI extracts data from pay slips and bank statements, a machine-learning model scores risk, RPA bots enter the data into the loan origination system and pull credit reports, and a workflow engine routes edge cases to an underwriter. No single piece is "intelligent automation"; the combination is.

### What are the benefits of intelligent process automation?
Compared with RPA alone, IPA lets you automate processes that start with unstructured inputs (most real processes do), reduces the exception rate, improves straight-through processing, and gives you end-to-end visibility rather than isolated bot tasks. The trade-off is greater complexity and the need for AI model monitoring.

### Where agentic automation fits
Since 2025 the big RPA vendors have repositioned around **agentic automation**: AI agents that decide what to do, with RPA bots and APIs as the tools they use to do it. UiPath, Automation Anywhere and Microsoft all now sell platforms where an agent handles the reasoning and hands deterministic steps to bots. This is a genuinely useful combination: the agent handles the messy front of the process; the bot handles the precise, auditable system updates. Read more in [What are agentic workflows?](/blog/what-are-agentic-workflows/) and [What is an AI agent?](/blog/what-is-an-ai-agent/)

Be wary of **"agent washing"** though. Gartner specifically calls out vendors rebranding RPA and chatbots as "agentic" without substantial new capabilities.

## Popular RPA tools in 2026

| Tool | Strengths | Consider if... |
|---|---|---|
| **UiPath** | Market leader, broadest feature set, strong document understanding and agentic platform | You are an enterprise with many processes and want a full platform |
| **Microsoft Power Automate** | Desktop flows included with many Windows/Microsoft 365 licences, deep Microsoft integration | You live in Microsoft 365, Dynamics and Azure |
| **Automation Anywhere** | Cloud-native platform, strong in banking and finance, agentic features | You want cloud-first enterprise RPA |
| **SS&C Blue Prism** | Highly governed, secure, popular in regulated industries | Security and control are top priorities |
| **Open-source / developer options** (Robocorp/Sema4.ai, TagUI, Python with Playwright/Selenium) | Low licence cost, code-first, flexible | You have developers and want to avoid per-bot licensing |

For simpler cloud-app-to-cloud-app automation where everything has an API, you may not need RPA at all; tools like Zapier, Make and n8n are cheaper and more robust. See [No-code vs low-code automation](/blog/no-code-vs-low-code-automation/).

## How much does RPA cost?

Costs vary hugely, but a realistic picture:

- **Licences:** from free/included (Power Automate desktop for basic use) to thousands of dollars per unattended bot per year on enterprise platforms.
- **Build:** a simple automation may take 2–4 weeks of developer time; complex processes with document AI take 2–3 months.
- **Infrastructure:** virtual machines for unattended bots, plus orchestrator hosting if not cloud.
- **Maintenance:** budget 20–30% of build cost per year, more if the applications change often.
- **People:** a Centre of Excellence (CoE) for governance, pipeline and standards once you are past a handful of bots.

A common rule of thumb: target processes where the bot will save at least 0.5–1 FTE of effort, or deliver a clear compliance or speed benefit, to justify the overhead.

## How to choose processes for RPA

Score candidate processes on these criteria. The best RPA candidates score high on all of them:

- **Rule-based:** clear if-then logic, few judgement calls.
- **High volume:** done hundreds or thousands of times a month.
- **Stable:** the process and the applications do not change often.
- **Digital, structured inputs:** or inputs that document AI can reliably structure.
- **Low exception rate:** most cases follow the standard path.
- **Measurable:** you know today's time, cost and error rate.

Processes that fail these tests are often better served by an AI agent, a workflow redesign, or a proper API integration. For a complete framework, see [How to automate business processes](/blog/how-to-automate-business-processes/) and [How to build an automation strategy](/blog/how-to-build-an-automation-strategy/).

## Is RPA dead in 2026?

No, but its role has changed. Pure screen-scraping RPA as a standalone strategy is fading. What is growing is RPA as the reliable "execution layer" inside intelligent and agentic automation, especially for legacy systems with no APIs, regulated processes that require deterministic, auditable steps, and high-volume back-office work where predictability matters more than flexibility.

A sensible 2026 stack looks like: **APIs where possible, RPA where necessary, AI for documents and judgement, agents for variable multi-step work, and humans for the exceptions that really matter.**

## Frequently asked questions

### What is RPA in simple words?
RPA is software that copies what a person does on a computer (clicking, typing, copying data between applications) so that repetitive, rule-based tasks run automatically without human effort.

### What does RPA stand for in technology?
Robotic Process Automation. The "robots" are software bots, not physical machines.

### Is RPA the same as AI?
No. Classic RPA follows fixed rules and does not learn or understand content. AI adds the ability to read documents, understand language and make judgements. Combined, they form intelligent automation.

### What is intelligent process automation?
Intelligent process automation (IPA) combines RPA with AI technologies such as document understanding, machine learning and natural-language processing, plus workflow orchestration, to automate end-to-end processes that include unstructured data and decisions.

### What is an example of intelligent automation?
An insurance claims process where AI reads the claim form and photos, a model flags potential fraud, RPA bots create the claim in the policy system and request payment, and only complex or suspicious claims go to a human adjuster.

### Does RPA require coding?
Most RPA platforms are low-code: you build automations by dragging activities into a flowchart. Complex automations benefit from developer skills (variables, error handling, selectors, APIs), and some open-source options are fully code-based.

### Will RPA be replaced by AI agents?
Not fully. Agents are better at reasoning and handling variation; RPA is better at fast, cheap, precise and auditable execution. The direction of the industry is agents that decide and bots that execute.
