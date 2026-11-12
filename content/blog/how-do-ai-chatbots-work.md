---
title: "How Do AI Chatbots Work? What a Chatbot Is, the Technology Behind It and How Businesses Use Them"
description: "What a chatbot is and how AI chatbots work step by step: rule-based vs NLP vs LLM chatbots, intent detection, retrieval (RAG) over your knowledge base, tools and integrations, human handoff, channels like websites and WhatsApp, costs, accuracy and how to get one for your business."
date: 2026-11-12
cluster: agents
order: 75
hire: an AI chatbot
---

<p class="lede">A <strong>chatbot</strong> is software that holds a conversation with people through text or voice. Modern <strong>AI chatbots</strong> work by sending the user's message, plus instructions and relevant information from a knowledge base, to a <strong>large language model (LLM)</strong>, which understands the request and generates a natural-language reply. Business chatbots add <strong>retrieval</strong> (looking up your own documents), <strong>tools</strong> (checking orders, booking appointments, updating the CRM), <strong>guardrails</strong> and <strong>handoff to a human</strong> when needed.</p>

Chatbots have gone from frustrating button menus to assistants that can actually answer questions and get things done. This guide explains what a chatbot is, the three generations of chatbot technology, exactly what happens when you send a message to an AI chatbot, how businesses connect them to their data and systems, and what it takes to get one that works.

## What is a chatbot?

A chatbot is a computer program that simulates conversation. You find them:
- On **websites** (chat widgets for support and sales)
- In **messaging apps** (WhatsApp, Facebook Messenger, Instagram, Telegram, Slack, Teams)
- In **apps** and customer portals
- On **phone lines** (voice bots)
- As **general assistants** (ChatGPT, Claude, Gemini, Copilot)

## Three types of chatbots

| Type | How it works | Strengths | Weaknesses |
|---|---|---|---|
| **Rule-based (decision tree)** | Fixed menus, buttons and keyword triggers | Predictable, cheap, easy to control | Rigid; fails on anything unexpected |
| **NLP / intent-based** | Machine learning classifies the user's *intent* ("track order") and extracts *entities* (order number), then follows a scripted flow | Handles varied wording for known tasks | Needs training data for each intent; limited outside them |
| **LLM-powered (generative AI)** | A large language model reads the conversation, instructions and retrieved knowledge, then generates replies and decides which tools to use | Understands almost any phrasing, answers from documents, handles multi-step requests | Needs guardrails against wrong or off-topic answers; usage costs |

Most modern business chatbots are **hybrids**: an LLM for understanding and answering, with structured flows and rules for critical steps like payments, identity checks and refunds.

## How an AI chatbot works, step by step

Imagine a customer types: *"Hi, where's my order? I ordered a blue jacket last week."*

### 1. Receive the message
The chat widget or messaging channel (e.g., WhatsApp via its Business API) sends the message to the chatbot backend, often through a webhook (see [What is a webhook?](/blog/what-is-a-webhook/)).

### 2. Build the context
The backend assembles everything the model needs:
- **System instructions:** who the bot is, tone, what it may and may not do, when to hand off
- **Conversation history**
- **Customer data** if the user is identified (name, recent orders)
- **Relevant knowledge** retrieved from the help centre, policies or product catalogue

### 3. Retrieve knowledge (RAG)
**Retrieval-augmented generation (RAG)** finds the most relevant passages from your documents:
1. Documents are split into chunks and converted into **embeddings** (numerical representations of meaning) ahead of time.
2. The user's question is embedded too, and a **vector search** (often combined with keyword search) finds matching chunks.
3. Those chunks are added to the prompt so the answer is based on *your* information, not the model's general knowledge.

### 4. Understand and decide
The LLM interprets the request. Here it recognises an order-status question and that it needs data it doesn't have.

### 5. Use tools
The model calls a **tool** (function) the developers defined, such as `get_order_status(email)` or `lookup_order(order_number)`. The backend runs it against the e-commerce system and returns the result: "Shipped on Tuesday, arriving Friday, tracking link...".

### 6. Generate the reply
The model writes a natural answer using the tool result: *"Your blue jacket shipped on Tuesday and should arrive Friday. Here's your tracking link..."*

### 7. Apply guardrails
Before sending, checks can block sensitive data leaks, off-topic or unsafe content, or promises the business can't keep.

### 8. Hand off when needed
If the customer is upset, the question is outside scope, or the bot isn't confident, it passes the conversation (with a summary) to a human agent in the help desk.

### 9. Learn and improve
Conversations are logged and reviewed: unanswered questions become new knowledge articles, and failure cases improve instructions and tests.

## What AI chatbots can do for businesses

- **Customer support:** FAQs, order tracking, returns, account questions, troubleshooting (see [Will AI replace customer service?](/blog/will-ai-replace-customer-service/))
- **Sales and lead generation:** answer product questions, qualify leads, book demos (see [What is conversational commerce?](/blog/what-is-conversational-commerce/))
- **Appointments:** booking, rescheduling and reminders for clinics, salons and service businesses
- **Internal helpdesks:** HR and IT questions for employees
- **E-commerce:** product recommendations, size advice, cart recovery
- **Onboarding:** guiding new customers through setup

(Use cases and ROI: [Chatbot automation](/blog/chatbot-automation/).)

## The technology stack

| Layer | Examples |
|---|---|
| **Channels** | Website widget, WhatsApp Business Platform, Messenger, Instagram, SMS, Slack, Teams, voice |
| **Chatbot platforms** | Intercom Fin, Zendesk AI agents, Tidio, Freshworks, Botpress, Voiceflow, Microsoft Copilot Studio |
| **LLMs** | Claude, GPT models, Gemini, open models |
| **Knowledge and retrieval** | Help centre content, vector databases, hybrid search |
| **Tools and integrations** | CRM, help desk, e-commerce, booking, payment and ERP APIs |
| **Automation and orchestration** | n8n, Make, Zapier, custom code (see [How to connect Claude to n8n](/blog/how-to-connect-claude-to-n8n/)) |
| **Monitoring** | Conversation analytics, evaluation tests, cost and latency tracking |

## How accurate are AI chatbots?

Accuracy depends far more on **setup** than on the model:
- **Quality and coverage of the knowledge base**
- **Clear instructions and scope**
- **Good retrieval** (finding the right passages)
- **Tools for live data** instead of guessing
- **Testing** with real questions before launch
- **Escalation rules** for uncertain cases

A well-built bot with good content can resolve a large share of routine questions; a bot pointed at messy, outdated content will produce messy, outdated answers.

## Costs

- **Off-the-shelf platform add-ons:** often priced per resolution or per conversation, or as monthly subscriptions
- **No-code builders:** monthly plans plus AI usage
- **Custom-built chatbots:** development cost plus model API usage (usually fractions of a cent to a few cents per conversation, depending on length and model), hosting and maintenance

## Should you build or buy?

- **Buy** if your needs are standard support FAQs and you already use a help desk with AI features.
- **Build or customise** if you need deep integrations (custom systems, WhatsApp flows, multiple languages, complex bookings), specific workflows, data control or a unique experience. (Step-by-step: [How to create an AI chatbot](/blog/how-to-create-an-ai-chatbot/).)

## Frequently asked questions

### What is a chatbot?
A chatbot is software that converses with people through text or voice, answering questions and completing tasks on websites, messaging apps, phone lines and inside applications.

### How do AI chatbots work?
They send the user's message, instructions, conversation history and relevant information retrieved from a knowledge base to a large language model, which generates a reply and can call tools such as order lookups or booking systems. Guardrails and human handoff handle risky or complex cases.

### What is the difference between a chatbot and an AI chatbot?
Traditional chatbots follow fixed rules, menus and keywords. AI chatbots use machine learning and large language models to understand varied language, answer from documents and handle more complex conversations.

### How do chatbots know the answers?
Through their training plus, for business chatbots, retrieval from the company's own knowledge base and live data from connected systems such as CRMs, order databases and booking tools.

### Are AI chatbots safe for business?
They can be, with guardrails: limiting scope, grounding answers in approved content, protecting personal data, testing before launch, monitoring conversations and escalating sensitive issues to humans.

### Can a chatbot work on WhatsApp?
Yes. Through the WhatsApp Business Platform, chatbots can answer questions, send updates, take bookings and hand off to human agents inside WhatsApp.
