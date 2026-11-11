---
title: "How Autonomous AI Agents Execute Secure Financial Transactions (Agentic Payments Explained)"
description: "How AI agents pay for things securely in 2026: agentic commerce, tokenisation, spending mandates, agent identity, the protocols (Visa Intelligent Commerce, Mastercard Agent Pay, Google AP2, the Agentic Commerce Protocol), risks, and what merchants and businesses should do now."
date: 2026-11-12
cluster: agents
order: 55
---

<p class="lede">Autonomous AI agents execute financial transactions securely by <strong>never handling raw card or account details</strong>. Instead they use <strong>scoped payment tokens</strong> issued by card networks or payment providers, act under a <strong>user mandate</strong> (explicit, verifiable permission with limits on amount, merchant and time), prove their <strong>identity</strong> to merchants with cryptographic credentials, and keep <strong>approval thresholds and risk checks outside the AI model</strong>, so a manipulated or mistaken agent can't overspend. Every step leaves an auditable record.</p>

"Agentic commerce" (AI agents that find, compare and buy things on a person's or business's behalf) moved from concept to live transactions in 2025–2026. Visa, Mastercard, Google, OpenAI, Stripe and others have launched protocols and products designed to let agents pay safely. This guide explains how agentic payments work, the security building blocks, the main protocols, the risks, and what businesses should do now.

## What are agentic payments?

**Agentic payments** are transactions initiated and completed by an AI agent acting for a user or business. Examples:

- A shopping agent finds the best-rated running shoes under $150 in your size and buys them
- A travel agent books and pays for a taxi or hotel within your policy
- A procurement agent reorders office supplies when stock runs low, within a monthly budget
- A business agent pays for API usage, data or cloud services as it needs them (machine-to-machine payments)
- An accounts payable agent prepares supplier payments for approval

The challenge: payment systems were designed for humans clicking "buy". Agents need a way to pay that proves **who authorised them**, **what they're allowed to buy**, and **that they are who they say they are**, without exposing card details to software that could be tricked or compromised.

## The security building blocks

### 1. Tokenisation: no raw card numbers
Instead of giving an agent your card number, the network or payment provider issues a **token**: a substitute credential that's useless if stolen and can be **scoped**, for example to a specific agent, merchant, amount, currency and time window. Card networks have used tokenisation for mobile wallets for years; agentic tokens extend it to AI agents.

### 2. Mandates: verifiable user permission
A **mandate** is a signed, machine-readable record of what the user authorised:
- **Intent mandate:** "Buy a pair of running shoes, size 10, under $150, from a reputable retailer, this week."
- **Cart mandate:** "I approve this specific cart: these items, this price, this merchant."

Mandates prove to the merchant and payment provider that the purchase reflects the user's real instructions, and they provide evidence if there's a dispute.

### 3. Agent identity and verification
Merchants need to distinguish legitimate AI agents from malicious bots. Protocols let agents present **cryptographic credentials** showing which platform they run on and on whose behalf they act, so merchants can accept trusted agent traffic and block bad bots.

### 4. Limits and approvals outside the model
The most important design principle: **spending rules must be enforced by deterministic systems, not by the AI's judgement.** Budgets, per-transaction limits, allowed merchants and categories, and human approval thresholds live in the payment and policy layer. Even if an agent is manipulated by a malicious web page (**prompt injection**), it can't exceed what the token and policy allow. (See [Is ChatGPT agent mode safe?](/blog/is-chatgpt-agent-mode-safe/))

### 5. Human-in-the-loop confirmation
For higher-value or unusual purchases, the user confirms in their banking or wallet app (often with biometrics or passkeys), consistent with strong customer authentication rules where they apply (e.g., PSD2 SCA in Europe).

### 6. Audit trails and dispute handling
Every step (instruction, mandate, agent identity, token used, merchant, amount) is logged, so issuers, merchants and users can resolve disputes and chargebacks. Who is liable when an agent makes a wrong purchase is one of the key questions protocols aim to answer.

## The main protocols and products (2025–2026)

| Initiative | From | What it does |
|---|---|---|
| **Visa Intelligent Commerce** (incl. Trusted Agent Protocol) | Visa | Agent-specific tokens, user-set controls, and agent verification so merchants can trust agent-initiated transactions |
| **Mastercard Agent Pay** | Mastercard | "Agentic tokens" tied to a registered agent, merchant and consent; agent registration and verification |
| **Agent Payments Protocol (AP2)** | Google with many partners | Open protocol using verifiable mandates (intent and cart) to authorise agent payments across payment types, with auditability |
| **Agentic Commerce Protocol (ACP)** | OpenAI with Stripe | Open standard for agents to complete purchases with merchants (used for checkout inside ChatGPT), with shared payment tokens scoped to a transaction |
| **Payment provider tools** | Stripe, Adyen, PayPal, Checkout.com and others | APIs and tokens enabling merchants to accept agent payments and agents to pay |
| **Machine-to-machine payment protocols** | Various (including stablecoin-based approaches) | Small, automated payments between agents and APIs |

Industry partnerships expanded through 2026 (for example, Visa and OpenAI announced a partnership on agent-initiated payments), and many payment providers support several protocols. **No single standard has won yet,** so merchants may need to support more than one, often through their payment provider.

## How an agentic purchase works (step by step)

1. **User instruction:** "Book me a window seat on the cheapest direct flight to Mumbai on Friday morning, under ₹9,000."
2. **Mandate created:** the user's intent and limits are captured and signed (or approved in the app).
3. **Agent searches and compares** using merchant APIs and websites.
4. **Agent identifies itself** to the merchant with verifiable credentials.
5. **Cart assembled:** the agent proposes the specific booking; if it's within the mandate, it proceeds (or asks the user to confirm the cart).
6. **Tokenised payment:** the agent presents a scoped token (not card details); the network and issuer check the token's limits, agent identity and risk signals.
7. **Authorisation and settlement** happen through normal payment rails.
8. **Confirmation and logs:** the user receives the booking and receipt; all steps are recorded for audit and disputes.

## Risks and how they're managed

| Risk | Mitigation |
|---|---|
| **Prompt injection** (malicious content tricks the agent into buying something else or paying a scam merchant) | Spending limits and allowed merchants enforced outside the model; cart confirmation; agent identity checks; merchant verification |
| **Agent mistakes** (wrong size, wrong date, wrong quantity) | Clear mandates, cart confirmation for anything non-trivial, easy cancellation and refunds |
| **Fraud and bad bots** | Agent registration and verification; network risk scoring |
| **Credential theft** | Tokenisation and scoped, expiring credentials |
| **Unclear liability** | Mandates and audit trails as evidence; evolving network rules on disputes |
| **Privacy** | Sharing only necessary data with agents and merchants; user control over agent permissions |
| **Runaway spend** (agents paying for APIs or services) | Budgets, rate limits and alerts |

## For businesses: agents that pay on your behalf

Business use cases include procurement, travel booking, SaaS and API purchasing, and accounts payable. Controls to insist on:
- **Virtual cards or tokens per agent and per purpose** with spending limits and merchant restrictions
- **Approval workflows** above thresholds, integrated with finance systems
- **Segregation of duties:** the agent that proposes a payment shouldn't approve it
- **Reconciliation** of agent spend into your accounting system (see [What are automated financial systems?](/blog/what-are-automated-financial-systems/))
- **Logs** reviewed regularly by finance

## What merchants should do now

1. **Make products and policies machine-readable:** accurate structured data (prices, stock, shipping, returns) so agents can find and trust you.
2. **Talk to your payment provider** about agentic commerce support (Stripe, Adyen, PayPal and others are adding it).
3. **Distinguish good agents from bad bots** rather than blocking all automated traffic.
4. **Review fraud rules** that might block legitimate agent purchases.
5. **Prepare customer service** for agent-made orders (who to contact, how returns work).
6. **Watch the standards** (ACP, AP2, network programmes) and support what your customers' agents use.

(Related: [What is agentic marketing?](/blog/what-is-agentic-marketing/) and [What is an AI agent?](/blog/what-is-an-ai-agent/))

## Frequently asked questions

### How do AI agents pay for things?
AI agents pay using scoped payment tokens issued by card networks or payment providers, under a user's verifiable permission (mandate) with limits, presenting cryptographic identity to merchants. They don't need access to raw card numbers.

### Is it safe to let an AI agent make purchases?
It can be, when spending limits, allowed merchants and approval thresholds are enforced by the payment system rather than the AI, when tokens are scoped and expiring, and when you confirm higher-value purchases. Start with low-value, low-risk purchases.

### What is agentic commerce?
Agentic commerce is shopping and purchasing carried out by AI agents on behalf of people or businesses: finding products, comparing options and completing transactions, often through new protocols that support agent identity and secure payments.

### What is AP2?
AP2 (Agent Payments Protocol) is an open protocol led by Google with many industry partners that uses verifiable mandates, cryptographically signed records of a user's intent and approved cart, to authorise payments made by AI agents.

### What is the Agentic Commerce Protocol?
The Agentic Commerce Protocol (ACP) is an open standard developed by OpenAI and Stripe that lets AI agents complete purchases with merchants using shared payment tokens scoped to a specific transaction.

### Who is liable if an AI agent buys the wrong thing?
Liability depends on the circumstances, the user's mandate, merchant policies and network rules, which are still evolving. Mandates and audit trails are designed to show what the user authorised, helping resolve disputes. Keep confirmation steps for anything significant.
