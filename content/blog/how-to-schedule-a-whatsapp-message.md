---
title: "Can You Schedule a WhatsApp Message? How to Schedule WhatsApp Messages on iPhone, Android and for Business"
description: "Can you schedule messages on WhatsApp? Not natively in the regular app. Learn the working methods: iPhone Shortcuts automations, Android scheduler apps, WhatsApp Business greeting and away messages, the WhatsApp Business Platform (API) for real scheduled and automated messages, limitations, safety, and when to automate WhatsApp for your business."
date: 2026-11-12
cluster: automation
order: 94
hire: a WhatsApp automation
---

<p class="lede"><strong>WhatsApp doesn't have a built-in "schedule send" button</strong> in the standard WhatsApp or WhatsApp Business apps (at the time of writing). You can still schedule messages: on <strong>iPhone</strong> with the Shortcuts app's personal automations, on <strong>Android</strong> with third-party scheduler apps, and for businesses properly through the <strong>WhatsApp Business Platform (API)</strong>, where software sends approved messages automatically at the time you choose. The WhatsApp Business app also offers automatic <strong>greeting and away messages</strong>, which are not scheduling but cover many needs.</p>

People want to schedule WhatsApp messages for birthday wishes at midnight, reminders, messages across time zones, and business follow-ups. This guide covers each method, its limits and when a real automation makes more sense.

## Can you schedule a message on WhatsApp?

| Method | Works on | Truly automatic? | Best for |
|---|---|---|---|
| **iPhone Shortcuts automation** | iOS | Partly (may need a tap to confirm, depending on settings and iOS version) | Personal one-off messages |
| **Android scheduler apps** | Android | Usually, via accessibility permissions | Personal messages |
| **WhatsApp Business app greeting/away messages** | Android, iOS | Yes, but only replies to incoming chats | Small businesses |
| **WhatsApp Business Platform (API)** | Any, via a provider or your own integration | Yes | Businesses sending reminders, updates and campaigns |
| **Reminder + manual send** | Any | No | Simplest and safest |

## How to schedule a WhatsApp message on iPhone (Shortcuts)

1. Open the **Shortcuts** app › **Automation** tab › **New Automation** (or +).
2. Choose **Time of Day**, set the time and **Run Once / Daily** as needed.
3. Choose **Run Immediately** if available (otherwise you'll get a notification to confirm).
4. Add the action **Send Message via WhatsApp** (search "WhatsApp"), choose the recipient and type the message.
5. Save. At the scheduled time, the shortcut runs.

**Limitations:** depending on iOS version and settings, the phone may need to be unlocked or you may need to tap to confirm the send; recurring automations need to be turned off afterwards; it only works for contacts.

## How to schedule a WhatsApp message on Android

Android has no built-in method. Third-party apps (for example SKEDit and similar schedulers) use **Accessibility permissions** to open WhatsApp and press send at the set time.

**Before using one:**
- Accessibility access lets an app read and control your screen, so only use well-reviewed apps from the Play Store and check their privacy policy
- Some require the screen to be unlocked or no screen lock
- They can break after WhatsApp updates
- Unofficial automation may conflict with WhatsApp's terms if used for bulk or spam messaging

## WhatsApp Business app: greeting and away messages

In the free **WhatsApp Business app** (Settings › Business tools):
- **Greeting message:** sent automatically to new customers or after 14 days of no activity
- **Away message:** sent automatically outside business hours or always
- **Quick replies:** saved responses triggered by "/" shortcuts
- **Labels and catalogue**

These automate replies, not outbound messages at a set time.

## The proper way for businesses: WhatsApp Business Platform (API)

For appointment reminders, order updates, payment reminders, follow-ups and campaigns, businesses use the **WhatsApp Business Platform** (often called the WhatsApp API) through Meta directly or a provider (such as Twilio, 360dialog, WATI, Interakt, AiSensy or similar).

What it enables:
- **Scheduled and triggered messages:** send at a time, or when something happens (booking made, order shipped, invoice due)
- **Message templates:** business-initiated messages must use pre-approved templates (utility, authentication, marketing)
- **Opt-in compliance:** users must have agreed to receive messages
- **Chatbots and AI agents** that answer questions 24/7 (see [How to create an AI chatbot](/blog/how-to-create-an-ai-chatbot/))
- **Multiple agents** on one number with a shared inbox
- **Integration** with CRM, booking, e-commerce and payment systems via webhooks (see [What is a webhook?](/blog/what-is-a-webhook/))
- **Analytics:** delivery, read and reply rates

Meta charges per message (pricing depends on message category and country), plus any provider fees.

### Example business automations
- **Clinic:** booking confirmation instantly, reminder 24 hours before, follow-up review request after the visit
- **E-commerce:** order confirmation, shipping update, abandoned-cart reminder (with opt-in)
- **Services:** quote follow-up after 2 days, invoice due reminder
- **Education:** class reminders and fee reminders

Tools like n8n, Make or Zapier can connect WhatsApp to your other systems without heavy coding (see [No-code vs low-code automation](/blog/no-code-vs-low-code-automation/)).

## Scheduling WhatsApp messages: best practices

- **Get consent** before messaging customers
- **Send at reasonable local times**
- **Personalise** with names and relevant details
- **Don't spam:** too many messages lead to blocks and number quality issues
- **Give an easy opt-out**
- **Test** scheduled automations before relying on them

## Other WhatsApp questions people ask

### How do I send a WhatsApp message without saving the number?
Open a browser and go to `https://wa.me/` followed by the full number in international format without "+" or spaces (e.g., wa.me/14155550123). It opens a chat without saving the contact. You can also start a chat with yourself, paste the number, tap it and choose "Chat with".

### How do I send a formal message on WhatsApp?
Greet the person by name, introduce yourself and your purpose in the first line, keep it short, use full sentences without slang or excessive emojis, and end with a clear next step and your name or company.

## Frequently asked questions

### Can you schedule a message on WhatsApp?
Not natively in the regular apps. You can schedule on iPhone with Shortcuts automations, on Android with scheduler apps, or as a business through the WhatsApp Business Platform (API).

### How do I schedule a WhatsApp message on iPhone?
Create a personal automation in the Shortcuts app with a Time of Day trigger and the "Send Message via WhatsApp" action, choosing the contact and text.

### Can WhatsApp Business schedule messages?
The WhatsApp Business app offers automatic greeting and away messages but not general scheduling. Scheduled and triggered messages require the WhatsApp Business Platform via Meta or a provider.

### Are WhatsApp scheduler apps safe?
Some are widely used, but they need accessibility permissions that give broad control of your phone. Use reputable apps and avoid bulk messaging that could get your number banned.

### Can I send automatic WhatsApp reminders to customers?
Yes, through the WhatsApp Business Platform using approved message templates and customer opt-in, typically connected to your booking, CRM or order system.

### Does WhatsApp have schedule send like Gmail?
No, not in the standard apps at the time of writing; use the workarounds above or a business integration.
