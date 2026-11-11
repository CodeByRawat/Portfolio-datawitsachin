---
title: What Would Be an Appropriate Task for Using Generative AI? A Practical Test
description: How to decide whether a task is appropriate for generative AI, with a simple 5-question test, good and bad examples by job, risk levels, what responsible use looks like, and the responsibilities of developers using generative AI.
date: 2026-11-11
cluster: ai-basics
order: 27
---

<p class="lede">An appropriate task for generative AI is one where the AI <strong>creates or transforms content</strong> (drafting, summarising, rewriting, translating, brainstorming, coding, extracting information), where <strong>a human can check the result</strong>, and where <strong>a mistake would be caught or cheap</strong>. Drafting a first version of an email, summarising a long report, brainstorming campaign ideas, or writing code that will be tested are appropriate. Making a final medical diagnosis, deciding who gets a loan, or publishing unverified facts are not appropriate to hand to generative AI alone.</p>

If you're answering this for a training quiz, the correct option is almost always the one where **AI generates a draft or idea that a person reviews** (e.g., "drafting a project status update", "brainstorming product names", "summarising meeting notes"). The inappropriate options usually involve high-stakes decisions without human oversight, sensitive personal data, or needing guaranteed factual accuracy.

But there's a more useful skill behind the quiz: knowing how to judge *any* task. This guide gives you a simple test, examples across roles, a risk framework, and what responsible use looks like for users and developers.

## The 5-question test

Ask these five questions about any task. The more "yes" answers, the better suited it is to generative AI.

### 1. Does the task involve creating or transforming language, images, code or other content?
Generative AI's strength is producing and reshaping content: writing, summarising, translating, rewriting for a different audience, generating ideas, writing code, extracting structured data from text. If the task is pure calculation, retrieving an exact record from a database, or physical work, other tools are better. (See [Which task is a generative AI task?](/blog/which-task-is-a-generative-ai-task/))

### 2. Can a human (or a test) check the output?
If you can easily review the result (read the draft, run the code, compare the summary to the source), mistakes are manageable. If nobody can verify it, you're relying on blind trust.

### 3. Is a mistake low-cost or easily caught?
A clumsy sentence in an internal draft costs nothing. A wrong dosage, a false legal citation, or an incorrect financial figure in a public report can cause serious harm.

### 4. Does the AI have (or can you give it) the information it needs?
Generative AI works best with context. If you can provide the source documents, data, examples and instructions, quality rises dramatically. If the task depends on private information the AI can't access, or very recent facts it doesn't know, quality falls.

### 5. Is it appropriate to share the data involved?
Check your organisation's policy. Confidential, personal, health, financial or client data may only be used in approved enterprise tools, or not at all.

**Scoring:** Five yeses = excellent candidate. Three or four = good, with care. Two or fewer = use AI only for parts of the task, or not at all.

## Appropriate vs inappropriate: examples

| ✅ Appropriate | Why |
|---|---|
| Drafting an email, report, proposal or post for you to edit | Content creation; you review |
| Summarising a long document or meeting transcript | Transforming content; verifiable against the source |
| Brainstorming ideas, names, angles or questions | Creativity; no single right answer; you select |
| Rewriting text for a different audience or tone | Transformation; easy to check |
| Translating content (with review for important material) | Transformation; checkable |
| Writing code that will be reviewed and tested | Tests and review catch errors |
| Extracting data from invoices, forms or emails into a structured format (with validation) | Transformation; can be validated |
| Creating first drafts of training material, FAQs or documentation | Drafting with expert review |
| Explaining a concept or tutoring you on a topic | Learning; you can cross-check |
| Analysing survey comments for themes | Synthesis; you can sample-check |

| ❌ Inappropriate on its own | Why |
|---|---|
| Making final hiring, firing, lending or insurance decisions | High stakes, bias risk, regulated |
| Diagnosing medical conditions or prescribing treatment | Safety-critical; requires qualified professionals |
| Giving definitive legal advice or filing legal documents unchecked | Hallucinated citations have led to court sanctions |
| Publishing facts, statistics or quotes without verification | Hallucination risk; reputational damage |
| Processing confidential or personal data in unapproved tools | Privacy and security risk |
| Producing content that impersonates real people or deceives | Ethical and often legal issues |
| Exact calculations where errors matter (without a calculator/code tool) | Language models can make arithmetic errors |
| Situations needing empathy and accountability (grief, crisis, disciplinary conversations) | Human relationship is the point |

Note the pattern: many "inappropriate" tasks become **appropriate when AI assists a qualified human** (drafting a medical letter for a doctor to review, summarising case law for a lawyer to verify, preparing a candidate summary for a recruiter who makes the decision).

## Appropriate generative AI tasks by role

### Marketing
Content drafts, ad variations, social posts, campaign briefs, persona research synthesis, repurposing content. (See [How to use AI in marketing](/blog/how-to-use-ai-in-marketing/).)

### Sales
Prospect research briefs, personalised email drafts, call summaries, proposal first drafts, objection handling practice. (See [How to automate your sales process](/blog/how-to-automate-your-sales-process/).)

### Customer service
Suggested replies grounded in the knowledge base, ticket summaries, help-article drafts, translating responses.

### HR
Job description drafts, interview question sets, policy FAQs, onboarding materials (with humans making all employment decisions). (See [What is HR automation?](/blog/what-is-hr-automation/))

### Finance
Variance commentary drafts, extracting data from documents, summarising contracts, explaining reports in plain language (with figures verified).

### Software development
Writing code, tests and documentation; explaining unfamiliar code; debugging help; code review assistance.

### Management and operations
Meeting summaries and action items, status updates, process documentation, decision memos, research synthesis.

### Education and learning
Explaining concepts, generating practice questions, giving feedback on drafts (while doing the thinking yourself, as we explain in [How AI impacts skill formation](/blog/how-ai-impacts-skill-formation/)).

## A simple risk framework

| Risk level | Examples | How to use AI |
|---|---|---|
| **Low** | Internal drafts, brainstorming, personal notes, learning | Use freely; light review |
| **Medium** | Customer-facing content, code, reports, data extraction | AI drafts; human reviews before use; tests and validation |
| **High** | Legal, medical, financial, HR decisions, regulated outputs, anything affecting people's rights | AI assists qualified experts only; strict review; documented oversight; follow regulation |
| **Prohibited** | Deception, impersonation, unlawful discrimination, confidential data in unapproved tools | Don't |

## Responsible use: what good practice looks like

1. **Treat outputs as drafts,** not finished work.
2. **Verify facts, figures, quotes and citations** against reliable sources.
3. **Provide good context:** source documents, examples, audience, constraints.
4. **Protect data:** follow your organisation's AI policy; use approved enterprise tools.
5. **Disclose AI use where it matters:** to customers, in academic work, or where your organisation or law requires it.
6. **Watch for bias** in outputs, especially about people.
7. **Keep accountability human:** you're responsible for what you send, publish or decide.

## What is the responsibility of developers using generative AI?

Developers who build products and systems on generative AI carry additional responsibilities, because their choices affect many users at once:

1. **Fitness for purpose:** use generative AI where it's appropriate and choose models, prompts and architectures that meet the required quality bar.
2. **Evaluation and testing:** build test sets reflecting real use, measure accuracy, safety and bias, and re-test after every change to models, prompts or data.
3. **Safety and guardrails:** prevent harmful outputs, constrain actions (especially for agents), require human approval for consequential actions, and design for failure.
4. **Security:** defend against prompt injection, data leakage and misuse; apply least privilege to tools and data; treat untrusted content as data, not instructions.
5. **Privacy and data protection:** minimise data, respect consent and retention rules, use appropriate data-processing agreements with model providers, and comply with laws such as GDPR.
6. **Fairness:** test for and mitigate bias, especially in systems affecting people's opportunities.
7. **Transparency:** tell users when they're interacting with AI, explain limitations, label AI-generated content where required (the EU AI Act includes transparency obligations for AI-generated content and chatbots), and provide paths to a human.
8. **Accountability and monitoring:** log system behaviour, monitor in production, have incident response processes and fix issues quickly.
9. **Intellectual property:** respect licences and copyright in training data, inputs and outputs, and follow model providers' usage policies.
10. **Human oversight:** design systems so humans can understand, override and correct the AI.

In short: **developers are responsible for ensuring their generative AI systems are useful, safe, fair, secure, transparent and accountable**, not just that they work in a demo. (For building safely, see [How to create an AI agent](/blog/how-to-create-an-ai-agent/).)

## Frequently asked questions

### What would be an appropriate task for using generative AI?
Tasks that involve creating or transforming content where a human can review the result and mistakes are low-cost, such as drafting emails or reports, summarising documents, brainstorming ideas, rewriting for a different audience, translating, or writing code that will be tested.

### What tasks should you not use generative AI for?
Do not rely on generative AI alone for high-stakes decisions about people (hiring, lending, medical diagnosis), definitive legal or medical advice, publishing unverified facts, processing confidential data in unapproved tools, or content intended to deceive or impersonate.

### What is the responsibility of developers using generative AI?
Developers must ensure systems are fit for purpose, thoroughly tested, safe, secure against attacks like prompt injection, privacy-preserving, fair, transparent to users, monitored in production, respectful of intellectual property, and designed with meaningful human oversight.

### Is it appropriate to use generative AI at work?
Yes, for many tasks, as long as you follow your organisation's AI policy, use approved tools, protect confidential data, verify outputs, and remain accountable for the work you produce.

### Why do you need to review generative AI output?
Generative AI can produce plausible but incorrect information (hallucinations), reflect biases, misunderstand context or miss nuance. Human review catches these errors before they cause harm.
