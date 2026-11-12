---
title: Will AI Replace Customer Service? How AI Chatbots Work and What Comes Next
description: How AI chatbots actually work, what they can and can't handle in customer service, the Klarna lesson, Gartner's predictions, how roles are changing, and how to deploy AI support without wrecking customer experience.
date: 2026-11-11
cluster: business
order: 10
hire: an AI support agent
---

<p class="lede">AI will not fully replace customer service, but it is already replacing a large share of routine customer service <em>interactions</em>. Gartner predicts AI agents will autonomously resolve up to 80% of common customer service issues by 2029, yet also predicts that no Fortune 500 company will fully eliminate human service staff by 2028. The future is a smaller, more skilled human team handling complex, emotional and high-value conversations, supported by AI that handles the routine and assists on everything else.</p>

If you run a support team, work in one, or are deciding how much to invest in AI chatbots, this guide is for you. We'll cover how modern AI chatbots actually work, what they're good and bad at, what the evidence (including Klarna's very public U-turn) tells us, how jobs are changing, and a practical plan to deploy AI in customer service without damaging customer trust.

## What is a chatbot?

A **chatbot** is software that holds a conversation with a person through text or voice. There are three generations, and most confusion comes from mixing them up:

| Generation | How it works | Experience |
|---|---|---|
| **Rule-based bots** (2010s) | Decision trees and keyword matching; pre-written answers | Rigid menus, "Sorry, I didn't understand that" |
| **NLU/intent bots** (late 2010s) | Machine learning classifies the user's intent, then triggers a scripted flow | Better at understanding, but only within predefined intents |
| **Generative AI chatbots and agents** (2023–) | Large language models understand free text, generate natural replies, retrieve knowledge and use tools | Conversational, flexible, can resolve issues end to end |

When people ask "what is a chatbot" today, they usually mean the third kind. And the latest versions are really **AI agents**: they don't just answer, they act, looking up orders, processing returns, changing bookings. (See [What is an AI agent?](/blog/what-is-an-ai-agent/))

## How do AI chatbots work?

A modern AI customer-service chatbot has five main parts.

### 1. The language model
A large language model (such as Claude, GPT or Gemini) does the understanding and the writing. It reads the customer's message, works out what they want (even if phrased badly, in another language, or across several messages), and generates a natural reply.

### 2. Retrieval (the knowledge base)
The model doesn't automatically know your return policy or product details. So the system uses **retrieval-augmented generation (RAG)**: it searches your help centre, policies, product docs and past resolved tickets for relevant passages and gives them to the model along with the question. The model then answers *based on your content*, ideally citing it. Good retrieval is the single biggest factor in answer quality.

### 3. Tools and integrations
To actually resolve issues, the bot needs access to your systems through APIs: order management, CRM, billing, booking, shipping. With these tools it can check an order's status, start a return, update an address or issue a refund within limits.

### 4. Instructions and guardrails
A system prompt defines the bot's role, tone, policies and limits: what it can do on its own, what needs approval, topics to avoid, and when to hand over to a human. Guardrails check outputs (no promises outside policy, no sensitive data exposed) and inputs (attempts to manipulate the bot).

### 5. Handoff and orchestration
When the bot can't or shouldn't handle something (an angry customer, a complex complaint, a high-value account, a legal issue), it hands off to a human **with the full conversation and a summary**, so the customer never has to repeat themselves.

### What happens in a single conversation
1. Customer: *"My package says delivered but I never got it, order 55120."*
2. The bot identifies the intent (missing delivery) and the order number.
3. It calls the order API: delivered yesterday, standard shipping, $64.
4. It retrieves the "missing package" policy: under $100, offer a reship or refund after confirming the address.
5. It confirms the address with the customer.
6. Policy allows it, so it creates a replacement order via the API.
7. It replies with the new tracking number, and logs everything to the ticket.

No human involved, resolved in two minutes, at any hour. That is what modern AI customer service looks like when it works.

## What AI customer service does well

- **High-volume, repetitive questions:** order status, password resets, opening hours, returns, billing explanations, plan changes.
- **24/7 availability** in dozens of languages.
- **Instant response:** no queue for simple issues.
- **Consistency:** the same policy applied every time.
- **Agent assist:** for human agents, AI suggests replies, surfaces relevant knowledge, summarises long histories and writes after-call notes. This often produces the biggest productivity gain of all.
- **Insight:** analysing every conversation to find product issues, broken processes and knowledge gaps.

## Where AI still struggles

- **Emotionally charged situations:** bereavement, fraud victims, serious complaints. People want a person.
- **Complex, multi-system problems** with unusual histories.
- **Situations needing discretion:** goodwill gestures, policy exceptions, retention offers for valuable customers.
- **Ambiguous or contradictory information** where judgement is required.
- **Trust:** many customers still prefer humans for anything important, and a bad bot experience damages brand perception quickly.
- **Accuracy:** when retrieval fails, models can produce confident but wrong answers. Air Canada was famously held liable by a Canadian tribunal in 2024 after its chatbot invented a refund policy.

## The Klarna lesson

Klarna is the most-cited case study in both directions. In February 2024 it announced its AI assistant was handling two-thirds of customer service chats in its first month, doing the equivalent work of 700 full-time agents. By 2025, CEO Sebastian Siemiatkowski said the company had gone too far, that focusing on cost had led to lower quality, and that Klarna would ensure customers could always reach a human, recruiting people for a new flexible support model. Klarna didn't abandon AI; the assistant still handles a large share of conversations. But it rebalanced.

The lesson isn't "AI customer service fails". It's that **optimising purely for cost per contact, and removing the human option, damages quality and trust.** The winning model uses AI for speed and scale, and humans for judgement and empathy.

## What the forecasts say

- **Gartner (2025):** By 2028, no Fortune 500 company will have fully eliminated human customer service. Expect fewer human agents, not agentless organisations.
- **Gartner (2025):** By 2027, 50% of organisations that planned to significantly reduce their customer service workforce because of AI will abandon those plans.
- **Gartner (2025):** By 2029, agentic AI will autonomously resolve up to 80% of common customer service issues, leading to substantial reductions in operational cost.

Read together: AI will take most of the routine volume. Human teams will get smaller in many organisations but more skilled, handling the work that matters most.

## How customer service jobs are changing

| Role today | Role tomorrow |
|---|---|
| Tier-1 agent answering FAQs | Largely automated; remaining agents handle complex cases with AI assistance |
| Tier-2/3 specialists | More important; handle escalations, exceptions and high-value customers |
| Knowledge base editor | **AI knowledge manager:** curates the content the AI depends on, a critical role |
| QA analyst | **AI quality and conversation analyst:** reviews AI conversations, finds failures, improves prompts and policies |
| Team lead | Manages a blended human + AI team and its metrics |
| — | **Conversation designer / AI operations specialist:** new roles designing flows, tools and guardrails |

For individuals in customer service, the most future-proof moves are towards complex problem solving, product expertise, relationship roles (account management, retention, onboarding), and the new AI operations roles.

## How to deploy AI in customer service (without wrecking CX)

### Step 1: Analyse your contact volume
Categorise the last 3–6 months of tickets by reason. You will typically find that 10–20 reasons make up 60–80% of volume. Those are your automation candidates.

### Step 2: Fix your knowledge first
AI is only as good as the content it retrieves. Audit and update your help centre and internal policies. Remove contradictions. Write clear policies for the decisions you want AI to make.

### Step 3: Start with agent assist
Deploy AI to help human agents (suggested replies, summaries, knowledge search) before putting it in front of customers. You learn where it's accurate with a human safety net in place.

### Step 4: Automate the top contact reasons, one at a time
Begin with informational, low-risk intents (order status, how-to questions), then move to transactional ones (returns, address changes, refunds within limits) once integrations and guardrails are solid.

### Step 5: Always offer a human
Make escalation easy and fast, and pass full context. "Talk to a person" should never be hidden. Customers forgive a bot that can't help; they don't forgive a bot that traps them.

### Step 6: Measure the right things
- **Resolution rate** (truly resolved, not just "contained" or abandoned)
- **Customer satisfaction (CSAT)** for AI vs human interactions
- **Repeat contact rate** within 7 days (a sign of false resolution)
- **Escalation quality:** did the handoff include the right context?
- **Accuracy:** sampled review of AI answers against policy
- **Cost per resolution** and response/resolution times

### Step 7: Review continuously
Review a sample of AI conversations weekly. Every failure is a missing knowledge article, an unclear policy, a missing tool or a prompt issue, and each is fixable.

For the broader automation picture, see [How to automate business processes](/blog/how-to-automate-business-processes/).

## Frequently asked questions

### Will AI replace customer service representatives?
AI will replace a large share of routine customer service interactions and reduce the size of many support teams, but not the function entirely. Human agents will focus on complex, emotional, high-value and exception cases, supported by AI. Gartner expects no Fortune 500 company to eliminate human customer service by 2028.

### How do AI chatbots work?
AI chatbots use a large language model to understand customer messages and write replies, retrieval to find answers in the company's knowledge base, integrations to take actions in systems like order management or billing, guardrails to keep responses within policy, and handoff rules to pass complex cases to humans with full context.

### What is a chatbot?
A chatbot is software that converses with people via text or voice. Older chatbots followed scripted decision trees; modern AI chatbots use large language models to understand free-form questions, answer naturally from company knowledge, and increasingly take actions to resolve issues.

### What percentage of customer service will be automated?
Estimates vary by industry and complexity. Gartner predicts agentic AI will resolve up to 80% of *common* customer service issues autonomously by 2029. Complex and sensitive issues will continue to need humans.

### Do customers prefer AI or humans for customer service?
For simple, quick issues many customers prefer instant self-service, including AI. For complex, emotional or high-stakes issues, most prefer a human. The best experience offers fast AI resolution with an easy path to a person.

### What are the risks of using AI chatbots for customer service?
Incorrect answers, invented policies, poor handling of emotional situations, customer frustration if escalation is hard, data privacy issues, and brand damage. These are managed with good knowledge content, strict policy guardrails, human escalation, monitoring and regular review.
