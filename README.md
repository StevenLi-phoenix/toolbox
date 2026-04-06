# 🧰 Toolbox — Free Online Developer Tools

A growing collection of single-file, browser-based developer productivity tools. Everything runs client-side — no servers, no accounts, no tracking. Selected tools can optionally call the **OpenAI API** for AI-powered features when you supply your own key.

🌐 **Live site:** [stevenli-phoenix.github.io/toolbox](https://stevenli-phoenix.github.io/toolbox)

---

## 🚀 Tools

| Tool | Description |
|------|-------------|
| [API Request Builder](apirequest.html) | Build HTTP requests visually, generate cURL / fetch / Python snippets |
| [JSON Formatter](json.html) | Format, validate, and minify JSON with syntax highlighting |
| [Text Summarizer](summarizer.html) | Extractive TF-IDF summary or **AI-powered** abstract summary |
| [PR Review Checklist](prreview.html) | Risk-scored PR review plan + **AI review insights** |
| [PR Description Generator](prdescription.html) | Structured PR markdown + **AI auto-fill** from plain text |
| [Commit Message Generator](commitmsg.html) | Conventional Commits builder + **AI commit generation** |
| [Regex Tester](regex.html) | Real-time regex testing with capture groups and presets |
| [Diff Viewer](diff.html) | Side-by-side text comparison |
| [Base64 Encoder/Decoder](base64.html) | Encode/decode text and files |
| [JWT Decoder](jwt.html) | Inspect JSON Web Token claims and expiration |
| [Hash Generator](hash.html) | SHA-256, MD5, SHA-512, and more |
| [Password Generator](password.html) | Strong random passwords with rules and strength meter |
| [QR Code Generator](qrcode.html) | Custom QR codes — download as PNG or SVG |
| [Color Palette Generator](colors.html) | Harmonious palettes with contrast checker |
| [Markdown Preview](markdown.html) | Live GFM markdown renderer |
| [CSS Gradient Generator](gradient.html) | Linear, radial, and conic gradients with instant CSS output |
| [Flexbox Playground](flexbox.html) | Interactive flexbox property explorer |
| [CSS Grid Generator](grid.html) | Visual grid layout builder |
| [IP Lookup](iplookup.html) | Geolocation for any IP address |
| [DNS Lookup](dnslookup.html) | DNS-over-HTTPS queries |
| [Cron Builder](cron.html) | Cron expression visual builder with next-run preview |
| [Unix Timestamp Converter](timestamp.html) | Convert between timestamps and human-readable dates |
| [Unit Converter](unitconvert.html) | Length, weight, temperature, area, volume, and more |
| [CSV Viewer](csvview.html) | View and filter CSV files in the browser |
| [JSON ↔ CSV](jsontocsv.html) | Convert between JSON arrays and CSV |
| …and [150+ more tools](index.html) | Browse all tools on the index page |

---

## 🤖 API Calling — OpenAI Integration

Several tools support **AI-enhanced features** powered by the [OpenAI API](https://platform.openai.com). These features are **entirely optional** — each tool still works fully without an API key, using its built-in client-side logic.

### Tools with AI support

| Tool | AI Feature |
|------|-----------|
| [Text Summarizer](summarizer.html) | Abstractive AI summary (replaces or complements TF-IDF) |
| [PR Review Checklist](prreview.html) | AI-generated risk analysis and review insights |
| [PR Description Generator](prdescription.html) | AI auto-fill of all PR description fields |
| [Commit Message Generator](commitmsg.html) | AI-generated Conventional Commit messages from plain text |

### How to set your API key

1. Open any tool that shows the **🔑 OpenAI API Key** panel.
2. Paste your key (starts with `sk-…`) into the input and click **Save**.
3. The key is stored **only in your browser's `localStorage`** — it is never sent anywhere except directly to `api.openai.com`.
4. Click **Clear** at any time to remove the stored key.

Your key is shared across all tools in the toolbox (same `localStorage` entry) so you only need to save it once.

### Required OpenAI access

- Model: **`gpt-4o-mini`** (default) or any `gpt-4o`-family model.
- Your key must have access to the **Chat Completions** endpoint (`/v1/chat/completions`).
- Get a key at [platform.openai.com/api-keys](https://platform.openai.com/api-keys).

> **Privacy:** When using AI features, the text you enter is sent to OpenAI for processing. The built-in (non-AI) mode of every tool remains 100% client-side.

---

## 🏗 Structure

All tools are **self-contained single HTML files** — no build step, no bundler. Open any `.html` file directly in a browser or serve the directory with any static file server.

```
toolbox/
├── index.html          # Tool directory / home page
├── api-config.js       # Shared OpenAI API key management + call helper
├── *.html              # Individual tools (200+)
├── toolbox/            # Nested productivity tools
│   └── *.html
├── IDENTITY.md         # Assistant identity and API guidance
└── README.md           # This file
```

### Shared API module (`api-config.js`)

Any tool can include the shared module and get a fully styled API key panel + a `callOpenAI()` helper:

```html
<script src="api-config.js"></script>
<script>
  // Render the key management panel inside any container element
  ToolboxAPI.renderApiPanel(document.getElementById('myContainer'));

  // Call OpenAI Chat Completions
  const reply = await ToolboxAPI.callOpenAI([
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user',   content: 'Summarize this text: ...' }
  ], { model: 'gpt-4o-mini', max_tokens: 512 });
</script>
```

---

## 🤝 Contributing

Each tool is a standalone HTML file — add a new one by creating `yourfeature.html` and linking it from `index.html`. Follow the dark-mode design language used by the existing tools.

---

## ☕ Support

If you find the tools useful, consider [buying me a coffee](https://buymeacoffee.com/stevenli.phoenix).

---

*Built by [Steven Li](https://github.com/StevenLi-phoenix). All tools are free and open-source.*
