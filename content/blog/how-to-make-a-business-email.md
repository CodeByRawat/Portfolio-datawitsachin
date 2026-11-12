---
title: "How to Make a Business Email Address (you@yourcompany.com): Google Workspace, Microsoft 365, Zoho and Free Options"
description: "How to create a professional business email address with your own domain: choose a domain, pick a provider (Google Workspace, Microsoft 365, Zoho Mail, hosting email), set up MX, SPF, DKIM and DMARC records, create addresses and aliases, set up on phone and desktop, costs, free options, naming conventions and deliverability tips."
date: 2026-11-12
cluster: web
order: 141
hire: a website with professional business email
hirekind: web
---

<p class="lede">To make a business email address like <strong>you@yourcompany.com</strong>: <strong>register a domain</strong> (if you don't have one), <strong>choose an email provider</strong> such as Google Workspace, Microsoft 365 or Zoho Mail, <strong>verify your domain</strong> with the provider, add the <strong>MX, SPF, DKIM and DMARC DNS records</strong> they give you, then <strong>create your mailboxes and aliases</strong> and connect them on your phone and computer. Expect roughly <strong>$1–$15 per user per month</strong>, with some free tiers available.</p>

## Step 1: Get a domain

Your email uses your website domain. If you don't have one yet, see [How to buy a domain name](/blog/how-to-buy-a-domain-name/).

## Step 2: Choose an email provider

| Provider | Approx. price (per user/month) | Best for |
|---|---|---|
| **Google Workspace** | Paid plans (starter tier is low-cost) | Gmail interface, Google Docs/Drive/Meet |
| **Microsoft 365 Business** | Paid plans | Outlook, Word, Excel, Teams |
| **Zoho Mail** | Free tier for small teams (limits apply) and low-cost plans | Budget-conscious businesses |
| **Proton Mail (business)** | Paid | Privacy-focused |
| **Web host email** | Often included with hosting | Very basic needs |
| **Email forwarding (e.g., via registrar or Cloudflare Email Routing)** | Free | Receiving at your domain and forwarding to Gmail (sending requires extra setup) |

Prices and free tiers change; check current plans.

## Step 3: Verify your domain

The provider asks you to prove you own the domain, usually by adding a **TXT record** in your domain's DNS settings (at your registrar or DNS host like Cloudflare). Many providers can do this automatically if you log in to supported registrars.

## Step 4: Add DNS records for email

| Record | Purpose |
|---|---|
| **MX** | Routes incoming mail to your provider |
| **SPF (TXT)** | Lists servers allowed to send email for your domain |
| **DKIM (TXT/CNAME)** | Cryptographically signs your emails |
| **DMARC (TXT)** | Tells receivers what to do with failing emails; provides reports |

These records are essential for **deliverability**: Gmail and Yahoo require proper authentication for bulk senders, and good setup helps every business avoid spam folders.

## Step 5: Create addresses and aliases

- **Personal mailboxes:** firstname@, firstname.lastname@
- **Role addresses/aliases or groups:** hello@, info@, sales@, support@, billing@ (often free aliases or groups routing to existing users)
- Avoid paying for separate mailboxes when an alias or group works

## Step 6: Set up on devices

- **Gmail app / Outlook app** on phones
- **Desktop:** Outlook, Apple Mail, Gmail in browser
- Add a **professional signature** with name, role, phone, website
- Turn on **two-factor authentication**

## Can I make a business email for free?

Options:
- **Zoho Mail free tier** (limited users and features)
- **Email forwarding** to an existing Gmail, plus "Send mail as" configured with an SMTP service
- Hosting plans that include email

For a growing business, a paid plan's reliability, storage, security and support is worth it.

## How do you make an email account (personal)?

Go to Gmail, Outlook.com or another provider, choose **Create account**, pick an available address, set a strong password and add recovery options. Personal accounts end in @gmail.com or @outlook.com; business emails use your domain.

## Business email best practices

- Use **consistent naming** across the team
- **Never share passwords;** use delegated access or shared mailboxes
- **Enable 2FA** and security alerts
- **Warm up** new domains before sending marketing campaigns
- Send marketing emails through an **email marketing platform**, not personal inboxes (see [When to suppress inactive email subscribers](/blog/when-to-suppress-inactive-email-subscribers/))
- Create **templates** for common replies (see [How to create an email template in Outlook](/blog/how-to-create-an-email-template-in-outlook/))

## Frequently asked questions

### How do I make a business email?
Register a domain, choose a provider like Google Workspace, Microsoft 365 or Zoho Mail, verify the domain, add MX, SPF, DKIM and DMARC records, then create your mailboxes.

### How much does a business email cost?
Typically about $1–$15 per user per month depending on provider and plan, with some free tiers for very small teams.

### Can I get a business email for free?
Yes, with limited options such as Zoho Mail's free tier or domain email forwarding, but paid plans offer better reliability and features.

### Do I need a website to have a business email?
No, you only need a domain. But the same domain is usually used for both your website and email.

### Why do my business emails go to spam?
Often due to missing or incorrect SPF, DKIM or DMARC records, a new domain without reputation, or spammy content and sending practices.

### What is the best business email provider?
Google Workspace and Microsoft 365 are the most popular; Zoho Mail is a strong budget option. Choose based on the apps your team uses.
