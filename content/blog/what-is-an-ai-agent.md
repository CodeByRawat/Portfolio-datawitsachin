---
title: What Is an AI Agent? A Plain-English Guide for Business (2026)
description: What an artificial intelligence agent actually is, how it works under the hood, the five types, real business examples, where agents fail, and how to tell a real agent from a rebranded chatbot.
date: 2026-11-11
cluster: agents
order: 1
hire: a custom AI agent
---

<p class="lede">An <strong>AI agent</strong> is software that is given a goal, decides for itself which steps to take to reach it, uses tools (APIs, databases, browsers, other software) to take those steps, checks the results, and keeps going until the goal is met or it needs a human. A chatbot answers. An agent <em>acts</em>.</p>

That one-sentence definition is what you came for, but it hides almost everything that matters when you are deciding whether to build one, buy one, or ignore the hype. The word "agent" is now stamped on every product from email plugins to enterprise RPA suites, and Gartner estimates that only around 130 of the thousands of vendors claiming "agentic AI" actually deliver it ([Gartner, June 2025](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027)).

This guide explains what an AI agent really is, how it works, the different types, where agents are earning their keep in 2026, where they fall over, and a practical test to separate real agents from rebranded chatbots.

## The short definition, then the useful one

**The textbook definition** (from Russell and Norvig's *Artificial Intelligence: A Modern Approach*, the standard university text) is that an agent is anything that *perceives its environment through sensors and acts upon that environment through actuators*. A thermostat is technically an agent. So is a self-driving car.

**The 2026 business definition** is narrower. When people say "AI agent" today, they almost always mean:

> A system built around a large language model (LLM) that receives a goal in natural language, plans a sequence of actions, calls tools to carry those actions out, observes what happened, and loops until the job is done.

Four ingredients make something an agent rather than a chatbot or a script:

1. **A goal, not a prompt.** You say "reconcile last month's supplier invoices against purchase orders and flag mismatches", not "summarise this PDF".
2. **Autonomy over the steps.** Nobody hard-coded the sequence. The agent decides what to do first, second and third, and changes the plan when something unexpected happens.
3. **Tools.** The agent can *do* things: query a database, send an email, update a CRM record, run code, search the web, fill a form.
4. **A feedback loop.** After every action it looks at the result and decides whether it is closer to the goal. This loop is what lets it recover from errors instead of failing silently.

Remove any one of those and you have something else. A chatbot has no tools. An RPA bot has tools but no autonomy. A copilot has tools but waits for you to approve every step.

## How an AI agent actually works (under the hood)

Strip away the marketing and almost every production agent in 2026 runs the same loop. It is worth understanding because it explains both why agents are powerful and why they break.

### 1. The model is the "brain"

An LLM such as Claude, GPT or Gemini does the reasoning. It reads the goal, the conversation so far, the list of available tools and the results of previous actions, and it decides the next step. The model never touches your systems directly; it only *asks* for a tool to be called.

### 2. Tools are the "hands"

Each tool is a function with a name, a description and a schema, for example `lookup_order(order_id)` or `send_email(to, subject, body)`. The model outputs a structured request ("call `lookup_order` with `order_id=4412`"), your code executes it, and the result is fed back to the model.

Since late 2024, the **Model Context Protocol (MCP)** has become the standard way to plug tools into agents. Anthropic created it, and in December 2025 it was donated to the Linux Foundation's new Agentic AI Foundation, co-founded with OpenAI and Block and backed by Google, Microsoft and AWS ([Anthropic](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation)). Practically, MCP means a tool built once (say, a connector to your ERP) can be used by any compliant agent.

### 3. Memory is the "notebook"

Agents have two kinds of memory:

- **Short-term (context):** everything in the current task: the goal, steps taken, tool results. This is limited by the model's context window.
- **Long-term:** facts stored outside the model, usually in a database or vector store, and retrieved when relevant ("this customer prefers email", "invoices from Supplier X always come in two parts").

### 4. The loop is the "heartbeat"

The core cycle is often called **ReAct** (Reason + Act):

```
goal → think → choose tool → act → observe result → think again → ... → done (or ask a human)
```

A well-built agent also has **guardrails** around this loop: a maximum number of steps, a budget, a list of actions that always require human approval (anything that moves money, deletes data or contacts a customer), and logging of every decision so you can audit it later.

### A concrete walk-through

Goal given to a customer-support agent: *"Customer #8812 says their order arrived damaged. Resolve it."*

| Step | Agent thinks | Agent does | Result |
|---|---|---|---|
| 1 | I need the order details | `get_customer_orders(8812)` | Finds order #55120, delivered 2 days ago |
| 2 | Check the return policy for this product | `search_policy("damaged on arrival")` | Policy: replace free within 30 days |
| 3 | Is the item in stock? | `check_inventory(sku)` | 14 in stock |
| 4 | Replacement is allowed and possible | `create_replacement_order(55120)` *(within its approval limit)* | Order #55311 created |
| 5 | Tell the customer | `send_email(...)` | Email sent with tracking |
| 6 | Log it | `add_ticket_note(...)` | Done |

Nobody programmed "if damaged, then check stock, then reorder". The agent worked out the sequence from the goal, the policy and the tools. If inventory had been zero, it would have chosen a different path, perhaps a refund, or escalated to a human if refunds were outside its permission.

## The five classic types of AI agents

Computer-science courses classify agents into five types. You will see these in exam questions and vendor whitepapers, so here they are with modern examples.

| Type | How it decides | Everyday example |
|---|---|---|
| **Simple reflex** | Fixed if-then rules on the current input only | A spam filter rule; a thermostat |
| **Model-based reflex** | Rules plus an internal picture of the world it keeps updating | A robot vacuum that remembers which rooms it cleaned |
| **Goal-based** | Searches for actions that reach a goal | Route planning in Google Maps |
| **Utility-based** | Picks the action that maximises a score (cost, speed, satisfaction) | Dynamic pricing; ad-bidding systems |
| **Learning** | Improves its behaviour from feedback over time | Recommendation engines; a support agent that learns from resolved tickets |

Modern LLM agents are mostly **goal-based** with elements of utility (they weigh options) and learning (through stored memory and feedback), though the underlying model does not retrain itself on the fly.

You will also see agents described by *structure*:

- **Single agent:** one model, one loop, many tools. The right default for most business use cases.
- **Multi-agent system:** several specialised agents (a researcher, a writer, a checker) coordinated by an orchestrator. Powerful, but harder to debug and more expensive. Use it only when one agent genuinely cannot hold the whole task.
- **Worker agent / sub-agent:** an agent that is handed one narrow job by a supervisor agent and reports back. This is what people mean when they ask *"what is the purpose of a worker agent?"*: it keeps each step focused, keeps the main agent's context clean, and lets parts of the work run in parallel.

## AI agent vs chatbot vs copilot vs RPA

This is where most confusion (and most "agent washing") lives.

| | Chatbot | Copilot / assistant | RPA bot | AI agent |
|---|---|---|---|---|
| Input | A question | A request inside an app | A trigger (file, schedule) | A goal |
| Decides the steps? | No | Partly, with you | No, follows a script | Yes |
| Takes actions in systems? | Rarely | Yes, with approval | Yes | Yes |
| Handles the unexpected? | Gives a canned reply | Asks you | Breaks | Re-plans or escalates |
| Best for | FAQs | Individual productivity | High-volume, stable, rule-based work | Variable, multi-step work that needs judgement |

The honest answer for most companies is that **you will use all four.** RPA is still the cheapest and most reliable way to move structured data between systems that never change. Agents earn their cost on the messy work in between: reading an email, figuring out what the customer wants, and deciding which of five processes to kick off. (More on that split in [What is robotic process automation?](/blog/what-is-robotic-process-automation/))

## Where AI agents are actually working in 2026

Adoption numbers vary wildly depending on who is counting and what they call an agent, but the direction is clear. McKinsey's 2025 State of AI survey found 62% of organisations were at least experimenting with AI agents and 23% were scaling them somewhere, though no more than 10% were scaling in any single function ([McKinsey](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai)). Gartner projects that 40% of enterprise applications will include task-specific agents by the end of 2026, up from under 5% in 2025.

The use cases that are producing real results share a pattern: high volume, clear success criteria, and data the agent can reach through APIs.

### Customer service
Agents triage tickets, look up orders, issue refunds within limits, and draft replies for complex cases. Gartner expects agentic AI to autonomously resolve up to 80% of *common* customer service issues by 2029, while also predicting that no Fortune 500 company will eliminate human service staff by 2028. (Full breakdown in [Will AI replace customer service?](/blog/will-ai-replace-customer-service/))

### Finance and operations
Invoice matching, expense auditing, vendor onboarding, collections follow-ups and month-end reconciliation. These used to be rigid RPA flows; agents handle the exceptions (missing PO numbers, odd formats, partial deliveries) that used to land in a human's queue.

### Sales and marketing
Lead research and enrichment, personalised first-touch emails, CRM hygiene, meeting prep briefs and campaign reporting. (See [How to use AI in marketing](/blog/how-to-use-ai-in-marketing/).)

### Software engineering
Coding agents now write, test and fix code across whole repositories, open pull requests and respond to review comments. The 2025 Stack Overflow survey found 31% of developers already using AI agents, with another 17% planning to ([Stack Overflow](https://stackoverflow.blog/2025/07/29/developers-remain-willing-but-reluctant-to-use-ai-the-2025-developer-survey-results-are-here)).

### IT and internal operations
Password resets, access requests, onboarding checklists, incident triage, and log analysis.

### Research and analysis
Agents that gather information from dozens of sources, compare it, and produce a cited report: competitive analysis, due diligence, regulatory monitoring.

## Why so many agent projects fail

Gartner predicts **more than 40% of agentic AI projects will be cancelled by the end of 2027** because of rising costs, unclear business value or inadequate risk controls. MIT's NANDA initiative reported in 2025 that around 95% of the generative-AI pilots it studied produced no measurable P&L impact, and blamed integration and workflow fit rather than model quality ([Fortune](https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/)).

From building these systems, the failure causes are remarkably consistent:

1. **No clear definition of "done".** "Make support better" is not a goal an agent (or a project) can hit. "Resolve password-reset tickets end to end with under 2% escalation" is.
2. **The agent cannot reach the data.** If the information lives in PDFs on a shared drive and a legacy system with no API, the agent will be slow, expensive and wrong.
3. **Too much autonomy too early.** Giving an agent write access to production systems on day one is how you end up with refunds issued to the wrong customer. Start in "draft mode" where a human approves, then widen the permissions as the error rate proves itself.
4. **No evaluation.** Teams demo ten happy-path examples and ship. You need a test set of hundreds of real cases, including the ugly ones, and you need to re-run it every time the prompt, model or tools change.
5. **Agent where a workflow would do.** If the steps never change, you do not need an agent deciding them every time. A deterministic workflow with one LLM step inside it is cheaper, faster and easier to audit. (See [What are agentic workflows?](/blog/what-are-agentic-workflows/))
6. **Runaway cost.** Each loop iteration is a model call. An agent that takes 25 steps with a large context on every ticket can cost more than the human it replaced. Set step and token budgets.

## How to tell a real AI agent from a rebranded chatbot

When a vendor says "agent", ask these six questions:

1. **Can it take actions in my systems, or only produce text?** If it only drafts, it is an assistant.
2. **Who decides the sequence of steps?** If a person drew it in a flowchart, it is a workflow (which may be exactly what you need, but it is not an agent).
3. **What happens when a step fails?** A real agent retries, tries another route, or escalates with context. A script just errors.
4. **What tools does it ship with, and can I add my own?** Ask specifically about MCP support and custom API connections.
5. **What can it do without human approval, and can I configure that?** You want granular, per-action permissions.
6. **Can I see every decision it made and why?** Full trace logs are non-negotiable for anything touching customers or money.

## Should your business use AI agents?

A simple three-question filter:

- **Is the task done often?** Agents have setup and evaluation costs. Hundreds or thousands of runs a month justify them; five do not.
- **Does it need judgement, or just rules?** Pure rules → workflow automation or RPA. Judgement on messy inputs (emails, documents, conversations) → agent.
- **Is a mistake recoverable?** Start agents where errors are cheap and reversible (drafting, triage, research) before moving to anything that touches money, compliance or customers directly.

If you answered yes, yes and yes, an agent is worth piloting. If you want to try building one yourself, the next guide walks through it step by step: [How to create an AI agent](/blog/how-to-create-an-ai-agent/).

## Frequently asked questions

### What is an artificial intelligence agent in simple terms?
An AI agent is software that you give a goal to, and it figures out the steps, uses other software tools to carry them out, checks the results and keeps going until the job is done or it needs your help. The key difference from a chatbot is that an agent takes actions instead of only answering questions.

### Is ChatGPT an AI agent?
The basic chat experience is an assistant, not an agent: it answers but does not act in your systems. Modes that let the model browse, run code, operate a computer or call connected apps on its own to complete a multi-step task do behave as agents.

### What are the 5 types of AI agents?
Simple reflex agents, model-based reflex agents, goal-based agents, utility-based agents and learning agents. Most modern LLM agents are goal-based, with some utility and learning behaviour added through memory and feedback.

### What is the purpose of a worker agent?
A worker agent (or sub-agent) is given one narrow task by a supervising agent, completes it, and returns the result. It keeps each step focused, keeps the supervisor's context uncluttered, and allows parts of a larger job to run in parallel.

### What is AI agent workflow automation?
It is automation where a defined workflow (trigger, steps, outputs) includes one or more AI agents at the steps that need judgement, such as reading an email to classify intent, or deciding how to handle an exception, while the predictable steps stay deterministic.

### Are AI agents safe to use with company data?
They can be, with the right controls: least-privilege access to tools, human approval for high-risk actions, full logging, data-retention agreements with your model provider, and regular evaluation against real cases. The risk usually comes from over-broad permissions rather than from the model itself.

### How much does it cost to build an AI agent?
A focused internal agent built on an existing platform can be piloted for a few thousand dollars plus model usage. Production agents that integrate with several systems, include evaluation suites and governance typically run into the tens of thousands. Ongoing cost is mainly model usage, which scales with the number of steps and the amount of context per task.
