---
title: Which Task Is a Generative AI Task? Examples, Answers and How to Tell (2026)
description: How to tell which tasks are generative AI tasks, with clear examples, a simple test, how generative AI differs from other AI, what makes it unique, its main goal, and how businesses use it.
date: 2026-11-11
cluster: ai-basics
order: 12
---

<p class="lede">A task is a <strong>generative AI task</strong> when the AI <em>creates new content</em> (text, images, audio, video, code or data) rather than only classifying, predicting or detecting something in existing data. Writing an email, summarising a report, generating an image from a description, composing music, translating a document and writing code are all generative AI tasks. Detecting fraud, predicting customer churn, recognising a face or sorting emails into spam are <em>not</em>; those are predictive or discriminative AI tasks.</p>

If you arrived here from a quiz or certification question ("Which of the following is a generative AI task?"), the answer is almost always **the option where the AI produces something new**. The rest of this guide explains why, gives you a reliable test, lots of examples, and the bigger picture of how generative AI differs from other types of AI and how businesses use it.

## The simple test: is the output new content?

Ask one question: **Is the main output of the task new content that didn't exist before?**

- **Yes** → generative AI task. *(Write, draft, create, design, compose, summarise, translate, rewrite, generate code.)*
- **No, the output is a label, a score, a number or a yes/no** → predictive (discriminative) AI task. *(Classify, detect, predict, recognise, score, forecast.)*

| Task | Generative? | Why |
|---|---|---|
| Write a product description from a list of features | ✅ Yes | Creates new text |
| Summarise a 40-page report into one page | ✅ Yes | Generates new text that condenses the original |
| Create a marketing image from a text prompt | ✅ Yes | Creates a new image |
| Translate an email from Spanish to English | ✅ Yes | Generates new text in another language |
| Write Python code to clean a dataset | ✅ Yes | Generates new code |
| Compose background music for a video | ✅ Yes | Creates new audio |
| Generate synthetic customer data for testing | ✅ Yes | Creates new data |
| Answer a question in natural language | ✅ Yes | Generates a new response |
| Classify an email as spam or not spam | ❌ No | Output is a label |
| Detect fraudulent credit card transactions | ❌ No | Output is a flag/score |
| Predict next quarter's sales | ❌ No | Output is a forecast number |
| Recognise faces in a photo | ❌ No | Output is an identification |
| Recommend products based on browsing history | ❌ No (usually) | Output is a ranking of existing items |
| Detect defects on a manufacturing line | ❌ No | Output is a classification |

### Tricky cases
- **Summarisation and translation** *are* generative tasks: the model writes new text, even though it's based on existing content.
- **Chatbots that answer questions** using generative models are doing a generative task, even when the answer is drawn from a knowledge base.
- **Sentiment analysis** is usually a classification task (positive/negative/neutral), even if a generative model is used to do it. The *task type* is about the output, not the tool.
- **Recommendation engines** are traditionally predictive, but "write me a personalised shopping guide" is generative.

## What is generative AI?

**Generative AI** is a type of artificial intelligence that learns patterns from large amounts of existing data and uses them to create new, original content that resembles that data. It powers tools like Claude, ChatGPT and Gemini (text and code), Midjourney, DALL·E and Imagen (images), Runway, Sora and Veo (video), and Suno (music).

Under the hood, most generative AI today is built on:

- **Large language models (LLMs):** transformer-based models trained on huge text datasets to predict the next word (token). By doing this at enormous scale, they learn grammar, facts, reasoning patterns and style, and can generate coherent text, code and structured data.
- **Diffusion models:** for images, video and audio. They learn to turn random noise into realistic content step by step, guided by a text prompt.
- **Multimodal models:** combine text, images, audio and video in one model, so you can, for example, upload a photo and ask questions about it, or describe a scene and get an image.

## How does generative AI differ from other types of AI?

AI is a broad field. Generative AI is one branch, and it builds on others.

| | Traditional / predictive AI | Generative AI |
|---|---|---|
| **Main goal** | Analyse data to classify, predict or decide | Create new content |
| **Typical outputs** | Labels, scores, forecasts, rankings | Text, images, audio, video, code, data |
| **Training** | Often trained on labelled data for one specific task | Trained on vast unlabelled data, then adapted to many tasks |
| **Flexibility** | Usually one model per task | One model handles many tasks via prompts |
| **Examples** | Fraud detection, churn prediction, demand forecasting, image recognition | Writing assistants, image generators, coding assistants, chatbots |
| **Interface** | Usually embedded in software; outputs feed other systems | Often conversational: you describe what you want in natural language |

It helps to see the family tree:

- **Artificial intelligence (AI):** any technique that enables machines to mimic aspects of human intelligence. (Curious about the name itself? *AI stands for artificial intelligence*, a term coined by John McCarthy for the 1956 Dartmouth workshop.)
  - **Machine learning (ML):** systems that learn from data rather than explicit rules.
    - **Deep learning:** ML using multi-layer neural networks.
      - **Generative AI:** deep learning models that create new content.
      - **Discriminative/predictive models:** deep learning models that classify or predict.

And now, built on top of generative AI:

- **Agentic AI:** systems that use generative models to plan, make decisions and take actions with tools to achieve goals. (See [What is an AI agent?](/blog/what-is-an-ai-agent/) and [What are agentic workflows?](/blog/what-are-agentic-workflows/))

## What makes generative AI unique?

1. **It creates rather than only analyses.** Earlier AI could tell you a photo contained a cat; generative AI can create a new photo of a cat that never existed.
2. **It's general purpose.** One foundation model can write, summarise, translate, code, analyse and reason, adapting to new tasks from a prompt rather than requiring a new model for each task.
3. **You control it with natural language.** No programming needed to instruct it, which is why adoption has been so fast.
4. **It works with unstructured data:** text, images, audio, video, the formats most business information actually lives in.
5. **It can be grounded and connected.** With retrieval and tools, it can work with your company's documents and systems, making it practical for business, not just creative, use.

## What is the main goal of generative AI?

The main goal of generative AI is **to produce new, useful content (text, images, audio, video, code or data) that is coherent, relevant and resembles what a human might create, in response to instructions.** In business terms, the goal is to dramatically reduce the time and cost of creating, transforming and communicating information, and to make it possible for anyone to create things that previously required specialist skills.

## Examples of generative AI applications by function

### Marketing and sales
Blog posts and ad copy, personalised emails, social posts, product descriptions, images and videos for campaigns, sales call summaries and proposals. (See [How to use AI in marketing](/blog/how-to-use-ai-in-marketing/).)

### Customer service
Conversational chatbots, suggested agent replies, help-centre article drafts, conversation summaries. (See [Will AI replace customer service?](/blog/will-ai-replace-customer-service/))

### Software development
Code generation, test writing, documentation, code explanation, debugging assistance and coding agents. (See [Will AI replace software engineers?](/blog/will-ai-replace-software-engineers/))

### Operations and finance
Report and memo drafting, contract and policy summarisation, data extraction into structured formats, variance explanations, SOP writing.

### HR and learning
Job descriptions, interview guides, training materials, personalised learning content, policy Q&A assistants.

### Product and design
Design concepts and mockups, user research synthesis, product requirement drafts, UX copy.

### Healthcare, legal and science
Clinical note drafting, medical literature summaries, legal research memos and contract drafting, scientific hypothesis generation and protein structure design, all with expert review.

## Which of the following is a generative AI application? (Practice)

Try these, then check the answers below.

1. A bank's model that flags suspicious transactions
2. A tool that writes a first draft of a job description from bullet points
3. A system that forecasts electricity demand for tomorrow
4. An app that creates a cartoon avatar from your selfie
5. A filter that sorts customer reviews into positive and negative
6. An assistant that turns meeting recordings into written minutes
7. Character chatbots (such as Character.AI, often called "c.ai") that hold role-play conversations

**Answers:** 2, 4, 6 and 7 are generative AI applications (they create new text, images or conversation). 1, 3 and 5 are predictive/discriminative AI (they flag, forecast or classify).

## Limitations of generative AI to keep in mind

- **Hallucinations:** generative models can produce plausible but false information. Verify facts, figures and citations.
- **Bias:** outputs can reflect biases in the training data.
- **Inconsistency:** the same prompt can produce different outputs.
- **Data privacy and IP:** be careful what data you put into tools, and check usage rights for generated content.
- **Lack of true understanding:** models predict likely outputs; they don't "know" things the way people do, and can fail on tasks needing precise logic or up-to-date facts unless connected to tools and data.

## How businesses should think about generative AI tasks

The useful question isn't "is this generative or not?" but "**where does creating, transforming or communicating information slow us down?**" Those are the places generative AI will have the most impact. The best results come from embedding generative steps into workflows (drafting, summarising, extracting, replying) with humans reviewing, rather than relying on ad-hoc chat. (See [How to automate tasks with AI](/blog/how-to-automate-tasks-with-ai/).)

## Frequently asked questions

### Which task is a generative AI task?
A generative AI task is one where the AI creates new content, such as writing text, summarising documents, translating, generating images, composing music, producing video or writing code. Tasks that only classify, detect or predict (like spam filtering or fraud detection) are not generative AI tasks.

### Which of the following is a generative AI application?
Any application that produces new content: writing assistants, chatbots that generate answers, image generators, AI video and voice tools, code assistants, meeting-minute generators and synthetic data tools. Fraud detection, forecasting and image classification are not generative applications.

### What is the main goal of generative AI?
The main goal of generative AI is to create new, coherent and useful content (text, images, audio, video, code or data) based on patterns learned from existing data and guided by user instructions.

### How does generative AI differ from other types of AI?
Traditional AI analyses data to classify, predict or detect, usually with a model built for one task. Generative AI creates new content and is general purpose: a single foundation model can handle many tasks through natural-language prompts.

### What makes generative AI unique?
It creates new content rather than only analysing existing data, is general purpose, is controlled with natural language, works with unstructured data like text and images, and can be connected to company data and tools to do practical work.

### Is ChatGPT generative AI?
Yes. ChatGPT, Claude and Gemini are generative AI assistants built on large language models that generate text, code and, increasingly, images and audio in response to prompts.

### Is regenerative AI the same as generative AI?
"Regenerative AI" is not a standard technical term; it is usually a misspelling of generative AI, or occasionally used loosely to describe AI that can repair or improve its own outputs. The established term is generative AI.
