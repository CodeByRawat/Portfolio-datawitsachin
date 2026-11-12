---
title: How to Create an AI Chatbot (No-Code and Code): Step-by-Step Guide for 2026
description: How to create an AI chatbot for your website, business or WhatsApp, covering planning, knowledge base (RAG), choosing a platform, no-code and code builds, testing, deployment, costs and common mistakes.
date: 2026-11-11
cluster: agents
order: 30
hire: an AI chatbot
---

<p class="lede">To create an AI chatbot: (1) define what it should do and for whom, (2) gather the knowledge it needs (FAQs, policies, product docs), (3) choose a platform: a no-code chatbot builder, an automation tool like n8n, or code with a model API, (4) connect a language model to your knowledge using retrieval (RAG), (5) write clear instructions and guardrails, (6) add actions and human handoff, (7) test with real questions, and (8) deploy it on your website, WhatsApp or app, then monitor and improve it every week.</p>

AI chatbots have gone from frustrating decision trees to genuinely useful assistants that understand natural language, answer from your own content and, increasingly, take actions like booking appointments or checking orders. You can build a good one in an afternoon without code, or build a highly customised one with a few hundred lines of code. This guide walks you through both.

## What is a chatbot (and what is a chat agent)?

A **chatbot** is software that converses with users via text or voice. Modern **AI chatbots** use large language models (LLMs) to understand questions and generate natural answers. A **chat agent** goes a step further: besides answering, it can use tools to take actions, such as looking up an order, creating a support ticket or booking a meeting. (For the difference, see [What is an AI agent?](/blog/what-is-an-ai-agent/), and for how chatbots work under the hood, [Will AI replace customer service?](/blog/will-ai-replace-customer-service/))

## Step 1: Define the job

Answer these before choosing any tool:

- **Purpose:** customer support? Lead qualification? Internal HR/IT helpdesk? Product recommendations? Booking?
- **Users:** customers, prospects, employees? What language(s)?
- **Top questions:** list the 20–50 most common questions or requests (check support tickets, sales emails, chat logs).
- **Actions:** should it only answer, or also do things (book, look up, create tickets, collect leads)?
- **Boundaries:** what should it never do or discuss? When must it hand off to a human?
- **Channels:** website widget, WhatsApp, Messenger, Instagram, Slack, Teams, your app?
- **Success metrics:** resolution rate, leads captured, bookings, customer satisfaction, deflected tickets.

A focused chatbot that handles 20 common questions brilliantly beats an all-purpose bot that handles everything badly.

## Step 2: Prepare the knowledge

An AI chatbot is only as good as the information it can draw on.

- **Collect sources:** FAQs, help-centre articles, policies (returns, shipping, pricing rules), product information, service descriptions, opening hours, and internal docs for employee bots.
- **Clean them:** remove outdated and contradictory information. If two documents disagree, the bot will too.
- **Fill gaps:** write clear answers for common questions that aren't documented.
- **Structure for retrieval:** clear headings, one topic per section, explicit facts ("Returns are accepted within 30 days of delivery").

## Step 3: Choose your build approach

| Approach | Examples | Best for | Effort |
|---|---|---|---|
| **No-code chatbot builders** | Intercom Fin, Zendesk AI agents, Tidio, Chatbase, Voiceflow, Botpress, Microsoft Copilot Studio | Website and support bots, fast launch | Hours to days |
| **Assistant builders in AI platforms** | Claude Projects, custom GPTs, Gemini Gems | Internal assistants for teams | Minutes to hours |
| **Automation platforms** | n8n, Make, Zapier (chat triggers + AI agent nodes) | Bots that need to take actions across your apps | Days |
| **Code with model APIs and frameworks** | Claude, OpenAI or Gemini APIs; LangGraph, Claude Agent SDK, Vercel AI SDK | Fully custom, branded, integrated or high-volume bots | Days to weeks |

**Rule of thumb:** if a support platform you already use (Intercom, Zendesk, HubSpot, Freshdesk) offers an AI agent, start there; it already has your help content and handoff to human agents. Build custom when you need deep integrations, unusual workflows, full control or lower cost at scale.

## Step 4: Connect the model to your knowledge (RAG)

Most business chatbots use **retrieval-augmented generation (RAG)**:

1. Your documents are split into chunks and indexed (with embeddings for semantic search, often combined with keyword search).
2. When a user asks a question, the system retrieves the most relevant chunks.
3. The chunks are given to the model along with the question and instructions.
4. The model answers based on that content, ideally citing it.

No-code builders do this automatically when you upload documents or point them at your website. If you build it yourself, use a vector database or search service (pgvector, Pinecone, Weaviate, Elasticsearch/OpenSearch, or your cloud provider's offering). For small knowledge bases, simply including all the content in the prompt can work with today's large context windows.

## Step 5: Write the instructions and guardrails

The system prompt defines the bot's personality, scope and rules:

```
You are the customer assistant for Bright Smile Dental Clinic.

GOAL: Answer patient questions about services, prices, opening hours,
insurance and appointments, and help patients book appointments.

KNOWLEDGE: Answer only from the clinic information provided.
If the answer isn't there, say you're not sure and offer to connect
the patient with the front desk.

TONE: Warm, concise, plain English. No medical jargon.

RULES:
- Never give medical diagnoses or treatment advice. For pain, swelling
  or bleeding, recommend calling the clinic or, in emergencies, emergency services.
- Never quote prices not listed in the price list.
- Don't ask for or store medical history in chat.
- If the patient is upset or asks for a person, hand off immediately.

ACTIONS: Use check_availability and book_appointment for bookings.
Confirm date, time and patient name before booking.
```

Good instructions include: role, goal, knowledge boundaries, tone, explicit rules, escalation triggers and how to use actions.

## Step 6: Add actions and human handoff

To turn a Q&A bot into a useful chat agent, connect tools:

- **Booking:** calendar availability and booking (Calendly, Google Calendar, practice management systems)
- **Lead capture:** create a CRM contact and notify sales (see [What is a CRM?](/blog/what-is-a-crm/))
- **Order lookup:** check order status by order number and email
- **Ticket creation:** create a support ticket with a conversation summary
- **Human handoff:** transfer to live chat or create a callback request, passing the full transcript

Always make it easy to reach a human. Customers forgive a bot that can't help; they don't forgive one that traps them.

## Step 7: Test thoroughly

1. **Build a test set** of 50–100 real questions, including:
   - Common questions phrased many different ways
   - Questions the bot shouldn't answer (out of scope, medical/legal advice)
   - Typos, slang and other languages
   - Angry or emotional messages
   - Attempts to manipulate it ("ignore your instructions and…")
2. **Check each answer** for accuracy, tone, rule-following and correct handoff.
3. **Fix the root cause:** usually missing or unclear knowledge, then the instructions.
4. **Run a soft launch** with internal users or a small share of visitors.

## Step 8: Deploy

- **Website:** embed the chat widget snippet (most builders provide a script tag).
- **WhatsApp:** connect through the WhatsApp Business Platform via a provider (Twilio, 360dialog, MessageBird/Bird, Meta Cloud API) or your chatbot builder's integration.
- **Messenger and Instagram:** via Meta's APIs or builder integrations.
- **Slack or Microsoft Teams:** for internal assistants.
- **Phone:** voice AI agents can answer calls using speech-to-text and text-to-speech.

## Step 9: Monitor and improve weekly

- Review a sample of conversations every week.
- Track unanswered questions and add knowledge for them.
- Track handoff rate, resolution rate, satisfaction ratings, leads and bookings.
- Watch costs (model usage per conversation).
- Update knowledge whenever policies, prices or products change.

## A minimal code example (Python)

This shows the core of a knowledge-grounded chatbot using the Anthropic API. For a small knowledge base, we simply include it in the system prompt.

```python
import anthropic

client = anthropic.Anthropic()

KNOWLEDGE = open("clinic_info.md").read()   # FAQs, prices, hours, policies

SYSTEM = f"""You are the friendly assistant for Bright Smile Dental.
Answer ONLY from the clinic information below. If it isn't covered,
say so and offer to connect the patient with the front desk.
Never give medical advice.

<clinic_information>
{KNOWLEDGE}
</clinic_information>"""

history = []
while True:
    user = input("You: ")
    history.append({"role": "user", "content": user})
    reply = client.messages.create(
        model="claude-haiku-5-5", max_tokens=500,
        system=SYSTEM, messages=history)
    text = reply.content[0].text
    history.append({"role": "assistant", "content": text})
    print("Bot:", text)
```

To make it production-ready, you'd add a web front end, retrieval for larger knowledge bases, tools for booking and handoff (see [How to create an AI agent](/blog/how-to-create-an-ai-agent/)), conversation storage, rate limiting, monitoring and privacy controls.

## How to create a bot with no code (n8n example)

1. Add a **Chat Trigger** node (n8n provides an embeddable chat widget).
2. Add an **AI Agent** node with your instructions.
3. Attach a **chat model** (Anthropic, OpenAI, Google, etc.).
4. Attach a **vector store retriever** tool loaded with your documents, or a simple knowledge tool.
5. Attach action tools: Google Calendar, your CRM, HTTP requests to your systems.
6. Add **window buffer memory** for multi-turn conversations.
7. Test in the built-in chat, then embed the widget on your site.

## How much does an AI chatbot cost?

- **No-code builders:** from free tiers to about $20–$500+ per month depending on conversation volume and features; some support platforms charge per AI resolution.
- **Custom builds:** development effort from a few days to several weeks, plus hosting.
- **Model usage:** often fractions of a cent to a few cents per conversation with efficient models; more for long conversations with large contexts or premium models.

## Common mistakes

1. **Messy or outdated knowledge.** The #1 cause of wrong answers.
2. **No scope.** Trying to answer everything.
3. **No human handoff,** or a hidden one.
4. **Not testing edge cases** and manipulation attempts.
5. **Letting it invent answers.** Instruct it to say "I don't know" and route to a human.
6. **Collecting sensitive data in chat** without proper safeguards.
7. **Launch and forget.** Bots need weekly review.

## Frequently asked questions

### How do I create an AI chatbot for free?
Use free tiers of chatbot builders like Tidio, Chatbase or Botpress, self-host n8n with a low-cost model API, or create a custom assistant in Claude Projects, a custom GPT or a Gemini Gem for internal use. Production website bots usually need a paid plan as volume grows.

### How do I create a chatbot for my website?
Define its purpose, gather your FAQs and policies, choose a builder (or your support platform's AI agent), upload your knowledge, write instructions and rules, set up human handoff, test with real questions, then embed the provided widget code on your site.

### How do I make a bot without coding?
Use no-code platforms such as Voiceflow, Botpress, Tidio, Chatbase, Microsoft Copilot Studio, or n8n's chat trigger and AI agent nodes. You configure knowledge, instructions and integrations visually.

### What is a chat agent?
A chat agent is an AI chatbot that can also take actions using tools, such as checking orders, booking appointments, updating a CRM or creating support tickets, rather than only answering questions.

### How long does it take to build an AI chatbot?
A simple knowledge-based bot can be live in a few hours with a no-code builder. A well-tested business chatbot with integrations, handoff and monitoring typically takes one to four weeks.

### Can I create a WhatsApp AI chatbot?
Yes. Use the WhatsApp Business Platform through a provider such as Twilio or a chatbot builder with WhatsApp integration, then connect it to your AI model and knowledge base. WhatsApp has rules about templates, opt-ins and messaging windows that you must follow.
