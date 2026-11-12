---
title: How to Connect Claude to n8n (and Add Your OpenAI API Key): Step-by-Step
description: Three ways to connect Claude to n8n. Use Claude as the model in n8n AI agents and workflows, call n8n workflows from Claude via MCP, or use the HTTP Request node. Plus how to add OpenAI and Anthropic API keys, example workflows and troubleshooting.
date: 2026-11-11
cluster: agents
order: 36
hire: an n8n + Claude workflow
---

<p class="lede">There are three ways to connect Claude and n8n: (1) <strong>use Claude inside n8n</strong> by adding an Anthropic credential with your API key and selecting the <strong>Anthropic Chat Model</strong> in an AI Agent or LLM node; (2) <strong>let Claude call your n8n workflows</strong> by exposing them through n8n's <strong>MCP Server Trigger</strong> and adding that server to Claude Desktop or another MCP client; or (3) call the Anthropic API directly with the <strong>HTTP Request</strong> node for full control. Adding an OpenAI key works the same way as option 1, using the OpenAI credential.</p>

n8n is one of the best platforms for building AI workflows and agents, and Claude is one of the strongest models for tool use, long documents and writing. This guide shows each connection method step by step, with example workflows, cost tips and troubleshooting. (New to n8n? Start with [How to run n8n locally](/blog/how-to-run-n8n-locally/).)

## Before you start

You'll need:
- A running n8n instance (self-hosted or n8n Cloud)
- An **Anthropic API key** from the Anthropic Console (console.anthropic.com) with billing set up. Note: a Claude.ai chat subscription (Pro/Max) is separate from API access; n8n needs an API key.
- For OpenAI: an API key from the OpenAI platform with billing enabled

**Keep keys secret:** store them only in n8n's credential manager, never in node parameters, Code nodes or shared workflow JSON.

## Method 1: Use Claude as the AI model inside n8n

This is what most people mean by "connecting Claude to n8n".

### Step 1: Add your Anthropic credential
1. In n8n, go to **Credentials → Add credential** (or create it from within a node).
2. Search for **Anthropic**.
3. Paste your API key and save. n8n tests the connection.

### Step 2: Build an AI Agent workflow
1. Add a trigger: **Chat Trigger** (for a chat interface), **Webhook**, **Gmail Trigger**, **Schedule**, etc.
2. Add an **AI Agent** node.
3. Under **Chat Model**, click **+** and choose **Anthropic Chat Model**.
4. Select your Anthropic credential and choose a Claude model. Use a larger model (Opus/Sonnet class) for complex reasoning and tool use; a smaller, faster one (Haiku class) for high-volume classification and extraction.
5. Write the agent's **system message** (its role, rules and output format).
6. Optionally add **Memory** (e.g., Window Buffer Memory) for multi-turn chat.
7. Add **Tools**: Google Sheets, Gmail, HTTP Request, a vector store for your documents, a Code tool, or other workflows (via the Call n8n Workflow tool).

### Step 3: Test and refine
Use the chat panel or execute the workflow with sample data. Open each execution to see which tools Claude called and why. Refine the system message and tool descriptions until it behaves reliably.

### Using Claude in simple (non-agent) steps
For straightforward tasks such as classification, summarisation or extraction, you don't need an agent. Use a **Basic LLM Chain** (or the Anthropic node's message action) with a clear prompt and, ideally, a **Structured Output Parser** so the result is clean JSON your next nodes can use.

## How to add an OpenAI API key to n8n

The process is identical:
1. **Credentials → Add credential → OpenAI**
2. Paste your API key (and organization ID if required), then save
3. In your AI Agent or LLM node, add the **OpenAI Chat Model** and select the credential

You can keep both credentials and switch models per node, which is useful for comparing quality and cost on your own data, or for using different models for different steps.

## Method 2: Let Claude run your n8n workflows (MCP)

The **Model Context Protocol (MCP)** is the open standard for connecting AI assistants to tools. n8n supports it in both directions:

- **MCP Server Trigger** node: exposes n8n tools/workflows *as an MCP server* that Claude (or other MCP clients) can call.
- **MCP Client Tool** node: lets an n8n AI Agent *use* tools from external MCP servers.

### Exposing an n8n workflow to Claude
1. Create a workflow with an **MCP Server Trigger** node.
2. Connect tool nodes to it, for example a tool that looks up a customer in your CRM, creates a task, or calls another workflow. Give each tool a clear name and description; that's what Claude reads to decide when to use it.
3. **Set authentication** (e.g., Bearer token). Without it, anyone with the URL could call your tools.
4. **Activate the workflow** and copy the **production URL**. (The test URL only works while you're listening in the editor.)
5. Add the server to your MCP client:
   - **Claude Desktop:** n8n's MCP Server Trigger uses an HTTP-based transport, so Claude Desktop connects via a small gateway such as `mcp-remote` configured in `claude_desktop_config.json` (on macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`), including your auth header. Restart Claude Desktop after editing.
   - **Claude Code, Claude.ai custom connectors and other clients** that support remote MCP servers can connect to the URL directly, depending on the client's features.
6. Ask Claude to do something that needs the tool ("Create a follow-up task for Acme Corp in our CRM") and approve the tool call.

n8n also offers an instance-level MCP server (in preview at the time of writing) that allows an assistant to discover and work with workflows across your instance. Review its permissions carefully before enabling it.

**Security tips for MCP:**
- Expose only the specific tools Claude needs, with narrow permissions.
- Separate read-only tools from tools that change data.
- Use authentication and long, random tokens; rotate them if leaked.
- Log tool calls and review them.

## Method 3: Call the Anthropic API with the HTTP Request node

For full control (newer API features, custom parameters), call the API directly:

- **Method:** `POST`
- **URL:** `https://api.anthropic.com/v1/messages`
- **Headers:**
  - `x-api-key`: your key (use n8n's credential system, e.g., a Header Auth credential)
  - `anthropic-version`: `2023-06-01`
  - `content-type`: `application/json`
- **Body (JSON):**

```json
{
  "model": "claude-sonnet-5-5",
  "max_tokens": 1024,
  "system": "You classify support emails. Reply with JSON only.",
  "messages": [
    { "role": "user", "content": "{{ $json.email_body }}" }
  ]
}
```

The response text is in `content[0].text`. Parse it with a Code or Edit Fields node.

## Example workflows

### 1. Email triage with Claude
Gmail Trigger → Basic LLM Chain (Claude Haiku-class model, structured output: category, urgency, summary, suggested reply) → Switch by category → create task / draft reply / notify Slack.

### 2. Document Q&A chatbot
Chat Trigger → AI Agent (Claude) with a vector store tool loaded with your PDFs and policies → answers with citations; escalates via a Slack tool when unsure. (See [How to create an AI chatbot](/blog/how-to-create-an-ai-chatbot/).)

### 3. Lead research agent
Webhook from your website form → AI Agent (Claude) with HTTP Request (company website), search tool and CRM tool → writes a research brief and fit score into the CRM → Slack alert for high-fit leads. (See [How to automate your sales process](/blog/how-to-automate-your-sales-process/).)

### 4. Claude Desktop as your ops assistant
MCP Server Trigger exposing tools: "find customer", "create invoice draft", "get today's orders". You ask Claude in plain English; it calls your n8n tools and reports back.

## Cost tips

- **Match the model to the task:** small models for classification and extraction; larger ones for complex reasoning.
- **Keep prompts and context lean:** pass only the fields Claude needs, not entire API responses.
- **Limit agent iterations** (max iterations setting) to avoid runaway loops.
- **Use prompt caching** for large, repeated system prompts or documents when calling the API directly.
- **Monitor usage** in the Anthropic Console and set spend limits.

## Troubleshooting

| Problem | Fix |
|---|---|
| "Invalid API key" / 401 | Check the key, that billing is active, and that you used an API key (not a Claude.ai login) |
| Model not found | Select a currently available model name from the dropdown or Anthropic's docs |
| Rate limit / 429 errors | Add retry with backoff (node settings), reduce concurrency, or request higher limits |
| Agent doesn't use the right tool | Improve tool names and descriptions; reduce the number of tools; clarify the system message |
| Output breaks the next node | Use a Structured Output Parser or ask for strict JSON and validate it |
| Claude Desktop can't see n8n tools | Use the production URL, activate the workflow, check auth headers and gateway config, restart Claude Desktop |
| Local n8n not reachable from outside | Use a tunnel or deploy to a server with HTTPS (see [What is a webhook?](/blog/what-is-a-webhook/)) |

## Frequently asked questions

### How do I connect Claude to n8n?
Create an Anthropic credential in n8n with your Anthropic API key, then add the Anthropic Chat Model to an AI Agent or LLM node and choose a Claude model. To let Claude call n8n workflows instead, expose them with the MCP Server Trigger node and add the server to Claude Desktop or another MCP client.

### How do I add an OpenAI API key to n8n?
Go to Credentials, add a new OpenAI credential, paste your API key from the OpenAI platform, save it, and select it in the OpenAI Chat Model attached to your AI Agent or LLM node.

### Can I use my Claude Pro subscription in n8n?
No. n8n uses the Anthropic API, which requires an API key and is billed separately from Claude.ai subscriptions such as Pro or Max.

### What is the n8n MCP Server Trigger?
It is an n8n node that turns a workflow into an MCP server, exposing connected tools to AI assistants like Claude so they can call your n8n automations through the Model Context Protocol.

### Which Claude model should I use in n8n?
Use a fast, low-cost model for high-volume tasks such as classification, extraction and routing, and a more capable model for complex agents, multi-step tool use and high-quality writing. Test on your own examples to compare quality and cost.

### Is it safe to give Claude access to my n8n tools?
It can be, if you expose only the tools needed, use authentication, separate read and write tools, require approval for sensitive actions, and log tool calls. Treat any content from emails or web pages as untrusted data.
