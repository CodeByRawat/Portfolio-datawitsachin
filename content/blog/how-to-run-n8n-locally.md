---
title: How to Run n8n Locally (Free): Install, Update, Pricing and FAQs (2026)
description: How to run n8n locally for free with Docker or npm, whether n8n has a free plan, how to update n8n, how to pronounce n8n, receiving webhooks locally, self-hosting on a server, and when to use n8n Cloud instead.
date: 2026-11-11
cluster: automation
order: 35
hire: an n8n workflow
---

<p class="lede">To run n8n locally for free, install <strong>Docker</strong> and run the official <code>n8nio/n8n</code> image with a data volume, then open <strong>http://localhost:5678</strong> in your browser. Alternatively, with Node.js installed, run <code>npx n8n</code>. The self-hosted <strong>Community Edition</strong> is free to use; n8n Cloud plans start at €20/month (billed annually) if you'd rather not manage hosting yourself.</p>

**n8n** (pronounced "n-eight-n", short for "nodemation", where the 8 stands for the eight letters between the first and last "n") is a workflow automation platform popular with technical teams because it can be self-hosted, has a strong AI agent node, supports custom code, and charges per workflow execution rather than per step. This guide covers everything you need to get it running locally, keep it updated, and decide between self-hosting and n8n Cloud.

## Does n8n have a free plan?

Yes and no:

- **Self-hosted Community Edition: free.** You can download and run n8n on your own computer or server without paying n8n. It's distributed under n8n's "fair-code" Sustainable Use License, which allows free use for your own internal business purposes and personal use, but restricts things like reselling n8n as a hosted service. Check the licence if you plan to embed or offer n8n to customers.
- **n8n Cloud: no permanent free plan.** n8n offers a free trial of its Starter or Pro cloud plans (no credit card required, with limited executions). At the time of writing, cloud pricing (billed annually) is roughly: **Starter €20/month** (2,500 workflow executions), **Pro €50/month** (10,000 executions), **Business €667/month** (40,000 executions, self-hosted, with SSO, Git version control and environments) and **Enterprise** (custom). Check n8n's pricing page for current figures.
- **What "free" really costs:** self-hosting is free in licence terms, but you pay for your server (if not running on your own machine) and your time to maintain, secure and back it up.

**Can we use n8n for free?** Yes: run the Community Edition locally or on your own server. Many individuals and small teams run it on a laptop for learning, or on a small cloud VM (often a few dollars a month) for always-on workflows.

## Option 1: Run n8n locally with Docker (recommended)

Docker is the most reliable way to run n8n because it packages everything n8n needs.

### Step 1: Install Docker
Install **Docker Desktop** (Mac, Windows) or Docker Engine (Linux) from docker.com.

### Step 2: Create a volume for your data
This keeps your workflows and credentials when the container restarts or updates:

```bash
docker volume create n8n_data
```

### Step 3: Start n8n

```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -e GENERIC_TIMEZONE="Asia/Kolkata" \
  -e TZ="Asia/Kolkata" \
  -e N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true \
  -v n8n_data:/home/node/.n8n \
  n8nio/n8n
```

Replace the timezone with yours (e.g., `America/New_York`, `Europe/London`). The timezone matters for scheduled workflows.

### Step 4: Open n8n
Go to **http://localhost:5678**, create your owner account, and start building.

### Using Docker Compose (better for ongoing use)
n8n's documentation now recommends Docker Compose for most self-hosted setups. A minimal `docker-compose.yml`:

```yaml
services:
  n8n:
    image: n8nio/n8n
    restart: unless-stopped
    ports:
      - "5678:5678"
    environment:
      - GENERIC_TIMEZONE=Asia/Kolkata
      - TZ=Asia/Kolkata
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
    volumes:
      - n8n_data:/home/node/.n8n

volumes:
  n8n_data:
```

Then run:

```bash
docker compose up -d
```

For production, n8n's docs provide fuller Compose examples with PostgreSQL, a reverse proxy and HTTPS.

## Option 2: Run n8n with npm / npx

If you have **Node.js** installed (use a current LTS version supported by n8n; check the docs for the exact range):

```bash
# try it instantly without installing
npx n8n

# or install globally
npm install n8n -g
n8n start
```

Then open http://localhost:5678. This is quick for experimenting, but Docker is easier to keep consistent and update.

## Option 3: Desktop and other options
- **n8n Cloud** (managed by n8n): nothing to install.
- **One-click hosting** on platforms such as Railway, Render, DigitalOcean, Hostinger and others that offer n8n templates.
- **A VPS** (DigitalOcean, Hetzner, AWS Lightsail, Oracle Cloud's free tier, etc.) running Docker Compose for an always-on self-hosted instance.

## How to receive webhooks when running n8n locally

A local n8n at `localhost` isn't reachable from the internet, so services like Stripe, Shopify or Typeform can't send webhooks to it. Options:

- **Use a tunnel** (e.g., ngrok, Cloudflare Tunnel) to expose your local instance with a public HTTPS URL, and set n8n's `WEBHOOK_URL` environment variable to that public URL so webhook nodes show the correct address.
- **Use polling triggers** (scheduled checks) for testing.
- **Deploy to a server** with a domain and HTTPS for anything you rely on.

(New to webhooks? Read [What is a webhook?](/blog/what-is-a-webhook/))

## How to update n8n

Updating regularly gets you new features, nodes and security fixes. **Back up first:** export important workflows and back up your `n8n_data` volume or database, and read the release notes for breaking changes.

### Docker (docker run)
```bash
docker pull n8nio/n8n          # get the latest image
docker ps -a                   # find your container
docker stop <container_id>
docker rm <container_id>
# start again with the same docker run command (and the same volume)
```

### Docker Compose
```bash
docker compose pull
docker compose down
docker compose up -d
```

### Docker Desktop
In the **Images** tab, pull the latest `n8nio/n8n` image, then recreate the container.

### npm
```bash
npm update -g n8n
```

### Pin a specific version
To control upgrades, use a version tag instead of `latest`, e.g. `n8nio/n8n:1.x.y` (replace with the version you want), and upgrade deliberately after testing.

### Updating on Oracle Cloud or another VPS (Community Edition)
The process is the same as any Docker host: SSH into the server, `cd` to the folder with your `docker-compose.yml`, then run `docker compose pull`, `docker compose down`, `docker compose up -d`. If you installed via a one-click template or a different method (e.g., npm with PM2), follow that method's update steps. And always back up first.

### n8n Cloud
Updates are managed for you; you can choose the version in your workspace settings on some plans.

## Common n8n "how to" questions

### How to add an OpenAI or Anthropic (Claude) API key to n8n
Open **Credentials → Add credential**, choose **OpenAI** or **Anthropic**, paste your API key from the provider's console, save, then select that credential in the chat model node attached to your AI Agent. Full walkthrough: [How to connect Claude to n8n](/blog/how-to-connect-claude-to-n8n/).

### How to paste JSON in n8n
You can paste copied workflow JSON directly onto the canvas (Ctrl/Cmd+V) to import nodes. To use JSON data, use a **Code** node, the **Edit Fields (Set)** node in JSON mode, or the JSON body option in the **HTTP Request** node.

### How to import or delete a workflow
Import via the workflow menu (**Import from file / Import from URL**) or by pasting JSON onto the canvas. Delete from the workflows list (or the workflow's menu), which archives or deletes depending on your version.

### How to connect Google Sheets or Instagram
Add the relevant node, create a credential (Google uses OAuth; Instagram uses Meta's Graph API via a Facebook/Meta app or the HTTP Request node), authorise, then choose the operation.

### Is n8n HIPAA compliant?
n8n itself isn't "HIPAA certified" (no software is). If you self-host n8n in an environment you control and configure it securely, you may be able to use it within a HIPAA-compliant setup, subject to your own controls and agreements with any cloud providers. For n8n Cloud, check with n8n directly about Business Associate Agreements before processing protected health information. (See [Automation in healthcare](/blog/automation-in-healthcare/).)

### Is n8n down?
For n8n Cloud, check n8n's status page. For self-hosted instances, "down" is your own server: check the container logs (`docker logs n8n`) and resource usage.

### How to cancel an n8n subscription
In n8n Cloud, go to your account/billing settings in the n8n dashboard to change or cancel your plan; contact n8n support if you need help.

### How to learn n8n
Start with n8n's official courses and templates library, build small workflows you actually need, then learn the AI Agent node, Code node and HTTP Request node. See [How to learn about AI](/blog/how-to-learn-ai/) for the broader learning path.

## Self-hosting vs n8n Cloud: which should you choose?

| | Self-hosted (Community) | n8n Cloud |
|---|---|---|
| **Licence cost** | Free | From ~€20/month |
| **Setup** | You install and configure | None |
| **Maintenance, updates, backups** | You | n8n |
| **Data control** | Full: data stays on your infrastructure | Hosted by n8n |
| **Scaling** | You manage (queue mode on paid plans) | Plan limits |
| **Best for** | Developers, data-sensitive work, high volume, learning | Teams who want convenience and support |

## Security tips for self-hosted n8n

- Put it behind **HTTPS** with a reverse proxy (Caddy, Nginx, Traefik) and a domain.
- Use **strong owner credentials** and enable two-factor authentication where available.
- Don't expose it publicly without need; restrict access by IP or VPN for admin.
- Keep it **updated**.
- **Back up** the database and encryption key; without the encryption key, saved credentials can't be decrypted.
- Use **PostgreSQL** rather than SQLite for production.
- Limit which credentials and systems workflows can access.

## Frequently asked questions

### How do I run n8n locally?
Install Docker, create a volume with `docker volume create n8n_data`, run the official `n8nio/n8n` image mapping port 5678 and the volume, then open http://localhost:5678. Alternatively, run `npx n8n` if you have Node.js installed.

### Does n8n have a free plan?
The self-hosted Community Edition is free to use under n8n's Sustainable Use License. n8n Cloud has no permanent free plan, but offers a free trial; paid cloud plans start at around €20 per month billed annually.

### How do you pronounce n8n?
"n-eight-n". The name is short for "nodemation", with the 8 representing the eight letters between the first and last "n".

### How do I update n8n?
Back up first. With Docker Compose run `docker compose pull`, `docker compose down` and `docker compose up -d`. With docker run, pull the new image, remove the old container and start it again with the same volume. With npm, run `npm update -g n8n`.

### Can I use n8n for free commercially?
You can use the self-hosted Community Edition for free for your own internal business processes. The Sustainable Use License restricts uses like offering n8n as a paid hosted service or reselling it, so check the licence for your situation.

### Is n8n better than Zapier?
n8n is better for technical users who want self-hosting, data control, custom code, advanced AI agents and lower costs at high volume. Zapier is easier for non-technical users and has a larger app library. See [No-code vs low-code automation](/blog/no-code-vs-low-code-automation/) for a full comparison.
