---
title: What Does SOA Mean? Service-Oriented Architecture, Statement of Account and SOA Records
description: SOA has several meanings. This guide explains service-oriented architecture (SOA) in software, SOA vs microservices vs APIs, statement of account in finance, the DNS SOA record, and other common meanings, with examples.
date: 2026-11-12
cluster: automation
order: 51
---

<p class="lede"><strong>SOA</strong> most commonly stands for <strong>service-oriented architecture</strong>, a way of designing software as a collection of reusable services that communicate over a network. In finance, SOA means <strong>statement of account</strong>, a summary of transactions and the balance owed. In networking, an <strong>SOA record</strong> (start of authority) is a DNS record holding key information about a domain's zone. The right meaning depends on context.</p>

Because "SOA" means different things to developers, accountants and network administrators, this guide covers each meaning clearly, with the most attention on service-oriented architecture, which matters for anyone working on systems integration and automation.

## Quick reference: what does SOA stand for?

| Context | SOA means | In one line |
|---|---|---|
| **Software / IT architecture** | **Service-oriented architecture** | Building systems from reusable, loosely coupled services |
| **Finance / accounting** | **Statement of account** | A summary of invoices, payments and the balance owed |
| **DNS / networking** | **Start of authority (SOA record)** | A DNS record with authoritative information about a domain's zone |
| **Actuarial profession** | **Society of Actuaries** | Professional body for actuaries |
| **Cybersecurity / compliance** | **Statement of applicability** (ISO/IEC 27001) | Lists which security controls apply and why |

## SOA in software: service-oriented architecture

### What is SOA?
**Service-oriented architecture (SOA)** is a software design approach in which an application's functions are provided as **services**: self-contained units of business functionality (such as "check customer credit", "create invoice", "get order status") that other applications can call over a network through standard interfaces.

Instead of one large application where everything is tightly connected, SOA breaks functionality into reusable services that different systems can share.

### Core principles of SOA
- **Loose coupling:** services depend on each other as little as possible.
- **Reusability:** one service (e.g., "customer lookup") serves many applications.
- **Standardised contracts:** each service has a defined interface describing what it does, its inputs and outputs.
- **Abstraction:** consumers don't need to know how the service works internally.
- **Interoperability:** services built on different technologies can communicate.
- **Discoverability:** services are documented and registered so they can be found and reused.
- **Composability:** services can be combined into larger business processes.

### How SOA works
Traditionally, SOA implementations used:
- **Web services** with **SOAP** (an XML-based messaging protocol) and **WSDL** (a language describing service interfaces)
- An **enterprise service bus (ESB)**: middleware that routes messages between services, transforms data formats and handles integration logic
- **Service registries** for discovery
- **Orchestration engines** (e.g., BPEL) to combine services into business processes

### Example
A bank builds services for *customer information*, *account balance*, *credit scoring*, *payments* and *notifications*. The mobile app, the website, the call-centre system and the loan origination system all reuse the same services, rather than each building its own version. When the credit-scoring logic changes, it changes in one place.

### Benefits of SOA
- Reuse of business functions across applications
- Easier integration of different and legacy systems
- Faster development of new applications by assembling services
- Alignment between business capabilities and IT
- Easier maintenance when functionality is centralised

### Drawbacks of SOA
- Centralised ESBs can become complex bottlenecks and single points of failure
- Heavy standards (SOAP/WSDL) add overhead
- Governance and coordination across teams can slow change
- Large shared services can still create tight dependencies

## SOA vs microservices vs APIs

SOA's ideas evolved into today's **microservices** and **API-first** approaches.

| | SOA | Microservices |
|---|---|---|
| **Scope** | Enterprise-wide integration and reuse | Building a single application as many small services |
| **Service size** | Often larger, shared business services | Small, focused on one capability |
| **Communication** | Often via an ESB; SOAP/XML common | Lightweight APIs (REST/JSON, gRPC), messaging/events |
| **Data** | Services may share databases | Each service typically owns its own data |
| **Governance** | Centralised | Decentralised, team-owned |
| **Deployment** | Often coordinated | Independently deployable services, containers |

**APIs** are the interfaces through which services (SOA or microservices) are accessed. Today, REST and GraphQL APIs, event streaming (Kafka) and webhooks (see [What is a webhook?](/blog/what-is-a-webhook/)) have largely replaced SOAP and ESBs for new systems, but the SOA principles of reusable, well-defined services remain foundational.

### Why SOA matters for automation and AI
Well-designed services and APIs make automation dramatically easier. Workflow tools, RPA, and AI agents can call clean services ("create order", "check stock") instead of scraping screens. In fact, exposing business capabilities as **tools for AI agents** (often via the Model Context Protocol) is essentially SOA thinking applied to AI. (See [What is AI orchestration?](/blog/what-is-ai-orchestration/), [What is robotic process automation?](/blog/what-is-robotic-process-automation/) and [What is CRM integration?](/blog/crm-integration-and-automation/).)

### What is platform as a service? (related)
**Platform as a service (PaaS)** is a cloud model where a provider offers a managed platform (runtime, databases, middleware, scaling) for building and running applications, so developers don't manage servers. Examples include Heroku, Google App Engine, Azure App Service and many managed integration platforms (**iPaaS**, integration platform as a service, such as MuleSoft, Boomi and Workato), which are often used to implement modern SOA-style integration.

## SOA in finance: statement of account

### What is a statement of account?
A **statement of account (SOA)** is a document a business sends to a customer summarising their account activity over a period: invoices issued, payments received, credits applied and the **outstanding balance**. It's usually sent monthly.

### What's on an SOA?
- Customer name and account number
- Statement period
- Opening balance
- List of invoices (dates, numbers, amounts)
- Payments and credit notes received
- Closing balance due
- Ageing breakdown (current, 30, 60, 90+ days overdue)
- Payment terms and instructions

### Statement of account vs invoice
An **invoice** requests payment for a specific sale. A **statement of account** summarises all invoices and payments over time, showing what's still owed.

### Automating statements of account
Accounting systems (QuickBooks, Xero, Zoho Books, NetSuite, SAP) can generate and email statements automatically. Automation can also send reminders for overdue balances and reconcile payments. (See [What are automated financial systems?](/blog/what-are-automated-financial-systems/))

## SOA in DNS: the SOA record

### What is an SOA record?
A **start of authority (SOA) record** is a DNS record that every DNS zone must have. It contains administrative information about the zone, identifying the primary authoritative name server and controlling how secondary servers sync zone data.

### Fields in an SOA record
| Field | Meaning |
|---|---|
| **MNAME** | Primary name server for the zone |
| **RNAME** | Email of the administrator (with the @ written as a dot) |
| **Serial** | Version number of the zone; increases with each change |
| **Refresh** | How often secondary servers check for updates |
| **Retry** | How long to wait before retrying a failed refresh |
| **Expire** | When secondaries stop answering if they can't reach the primary |
| **Minimum / negative TTL** | How long resolvers cache "no such record" responses |

### Example
```
example.com.  3600  IN  SOA  ns1.example.com. admin.example.com. (
              2026111201 ; serial
              7200       ; refresh
              3600       ; retry
              1209600    ; expire
              3600 )     ; minimum TTL
```

You can view a domain's SOA record with `dig SOA example.com` or `nslookup -type=soa example.com`. Most people never need to edit it; DNS providers manage it automatically.

## Frequently asked questions

### What does SOA mean?
SOA most commonly means service-oriented architecture, a software design approach based on reusable services. In finance it means statement of account, and in DNS it refers to the start of authority record. Other meanings depend on context.

### What is SOA in software?
Service-oriented architecture is a way of designing software systems as a set of loosely coupled, reusable services with standard interfaces that other applications can call over a network, often coordinated through an enterprise service bus.

### What is the difference between SOA and microservices?
SOA focuses on enterprise-wide integration and reuse of often larger services, typically via centralised middleware. Microservices break a single application into small, independently deployable services that own their data and communicate through lightweight APIs.

### What is a statement of account?
A statement of account is a document sent to a customer summarising invoices, payments and credits over a period and showing the outstanding balance, usually with an ageing breakdown.

### What is an SOA record in DNS?
An SOA (start of authority) record is a required DNS record that identifies a zone's primary name server and administrator and contains timing values that control how zone data is synchronised and cached.

### What is a statement of applicability (SoA) in ISO 27001?
In ISO/IEC 27001, the statement of applicability is a document listing the information security controls an organisation has selected, whether each is implemented, and the justification for including or excluding each control.
