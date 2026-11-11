---
title: "Document Review Software: How Legal Document Review Is Being Streamlined With AI"
description: "What legal document review involves (e-discovery, due diligence, contract review, investigations), how review software and AI work (TAR, CAL, generative AI), how to evaluate tools and services, defensibility, quality controls and costs."
date: 2026-10-22
updated: 2026-11-12
cluster: legal
order: 115
---

<p class="lede">Reading thousands of documents is slow and expensive, and mistakes carry real consequences. <strong>Document review software</strong> speeds up legal review by ingesting, de-duplicating and organising documents, then using search, analytics and AI to surface the documents that matter first, extract key information and flag issues, while keeping a defensible record of every decision.</p>

Document review is often the single most expensive phase of litigation, and a major cost in transactions and investigations. Technology has been transforming it for over a decade (courts accepted technology-assisted review in 2012), and generative AI is now accelerating that change. This guide explains the types of review, how the software works, the shift from TAR to generative AI, how to evaluate tools and providers, quality controls and defensibility, and when a custom pipeline makes sense.

## Types of legal document review

- **Disclosure / e-discovery:** identifying which documents are relevant to a dispute, which are privileged, and which need redaction, then producing them to the other side.
- **Due diligence:** reviewing a target company's contracts and records in an M&A or financing transaction to find risks (change of control, assignment, exclusivity, liabilities).
- **Contract review:** checking incoming or existing agreements against a playbook of standard positions.
- **Investigations and compliance:** finding patterns, key players and evidence in communications (internal investigations, regulatory requests, fraud).
- **Data breach review:** identifying personal and sensitive information in compromised data to meet notification obligations.
- **Subject access requests (DSARs):** finding and redacting personal data for individuals' data protection requests.

## How document review software streamlines the work

1. **Collection and ingestion:** emails, files, chats (Slack, Teams), mobile data and databases are collected forensically and processed, with OCR for scanned documents.
2. **De-duplication and threading:** removing duplicates and grouping email threads so reviewers read each conversation once.
3. **Search and filtering:** by date, custodian, sender, keyword, file type and concept.
4. **Analytics:** clustering similar documents, identifying near-duplicates, communication network analysis, and language detection.
5. **Prioritisation:** using machine learning so likely-relevant documents come first.
6. **Coding and tagging:** reviewers tag relevance, privilege, issues and confidentiality.
7. **Extraction:** key fields (parties, dates, termination rights, liability caps) for due diligence and contract review.
8. **Redaction:** of privileged, personal or confidential information, increasingly automated.
9. **Quality control and validation.**
10. **Production and reporting:** producing documents in agreed formats with privilege logs and audit trails.

## From TAR to generative AI

### Technology-assisted review (TAR)
**TAR 1.0** used a seed set of documents coded by experts to train a classifier that predicted relevance across the collection. **TAR 2.0 / continuous active learning (CAL)** continuously learns as reviewers code documents, constantly re-prioritising so the most likely relevant documents are reviewed first. Courts in the US (starting with *Da Silva Moore v. Publicis Groupe* in 2012) and in England and Wales (*Pyrrho Investments v. MWB Property* in 2016) have accepted TAR as a legitimate review method when used appropriately.

### Generative AI review
Generative AI (large language models) adds new capabilities:
- **First-pass review using natural-language instructions:** describing what's relevant ("documents discussing pricing discussions with competitors in 2023") rather than training a classifier through thousands of coding decisions
- **Explanations:** why a document was flagged, with cited passages
- **Summaries** of documents and whole sets
- **Issue identification and chronologies**
- **Privilege detection assistance**
- **Contract analysis** against playbooks at scale

Major e-discovery platforms (such as **Relativity**, **Everlaw**, **DISCO**, **Reveal**, **Lighthouse** and others) and contract review tools (**Kira**, **Luminance**, **Spellbook**, **Harvey** and others) now include generative AI features.

**The caveat:** generative AI review still needs the same discipline as TAR: validation, sampling and human oversight. It can miss things and make mistakes, and opposing parties and courts may question methods that aren't properly validated.

## Quality controls to insist on

- **Sampling and validation:** measure **recall** (what proportion of relevant documents were found) and **precision** (what proportion of documents flagged were actually relevant) on statistically valid samples.
- **Elusion testing:** sampling the documents classified as not relevant to estimate what was missed.
- **Privilege protocols:** AI shouldn't be the last check on privileged material; use human review and clawback agreements (e.g., Federal Rule of Evidence 502(d) orders in US federal cases).
- **Consistency checks:** comparing coding across reviewers and AI.
- **Audit trail:** who (or what) reviewed what, when and why.
- **Documented methodology** you can explain to opposing counsel and the court.
- **Security:** encryption, access control, ethical walls, data residency, and clarity on whether data is used to train any model.

## How to evaluate document review tools and providers

### Questions to ask
1. **What review types do you support?** (e-discovery, due diligence, contract review, DSAR, breach response)
2. **What data sources can you ingest?** (Microsoft 365, Google Workspace, Slack, Teams, mobile)
3. **How does your AI work, and how is it validated?** Can you provide recall/precision metrics on our data?
4. **What's the defensibility track record?** Has your methodology been accepted in court?
5. **Security and certifications:** ISO 27001, SOC 2, data residency, encryption, client data used for training?
6. **Pricing model:** per GB hosted, per document, per user, per AI review, or managed review fees?
7. **Support:** do you provide project managers and expert reviewers?

### Test before committing
Run a pilot on a sample of your own documents where you already know the right answers, and compare results and time.

## Costs

Costs typically include **data processing and hosting** (often per GB per month), **user licences**, **AI review fees** (per document or per GB), and **human review** (in-house time or managed review services). Technology-assisted and AI review can dramatically reduce the number of documents humans need to read, which is usually the largest cost.

## Software vs managed review services

- **Software only:** your team (or in-house legal) runs the review; best for frequent reviewers with expertise.
- **Managed review / legal service providers:** a provider runs processing, technology and reviewer teams; best for large, urgent or occasional matters.
- **Hybrid:** you run the platform with provider support for spikes.

## Custom review pipelines

For **recurring review work** (for example, the same contract types in every deal, a standard data room format, recurring DSARs, or lease portfolios), a custom extraction and review pipeline can beat a general platform:

- Extracts exactly the fields you check
- Flags exactly the clauses you care about, against your playbook
- Produces your reporting format automatically (e.g., a due diligence report table)
- Integrates with your document management and matter systems

(See [Legal document management and agreements](/blog/legal-document-management-and-agreements/), [Classification in machine learning](/blog/classification-in-machine-learning/) and [AI for lawyers](/blog/ai-for-lawyers/).)

[Tell me what you review](/#contact) and I'll outline what a pipeline would involve.

## Frequently asked questions

### What is legal document review?
Examining large sets of documents for relevance, privilege, confidentiality or specific issues, typically in litigation and e-discovery, investigations, due diligence, contract analysis, data breach response and data subject access requests.

### Can AI do document review?
AI can prioritise, classify, cluster, summarise and extract information far faster than linear reading, and generative AI can review against natural-language criteria. Results still need sampling, validation and human oversight, especially for privilege and key issues.

### What is technology-assisted review (TAR)?
TAR uses machine learning trained on human reviewers' decisions to predict which documents are relevant, prioritising review and reducing the number of documents people must read. Courts in the US and England and Wales have accepted TAR when properly used and validated.

### How do I choose document review software?
Match it to the task (e-discovery, due diligence, contract review), test on a sample of your own documents, check AI validation methods, security and audit trails, compare pricing models, and measure accuracy rather than trusting marketing claims.

### What are recall and precision in document review?
Recall is the proportion of all relevant documents that the review found; precision is the proportion of documents identified as relevant that actually are. Both are measured through statistical sampling to validate a review.

### Is AI document review defensible in court?
It can be, if the methodology is reasonable, transparent, validated with statistical sampling and documented, and parties cooperate on protocols where required. Courts have accepted technology-assisted review for over a decade.
