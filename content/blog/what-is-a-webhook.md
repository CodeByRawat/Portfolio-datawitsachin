---
title: What Is a Webhook? How Webhooks Work, Examples and How to Use Them (2026)
description: A plain-English explanation of webhooks, covering what they are, how they work, webhook vs API, webhook endpoints, real examples (Stripe, Shopify, Slack, GitHub), security, testing and how to use webhooks in automation tools like n8n, Zapier and Make.
date: 2026-11-11
cluster: automation
order: 34
hire: a webhook integration
---

<p class="lede">A <strong>webhook</strong> is an automated message one application sends to another the moment something happens. When an event occurs (a payment succeeds, a form is submitted, an order is placed, code is pushed), the source app sends an HTTP request, usually a <code>POST</code> with JSON data, to a URL you've provided, called the <strong>webhook endpoint</strong>. Your system receives it and reacts instantly. Webhooks are often described as "reverse APIs" or "push notifications for apps".</p>

Webhooks are the invisible glue of modern software and automation. Every time Stripe tells your app a payment went through, Shopify notifies your warehouse of a new order, or a form submission instantly appears in your CRM, there's probably a webhook behind it. This guide explains webhooks in plain English, shows how they work with real examples, compares them to APIs and polling, covers security and testing, and shows how to use them in automation tools.

## Webhooks explained with an analogy

Imagine you're waiting for a parcel.

- **Polling (the old way):** you walk to the door every five minutes to check if it has arrived. Most trips are wasted, and when it does arrive, you might not notice for a while.
- **Webhook:** the courier rings your doorbell the moment they arrive. You do nothing until something actually happens, and you react immediately.

A webhook is the doorbell. The app where the event happens (the courier) "rings" a URL you provided (your doorbell) and delivers information about what happened (the parcel).

## How does a webhook work?

1. **You register a webhook.** In the source app (say, Stripe), you provide a URL (your endpoint, e.g., `https://yourapp.com/webhooks/stripe`) and choose which events you care about (e.g., `payment_intent.succeeded`).
2. **An event happens.** A customer pays.
3. **The source app sends an HTTP request** (almost always `POST`) to your URL, with a **payload** describing the event, usually in JSON.
4. **Your endpoint receives and verifies it,** checking it really came from Stripe (more on security below).
5. **Your endpoint responds quickly** with a success status code (e.g., `200 OK`) to confirm receipt.
6. **Your system acts on it:** marks the order paid, sends a receipt, grants access, updates the CRM.
7. **If delivery fails,** most providers **retry** several times over a period of hours or days.

### What a webhook payload looks like

```json
{
  "id": "evt_1Q8abc",
  "type": "payment_intent.succeeded",
  "created": 1794412800,
  "data": {
    "object": {
      "id": "pi_3Q8xyz",
      "amount": 4900,
      "currency": "usd",
      "customer": "cus_R2def",
      "status": "succeeded"
    }
  }
}
```

The payload tells you **what happened** (`type`), **when** (`created`), and the **details** (`data`). Each provider has its own format, documented in its webhook docs.

## What is a webhook endpoint?

A **webhook endpoint** is the URL on your server (or in your automation tool) that receives webhook requests. It must be:

- **Publicly reachable** over the internet (the sending app needs to reach it)
- **Secured with HTTPS**
- **Able to accept `POST` requests** and parse the payload
- **Fast to respond:** acknowledge quickly and do heavy processing afterwards
- **Verified:** check signatures so you only trust genuine requests

In no-code tools, the platform generates the endpoint URL for you. In custom apps, you create a route in your web framework.

## Webhook vs API: what's the difference?

An **API** (application programming interface) lets you *ask* another system for data or tell it to do something, whenever you choose. A **webhook** lets another system *tell you* when something happens.

| | API (request/response) | Webhook (event-driven) |
|---|---|---|
| **Who starts the conversation** | You (the client) | The source app |
| **When** | Whenever you request | When an event happens |
| **Direction** | You pull data | Data is pushed to you |
| **Real-time** | Only as often as you poll | Near-instant |
| **Efficiency** | Many requests may return nothing new | Only sends when there's something new |
| **Typical use** | Fetching data, creating or updating records | Notifications of events |

**They work together.** A common pattern: a webhook tells you "order 1234 was updated", then you call the API to fetch the full, current details of order 1234. Many developers prefer this because it ensures you always act on the latest data.

### Webhooks vs polling
**Polling** means calling an API repeatedly on a schedule ("any new orders?"). It's simple but wasteful and slower. Webhooks are more efficient and real-time, which is why most modern platforms offer them. Some automation tools still use polling for apps without webhooks (for example, checking every 1–15 minutes).

### Webhooks vs WebSockets
**WebSockets** keep a persistent, two-way connection open for continuous real-time communication (chat apps, live dashboards, multiplayer games). Webhooks are one-off HTTP requests per event between servers. Use webhooks for server-to-server event notifications; WebSockets for live, interactive connections with clients.

## Real-world webhook examples

| Platform | Example events | What you might do |
|---|---|---|
| **Stripe** | `payment_intent.succeeded`, `invoice.paid`, `customer.subscription.deleted` | Fulfil orders, grant access, update billing records, handle cancellations |
| **Shopify** | `orders/create`, `orders/paid`, `products/update` | Send orders to fulfilment, update inventory, sync to accounting or CRM |
| **GitHub** | `push`, `pull_request`, `issues` | Trigger CI/CD pipelines, notify Slack, run code review bots |
| **Slack** | Event subscriptions (messages, mentions, reactions) | Build bots and workflows that respond to messages |
| **Twilio / WhatsApp** | Incoming message, delivery status | Power chatbots and messaging workflows |
| **Calendly** | `invitee.created`, `invitee.canceled` | Create CRM records, send prep materials, notify sales |
| **Typeform / Tally / Jotform** | Form submitted | Create leads, start onboarding, notify teams |
| **HubSpot / Salesforce** | Contact or deal created/updated | Sync to other systems, trigger workflows |
| **Zoom** | Meeting ended, recording completed | Transcribe and summarise with AI, update CRM |
| **DocuSign** | Envelope completed | Move deal to closed-won, start onboarding |

## Using webhooks in automation (n8n, Zapier, Make)

Webhooks are one of the most powerful features in automation platforms because they let **any** app that can send a webhook trigger your workflows, even if there's no pre-built integration.

### n8n
Add a **Webhook** node as the trigger. n8n gives you a **test URL** (works while you're listening in the editor) and a **production URL** (works when the workflow is active). Choose the HTTP method, authentication and response mode. Paste the production URL into the sending app. (See [How to run n8n locally](/blog/how-to-run-n8n-locally/) and note that a local n8n needs a tunnel or public URL to receive external webhooks.)

### Zapier
Use **Webhooks by Zapier** with the **Catch Hook** trigger to get a unique URL. Send a test request so Zapier learns the payload structure, then map fields into later steps. (Webhooks by Zapier is available on paid plans.)

### Make
Add a **Custom webhook** module as the first module in a scenario, copy the generated URL, send a sample request so Make determines the data structure, then continue building.

### Example: AI-powered lead workflow triggered by a webhook
1. Website form sends a webhook to your automation tool.
2. AI step enriches and scores the lead, writing a short reason.
3. Create or update the contact in the CRM.
4. If high-fit, notify the right salesperson in Slack and send a booking link.

(More workflows in [How to automate tasks with AI](/blog/how-to-automate-tasks-with-ai/) and [How to automate your sales process](/blog/how-to-automate-your-sales-process/).)

### Sending webhooks (outgoing)
Automation tools can also *send* webhooks to other systems using an **HTTP Request** node/module (n8n, Make) or **Webhooks by Zapier → POST** action, which is useful for triggering other services or your own APIs.

## How to build a webhook endpoint (code example)

A minimal, secure-ish webhook receiver in Python with Flask, verifying an HMAC signature:

```python
import hmac, hashlib, os
from flask import Flask, request, abort

app = Flask(__name__)
SECRET = os.environ["WEBHOOK_SECRET"].encode()

@app.post("/webhooks/orders")
def orders_webhook():
    signature = request.headers.get("X-Signature", "")
    expected = hmac.new(SECRET, request.get_data(), hashlib.sha256).hexdigest()
    if not hmac.compare_digest(signature, expected):
        abort(401)                       # reject anything not signed by the sender

    event = request.get_json()
    # Queue the work instead of doing it here, so we can respond fast
    enqueue_job(event)                   # e.g. a task queue
    return "", 200
```

Real providers each have their own signature header and scheme (Stripe uses `Stripe-Signature` with a timestamp; GitHub uses `X-Hub-Signature-256`; Shopify uses `X-Shopify-Hmac-Sha256`). Use the provider's official SDK or documentation to verify signatures correctly.

## Webhook security best practices

1. **Always use HTTPS** for your endpoint.
2. **Verify signatures.** Most providers sign each request with a shared secret (HMAC). Reject requests with missing or invalid signatures.
3. **Check timestamps** to prevent replay attacks (reject old requests).
4. **Keep secrets secret.** Store webhook secrets in environment variables or a secrets manager, and rotate them if exposed.
5. **Don't trust the payload blindly.** For sensitive actions, fetch the latest data from the provider's API using the event ID.
6. **Use unguessable URLs** and, where supported, additional auth (headers, tokens), but don't rely on obscurity alone.
7. **Validate and sanitise input** before using it in databases or AI prompts. Treat webhook content as untrusted data.
8. **Limit what the endpoint can do.** It should trigger specific, expected actions, not arbitrary ones.
9. **Log requests** (without sensitive data) for troubleshooting and audit.

## Reliability best practices

- **Respond fast** (within a few seconds) with `2xx`; process work asynchronously via a queue.
- **Make processing idempotent:** providers may send the same event more than once (especially on retries). Store processed event IDs and skip duplicates.
- **Don't assume order:** events can arrive out of sequence; use timestamps or fetch current state from the API.
- **Handle retries and failures:** monitor for failed deliveries in the provider's dashboard; set up alerts.
- **Have a reconciliation job:** periodically compare your data with the source via API to catch anything missed.

## How to test webhooks

- **Request inspection tools:** services like webhook.site or RequestBin give you a temporary URL that shows every request received, which is useful for seeing payloads.
- **Provider test tools:** many platforms let you send test events (Stripe CLI's `stripe trigger`, GitHub's "Redeliver", Shopify's test notifications).
- **Tunnels for local development:** tools like ngrok or Cloudflare Tunnel expose your local server to the internet so external services can reach it.
- **Automation tool test modes:** n8n's test URL, Zapier's and Make's sample capture.
- **Send your own requests** with curl or Postman:

```bash
curl -X POST https://your-endpoint.example.com/webhooks/test \
  -H "Content-Type: application/json" \
  -d '{"event":"test","data":{"id":123}}'
```

## Common webhook problems (and fixes)

| Problem | Likely cause | Fix |
|---|---|---|
| Webhook never arrives | Wrong URL, endpoint not public, firewall, local URL | Check URL; use a tunnel for local dev; check provider delivery logs |
| 401/403 errors | Signature verification failing | Use the raw request body; correct secret; correct algorithm |
| Duplicate actions | Retries or duplicate events | Make processing idempotent using event IDs |
| Timeouts and repeated retries | Endpoint doing heavy work before responding | Respond immediately; process asynchronously |
| Works in test, not production | Using test URL or test-mode secret | Switch to production URL and live secrets; activate the workflow |
| Missing fields | Different event types or API versions | Check event type and API version settings |

## Frequently asked questions

### What is a webhook in simple terms?
A webhook is an automatic message that one app sends to another app's URL when something happens, like a payment, a new order or a form submission, so the receiving app can react immediately without constantly checking for updates.

### What are webhooks used for?
Webhooks are used to trigger actions in real time: fulfilling orders after payment, syncing data between apps, notifying teams in Slack, starting CI/CD pipelines, creating CRM leads from forms, powering chatbots and triggering automation workflows.

### What is a webhook endpoint?
A webhook endpoint is the URL that receives webhook requests. It must be publicly reachable over HTTPS, accept POST requests, verify that requests are genuine, respond quickly and process the event data.

### What is the difference between a webhook and an API?
With an API, your application requests data or actions from another system when it chooses. With a webhook, the other system automatically sends data to your application when an event happens. They are often used together.

### Are webhooks secure?
Webhooks can be secure if you use HTTPS, verify request signatures with a shared secret, check timestamps, keep secrets safe, validate payloads and limit what the endpoint can do.

### Do I need to code to use webhooks?
No. Automation tools like n8n, Zapier and Make let you receive and send webhooks without code. Coding is needed when you build your own webhook endpoints in custom applications.
