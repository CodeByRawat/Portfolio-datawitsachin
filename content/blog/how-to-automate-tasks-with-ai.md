---
title: How to Automate Tasks with AI: A Practical Playbook for Work (2026)
description: How to automate tasks with AI at work, step by step. Find the right tasks, pick the right level of automation, build your first AI workflows, and see 20 ready-to-copy examples.
date: 2026-11-11
cluster: automation
order: 5
hire: an AI automation
---

<p class="lede">To automate tasks with AI: list the repetitive tasks you do each week, pick the ones that are frequent, follow a recognisable pattern and involve reading, writing or deciding based on text; then connect a trigger (an email, form, file or schedule) to an AI step that does the thinking and to the apps where the result needs to go, using a tool like Zapier, Make, n8n or Power Automate. Keep a human approval step until the automation has proven itself.</p>

That is the core of it. The rest of this guide gives you the method I use with clients to find which tasks to automate, the four levels of AI automation (and when each one is right), step-by-step instructions for your first automation, and 20 concrete examples by role.

## Why "using AI" is not the same as "automating with AI"

Most people's experience of AI at work is a chat window: you copy something in, ask for help, copy the answer out. That is useful, but it is not automation. You are still the trigger, the courier and the quality check for every single task.

**Automation** means the task runs without you starting it. An email arrives, and by the time you look at it, AI has classified it, drafted a reply, updated the CRM and put a summary in Slack. The difference in time saved is an order of magnitude.

The good news: the tools to do this are now accessible to non-developers, and the patterns repeat across almost every job.

## Step 1: Find the tasks worth automating

### Run a one-week task audit
For one normal week, write down every task you do more than once, with roughly how long it takes each time. Don't filter yet. Typical entries:

- Reading and sorting incoming emails
- Writing meeting notes and follow-ups
- Copying data from emails or PDFs into a spreadsheet or CRM
- Weekly status report
- Answering the same five customer questions
- Researching a company before a call
- Turning a long document into a summary for your manager

### Score each task
Give each task a score of 1–3 on four questions:

| Question | 1 | 3 |
|---|---|---|
| **How often?** | Monthly | Daily or more |
| **How long each time?** | Under 2 minutes | 15+ minutes |
| **How predictable is it?** | Every case is different | Same pattern each time |
| **How bad is a mistake?** | Serious (money, legal, customer harm) | Easily caught and fixed |

Tasks scoring 10–12 are your first automation candidates. Tasks that score high on frequency and time but low on predictability are candidates for AI *assistance*, not full automation.

### Know what AI is good at
AI excels at tasks involving **language and unstructured information**:

- **Reading:** classify, extract, summarise, translate, detect sentiment
- **Writing:** draft, rewrite, personalise, format
- **Deciding (within rules):** route, prioritise, score, flag
- **Researching:** gather, compare, synthesise

Plain rule-based automation (no AI needed) is better for moving structured data between systems, scheduled tasks, and calculations. You will usually combine both.

## Step 2: Pick the right level of AI automation

There are four levels. Start at the lowest level that does the job.

### Level 1: AI-assisted (you trigger, AI helps)
You use an AI assistant with saved prompts, custom instructions or a custom GPT/Claude Project loaded with your templates and documents. **Best for:** tasks that need your judgement every time. **Setup:** minutes.

### Level 2: Rule-based automation with an AI step
A workflow tool handles the trigger and the movement of data; one step calls AI to classify, extract or draft. Example: *new support email → AI classifies topic and urgency → create ticket in the right queue with a summary*. **Best for:** most business tasks. **Setup:** hours.

### Level 3: Multi-step AI workflow with human checkpoints
Several AI steps chained together, with a human approval before anything goes out. Example: *new sales call recording → transcribe → summarise → extract action items → draft follow-up email → update CRM → rep approves the email in Slack*. **Best for:** recurring processes with multiple outputs. **Setup:** a day or two.

### Level 4: AI agent
An agent given a goal and tools works out the steps itself. Example: *"Research this list of 30 prospects and write a personalised opening line for each, citing something specific about their company."* **Best for:** variable, research-heavy or multi-step tasks where the path changes each time. **Setup:** days to weeks to do properly. (Full guide: [How to create an AI agent](/blog/how-to-create-an-ai-agent/))

## Step 3: Choose your tools

| Tool | Best for | Notes |
|---|---|---|
| **Zapier** | Non-technical users, huge app library (thousands of integrations) | Easiest to start; costs rise with task volume; has AI steps and agents |
| **Make** | Visual, complex multi-branch workflows at lower cost | Steeper learning curve than Zapier; good value |
| **n8n** | Technical users, AI agents, self-hosting, data control | Free if self-hosted; strongest AI agent features |
| **Microsoft Power Automate** | Microsoft 365 organisations | Deep Outlook, Teams, SharePoint, Excel integration; includes desktop RPA |
| **Built-in AI features** | Gmail, Outlook, Notion, HubSpot, Slack, etc. | Check what your existing tools already do before building anything |
| **AI assistants** (Claude, ChatGPT, Gemini) | Level 1 and many agentic tasks | Projects/custom GPTs, connectors and computer use extend them further |

For a deeper comparison, see [No-code vs low-code automation](/blog/no-code-vs-low-code-automation/).

## Step 4: Build your first AI automation (worked example)

Let's automate a very common task: **turning inbound emails into organised, prioritised tasks with draft replies.**

**Tools:** Gmail or Outlook, an automation platform (Zapier, Make or n8n), an AI model, and your task tool (Asana, Trello, Notion, or a spreadsheet).

1. **Trigger:** "New email in inbox" (optionally filtered to a label or specific address like support@ or sales@).
2. **AI step: classify and extract.** Prompt:
   ```
   Read this email and return JSON only:
   {
     "category": one of ["sales_inquiry","support","invoice","partnership","spam","other"],
     "urgency": one of ["high","normal","low"],
     "summary": one sentence,
     "action_needed": what the recipient needs to do, or "none",
     "customer_name": if present,
     "deadline": ISO date if mentioned, else null
   }
   Email:
   {{email_body}}
   ```
3. **Router/filter:** branch on `category`. Spam → archive. Invoice → forward to accounts. Others continue.
4. **AI step: draft reply.** For sales and support, give AI your FAQ or product notes and ask for a draft reply in your tone. Save it as a **draft**, not sent.
5. **Create task** in your task tool with the summary, urgency, deadline and a link to the email.
6. **Notify** high-urgency items in Slack or Teams immediately.

**Test** with 20–30 real past emails before turning it on. Check the classification accuracy and the quality of drafts. Adjust the prompt categories and examples until it is consistently right.

**Result:** your inbox becomes a prioritised to-do list with replies already drafted. Typical time saving: 30–60 minutes a day for anyone handling a shared inbox.

## 20 examples of tasks you can automate with AI

### For everyone
1. **Meeting notes and follow-ups:** recording → transcript → summary, decisions and action items → emailed to attendees and added to your task tool.
2. **Inbox triage:** classify, prioritise and draft replies (the example above).
3. **Document summaries:** new file in a folder → summary posted to the team channel.
4. **Weekly status report:** pull updates from your project tool → AI writes the summary → send to manager.
5. **Research briefs:** before each calendar meeting with an external contact, an agent researches the person and company and emails you a one-page brief.

### Sales
6. **Lead enrichment and scoring** from form submissions.
7. **Personalised outreach first lines** based on prospect research.
8. **CRM updates from call transcripts:** next steps, objections, deal stage.
9. **Proposal first drafts** from discovery notes and templates.

### Marketing
10. **Content repurposing:** one article or video into posts for every channel.
11. **Social listening digest:** mentions and comments summarised into themes daily.
12. **Campaign performance summaries** with recommendations.

### Customer support
13. **Ticket classification and routing.**
14. **Suggested replies** from your knowledge base for agents to approve.
15. **Feedback analysis:** reviews and survey comments grouped into issues and trends.

### Finance and operations
16. **Invoice and receipt data extraction** into accounting software.
17. **Expense policy checks:** flag claims that break policy before approval.
18. **Contract review checklists:** extract key terms, dates and unusual clauses.

### HR and recruiting
19. **CV screening summaries** against job requirements (with a human deciding, and checked for bias).
20. **Onboarding:** personalised welcome packs, IT requests and checklists triggered by a new hire record.

## How to automate tasks with AI safely

- **Keep humans approving anything external** (emails to customers, payments, published content) until you have weeks of evidence the automation gets it right.
- **Use business AI plans** with data-retention controls; don't send sensitive personal or customer data to consumer tools.
- **Ask for structured output** (JSON with fixed categories) so downstream steps don't break on creative wording.
- **Log everything:** keep a sheet or database of every AI decision, so you can spot errors and patterns.
- **Have a fallback:** if the AI step fails or returns something unexpected, route the item to a human rather than dropping it.
- **Review monthly:** check a sample of outputs, look at failures and update prompts.

## Common mistakes

1. **Automating a task you do twice a month.** The setup and maintenance will cost more than it saves.
2. **Skipping the test set.** Ten good examples in a demo prove nothing. Test with real, messy data.
3. **Asking AI for free text when you need a decision.** Constrain the output to categories.
4. **Building one huge automation.** Build small automations that do one thing well and link them.
5. **Forgetting who owns it.** Every automation needs a named owner who gets the alert when it breaks.

## How to measure the time you save

For each automation, record: how long the task took manually × how many times it runs per month, minus the time you still spend reviewing. Add the monthly tool and AI costs. Most well-chosen automations pay back in the first month; if one doesn't after three, rework it or switch it off.

To take this further and automate whole processes rather than individual tasks, read [How to automate business processes](/blog/how-to-automate-business-processes/).

## Frequently asked questions

### How can I use AI at work?
Use AI at work for drafting emails and documents, summarising meetings and long documents, research, data analysis, and, most powerfully, inside automated workflows that classify incoming work, extract information, draft responses and update your systems without you having to trigger every step.

### What tasks can AI automate?
AI can automate tasks that involve reading, writing or rule-guided decisions on text: email triage, data extraction from documents, meeting notes, report writing, content repurposing, ticket routing, lead research, first-draft replies and summarisation. Tasks needing high-stakes judgement are better kept AI-assisted with human approval.

### How do I automate repetitive tasks with AI for free?
Use the free tiers of Zapier or Make, or self-host n8n for free, combined with a low-cost AI API. Many tools you already use (Gmail, Outlook, Notion, Slack) also include free or bundled AI features. For low volumes, total costs can be a few dollars a month.

### Do I need to code to automate tasks with AI?
No. Zapier, Make, n8n and Power Automate let you build AI workflows visually. Coding helps for complex logic, custom integrations or high-volume automations, but it is not required to start.

### What is the difference between AI automation and regular automation?
Regular automation follows fixed rules on structured data ("when a form is submitted, add a row to the sheet"). AI automation can handle unstructured inputs and judgement ("read this email, work out what the customer wants, and route it accordingly"). Most useful automations combine both.

### Is it safe to give AI access to my email and files?
It can be, if you use reputable tools on business plans, give the minimum access needed, keep a human approval step for anything sent externally, and review logs. Avoid granting broad access to consumer-grade tools, and treat instructions found inside emails or documents as data, not commands.
