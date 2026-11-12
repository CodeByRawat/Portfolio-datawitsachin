---
title: "What Can Power Automate Do? 25 Real Examples, Features, Licensing and Limits (2026 Guide)"
description: "What Microsoft Power Automate is and what it can do: cloud flows, desktop flows (RPA), process mining, AI Builder and Copilot, 25 practical examples for Outlook, Teams, SharePoint, Excel and approvals, licensing basics, limits, Power Automate vs Zapier, Make and n8n, and how to get started."
date: 2026-11-12
cluster: automation
order: 71
hire: a Power Automate flow
---

<p class="lede"><strong>Microsoft Power Automate</strong> is Microsoft's workflow automation platform. It can automatically move and process information between apps (Outlook, Teams, SharePoint, Excel, OneDrive, Dynamics 365 and hundreds of third-party services), run approval workflows, automate repetitive desktop and web tasks with software robots (RPA), extract data from documents with AI, and analyse how processes run, mostly with low-code, drag-and-drop design and natural-language help from Copilot.</p>

If your organisation uses Microsoft 365, you probably already have access to Power Automate. Most people never open it, yet it can remove hours of copy-pasting, emailing and chasing each week. This guide explains what it can do, with real examples, its main components, licensing basics, limits, and how it compares with other automation tools.

## What is Power Automate?

Power Automate (formerly **Microsoft Flow**) is part of the **Microsoft Power Platform**, alongside Power Apps, Power BI, Copilot Studio and Power Pages. You build **flows**: sequences of actions triggered by an event, a schedule or a button.

A flow has:
- **A trigger:** "When a new email arrives", "When a file is created in SharePoint", "Every Monday at 9:00", "When a form response is submitted"
- **Actions:** "Save attachment to OneDrive", "Post message in Teams", "Add row to Excel table", "Start an approval"
- **Logic:** conditions, loops, variables, error handling
- **Connectors:** pre-built integrations with Microsoft and third-party services (1,000+)

## The main parts of Power Automate

| Component | What it does |
|---|---|
| **Cloud flows** | Automations between cloud apps and services: automated (event-triggered), instant (button) and scheduled flows |
| **Desktop flows (Power Automate Desktop)** | RPA: automate clicks, typing and data entry in Windows desktop apps, websites, legacy systems, Excel and files (see [Desktop automation](/blog/desktop-automation/)) |
| **Approvals** | Built-in approval workflows with responses in Outlook, Teams or the mobile app |
| **AI Builder** | Pre-built and custom AI models: invoice and receipt processing, document data extraction, text classification, sentiment, and generative AI prompts |
| **Copilot in Power Automate** | Describe a flow in plain language and Copilot drafts it; ask Copilot to edit or explain flows |
| **Process mining** | Analyse event logs and task recordings to discover how processes really run and where bottlenecks are |
| **Business process flows** | Guide users through stages in Dynamics 365 / Dataverse apps |
| **Hosted and unattended RPA** | Run desktop flows on virtual machines without a logged-in user |

## What can Power Automate do? 25 practical examples

### Email and Outlook
1. **Save email attachments** automatically to a SharePoint or OneDrive folder, named by sender and date.
2. **Forward emails matching rules** (specific keywords, senders) to a team channel.
3. **Send a daily digest** of flagged emails or upcoming tasks.
4. **Extract details from incoming orders or enquiries** and add them to an Excel table or list.

### Microsoft Teams
5. **Post alerts** in a Teams channel when a high-value deal, ticket or form response comes in.
6. **Send welcome messages** to new team members.
7. **Create Planner tasks** from flagged Teams messages.

### SharePoint and OneDrive
8. **Document approvals:** when a document is uploaded, route it to a manager for approval and update its status.
9. **Copy or move files** between libraries and archive old documents.
10. **Notify owners** when files are added or changed.
11. **Create a folder structure** automatically for each new project or client.

### Excel and data
12. **Add Microsoft Forms responses to Excel** or a SharePoint list.
13. **Generate reports on a schedule** and email them.
14. **Refresh a Power BI dataset** after data is updated.
15. **Sync data** between Excel, SharePoint, Dataverse and SQL databases.

### Approvals and business processes
16. **Expense, purchase and leave approvals** with multi-level routing.
17. **Contract and invoice approvals** (see [Accounts payable automation](/blog/accounts-payable-automation/)).
18. **Employee onboarding:** create accounts, assign training, send equipment requests (see [What is HR automation?](/blog/what-is-hr-automation/)).

### AI and documents
19. **Extract data from invoices and receipts** with AI Builder and push it to an ERP or accounting system.
20. **Classify and route emails or support requests** by topic and sentiment.
21. **Summarise documents or emails** with generative AI actions and post summaries to Teams.

### Desktop automation (RPA)
22. **Enter data into a legacy desktop application** that has no API.
23. **Download reports from a website** each morning and save them.
24. **Process Excel files** (open, clean, reformat, save as PDF).

### Integrations with third-party apps
25. **Connect Salesforce, Dropbox, Google Sheets, Slack, Twitter/X, Mailchimp, ServiceNow** and many more with Microsoft apps via standard and premium connectors, or call any API with the HTTP action (premium).

## Example: a simple flow

**Goal:** save invoice attachments and notify finance.
1. **Trigger:** When a new email arrives in the shared mailbox "invoices@" with an attachment.
2. **Condition:** attachment name ends with ".pdf".
3. **Action:** save the attachment to SharePoint › Finance › Invoices › {Year}.
4. **Action:** AI Builder extracts supplier, invoice number, date and amount.
5. **Action:** add a row to the "Invoice register" list.
6. **Action:** post a Teams message to the Finance channel with the details and link.

## Power Automate licensing basics

Licensing changes regularly, so check Microsoft's current pricing, but the general structure is:
- **Included with Microsoft 365:** cloud flows using **standard connectors** (Outlook, Teams, SharePoint, OneDrive, Excel and others) for licensed users
- **Premium (per-user) plans:** add **premium connectors** (e.g., SQL Server, Salesforce, HTTP, custom connectors), Dataverse, attended desktop flows (RPA), and more
- **Process / unattended plans:** run flows or unattended bots independently of users
- **AI Builder credits / capacity:** for AI features
- **Power Automate Desktop for Windows:** available to build and run desktop flows on Windows, with cloud orchestration and unattended runs requiring paid licences

## Limits and things to know

- **Premium connectors** require additional licences
- **Throttling and API request limits** apply per licence
- **Complex logic gets hard to maintain** in the visual designer; document flows and use solutions and environments
- **Error handling:** configure "run after" settings, scopes and notifications, or flows fail silently
- **Ownership:** flows owned by one person break when they leave; use service accounts and shared ownership
- **Governance:** admins should use data loss prevention (DLP) policies and environments to control which connectors can be combined
- **Desktop flows (UI automation)** can break when application interfaces change

## Power Automate vs Zapier vs Make vs n8n

| | Power Automate | Zapier | Make | n8n |
|---|---|---|---|---|
| **Best for** | Microsoft 365-centric organisations | Simple, fast SaaS automations | Visual, complex multi-step scenarios | Technical teams, self-hosting, AI workflows |
| **RPA (desktop)** | Yes (Power Automate Desktop) | No | No | No |
| **Approvals** | Built-in | Basic | Basic | Custom |
| **Self-hosting** | No | No | No | Yes |
| **Pricing model** | Per user/process, often bundled with M365 | Per task | Per operation/credit | Free self-hosted; cloud plans by executions |

(Deeper comparison: [No-code vs low-code automation](/blog/no-code-vs-low-code-automation/), and n8n: [How to run n8n locally](/blog/how-to-run-n8n-locally/).)

## Do I need Power Automate?

You'll benefit if you:
- Use Microsoft 365 and repeat the same email, file or Excel tasks weekly
- Run approvals by email and lose track of them
- Copy data between systems manually
- Need RPA for legacy desktop apps
- Want automation governed by IT inside your Microsoft tenant

You might choose another tool if your stack is mostly Google Workspace and SaaS apps, you need self-hosting, or you're building developer-heavy AI agent workflows.

## How to get started with Power Automate

1. Go to **make.powerautomate.com** and sign in with your work account.
2. Browse **Templates** (e.g., "Save Outlook attachments to OneDrive") or use **Copilot** to describe a flow.
3. Start with one small, frequent task.
4. Test with real data and add error notifications.
5. Share the flow with a colleague as co-owner.
6. Expand to approvals, AI Builder and desktop flows as you gain confidence.

(Picking what to automate first: [How to automate business processes](/blog/how-to-automate-business-processes/).)

## Frequently asked questions

### What can Power Automate do?
It automates workflows between Microsoft 365 and hundreds of other apps, runs approvals, automates desktop and web tasks with RPA, extracts data from documents with AI Builder, schedules recurring tasks and helps analyse processes with process mining.

### What is Power Automate used for?
Saving attachments, syncing data between apps, sending notifications, approvals, onboarding, report distribution, document processing, and automating repetitive data entry in desktop and web applications.

### Is Power Automate free?
Many Microsoft 365 business and enterprise plans include Power Automate for cloud flows with standard connectors. Premium connectors, attended and unattended RPA, Dataverse and AI Builder capacity require paid licences.

### Is Power Automate an RPA tool?
Yes, partly. Power Automate Desktop provides RPA for automating Windows desktop and web applications, while cloud flows handle API-based automation between cloud services.

### Can Power Automate use AI?
Yes. AI Builder provides document processing, classification and generative AI prompts, and Copilot in Power Automate can create and edit flows from natural-language descriptions.

### Is there a Google version of Power Automate?
Google offers automation through Google Apps Script, AppSheet automation and workflow features in Google Workspace. Many Google Workspace users also use Zapier, Make or n8n for cross-app automation.

### What is make.powerautomate.com?
It's the web portal where you create, manage and monitor Power Automate flows.
