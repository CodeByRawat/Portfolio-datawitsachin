---
title: "Desktop Automation: Automating Windows and Mac Tasks, Software Automation and Scripting"
description: "A practical guide to desktop automation on Windows and Mac: built-in tools (Power Automate Desktop, Shortcuts), AutoHotkey, Keyboard Maestro, Python and PowerShell scripts, browser automation, RPA, AI computer-use agents, examples you can copy, and rules for reliable automations."
date: 2026-10-15
updated: 2026-11-12
cluster: automation
order: 106
hire: a desktop automation
---

<p class="lede"><strong>Desktop automation</strong> is making your computer do the repetitive things you currently do by hand on your own machine: renaming and moving files, copying data between apps, filling forms, generating reports, processing downloads, and running routine checks. You can start for free with built-in tools (<strong>Power Automate Desktop</strong> on Windows, <strong>Shortcuts</strong> on Mac), move to <strong>scripts</strong> (Python, PowerShell) for data-heavy tasks, and use <strong>browser automation</strong> or <strong>RPA</strong> for web portals and legacy apps.</p>

**Software automation** is the broad idea of software doing work that people do by hand (see [What is software automation?](/blog/what-is-software-automation/)). **Desktop automation** is the slice of that which runs on a workstation, and it's often the fastest place for individuals and small teams to save hours every week, without any IT project. This guide covers the options from lightest to heaviest, tools for Windows and Mac, copy-ready examples, the new generation of AI "computer use" agents, and rules for automations that don't break.

## Options, from lightest to heaviest

| Approach | Good for | Example tools |
|---|---|---|
| **Built-in tools** | Personal repetitive tasks | Power Automate Desktop (Windows), Shortcuts and Automator (Mac) |
| **Keyboard and text expansion** | Repeated typing, hotkeys, app shortcuts | AutoHotkey (Windows), Keyboard Maestro, TextExpander, Raycast (Mac) |
| **File and folder rules** | Sorting downloads, renaming, archiving | Hazel (Mac), Power Automate Desktop, scripts |
| **Scripts (Python, PowerShell, Bash, AppleScript)** | File handling, data wrangling, scheduled jobs | Merge 200 spreadsheets into one |
| **Browser automation** | Web forms and portals without APIs | Playwright, Selenium, Power Automate Desktop web actions |
| **Cloud workflow tools** | Connecting cloud apps rather than desktop apps | Zapier, Make, n8n (see [No-code vs low-code automation](/blog/no-code-vs-low-code-automation/)) |
| **RPA platforms** | Governed, many-bot enterprise estates, legacy desktop apps | UiPath, Automation Anywhere, Power Automate (see [What is robotic process automation?](/blog/what-is-robotic-process-automation/)) |
| **AI computer-use agents** | Variable tasks across apps described in plain language | Claude's computer use, browser agents, OS-level assistants |
| **Custom integrations** | Anything with an API | Direct system-to-system sync |

## Desktop automation on Windows

### Power Automate Desktop (free)
Microsoft's desktop RPA tool is **included with Windows 10 and 11** at no extra cost for individual use. It records and replays actions across desktop apps, Excel, files, folders and web browsers, with hundreds of pre-built actions (and paid features for cloud triggers and unattended runs in organisations).

**Good for:** extracting data from PDFs or websites into Excel, filling forms in internal apps, renaming and organising files, generating reports.

### AutoHotkey (free, open source)
Scripting for hotkeys, text expansion, window management and simple UI automation.

```autohotkey
; Type your email signature with Ctrl+Alt+S
^!s::
Send, Best regards,{Enter}Sachin Rawat{Enter}datawithsachin.com
return
```

### PowerShell (built in)
Ideal for file operations, system administration and scheduled tasks.

```powershell
# Move all PDFs older than 30 days from Downloads to an archive folder
$src = "$HOME\Downloads"; $dst = "$HOME\Documents\Archive"
Get-ChildItem $src -Filter *.pdf |
  Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-30) } |
  Move-Item -Destination $dst
```

Schedule it with **Task Scheduler** to run daily.

## Desktop automation on Mac

### Shortcuts (built in)
Apple's Shortcuts app runs on macOS, iPhone and iPad. Create workflows that rename files, resize images, convert formats, create calendar events, send messages and call web APIs, triggered from the menu bar, keyboard shortcuts, Finder or automations.

### Automator and AppleScript (built in)
Older but still useful for Finder workflows, folder actions and app scripting.

### Keyboard Maestro and Hazel (paid)
**Keyboard Maestro** automates almost anything triggered by hotkeys, apps or schedules. **Hazel** watches folders and applies rules: "Rename invoices by date and vendor, move them to the accounting folder, and tag them."

## Scripting with Python (Windows, Mac and Linux)

Python is the Swiss Army knife for data-heavy desktop automation.

```python
# Merge every Excel file in a folder into one sheet
from pathlib import Path
import pandas as pd

files = Path("reports").glob("*.xlsx")
merged = pd.concat((pd.read_excel(f).assign(source=f.name) for f in files),
                   ignore_index=True)
merged.to_excel("merged_report.xlsx", index=False)
print(f"Merged {len(merged)} rows")
```

Other common Python automations: renaming files from their content, extracting tables from PDFs, sending formatted emails, resizing images, cleaning CSV exports, and generating reports from templates. AI coding assistants make writing these scripts much faster, even for non-programmers. Just read and test what they produce.

## Browser automation

When a task lives in a web portal with no API (government sites, supplier portals, legacy web apps), browser automation tools such as **Playwright** and **Selenium** (or Power Automate Desktop's web actions) can log in, navigate, fill forms and download files. Check the site's terms of service, avoid overloading it, and expect maintenance when the site changes.

## AI computer-use agents: the new option

A new generation of **AI agents can operate a computer or browser** the way a person does: reading the screen, clicking, typing and navigating, guided by a goal in plain English ("download last month's invoices from the supplier portal and save them to the Accounts folder"). Examples include Anthropic's Claude computer use capabilities, browser agents from several AI providers, and assistants built into operating systems and browsers.

**Strengths:** flexible, handles variation, no scripting needed.
**Weaknesses:** slower and more expensive than scripts, less predictable, and vulnerable to manipulation by malicious content on screen (prompt injection).

**Use them for:** occasional, variable tasks, with supervision. **Use scripts or RPA for:** frequent, identical tasks where reliability matters. (Safety guidance: [Is ChatGPT agent mode safe?](/blog/is-chatgpt-agent-mode-safe/))

## Data automation software

A lot of "automation" is really **data plumbing**: pulling data from several places, cleaning it, and delivering a report or feeding another system. A scheduled script or small pipeline usually beats a heavy platform for this. For larger needs, data tools like Power Query (in Excel and Power BI), Airflow, dbt and Fivetran handle extraction, transformation and loading at scale.

## Example automations worth building

| Task | Tool | Time saved |
|---|---|---|
| Rename and file scanned invoices by vendor and date | Hazel / Power Automate Desktop / Python | Minutes per invoice |
| Merge weekly spreadsheets into one report | Python / Power Query | 1–2 hours per week |
| Download statements from a portal each month | Power Automate Desktop / Playwright | 30–60 minutes per month |
| Text expansion for common replies | TextExpander / AutoHotkey | Minutes every day |
| Back up project folders nightly | PowerShell / Shortcuts / rsync | Peace of mind |
| Extract data from PDFs into Excel | Power Automate Desktop / Python / AI extraction | Hours per batch |
| Resize and watermark product images | Shortcuts / Python | Hours per catalogue |

## Rules of thumb

- **If a task takes more than 5 minutes and happens weekly, it's probably worth automating.**
- **Prefer APIs to screen-clicking.** UI automation breaks when screens change.
- **Start with the built-in tools** before buying anything.
- **Log what the automation does** and alert on failure.
- **Keep credentials in a secrets store** or the OS keychain, never in the script.
- **Test on copies** before running on real files.
- **Document it** so someone else can run or fix it.

## IT automation services

For IT teams: account provisioning, backups, monitoring, patching, software deployment and ticket handling all automate well (see [What is software automation?](/blog/what-is-software-automation/)). If you'd rather hand it off, a specialist can build and document it so your team can maintain it.

Use the [ROI method](/blog/how-to-automate-business-processes/#how-to-calculate-the-roi-of-process-automation) to see what a task is costing you, then [contact me](/#contact) and I'll tell you the simplest way to automate it.

## Frequently asked questions

### What is desktop automation?
Desktop automation uses tools or scripts on your own computer to perform repetitive tasks automatically, such as organising files, moving data between applications, filling forms, processing downloads and generating reports.

### What is software automation?
Software automation means using programs or scripts to perform tasks that a person would otherwise do by hand, such as moving data, generating reports or running routine checks.

### Can I automate tasks on my own computer for free?
Yes. Built-in tools (Power Automate Desktop on Windows, Shortcuts and Automator on Mac), AutoHotkey, and scripting languages like Python and PowerShell can automate a great deal at no licence cost.

### Is Power Automate Desktop free?
Power Automate Desktop is included with Windows 10 and 11 for individual desktop automation. Organisations pay for premium capabilities such as cloud-triggered flows, unattended automation and centralised management.

### What is the difference between desktop automation and RPA?
Desktop automation is any automation of tasks on a workstation, often personal and lightweight. RPA (robotic process automation) is an enterprise approach using software bots, often running unattended on servers, with central orchestration, governance and logging.

### Can AI automate tasks on my computer?
Yes. AI coding assistants can write automation scripts for you, and AI computer-use agents can operate apps and browsers from plain-English instructions, best for occasional, variable tasks with supervision.
