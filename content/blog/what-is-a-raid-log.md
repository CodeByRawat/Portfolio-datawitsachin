---
title: What Is a RAID Log? RAID in Project Management Explained (With Template)
description: What RAID stands for in project management (Risks, Assumptions, Issues, Dependencies), how to create and use a RAID log, a ready-to-copy template, examples, best practices, and how to automate RAID tracking with AI.
date: 2026-11-12
cluster: careers
order: 46
---

<p class="lede">A <strong>RAID log</strong> is a simple project management tool for tracking a project's <strong>Risks, Assumptions, Issues and Dependencies</strong> in one place. Some teams use the D for <strong>Decisions</strong> instead of (or as well as) Dependencies. Keeping these four things visible, owned and reviewed regularly helps project managers spot problems early, avoid surprises and keep stakeholders aligned.</p>

Projects rarely fail because of the work everyone planned for. They fail because of the things nobody tracked: the risk that materialised, the assumption that turned out false, the issue that festered, the dependency on another team that slipped. A RAID log is a lightweight way to make those things visible. This guide explains what RAID stands for, how to build and run a RAID log, provides a template, and shows how to automate it.

## What does RAID stand for in project management?

| Letter | Stands for | Definition | Example |
|---|---|---|---|
| **R** | **Risks** | Uncertain future events that *could* affect the project, positively or negatively | "The vendor may not deliver the API on time." |
| **A** | **Assumptions** | Things believed to be true for planning purposes, but not confirmed | "Legal review will take no more than one week." |
| **I** | **Issues** | Problems that are happening *now* and need resolution | "The test environment is down, blocking QA." |
| **D** | **Dependencies** (or **Decisions**) | Tasks or deliverables the project relies on (or decisions that have been made and why) | "Data migration depends on IT completing the server upgrade." |

### Variations
- **RAID** with **Decisions:** many teams track key decisions (what was decided, by whom, when, why) to avoid revisiting them.
- **RAAIDD** or **RAIDD:** Risks, Assumptions, Actions, Issues, Dependencies, Decisions.
- **RAIDO:** adds Opportunities.

Use whatever version suits your project, as long as it's consistent.

## Risks vs issues: the key difference

- A **risk** *might* happen in the future. You manage it by reducing its likelihood or impact.
- An **issue** *has* happened. You manage it by resolving it.

If a risk materialises, it becomes an issue. A good RAID log shows when a risk was raised early and how it was handled, which is exactly the evidence that good project management happened.

## Why use a RAID log?

- **Early warning:** surfaces problems before they become crises
- **Accountability:** every item has an owner and action
- **Shared visibility:** stakeholders see the same picture
- **Better decisions:** assumptions and dependencies are checked, not forgotten
- **Audit trail:** a record of what was known, decided and done
- **Faster status reporting:** the RAID log feeds directly into status updates

## What to include in a RAID log (fields)

### Common fields for all items
- **ID** (e.g., R-01, A-03)
- **Type** (Risk, Assumption, Issue, Dependency/Decision)
- **Description:** clear and specific
- **Owner:** one accountable person
- **Date raised**
- **Status:** Open, In progress, Closed (and for assumptions: Validated/Invalidated)
- **Due date / review date**
- **Notes / updates**

### Additional fields by type
- **Risks:** likelihood (1–5), impact (1–5), risk score (likelihood × impact), response strategy (avoid, reduce, transfer, accept), mitigation actions, trigger/early warning signs
- **Assumptions:** how and when it will be validated; impact if wrong
- **Issues:** priority/severity, impact, resolution actions, escalation level
- **Dependencies:** what depends on what, the other team/supplier, required date, status
- **Decisions:** decision made, alternatives considered, decision-maker, date, rationale

## RAID log template (copy and use)

| ID | Type | Description | Owner | Raised | Likelihood (1–5) | Impact (1–5) | Score | Response / Action | Due | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| R-01 | Risk | Vendor may deliver payments API late | Priya | 3 Nov | 3 | 5 | 15 | Weekly vendor check-in; build mock API for testing | 20 Nov | Open |
| A-01 | Assumption | Security review takes ≤ 5 working days | Tom | 3 Nov | n/a | 4 | n/a | Confirm with security team this week | 7 Nov | Open |
| I-01 | Issue | Staging environment unavailable; QA blocked | Ana | 5 Nov | n/a | 4 | n/a | Escalated to IT; temporary environment requested | 6 Nov | In progress |
| D-01 | Dependency | Data migration requires server upgrade by IT | Raj | 3 Nov | n/a | 5 | n/a | Upgrade scheduled 15 Nov; confirm weekly | 15 Nov | Open |
| DEC-01 | Decision | Launch in two phases; EU after US | Sponsor | 4 Nov | n/a | n/a | n/a | Agreed at steering meeting; reduces compliance risk | n/a | Closed |

You can build this in Excel, Google Sheets, Smartsheet, Notion, Jira, Asana, Monday.com or Microsoft Lists. Most project tools let you create a RAID view with custom fields.

## How to create and run a RAID log

### 1. Set it up at project kickoff
Create the log during planning. Run a short workshop with the team and key stakeholders: "What could go wrong? What are we assuming? What do we depend on? What's already a problem?"

### 2. Assign an owner to every item
Not the project manager by default: the person best placed to manage it.

### 3. Score and prioritise risks
Use likelihood × impact to focus on the risks that matter most. A simple heat map (high/medium/low) works well for stakeholders.

### 4. Review regularly
- **Weekly** in team meetings for active projects
- **At every stage gate** or steering committee
- **Whenever something changes significantly**

### 5. Update, escalate and close
Update actions and statuses, escalate issues beyond the team's control, convert materialised risks to issues, validate or invalidate assumptions, and close items with a note on the outcome.

### 6. Use it in status reports
Summarise the top risks, open issues and critical dependencies in each status update.

### 7. Capture lessons learned
At project close, review the RAID log: which risks materialised, which assumptions were wrong, and what you'd do differently.

## RAID log best practices

- **Be specific:** "Possible delays" is useless; "Supplier X may miss the 20 Nov delivery due to capacity constraints" is actionable.
- **Keep it alive:** a RAID log that isn't reviewed is worse than none; it creates false comfort.
- **Keep it simple:** don't overload with fields nobody updates.
- **Make it visible:** shared, not hidden in the PM's laptop.
- **Separate risks from issues** clearly.
- **Track positive risks (opportunities)** too, if useful.
- **Link items to tasks** in your project tool so actions get done.

## How to automate your RAID log with AI

Much RAID admin can now be automated:

- **Meeting capture:** AI meeting assistants identify risks, issues, decisions and dependencies mentioned in meetings and add them to the RAID log for the PM to confirm.
- **Email and chat capture:** an automation flags messages mentioning delays, blockers or decisions and drafts RAID entries.
- **Risk detection from project data:** AI analyses task progress, overdue items and workloads to suggest new risks ("Testing is 40% behind plan; launch date at risk").
- **Review reminders:** owners get automatic reminders before review dates.
- **Status report drafts:** AI summarises top risks and issues weekly.
- **Escalation rules:** high-score risks or overdue issues trigger alerts to sponsors.

**Example workflow (n8n / Make / Zapier / Power Automate):**
1. Trigger: meeting transcript ready (Zoom/Teams/Meet).
2. AI step: extract risks, assumptions, issues, dependencies and decisions as structured JSON with suggested owners.
3. Add rows to the RAID sheet or project tool with status "Proposed".
4. Notify the PM in Slack/Teams to approve.

(More: [How to track tasks at work](/blog/how-to-track-tasks-at-work/) and [How to automate tasks with AI](/blog/how-to-automate-tasks-with-ai/).)

## RAID log vs risk register vs issue log

| Tool | Scope |
|---|---|
| **Risk register** | Risks only, usually with detailed analysis and responses |
| **Issue log** | Issues only, with resolution tracking |
| **RAID log** | Combines risks, assumptions, issues and dependencies (or decisions) in one place |

Large or regulated projects may keep a separate, detailed risk register *and* a RAID log for day-to-day management.

## Frequently asked questions

### What is a RAID log?
A RAID log is a project management tool for tracking risks, assumptions, issues and dependencies (or decisions) in one place, each with an owner, status and actions, so problems are spotted and managed early.

### What does RAID stand for in project management?
RAID stands for Risks, Assumptions, Issues and Dependencies. Some teams use D for Decisions, or track both.

### What is the difference between a risk and an issue?
A risk is an uncertain event that might happen in the future; an issue is a problem that is happening now. When a risk materialises, it becomes an issue.

### How often should a RAID log be reviewed?
Typically weekly for active projects, at major milestones or stage gates, and whenever significant changes occur.

### Who owns the RAID log?
The project manager usually owns and maintains the RAID log overall, but each item should have its own owner responsible for managing it.

### What tool should I use for a RAID log?
A spreadsheet (Excel or Google Sheets) works well for most projects. Project tools such as Jira, Asana, Monday.com, Smartsheet or Notion can host RAID logs with custom fields and link items to tasks.
