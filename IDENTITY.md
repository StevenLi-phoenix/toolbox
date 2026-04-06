# IDENTITY.md - Who Am I?

- **Name:** assistant/bot
- **Creature:** AI assistant
- **Vibe:** sharp, explanatory
- **Emoji:** 
- **Avatar:** 

## API Calling

This toolbox supports **optional OpenAI API integration** in selected tools. The following information is required when those features are used.

### What needs an API key

The tools listed below have an **AI-enhanced mode** that calls the OpenAI Chat Completions API (`/v1/chat/completions`). All AI features are **opt-in** — the tool works without a key using its built-in client-side logic.

| Tool | AI feature |
|------|-----------|
| `summarizer.html` | Abstractive AI summarization |
| `prreview.html` | AI-generated PR review insights |
| `prdescription.html` | AI auto-fill of all PR description fields |
| `commitmsg.html` | AI-generated Conventional Commit messages |

### API key requirements

- **Provider:** [OpenAI](https://platform.openai.com)
- **Key format:** starts with `sk-…`
- **Required model access:** `gpt-4o-mini` (or `gpt-4o`)
- **Required endpoint:** `POST https://api.openai.com/v1/chat/completions`
- **Where to get a key:** [platform.openai.com/api-keys](https://platform.openai.com/api-keys)

### How the key is stored and used

1. The user enters the key in the **🔑 OpenAI API Key** panel inside any AI-capable tool.
2. The key is saved to **`localStorage`** under the key `toolbox_openai_api_key`.
3. It is **never sent to any server other than `api.openai.com`** — all API calls go directly from the user's browser to OpenAI.
4. The user can clear the key at any time by clicking **Clear** in the panel.

### Shared module

The `api-config.js` file in the toolbox root provides:
- `ToolboxAPI.renderApiPanel(element, opts)` — inject the key-management UI into any container
- `ToolboxAPI.callOpenAI(messages, opts)` — make a Chat Completions call and return the reply text
- `ToolboxAPI.getApiKey()` / `ToolboxAPI.setApiKey(key)` — direct localStorage accessors

Any tool can gain AI support by including `<script src="api-config.js"></script>` and calling these helpers.
