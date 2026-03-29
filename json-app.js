(() => {
  'use strict';

  // === DOM refs ===
  const $ = id => document.getElementById(id);
  const input = $('jsonInput');
  const output = $('jsonOutput');
  const treeView = $('treeView');
  const lineNums = $('inputLineNumbers');
  const statusBadge = $('statusBadge');
  const outputMeta = $('outputMeta');
  const toastEl = $('toast');

  const btnFormat = $('btnFormat');
  const btnMinify = $('btnMinify');
  const btnValidate = $('btnValidate');
  const btnTreeView = $('btnTreeView');
  const btnCopy = $('btnCopy');
  const btnDownload = $('btnDownload');
  const btnClear = $('btnClear');
  const themeToggle = $('themeToggle');

  let treeActive = false;
  let lastFormatted = '';

  // === Theme ===
  function initTheme() {
    const saved = localStorage.getItem('jsonf-theme');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }
  initTheme();

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('jsonf-theme', next);
  });

  // === Toast ===
  let toastTimer;
  function toast(msg) {
    clearTimeout(toastTimer);
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2200);
  }

  // === Line Numbers ===
  function updateLineNumbers() {
    const lines = input.value.split('\n').length;
    let html = '';
    for (let i = 1; i <= lines; i++) {
      html += `<span>${i}</span>`;
    }
    lineNums.innerHTML = html;
  }

  input.addEventListener('input', updateLineNumbers);
  input.addEventListener('scroll', () => {
    lineNums.scrollTop = input.scrollTop;
  });
  updateLineNumbers();

  // === Tab support ===
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = input.selectionStart;
      const end = input.selectionEnd;
      input.value = input.value.substring(0, start) + '  ' + input.value.substring(end);
      input.selectionStart = input.selectionEnd = start + 2;
      updateLineNumbers();
    }
  });

  // === Syntax Highlighting ===
  function highlightJSON(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(
        /("(?:\\.|[^"\\])*")\s*:/g,
        '<span class="syn-key">$1</span>:'
      )
      .replace(
        /:\s*("(?:\\.|[^"\\])*")/g,
        (m, val) => ': <span class="syn-string">' + val + '</span>'
      )
      .replace(
        /:\s*(-?\d+\.?\d*(?:[eE][+-]?\d+)?)/g,
        ': <span class="syn-number">$1</span>'
      )
      .replace(
        /:\s*(true|false)/g,
        ': <span class="syn-bool">$1</span>'
      )
      .replace(
        /:\s*(null)/g,
        ': <span class="syn-null">$1</span>'
      )
      .replace(
        // standalone values in arrays
        /(?<=[\[,]\s*)("(?:\\.|[^"\\])*")(?=\s*[,\]])/g,
        '<span class="syn-string">$1</span>'
      )
      .replace(
        /(?<=[\[,]\s*)(-?\d+\.?\d*(?:[eE][+-]?\d+)?)(?=\s*[,\]])/g,
        '<span class="syn-number">$1</span>'
      )
      .replace(
        /(?<=[\[,]\s*)(true|false)(?=\s*[,\]])/g,
        '<span class="syn-bool">$1</span>'
      )
      .replace(
        /(?<=[\[,]\s*)(null)(?=\s*[,\]])/g,
        '<span class="syn-null">$1</span>'
      );
  }

  // === Parse with detailed error ===
  function parseJSON(str) {
    try {
      const obj = JSON.parse(str);
      return { ok: true, value: obj };
    } catch (e) {
      const msg = e.message;
      let line = null, col = null;
      // Try to extract position
      const posMatch = msg.match(/position\s+(\d+)/i);
      if (posMatch) {
        const pos = parseInt(posMatch[1]);
        const before = str.substring(0, pos);
        line = (before.match(/\n/g) || []).length + 1;
        col = pos - before.lastIndexOf('\n');
      }
      const lineMatch = msg.match(/line\s+(\d+)/i);
      const colMatch = msg.match(/column\s+(\d+)/i);
      if (lineMatch) line = parseInt(lineMatch[1]);
      if (colMatch) col = parseInt(colMatch[1]);

      return { ok: false, error: msg, line, col };
    }
  }

  // === Show error context ===
  function showError(result) {
    const lines = input.value.split('\n');
    let html = `<div class="error-display">`;
    html += `<div class="error-line">❌ ${escapeHtml(result.error)}</div>`;
    if (result.line) {
      html += `<div class="error-context">`;
      const start = Math.max(0, result.line - 3);
      const end = Math.min(lines.length, result.line + 2);
      for (let i = start; i < end; i++) {
        const lineNum = i + 1;
        const cls = lineNum === result.line ? ' class="line-highlight"' : '';
        const prefix = lineNum === result.line ? '→ ' : '  ';
        html += `<span${cls}>${prefix}${String(lineNum).padStart(4)} │ ${escapeHtml(lines[i])}</span>\n`;
      }
      html += `</div>`;
    }
    html += `</div>`;
    output.innerHTML = html;
    treeView.classList.add('hidden');
    output.style.display = '';
    statusBadge.textContent = 'Invalid JSON';
    statusBadge.className = 'status-badge invalid';
    outputMeta.textContent = '';
  }

  function escapeHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // === Format ===
  function doFormat() {
    const raw = input.value.trim();
    if (!raw) { toast('Paste some JSON first'); return; }
    const result = parseJSON(raw);
    if (!result.ok) { showError(result); return; }
    const formatted = JSON.stringify(result.value, null, 2);
    lastFormatted = formatted;
    if (treeActive) {
      showTree(result.value);
    } else {
      output.innerHTML = '<code>' + highlightJSON(formatted) + '</code>';
      output.style.display = '';
      treeView.classList.add('hidden');
    }
    statusBadge.textContent = 'Valid JSON';
    statusBadge.className = 'status-badge valid';
    const size = new Blob([formatted]).size;
    outputMeta.textContent = `${formatBytes(size)} · ${formatted.split('\n').length} lines`;
    toast('Formatted!');
  }

  // === Minify ===
  function doMinify() {
    const raw = input.value.trim();
    if (!raw) { toast('Paste some JSON first'); return; }
    const result = parseJSON(raw);
    if (!result.ok) { showError(result); return; }
    const minified = JSON.stringify(result.value);
    lastFormatted = minified;
    output.innerHTML = '<code>' + highlightJSON(minified) + '</code>';
    output.style.display = '';
    treeView.classList.add('hidden');
    statusBadge.textContent = 'Valid JSON';
    statusBadge.className = 'status-badge valid';
    const size = new Blob([minified]).size;
    outputMeta.textContent = `${formatBytes(size)} · minified`;
    toast('Minified!');
  }

  // === Validate ===
  function doValidate() {
    const raw = input.value.trim();
    if (!raw) { toast('Paste some JSON first'); return; }
    const result = parseJSON(raw);
    if (result.ok) {
      statusBadge.textContent = 'Valid JSON';
      statusBadge.className = 'status-badge valid';
      toast('✓ Valid JSON');
    } else {
      showError(result);
      toast('✗ Invalid JSON');
    }
  }

  // === Tree View ===
  function showTree(obj) {
    treeView.innerHTML = buildTree(obj, '');
    treeView.classList.remove('hidden');
    output.style.display = 'none';
    // Bind toggles
    treeView.querySelectorAll('.tree-toggle').forEach(el => {
      el.addEventListener('click', () => {
        el.classList.toggle('open');
        const children = el.parentElement.querySelector('.tree-children');
        if (children) children.classList.toggle('collapsed');
      });
    });
  }

  function buildTree(obj, indent) {
    if (obj === null) return `<span class="tree-null">null</span>`;
    if (typeof obj === 'string') return `<span class="tree-string">"${escapeHtml(obj)}"</span>`;
    if (typeof obj === 'number') return `<span class="tree-number">${obj}</span>`;
    if (typeof obj === 'boolean') return `<span class="tree-bool">${obj}</span>`;

    const isArray = Array.isArray(obj);
    const entries = isArray ? obj.map((v, i) => [i, v]) : Object.entries(obj);
    const bracket = isArray ? ['[', ']'] : ['{', '}'];
    const count = entries.length;

    if (count === 0) {
      return `<span class="tree-bracket">${bracket[0]}${bracket[1]}</span>`;
    }

    let html = `<span class="tree-toggle open"><span class="tree-bracket">${bracket[0]}</span> <span class="tree-bracket" style="font-size:11px;opacity:.6">${count} item${count !== 1 ? 's' : ''}</span></span>`;
    html += `<div class="tree-children">`;
    for (const [key, val] of entries) {
      const isComplex = val !== null && typeof val === 'object';
      if (isComplex) {
        html += `<div class="tree-item"><span class="tree-key">${isArray ? key : '"' + escapeHtml(String(key)) + '"'}</span>: ${buildTree(val, indent + '  ')}</div>`;
      } else {
        html += `<div class="tree-leaf"><span class="tree-key">${isArray ? key : '"' + escapeHtml(String(key)) + '"'}</span>: ${buildTree(val, indent + '  ')}</div>`;
      }
    }
    html += `</div><span class="tree-bracket">${bracket[1]}</span>`;
    return html;
  }

  function toggleTreeView() {
    treeActive = !treeActive;
    btnTreeView.classList.toggle('active', treeActive);
    if (treeActive) {
      const raw = input.value.trim();
      if (!raw) return;
      const result = parseJSON(raw);
      if (result.ok) {
        showTree(result.value);
      }
    } else {
      treeView.classList.add('hidden');
      output.style.display = '';
    }
  }

  // === Copy ===
  function doCopy() {
    const text = lastFormatted || input.value.trim();
    if (!text) { toast('Nothing to copy'); return; }
    navigator.clipboard.writeText(text).then(
      () => toast('Copied to clipboard!'),
      () => toast('Failed to copy')
    );
  }

  // === Download ===
  function doDownload() {
    const text = lastFormatted || input.value.trim();
    if (!text) { toast('Nothing to download'); return; }
    const blob = new Blob([text], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'formatted.json';
    a.click();
    URL.revokeObjectURL(a.href);
    toast('Downloaded!');
  }

  // === Clear ===
  function doClear() {
    input.value = '';
    output.innerHTML = '<code>Formatted JSON will appear here...</code>';
    treeView.innerHTML = '';
    treeView.classList.add('hidden');
    output.style.display = '';
    statusBadge.textContent = '';
    statusBadge.className = 'status-badge';
    outputMeta.textContent = '';
    lastFormatted = '';
    updateLineNumbers();
    toast('Cleared');
  }

  // === Utility ===
  function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  }

  // === Event Listeners ===
  btnFormat.addEventListener('click', doFormat);
  btnMinify.addEventListener('click', doMinify);
  btnValidate.addEventListener('click', doValidate);
  btnTreeView.addEventListener('click', toggleTreeView);
  btnCopy.addEventListener('click', doCopy);
  btnDownload.addEventListener('click', doDownload);
  btnClear.addEventListener('click', doClear);

  // === Keyboard Shortcuts ===
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
      if (e.key === 'F' || e.key === 'f') {
        e.preventDefault();
        doFormat();
      } else if (e.key === 'M' || e.key === 'm') {
        e.preventDefault();
        doMinify();
      }
    }
  });

  // === Resize Handle ===
  const resizeHandle = $('resizeHandle');
  const panels = document.querySelector('.panels');
  const panelInput = document.querySelector('.panel-input');
  const panelOutput = document.querySelector('.panel-output');

  let isResizing = false;

  resizeHandle.addEventListener('mousedown', (e) => {
    isResizing = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    const rect = panels.getBoundingClientRect();
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      const pct = ((e.clientY - rect.top) / rect.height) * 100;
      const clamped = Math.min(Math.max(pct, 20), 80);
      panelInput.style.flex = `0 0 ${clamped}%`;
      panelOutput.style.flex = `0 0 ${100 - clamped}%`;
    } else {
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      const clamped = Math.min(Math.max(pct, 20), 80);
      panelInput.style.flex = `0 0 ${clamped}%`;
      panelOutput.style.flex = `0 0 ${100 - clamped}%`;
    }
  });

  document.addEventListener('mouseup', () => {
    if (isResizing) {
      isResizing = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }
  });

  // === Drag & Drop ===
  input.addEventListener('dragover', (e) => {
    e.preventDefault();
    input.style.borderColor = 'var(--accent)';
  });
  input.addEventListener('dragleave', () => {
    input.style.borderColor = '';
  });
  input.addEventListener('drop', (e) => {
    e.preventDefault();
    input.style.borderColor = '';
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        input.value = ev.target.result;
        updateLineNumbers();
        doFormat();
      };
      reader.readAsText(file);
    }
  });

  // === Auto-format on paste (if valid) ===
  input.addEventListener('paste', () => {
    setTimeout(() => {
      updateLineNumbers();
      const raw = input.value.trim();
      if (raw) {
        const result = parseJSON(raw);
        if (result.ok) {
          doFormat();
        }
      }
    }, 0);
  });

})();
