/**
 * api-config.js — Shared OpenAI API key management and call helper for Toolbox tools.
 *
 * Usage in any HTML tool:
 *   <script src="api-config.js"></script>
 *   Then call:
 *     renderApiPanel(containerElement)  — injects the key-management UI
 *     callOpenAI(messages, options)     — returns a Promise<string> with the model reply
 */

(function (global) {
  const STORAGE_KEY = 'toolbox_openai_api_key';

  /** Retrieve the stored API key (or empty string). */
  function getApiKey() {
    try {
      return localStorage.getItem(STORAGE_KEY) || '';
    } catch {
      return '';
    }
  }

  /** Persist the API key to localStorage. */
  function setApiKey(key) {
    try {
      if (key) {
        localStorage.setItem(STORAGE_KEY, key.trim());
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch { /* storage blocked */ }
  }

  /**
   * Inject a reusable API-key panel into `container`.
   * @param {HTMLElement} container
   * @param {object} [opts]
   * @param {function} [opts.onChange]  called with the new key after save/clear
   */
  function renderApiPanel(container, opts = {}) {
    const saved = getApiKey();
    container.innerHTML = `
      <div class="api-panel" id="apiPanel">
        <div class="api-panel-header">
          <span class="api-panel-icon">🔑</span>
          <span class="api-panel-title">OpenAI API Key</span>
          <span class="api-panel-status" id="apiStatus">${saved ? '✅ Key saved' : '⚠️ No key'}</span>
        </div>
        <div class="api-panel-row">
          <input
            type="password"
            id="apiKeyInput"
            class="api-key-input"
            placeholder="sk-..."
            autocomplete="off"
            spellcheck="false"
          />
          <button type="button" id="apiSaveBtn" class="api-btn api-btn-save">Save</button>
          <button type="button" id="apiClearBtn" class="api-btn api-btn-clear">Clear</button>
        </div>
        <p class="api-panel-hint">
          Your key is stored only in your browser's localStorage and is never sent anywhere except directly to
          <a href="https://platform.openai.com" target="_blank" rel="noopener">api.openai.com</a>.
          Needs a key with access to <code>gpt-4o-mini</code> or other gpt-4o-family models.
        </p>
      </div>
      <style>
        .api-panel{padding:14px 16px;border-radius:16px;background:rgba(255,255,255,.04);border:1px solid rgba(115,183,255,.18);margin-bottom:18px}
        .api-panel-header{display:flex;align-items:center;gap:8px;margin-bottom:10px}
        .api-panel-icon{font-size:1.1rem}
        .api-panel-title{font-weight:700;font-size:.93rem;color:#dbe7ff}
        .api-panel-status{margin-left:auto;font-size:.8rem;color:#94a3b8}
        .api-panel-row{display:flex;gap:8px;margin-bottom:8px}
        .api-key-input{flex:1;min-width:0;border-radius:10px;border:1px solid rgba(148,163,184,.2);background:rgba(4,9,18,.96);color:#edf4ff;padding:9px 12px;font:inherit;font-size:.9rem;outline:none;transition:border-color .18s}
        .api-key-input:focus{border-color:rgba(115,183,255,.7);box-shadow:0 0 0 3px rgba(115,183,255,.1)}
        .api-btn{border-radius:10px;border:1px solid rgba(148,163,184,.2);background:#12203a;color:#edf4ff;padding:9px 14px;cursor:pointer;font:inherit;font-size:.88rem;font-weight:600;white-space:nowrap;transition:border-color .18s,background .18s}
        .api-btn:hover{border-color:rgba(115,183,255,.5)}
        .api-btn-save{background:rgba(115,183,255,.15);border-color:rgba(115,183,255,.35);color:#9dcfff}
        .api-btn-clear{color:#ff7f98;border-color:rgba(255,127,152,.25)}
        .api-panel-hint{margin:0;font-size:.78rem;color:#6b7e99;line-height:1.5}
        .api-panel-hint a{color:#73b7ff}
        .api-panel-hint code{background:rgba(255,255,255,.07);border-radius:4px;padding:1px 5px;font-size:.77rem}
      </style>
    `;

    // Set the saved key value safely via DOM property to avoid XSS
    container.querySelector('#apiKeyInput').value = saved;

    container.querySelector('#apiSaveBtn').addEventListener('click', () => {
      const key = container.querySelector('#apiKeyInput').value.trim();
      setApiKey(key);
      container.querySelector('#apiStatus').textContent = key ? '✅ Key saved' : '⚠️ No key';
      if (opts.onChange) opts.onChange(key);
    });

    container.querySelector('#apiClearBtn').addEventListener('click', () => {
      setApiKey('');
      container.querySelector('#apiKeyInput').value = '';
      container.querySelector('#apiStatus').textContent = '⚠️ No key';
      if (opts.onChange) opts.onChange('');
    });
  }

  /**
   * Call the OpenAI Chat Completions API.
   *
   * @param {Array<{role: string, content: string}>} messages
   * @param {object} [opts]
   * @param {string}  [opts.model]       default 'gpt-4o-mini'
   * @param {number}  [opts.max_tokens]  default 1024
   * @param {number}  [opts.temperature] default 0.7
   * @returns {Promise<string>}  the assistant reply text
   * @throws  {Error} if no key is set or the request fails
   */
  async function callOpenAI(messages, opts = {}) {
    const key = getApiKey();
    if (!key) {
      throw new Error('No OpenAI API key found. Please save your API key in the panel above.');
    }

    const payload = {
      model: opts.model || 'gpt-4o-mini',
      messages,
      max_tokens: opts.max_tokens || 1024,
      temperature: opts.temperature !== undefined ? opts.temperature : 0.7,
    };

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      let msg = `OpenAI API error ${res.status}`;
      try {
        const data = await res.json();
        if (data.error && data.error.message) msg += ': ' + data.error.message;
      } catch { /* ignore parse errors */ }
      throw new Error(msg);
    }

    const data = await res.json();
    return data.choices?.[0]?.message?.content?.trim() || '';
  }

  // Expose on window
  global.ToolboxAPI = { getApiKey, setApiKey, renderApiPanel, callOpenAI };
})(window);
