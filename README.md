![toolbox banner](./banner.png)

# 🧰 Free Dev Tools

**269 free, client-side developer tools.** No sign-up, no server, no data leaves your browser.

🌐 **[Open the Toolbox](https://stevenli-phoenix.github.io/toolbox/)** — search and browse all tools in one place.

---

## JSON & Data

| Tool | Description |
|------|-------------|
| [CSV Column Profiler](csvprofile.html) | Paste CSV or TSV and get a per-column data profile — inferred type (integer, float, boolean, ISO date, datetime, email, URL, UUID, IP, JSON, string), null and unique counts, min / max / mean, sample values, and a starter SQL `CREATE TABLE` for PostgreSQL, MySQL, or SQLite. |
| [CSV Column Reorder & Filter](csvreorder.html) | Drag-and-drop reorder columns in a CSV, hide unwanted columns, rename headers, and re-emit clean CSV — auto-detects delimiter, handles quoted fields and embedded newlines. |
| [JSON Formatter](json.html) | Format, validate, minify, and beautify JSON with syntax highlighting. |
| [JSON → Swift](json2swift.html) | Generate Swift Codable structs or classes with CodingKeys, Optionals, and nested types. |
| [JSON → Go Struct](json2go.html) | Convert JSON objects to Go structs with proper json tags. |
| [JSON → TypeScript](json2ts.html) | Convert JSON objects to TypeScript interfaces instantly. |
| [JSON ⇄ XML Converter](json2xml.html) | Convert between JSON and XML formats instantly. |
| [JSON Diff Viewer](jsondiff.html) | Compare two JSON objects side by side with structured diff. |
| [JSON Patch Builder](jsonpatch.html) | Generate RFC 6902 patch operations from JSON diff. |
| [JSONPath Evaluator](jsonpath.html) | Evaluate JSONPath expressions against JSON data in real-time. |
| [JSON Repair Studio](jsonrepair.html) | Repair malformed JSON — remove comments, fix quotes, strip trailing commas. |
| [JSON Schema Generator](jsonschema.html) | Generate JSON Schema from any JSON data instantly. |
| [JSON ⇄ CSV](jsontocsv.html) | Convert between JSON arrays and CSV format. |
| [NDJSON Viewer & Formatter](ndjson.html) | Parse, filter, and inspect JSON Lines / NDJSON data. |
| [YAML ⇄ JSON Converter](yaml.html) | Convert between YAML and JSON formats with syntax validation. |
| [TOML ⇄ JSON Converter](toml.html) | Convert between TOML and JSON formats for config files. |
| [CSV to SQL Converter](csv2sql.html) | Convert CSV data to SQL INSERT statements and CREATE TABLE queries. |
| [CSV Viewer & Editor](csvview.html) | View, sort, filter, and edit CSV data in a sortable table. |
| [SQL Formatter](sql.html) | Beautify, minify, and syntax-highlight SQL queries. |
| [CSV Pivot Table](csvpivot.html) | Pivot CSV data — pick row, column, value fields and an aggregation (sum, mean, count, median) to build a cross-tab. |
| [CSV Diff Viewer](csvdiff.html) | Compare two CSV files row-by-row by a chosen key column — added, removed, and changed rows with cell-level highlighting. |
| [Spreadsheet Column Converter](spreadsheetcol.html) | Convert Excel/Sheets column letters (A, AA, ZZ) ↔ numbers, and translate A1 ↔ R1C1 cell references in bulk. |
| [JSON Cleaner](jsonclean.html) | Recursively strip null, empty strings, empty arrays, empty objects, false, and zero values from JSON with stable re-cleaning. |
| [OPML Builder & Parser](opml.html) | Round-trip OPML feed lists ⇄ JSON, URLs, or Markdown for RSS reader exports, backups, and Feedly→FreshRSS migrations. |
| [YAML Diff Viewer](yamldiff.html) | Compare two YAML documents structurally — order-insensitive maps, list identity keys, and add/remove/change reporting for Kubernetes manifests and Helm values. |
| [JSON → .env Converter](json2env.html) | Flatten nested JSON into `KEY=value` for `.env` files, `docker --env-file`, Kubernetes Secrets, or shell `export`. Configurable separator, prefix, casing, quoting, and array handling. |
| [CSV → Markdown Table](csv2md.html) | Convert CSV / TSV to a GitHub-flavored Markdown table with auto column alignment by data type, pipe escaping, header detection, and `<br>` folding for multi-line cells. |
| [TypeScript → Zod Schema](ts2zod.html) | Convert TypeScript `interface` and `type` declarations into Zod schemas — handles unions, intersections, tuples, literal types, optional / readonly props, nested objects, and built-in generics like `Record`, `Partial`, `Array`. |
| [JSON5 ⇄ JSON Converter](json5.html) | Parse JSON5 — JSON with comments, trailing commas, unquoted keys, single quotes, hex literals, `NaN` / `Infinity`, and multi-line strings — and emit strict RFC 8259 JSON. Also pretty-prints strict JSON as ergonomic JSON5 with sort-keys and identifier-key options. |
| [JSON Schema → TypeScript](jsonschema2ts.html) | Convert a JSON Schema document (draft 4 through 2020-12, plus OpenAPI 3.x schemas) into TypeScript `interface` and `type` declarations — resolves `$ref`, local `definitions` / `$defs` / `components.schemas`, handles `oneOf` / `anyOf` / `allOf`, tuples via `prefixItems`, `enum`, `const`, `additionalProperties`, and `patternProperties`, and emits JSDoc from `title` / `description`. |

## CSS & Styling

| Tool | Description |
|------|-------------|
| [CSS Angle Converter](cssangle.html) | Convert between CSS's four angle units — `deg`, `rad`, `grad`, `turn` — with a draggable compass dial, live `rotate()` and `conic-gradient()` preview, toggle between the CSS clockwise-from-top convention and the `atan2` math convention, and a reference chart of common angles (0°, 45°, 90°, 180°, 360°). |
| [CSS clamp() Fluid Value Builder](clamp.html) | Give me a value at two viewport widths and I'll fit `clamp(min, preferred, max)` — slope in `vw`, intercept in `rem`, live curve plot, and a viewport-slider preview. Presets for fluid H1, body, gap, radius, and button padding. |
| [CSS :has() Selector Playground](cshas.html) | Type any `:has()` parent-selector expression and see exactly which elements in your HTML match — with live preview, ready-made recipes, generated CSS, and a Selectors 4 specificity breakdown. |
| [CSS :nth-child Tester](nthchild.html) | Type an `an+b` formula and watch matched children highlight in real time. Switch between `:nth-child`, `:nth-of-type`, `:nth-last-child`, and `:nth-last-of-type`; mix child types to see how *of-type* changes the count; try Selectors 4's `of S` filter syntax. |
| [CSS grid-template-areas Visual Builder](gridareas.html) | Paint named areas on a grid and get the matching `grid-template-areas` rule with rows aligned column-by-column, dot placeholders for empty cells, and automatic validation that every area is rectangular (anything else is illegal CSS). Live preview with Holy Grail / Dashboard / App Shell presets. |
| [CSS text-box-trim Playground](textboxtrim.html) | Compare `text-box-trim` and `text-box-edge` values side by side — see exactly how trimming the half-leading down to cap-height & baseline finally centers text inside a button. Live preview, edge cheat sheet, and a copy-ready `text-box` shorthand with an `@supports` fallback. |
| [CSS Border-Image Generator](borderimagegen.html) | Build the `border-image` shorthand with a live nine-slice preview — slice, width, outset, and per-axis repeat (stretch / repeat / round / space). Includes nine ready SVG patterns embedded as data URIs. |
| [CSS linear() Easing Generator](linearease.html) | Build a CSS `linear()` timing function for spring, bounce, elastic, or stepped animations — adjust physics (stiffness, damping, mass, velocity), preview the curve and animation live, and copy a Chrome 113+ ready value with `@supports` fallback. |
| [CSS ::marker Playground](cssmarker.html) | Style list bullets and numbers with the `::marker` pseudo-element — color, font-size, font-family, replace the bullet with a custom string, emoji, or a `counter()` expression like `'Step ' counter(list-item) '. '`. Pair with 25+ built-in `list-style-type` values (decimal-leading-zero, lower-roman, lower-greek, hiragana, hebrew, …) and copy ready CSS with the inheritable-only property guardrails baked in. |
| [CSS Box Shadow Generator](boxshadow.html) | Stack multiple `box-shadow` layers visually — offset, blur, spread, color, opacity, and `inset` per layer with live preview on light, dark, photo, and checker backgrounds. Material-tier (1dp / 3dp / 8dp / 16dp), neumorphism, glow, focus-ring, and long-shadow presets, then copy a clean rule. |
| [Tailwind Class Sorter](tailwindsort.html) | Reorder messy Tailwind utility classes into the canonical `prettier-plugin-tailwindcss` order — layout, spacing, typography, background, border, effects, then variants — with dedupe, character-count delta, and inline rewriting of every `class="…"` in an HTML / JSX snippet. |
| [CSS Multi-Column Layout Builder](csscolumns.html) | Build magazine-style multi-column layouts with live preview — pick `column-count` or `column-width`, set `column-gap`, `column-rule`, `column-fill`, toggle `column-span: all` headings, and lock items together with `break-inside: avoid`. Copy-ready CSS plus a news-layout recipe that never strands an orphan heading. |
| [CSS scrollbar-gutter Playground](scrollbargutter.html) | See exactly how `scrollbar-gutter: auto` vs `stable` vs `stable both-edges` changes layout at the moment the scrollbar appears — toggle content length to watch the shift (or not), pair with `scrollbar-width` & `overflow-y`, and copy the recipe that stops the page from jumping when a modal opens. |
| [CSS @supports Builder](csssupports.html) | Compose CSS feature queries clause by clause — combine property tests with `and` / `or` / `not`, test `selector(:has())`, `font-tech()`, `font-format()`, see live whether your browser passes each clause via `CSS.supports()`, and copy a clean rule with presets for `:has`, subgrid, anchor positioning, view transitions, `color-mix`, OKLCH, and more. |
| [CSS Spacing Scale Generator](spacingscale.html) | Generate a consistent spacing scale — linear, geometric, modular, Fibonacci, T-shirt, or 4-/8-pt grid — and export as custom-property tokens, Tailwind config, Sass map, JSON design tokens, or utility classes with a visual step preview. |
| [CSS hyphens & word-break Playground](hyphensbreak.html) | Compare `hyphens`, `word-break`, `overflow-wrap`, and `line-break` on the same text at the same column width — tune `hyphenate-character` & `hyphenate-limit-chars`, spot which combo actually breaks the unbreakable URL. |
| [Pixel ↔ REM / EM Converter](px2rem.html) | Convert CSS `px` to `rem`, `em`, `pt`, `%`, `vw`, `vh` with adjustable base font size — bulk rewrite CSS values, reference scale, and a live size preview. |
| [CSS text-wrap Playground](csstextwrap.html) | Compare `text-wrap: balance / pretty / stable / wrap / nowrap` side-by-side at the same width — live ragged-edge metrics, orphan detection, and copy-ready CSS for headings and prose. |
| [CSS text-emphasis Playground](textemphasis.html) | Design `text-emphasis` marks (dot, circle, sesame, triangle, double-circle, custom string) with color, position, and skip rules — live preview for horizontal and vertical (CJK) writing modes. |
| [CSS Sticky Footer Generator](stickyfooter.html) | Generate CSS for a footer that stays pinned to the viewport bottom when content is short and scrolls naturally when long — flexbox, CSS Grid, legacy negative-margin, and `dvh` variants with a live device-sized preview. |
| [CSS @counter-style Generator](csscounterstyle.html) | Build custom CSS list markers with the `@counter-style` at-rule — pick system (cyclic, numeric, alphabetic, symbolic, additive, fixed, extends), symbols, prefix/suffix, range, pad, and fallback with a live ordered-list preview. |
| [CSS Scroll-Driven Animations Builder](scrolldriven.html) | Generate CSS for `animation-timeline: scroll()` and `view()` — pick axis, scroller, view inset, and `animation-range` (cover, contain, entry, exit, *-crossing) with a live scrolling iframe preview. |
| [CSS Text Truncate & Line Clamp](csstruncate.html) | Generate CSS for single-line ellipsis, multi-line clamping (`line-clamp` + `-webkit-line-clamp` fallback), or soft fade-out endings with a live resizable preview. |
| [Color Delta E Calculator](deltae.html) | Measure perceptual color difference between two sRGB colors with **CIE76**, **CIE94**, and **CIEDE2000**. Includes L\*a\*b\* component breakdown and a just-noticeable-difference verdict. |
| [CSS View Transitions Generator](cssviewtransition.html) | Design same-document `view-transition-name` morphs with custom `::view-transition-old/new` keyframes — morph, slide, flip, zoom presets, reduced-motion fallback, and a live `startViewTransition()` sandbox. |
| [CSS field-sizing Generator](fieldsizing.html) | Build CSS rules that auto-size `textarea`, `input`, and `select` to their content with `field-sizing: content`. Live preview, `ch`/`lh` guardrails, and an `@supports` fallback. |
| [CSS light-dark() Playground](lightdark.html) | Build dual-theme CSS variables with the `light-dark()` function — one declaration, both themes, no `@media (prefers-color-scheme)`. Live light/dark/auto preview and copy-ready CSS. |
| [CSS @scope Builder](cssscope.html) | Generate `@scope` blocks with a scoping root and optional donut limit for component-scoped styles. Presets, live iframe preview, and copy-ready CSS. |
| [CSS image-set() Generator](imageset.html) | Build `image-set()` declarations for responsive backgrounds, masks, and cursors — DPI variants (`1x`, `2x`, `3x`) and optional AVIF/WebP/JPG format negotiation with `type()`. |
| [CSS @starting-style Generator](startingstyle.html) | Generate `@starting-style` rules with `transition-behavior: allow-discrete` to animate dialogs, popovers, and `display: none → block` entries. Live preview included. |
| [CSS Tooltip Generator](csstooltip.html) | Generate pure-CSS tooltips driven by `data-tooltip` — configurable position, arrow, padding, easing, colors. Live preview and zero-JS output. |
| [object-fit & object-position Playground](objectfit.html) | Interactive playground for `object-fit` (fill, contain, cover, none, scale-down) and `object-position` with a click-to-set 2D pad and live CSS output. |
| [CSS Gradient Generator](gradient.html) | Create beautiful linear, radial, and conic gradients with live preview. |
| [CSS Counter Generator](csscounter.html) | Build counter-reset / counter-increment / content rules with a live preview — roman, alpha, greek, and nested counters. |
| [CSS Box Shadow](shadow.html) | Design box shadows with multiple layers and inset support. |
| [Flexbox Playground](flexbox.html) | Interactive CSS flexbox playground with live properties. |
| [CSS Grid Generator](grid.html) | Build grid layouts visually with presets and CSS export. |
| [CSS Animation Generator](animate.html) | Build CSS keyframe animations visually. |
| [CSS Transform Playground](transform.html) | Visually build CSS transforms: translate, rotate, scale, skew. |
| [CSS Easing / Cubic Bezier](easing.html) | Interactive cubic-bezier easing function generator. |
| [CSS Border Radius](borderradius.html) | Visual border-radius generator with individual corner control. |
| [CSS Clip-Path Generator](clippath.html) | Visually create polygon, circle, ellipse, and inset clip-paths. |
| [CSS Text Shadow](textshadow.html) | Create CSS text-shadow effects with multiple layers. |
| [CSS Glassmorphism](glassmorphism.html) | Generate frosted glass CSS effects with live preview. |
| [CSS Neumorphism](neumorphism.html) | Generate soft UI / neumorphic CSS effects with live preview. |
| [CSS Filter Playground](cssfilter.html) | Visually adjust blur, brightness, contrast, grayscale, and more. |
| [CSS / JS Minifier](cssmini.html) | Minify or beautify CSS and JavaScript. |
| [CSS Specificity Calculator](specificity.html) | Calculate and compare CSS selector specificity scores. |
| [Color Palette Generator](colors.html) | Generate harmonious color palettes with contrast checker. |
| [Color Picker & Converter](colorpicker.html) | Pick colors and convert between HEX, RGB, HSL, CMYK. |
| [WCAG Contrast Checker](contrast.html) | Test color combinations for AA and AAA accessibility. |
| [Color Blindness Simulator](colorblind.html) | Preview how images appear to people with color blindness. |
| [SVG Pattern Generator](svgpattern.html) | Generate seamless, tileable SVG background patterns. |
| [SVG Wave Generator](wavegen.html) | Generate SVG wave dividers with customizable layers and colors. |
| [CSS Spring Animation Generator](cssspring.html) | Tune mass, stiffness, damping, and velocity to emit CSS @keyframes that mimic react-spring physics. |
| [CSS Subgrid Builder](csssubgrid.html) | Align nested grid rows or columns to the parent's tracks for card grids — live preview and clean exported CSS. |
| [CSS Logical Properties Converter](csslogical.html) | Convert physical CSS (margin-left, padding-top) to logical equivalents (margin-inline-start, padding-block-start) for RTL and vertical writing modes. |
| [CSS Mask Generator](cssmask.html) | Build mask-image declarations visually — gradient fades, vignettes, polka dots, and SVG shape masks with size, position, and mode controls. |
| [CSS color-mix() Builder](cssmix.html) | Mix two colors in oklch, lab, hsl, hwb, srgb and more — adjustable percentage and hue interpolation, side-by-side preview, copy-ready CSS. |
| [CSS Anchor Positioning Builder](cssanchor.html) | Build anchor-name, position-anchor, and position-area declarations for tooltips and popovers — drag-to-test stage, fallback flips, copy-ready CSS. |
| [CSS @property Generator](cssproperty.html) | Register typed CSS custom properties with syntax, inherits, and initial-value — see a transition animate because the property is registered. |
| [Print Stylesheet Generator](printcss.html) | Build a @media print stylesheet — hide nav, set @page size and margins, manage page breaks, expand link URLs — with a live preview iframe. |
| [CSS Text Stroke / Outline Generator](textstroke.html) | Visually design outlined text using -webkit-text-stroke or a cross-browser text-shadow ring — paint order, thickness, presets, and copy-ready CSS. |

## Images & Media

| Tool | Description |
|------|-------------|
| [SVG viewBox Editor](svgviewbox.html) | Paste any SVG and interactively tune its `viewBox` and `preserveAspectRatio` — auto-fit to the drawing's bounding box, zoom, pan, and toggle each of the nine align keywords (xMinYMax, xMidYMid, …) with `meet` or `slice` to see exactly which pixels the container keeps and which it letterboxes. |
| [Image Convolution Kernel Playground](imgkernel.html) | Apply 3×3, 5×5, or 7×7 convolution kernels (sharpen, blur, Sobel, Laplacian, Gaussian, emboss…) to an image. Edit any cell, tweak divisor/bias/edge mode, and see the result in real time. |
| [Image Histogram Viewer](imagehistogram.html) | Inspect any image's RGB and BT.709 luminance histograms with stats, clipping warnings, and linear/log/√ Y-scale. |
| [Image to Base64](img2base64.html) | Convert images to Base64 data URIs for embedding in HTML & CSS. |
| [Image to ASCII Art](img2ascii.html) | Convert any image to ASCII art. |
| [Image Compressor](imgcompress.html) | Compress JPEG, PNG, and WebP images in your browser. |
| [Image Format Converter](imgconvert.html) | Convert images between PNG, JPG, WebP, BMP, and GIF. |
| [Image Crop & Resize](imgcrop.html) | Crop, resize, and export images in your browser. |
| [Placeholder Image](placeholder.html) | Generate custom placeholder images with any size and text. |
| [Image Watermark Tool](watermark.html) | Add text watermarks to images with adjustable font and opacity. |
| [Favicon Generator](favicon.html) | Create favicons from text, emoji, or images. |
| [App Icon Generator](appicon.html) | Generate iOS, Android & web icons in all sizes. |
| [Pixel Art Editor](pixelart.html) | Draw pixel art in your browser. |
| [Image Dithering Tool](dither.html) | Apply retro dithering effects to images. |
| [OG Image Generator](ogimage.html) | Create Open Graph social media preview images. |
| [Image Color Palette Extractor](palette-extractor.html) | Extract dominant color palettes from any image. |
| [Barcode Generator](barcode.html) | Create Code 128, EAN-13, UPC-A, Code 39, and more. |
| [QR Code Generator](qrcode.html) | Generate QR codes instantly with custom colors and sizes. |
| [EXIF & Image Metadata Viewer](exifviewer.html) | View camera info, GPS location, and EXIF metadata. |
| [PNG Chunk Inspector](pngchunks.html) | Walk every PNG chunk (IHDR, IDAT, tEXt, iTXt, pHYs, sRGB) with CRC32 verification and decoded text metadata. |
| [Audio Waveform Visualizer](waveform.html) | View real-time waveform and frequency spectrum of audio files. |
| [Screen Recorder](screenrecord.html) | Record your screen or browser tab. |
| [Data URL Builder & Inspector](dataurl.html) | Create and decode data URLs for HTML and CSS. |
| [SVG Path Editor](svg.html) | Draw, edit, and export SVG paths visually. |
| [Code Screenshot Generator](codesnap.html) | Create beautiful code screenshots with syntax highlighting. |

## Text & Writing

| Tool | Description |
|------|-------------|
| [Damerau-Levenshtein Distance](damerau.html) | Edit distance that also counts adjacent transpositions — one operation for the classic *teh → the* typo instead of two. Colour-coded DP matrix with the optimal path, per-op traceback (match / substitute / insert / delete / transpose), Unicode-code-point mode, and case-insensitive toggle. |
| [Greek Letter Reference](greek.html) | All 24 Greek letters (uppercase, lowercase, plus the seven Unicode-encoded math-italic variants like ϐ, ϑ, ϖ, ϱ, ϵ, ϕ, ϰ, and final sigma ς) with their LaTeX command, HTML entity, Unicode codepoint, transliteration, and the physics / statistics / math contexts where you'll actually meet them. Click any value to copy. |
| [Scrabble & Word Score Calculator](scrabble.html) | Compute the score of any word in Scrabble (TWL/SOWPODS), Words With Friends, or Boggle. Tap tile multipliers (DL, TL, DW, TW) per letter, flag blank wildcards as zero-point tiles, and add the 50-point *bingo* bonus for laying down all seven rack tiles in one turn. |
| [Jaro-Winkler Similarity Calculator](jarowinkler.html) | Compute Jaro and Jaro-Winkler scores between two strings with adjustable prefix length and scaling factor — plus Jaro distance, Sørensen-Dice on bigrams, and normalized Levenshtein — with a character match map that highlights prefix, matched, and transposed letters. |
| [ICU MessageFormat Playground](icumessage.html) | Type an ICU MessageFormat string — `{count, plural, one {# item} other {# items}}`, `select`, `selectordinal`, currency, and date placeholders — set variables and watch the rendered output update side-by-side across English, Spanish, French, German, Polish, Arabic, Chinese, and more, powered by `Intl.PluralRules`. |
| [Number → Words Converter](numwords.html) | Spell numbers in English — cardinal, ordinal, currency (cheque format), US short-scale or UK long-scale. Handles negatives, decimals, fractions, percentages, and arbitrarily large integers via BigInt. |
| [Word Cloud Generator](wordcloud.html) | Build a word cloud from any text — adjustable stopwords, min length and frequency, rotation, color schemes, fonts, and a seeded spiral layout. Live frequency table on the side, export the cloud as SVG or PNG. |
| [Line Ending Converter](lineending.html) | Convert text between CRLF (Windows), LF (Unix / macOS), and CR (classic Mac) — visualize hidden newline bytes, detect mixed endings, strip trailing whitespace, and download with the right encoding. |
| [Slack mrkdwn Preview](slackpreview.html) | Render Slack-flavored *mrkdwn* exactly like a Slack thread — single-asterisk bold, underscore italics, tilde strikethrough, `<url\|label>` links, user / channel / subteam mentions, `:emoji:` shortcodes, and message-cap warnings. |
| [Emoji ZWJ Sequence Builder](emojizwj.html) | Combine emoji with the Zero-Width Joiner (`U+200D`) — family combos, professions, gendered and skin-tone modifiers, with codepoints, UTF-8 bytes, and JS / HTML escapes. |
| [GitHub Markdown Alert Builder](ghalert.html) | Build GitHub-style alerts — `[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`, `[!CAUTION]` — with a live preview that mirrors GitHub's rendering and a wrap-at-column formatter. |
| [Speed Reader (RSVP)](speedread.html) | Read text rapidly one word at a time at your chosen WPM, with adjustable focus letter, chunking, and pause-on-punctuation. |
| [Markdown Preview](markdown.html) | Write Markdown and see it rendered live. |
| [Markdown to PDF](md2pdf.html) | Convert Markdown to beautifully formatted PDFs instantly. |
| [Word Counter](wordcount.html) | Count words, characters, sentences, and reading time. |
| [Text Summarizer](summarizer.html) | Summarize long text with TF-IDF extraction. No API needed. |
| [Lorem Ipsum Generator](lorem.html) | Generate placeholder text by paragraphs, sentences, or words. |
| [Text Diff](diff.html) | Compare two texts with highlighted additions and deletions. |
| [Text Case Converter](caseconvert.html) | Convert text between UPPER, lower, camelCase, snake_case, and more. |
| [Text Frequency Analyzer](textfreq.html) | Analyze word frequency, character distribution, and n-grams. |
| [Speech to Text](speech2text.html) | Convert speech to text in real-time using your microphone. |
| [Text to Speech](tts.html) | Convert text to natural speech using your browser's TTS engine. |
| [Typing Speed Test](typingtest.html) | Measure your WPM and accuracy with real-time feedback. |
| [Markdown Slides](slides.html) | Turn Markdown into presentation slides instantly. |
| [Markdown Table Generator](mdtable.html) | Create and format Markdown tables visually. |
| [Markdown Badge Generator](badges.html) | Generate shields.io badges for your GitHub README. |
| [File Tree Generator](filetree.html) | Generate ASCII file tree diagrams for README files. |
| [ASCII Art Generator](asciiart.html) | Convert text to ASCII art banners. |
| [Morse Code Translator](morse.html) | Convert text to Morse code and back with audio playback. |
| [Markdown Reference Link Converter](mdreflinks.html) | Flip Markdown between inline `[text](url)` and reference-style `[text][1]` with deduplicated definitions, slug labels, and image support. |

## Encoding & Crypto

| Tool | Description |
|------|-------------|
| [Shamir's Secret Sharing](shamir.html) | Split a secret into `N` shares of which any `K` can rebuild it — one byte at a time over `GF(2⁸)` (the AES field). Text / hex / base64 secrets, share format `XX-HEX`, and a round-trip combiner that verifies Lagrange interpolation reconstructs the original. Uses `crypto.getRandomValues` for share randomness. |
| [Damm Check Digit Calculator](damm.html) | Compute and validate Damm check digits — a decimal checksum built on a weakly totally anti-symmetric 10×10 quasigroup. Catches every single-digit substitution and every adjacent-digit transposition (unlike Luhn), needs only one lookup table (unlike Verhoeff's three), and the check digit falls out as the interim value itself. Step-by-step trace, generator, and side-by-side comparison with Luhn and Verhoeff. |
| [Fletcher Checksum Calculator](fletcher.html) | Compute Fletcher-16, Fletcher-32, and Fletcher-64 with a live block-by-block accumulator trace, hex / text / ASCII input, tail-padding options, and side-by-side comparison against Adler-32, XOR sum, and the RFC 1071 IP checksum. Used by OSI CLNP, DECnet, TLS, and ZFS. |
| [BCD (Binary-Coded Decimal) Converter](bcd.html) | Convert decimal numbers to and from packed BCD (COBOL COMP-3), unpacked BCD, Excess-3, and Aiken 2-4-2-1 encodings — with per-digit nibble grid, hex-byte layout that highlights the sign nibble (`C`, `D`, `F`), and a reverse hex-bytes-to-decimal decoder that catches illegal `A`–`F` nibbles. |
| [Feistel Cipher Round Visualizer](feistel.html) | Watch a Feistel network encrypt block by block — split into L and R, apply `F(R,K)`, XOR into L, swap, repeat — then decrypt with the same circuit and reversed round keys. Configurable block size, rounds, F function, and key schedule; live round-trip check. |
| [Verhoeff Check Digit Calculator](verhoeff.html) | Compute and validate Verhoeff check digits — a decimal checksum that catches every single-digit error and every adjacent-transposition error, unlike Luhn. Full step-by-step trace against the dihedral-group `d`, `p`, and `inv` tables. Used by India's Aadhaar 12-digit ID. |
| [Chinese Remainder Theorem Solver](crt.html) | Solve simultaneous linear congruences `x ≡ aᵢ (mod mᵢ)` — handles the classic coprime case and Gauss's generalized non-coprime case, with full extended-Euclidean derivation and `BigInt` arithmetic that survives RSA-sized moduli. |
| [CRC Multi-Polynomial Calculator](crcmulti.html) | Compute 18 standard CRC checksums in one pass — CRC-8 (SMBus, MAXIM, ROHC, CDMA2000), CRC-16 (ARC, CCITT-FALSE, KERMIT, MODBUS, USB, XMODEM, GENIBUS, MCRF4XX), CRC-32 (IEEE 802.3, BZIP2, MPEG-2, POSIX, Castagnoli, JAMCRC). ASCII or hex input, full Rocksoft parameter display (poly, init, refIn/Out, xorOut). |
| [Bitcoin Address Validator](btcaddress.html) | Validate Bitcoin addresses across every format — Legacy `1…` (P2PKH), Script `3…` (P2SH), Native SegWit `bc1q…` (P2WPKH/P2WSH), and Taproot `bc1p…` (P2TR Bech32m). Decodes the version byte, witness program, HRP, checksum, and recognises testnet, regtest, signet, and Litecoin variants. |
| [MurmurHash3 Calculator](murmurhash.html) | Hash any string with Austin Appleby's MurmurHash3 — 32-bit and 128-bit (x86 and x64) variants, configurable seed, hex / decimal / base36 outputs, shard-bucket modulus, and reference vectors that match Python's `mmh3`, Guava, and Cassandra. |
| [Substitution Cipher Solver](subcipher.html) | Crack a monoalphabetic substitution cipher (cryptogram) by hand or let a hill-climbing solver guess the key from English letter and bigram frequencies. Interactive A→? mapping with lockable cells, live frequency table vs ETAOIN ranking, and one-click ROT13 / classic-cryptogram presets. |
| [WebAuthn / Passkey Decoder](webauthn.html) | Decode WebAuthn registration and authentication responses — `clientDataJSON`, CBOR `attestationObject`, `authenticatorData` flags, AAGUID lookup, credential ID, and the COSE-encoded public key (EC2/RSA/OKP). |
| [JWE Decoder & Inspector](jwe.html) | Inspect JSON Web Encryption tokens (RFC 7516) — split the five compact segments, decode the protected header, surface key-management (`alg`) and content-encryption (`enc`) algorithms, and validate IV/tag lengths. |
| [AWS Signature V4 Calculator](sigv4.html) | Compute every step of an AWS SigV4 signature — canonical request, string-to-sign, `kDate→kRegion→kService→kSigning` HMAC chain, and Authorization header or pre-signed URL. Includes AWS sample-vector presets. |
| [PASETO Token Decoder](paseto.html) | Decode PASETO v1–v4, public and local. Split version, purpose, payload, and footer; surface registered claims (`iss`, `exp`, `nbf`, `kid`) and the exact cryptographic primitives a verifier needs. |
| [HKDF Key Derivation](hkdf.html) | Run RFC 5869 HKDF Extract + Expand with SHA-1/256/384/512 and configurable salt, info, and output length. Includes the appendix-A test vectors. |
| [JWK Inspector & Thumbprint](jwk.html) | Parse JSON Web Keys / JWKS, classify public vs private material, and compute canonical RFC 7638 SHA-256 thumbprints for RSA, EC, OKP, oct keys. |
| [Base64 Encoder/Decoder](base64.html) | Encode text or files to Base64 and decode Base64 strings. |
| [URL Encoder/Decoder](urlencode.html) | Encode and decode URLs and query strings. |
| [Number Base Converter](baseconvert.html) | Convert between binary, octal, decimal, hexadecimal, and custom bases. |
| [HTML Entity Encoder](htmlentity.html) | Encode and decode HTML entities. |
| [String Escape / Unescape](strescape.html) | Escape strings for JS, Python, SQL, JSON, HTML, Shell, and more. |
| [Unicode Inspector](unicode.html) | Debug invisible characters and inspect Unicode code points. |
| [Emoji Picker & Unicode Lookup](emoji.html) | Search 500+ emojis and view Unicode code points. |
| [Hash Generator](hash.html) | Generate MD5, SHA-1, SHA-256, SHA-384 & SHA-512 hashes. |
| [Hash Identifier](hashidentify.html) | Identify likely hash algorithms (MD5, SHA family, bcrypt, Argon2, NTLM, sha512crypt, SSHA, JWT) by length, charset, and prefix markers. |
| [HMAC Signer & Encoder](hmac.html) | Generate HMAC signatures with SHA-1, SHA-256, SHA-384, or SHA-512. |
| [Text Encrypt / Decrypt](encrypt.html) | Encrypt and decrypt text using AES-256-GCM in your browser. |
| [JWT Decoder](jwt.html) | Decode and inspect JSON Web Tokens. |
| [SRI Hash Generator](sri.html) | Generate Subresource Integrity hashes for scripts and stylesheets. |
| [Password Generator](password.html) | Generate strong random passwords with custom rules. |
| [UUID & ID Generator](uuid.html) | Generate UUID v4, nanoid, ULID, and custom random strings. |
| [Hex File Viewer](hexview.html) | Inspect any file's binary contents as a hex dump. |
| [Bitwise Calculator](bitwise.html) | Visualize AND, OR, XOR, NOT, and shift operations interactively. |
| [Webhook Signature Verifier](webhooksignature.html) | Generate and verify HMAC webhook signatures. |

## HTTP & APIs

| Tool | Description |
|------|-------------|
| [DNS TTL Migration Planner](dnscutover.html) | Plan an A, CNAME, MX, or NS change as a three-step cutover — lower the TTL well ahead of time so old caches drain fast, flip the record at the appointed instant, then restore a healthy long TTL. Prints a wall-clock timeline in UTC or local time, the worst-case stale-answer window, and a copy-paste change-ticket runbook. |
| [Reverse DNS (PTR) Builder](revdns.html) | Turn any IPv4 or IPv6 address into its `in-addr.arpa` / `ip6.arpa` reversed lookup name, with zone origin picked from the CIDR prefix, a starter BIND `$ORIGIN` block, and the RFC 2317 classless-delegation form for /25–/31 sub-allocations. |
| [Content-Type Parser & Builder](contenttype.html) | Split a media-type into `type`, `subtype`, structured-syntax suffix (`+json`, `+xml`, `+cbor`, …), and parameters per RFC 7231 / 6838 — flag charset on JSON, missing multipart boundary, misplaced `q=`, and identify the registration tree (standards / vendor / personal / private). Compose new headers with a parameter builder and generate WebKit / hex / base64 multipart boundaries. |
| [RFC 7807 Problem+JSON Builder](problemjson.html) | Compose a spec-compliant `application/problem+json` error payload — the five standard members (`type`, `title`, `status`, `detail`, `instance`), the RFC 9457 `errors` array, and custom extension members — with a linter that flags missing fields, non-URI `type`, and bad JSON Pointers. Copy as JSON, full HTTP response, curl, fetch, or Spring `ProblemDetail`. |
| [W3C Trace Context Decoder](tracecontext.html) | Parse `traceparent` and `tracestate` headers from OpenTelemetry, Jaeger, Zipkin, and AWS X-Ray — see the version, 128-bit trace-id, 64-bit span-id, and the sampled flag, validate against the spec, or generate a fresh header to inject into a curl request. |
| [Sec-Fetch-* Header Decoder](secfetch.html) | Decode the Fetch Metadata request headers — `Sec-Fetch-Dest`, `Sec-Fetch-Mode`, `Sec-Fetch-Site`, `Sec-Fetch-User`, `Sec-Fetch-Storage-Access` — classify each request as same-origin / cross-site / nav / preflight / CSRF-shaped, and generate a Resource Isolation Policy middleware snippet (Express & Nginx) to block suspicious combinations. |
| [Resource Hints Builder](resourcehints.html) | Generate `<link rel="preload / prefetch / preconnect / dns-prefetch / modulepreload">` with the right `as`, `type`, `crossorigin`, `fetchpriority`, `imagesrcset`, and `media` — plus the equivalent HTTP `Link:` response header. |
| [cURL → PowerShell](curl2pwsh.html) | Convert a `curl` command to `Invoke-WebRequest` or `Invoke-RestMethod` — method, headers, JSON / form body, basic auth, cookies, and a `-SkipCertificateCheck` fallback for PowerShell 7 and Windows PowerShell 5.1. |
| [Trusted Types Policy Generator](trustedtypes.html) | Generate `require-trusted-types-for 'script'` and `trusted-types` CSP directives plus the `createHTML` / `createScript` / `createScriptURL` policy code — with default fallback, Report-Only rollout, and a violation listener. |
| [OAuth 2.0 Device Flow Builder](deviceflow.html) | Walk through the RFC 8628 Device Authorization grant — build the initial POST, render the `user_code` with a QR for `verification_uri_complete`, plan the polling loop with `slow_down`/`expired_token` handling, and copy curl/fetch snippets. |
| [URLPattern Tester](urlpattern.html) | Test the `URLPattern` web API against URLs — named groups (`:id`), wildcards, modifiers (`?`/`+`/`*`), and inline regex. Shows captured groups and copy-ready JavaScript. |
| [Multipart Body Inspector](multipart.html) | Parse a raw `multipart/form-data`, `multipart/related`, or `multipart/mixed` HTTP body — auto-detect boundary, list per-part headers, filename, content-type, and download binary parts. |
| [Cross-Origin Isolation Headers](crossorigin.html) | Build COOP, COEP, and CORP combinations and see exactly what each unlocks — `SharedArrayBuffer`, high-resolution timers, full isolation. Includes Nginx, Apache, and Worker snippets. |
| [HTTP Status Code Reference](httpstatus.html) | Interactive reference for all HTTP response codes. |
| [HTTP Header Analyzer](httpheaders.html) | Analyze security, caching & performance headers. |
| [CORS Header Builder](cors.html) | Build Access-Control headers and debug CORS policy. |
| [CSP Policy Builder](csp.html) | Generate Content-Security-Policy headers and meta tags. |
| [Cache-Control Header Builder](cachecontrol.html) | Build and test Cache-Control headers. |
| [Accept Header Builder](accept.html) | Build Accept headers and simulate content negotiation. |
| [Accept-Encoding Header Builder](acceptencoding.html) | Build Accept-Encoding headers and simulate compression negotiation. |
| [Accept-Language Header Builder](acceptlanguage.html) | Build Accept-Language headers and test locale negotiation. |
| [Alt-Svc Header Builder](altsvc.html) | Build Alt-Svc headers for HTTP/2 and HTTP/3 upgrade planning. |
| [Cookie Parser & Set-Cookie Builder](cookies.html) | Parse Cookie/Set-Cookie headers and inspect attributes. |
| [Content-Disposition Header Builder](contentdisposition.html) | Build Content-Disposition headers for downloads. |
| [ETag Generator & Conditional Request Tester](etag.html) | Generate strong/weak ETags and test conditional requests. |
| [Forwarded Header Builder](forwarded.html) | Build RFC 7239 Forwarded headers and inspect X-Forwarded-* chains. |
| [Idempotency Key Builder](idempotency.html) | Generate safe idempotency keys and plan retry windows. |
| [Link Header Builder](linkheader.html) | Generate HTTP Link headers and HTML resource hint tags. |
| [MIME Type Lookup](mime.html) | Look up MIME types by extension and generate Content-Type headers. |
| [API Pagination Simulator](pagination.html) | Build offset, page, and cursor pagination responses. |
| [Permissions-Policy Header Builder](permissionspolicy.html) | Configure browser feature access policies. |
| [Range Header Builder](rangeheader.html) | Build HTTP Range headers and test 206 partial content. |
| [Referrer-Policy Header Builder](referrerpolicy.html) | Build Referrer-Policy headers and preview referrer behavior. |
| [Server-Timing Header Builder](servertiming.html) | Build Server-Timing headers and plan performance budgets. |
| [Surrogate-Control Header Builder](surrogatecontrol.html) | Build Surrogate-Control headers for CDN cache planning. |
| [Vary Header Builder](vary.html) | Build a correct HTTP Vary header. |
| [cURL to fetch() Converter](curl2fetch.html) | Convert curl commands to JavaScript fetch() code. |
| [cURL Command Builder](curlbuilder.html) | Build HTTP requests visually and generate cURL, fetch, axios code. |
| [API Request Builder](apirequest.html) | Build HTTP requests visually with auth, headers, and JSON body. |
| [Mock API Response Builder](mockresponse.html) | Create realistic HTTP responses with status codes and JSON. |
| [Webhook Payload Builder](webhookbuilder.html) | Generate sample JSON, TypeScript, schema & cURL for webhooks. |
| [Redirect Rule Builder & Tester](redirects.html) | Build, validate, and test redirect rules. |
| [Rate Limit Backoff Planner](backoff.html) | Design exponential, linear, or fixed retry schedules. |
| [GraphQL Query Cost Calculator](graphqlcost.html) | Estimate query complexity, depth, and resolver call count — spot N+1 traps and size rate limits before clients hit them. |
| [WebRTC SDP Parser](sdpparser.html) | Inspect WebRTC SDP offers and answers — break out media sections, codecs, ICE candidates, DTLS fingerprints, and bandwidth limits. |
| [Query String Builder & Parser](querystring.html) | Edit URL query strings as key/value pairs. Switch between repeat, bracket, indexed, and comma array styles, with JS, Python, and curl snippets. |
| [gRPC Status Codes Reference](grpcstatus.html) | All 17 canonical gRPC codes with HTTP mapping, retry guidance, and ready-to-paste handler snippets in Go, Python, Node, and Java. |
| [PostgreSQL Connection String Parser](pgconnstr.html) | Parse and round-trip libpq `postgres://` URIs and keyword=value DSNs into structured fields — multi-host failover, percent-encoded Unix sockets, sslmode warnings (disable/require → MITM risk), and converters to JDBC, Npgsql, Node `pg`, `psql` CLI, `PG*` env vars, `~/.pgpass`, and Docker Compose. |
| [HTTP Retry Budget Calculator](retrybudget.html) | Bound retry amplification the Google-SRE / Envoy / gRPC way — cap retries at `budget × successful RPS` over a rolling window, with a minimum floor for low-volume clients. Simulates a partial outage side-by-side (naïve vs budgeted), shows the origin-load blowout you avoid, and prints copy-ready policy for Envoy, gRPC-Java, Istio + JS / Python client budgets. |

## Developer Tools

| Tool | Description |
|------|-------------|
| [Cuckoo Filter Visualizer](cuckoofilter.html) | Bloom-style approximate-membership filter with true *delete* support. Watch fingerprints slot into one of two candidate buckets (`i₁` and `i₁ ⊕ h(fp)`), see the kick chain cascade when both are full, and tune bucket count, slots-per-bucket, and fingerprint bits against the `2b / 2ᶠ` false-positive bound. |
| [Erlang C / M/M/c Queue Calculator](mmc.html) | Size call centres, thread pools, and connection pools with the Erlang C formula. Given arrival rate λ, mean service time, and *c* servers, get utilization, probability of any wait, average wait time, queue length, service level `P(wait ≤ t)`, and the minimum staffing to hit a wait-time SLA — with a per-`c` staffing sweep. |
| [Count-Min Sketch Visualizer](countminsketch.html) | Stream items into a `d × w` Count-Min counter grid, watch each row's independent hash light up its bucket, query point frequencies with the min-over-rows rule, and compare estimates against exact top-K to see the one-sided `εN` over-count bound in action. Tune `w` for `ε`, `d` for `δ`. |
| [Tarjan's Strongly Connected Components](tarjan.html) | Walk a directed graph in one DFS pass — every vertex gets a DFS `index` and a `lowlink` (the smallest index reachable via any tree or back edge). When `lowlink[v] == index[v]`, everything on the open-vertex stack down to `v` is one SCC. See the stack grow, back edges pull low-link down, and every component pop in reverse topological order. |
| [Ford-Fulkerson Max Flow Visualizer](maxflow.html) | Watch the Edmonds-Karp variant pick the shortest BFS augmenting path, push the bottleneck through, update the residual graph, and iterate until BFS can no longer reach the sink — then surface the s-t min-cut and confirm `Σ crossing-cap = max flow` (max-flow-min-cut theorem). Includes classic 6-node, bipartite matching, and parallel-pipe demos. |
| [Elasticsearch Query DSL Builder](esquery.html) | Compose Elasticsearch / OpenSearch `bool` queries by dropping `term`, `match`, `range`, `prefix`, `wildcard`, and `exists` clauses into `must` / `should` / `must_not` / `filter` buckets — every change re-renders runnable JSON, the equivalent Lucene / KQL fragment, and a copy-paste `curl`. |
| [PostgreSQL Interval Parser](pginterval.html) | Parse PostgreSQL `INTERVAL` expressions in any accepted form — verbose (`1 year 2 mons 3 days 04:05:06`), ISO 8601 (`P1Y2M3DT4H5M6S`), the `@ … ago` shorthand, plain `HH:MM:SS.fff`, or a bare seconds count — into months / days / microseconds, total pg-standard seconds, human summary, and re-emitted SQL literal. |
| [AMQP / RabbitMQ URI Parser & Builder](amqpuri.html) | Decode `amqp://` and `amqps://` connection strings into scheme, credentials, host, port, vhost (with the `%2F` default-vhost pitfall called out), and query params like `heartbeat`, `channel_max`, `connection_timeout`, `frame_max` — or build a URI from a form and copy it back. |
| [Kruskal's MST Visualizer](kruskal.html) | Watch Kruskal's greedy algorithm sort every edge by weight, then walk the list adding each one only if its endpoints belong to different union-find components. See DSU roots merge, cycle-rejecting edges get skipped, and the minimum spanning tree (or forest, if the graph is disconnected) emerge step by step. |
| [Floyd-Warshall All-Pairs Shortest Paths](floydwarshall.html) | Solve shortest paths between every pair of vertices in a single `O(|V|³)` triple loop — watch the distance matrix update per intermediate `k`, tolerate negative edges, detect negative cycles automatically when the diagonal drops below zero, and click any cell to reconstruct the path. |
| [UUIDv7 Generator & Inspector](uuidv7.html) | Generate and decode UUID v7 (RFC 9562) — the time-ordered, k-sortable identifier that packs a Unix millisecond timestamp into the leading 48 bits. Batch up to 1024 IDs, or paste any UUID to see its embedded timestamp, version, variant, and random bits colour-mapped. |
| [0/1 Knapsack DP Visualizer](knapsack.html) | Watch the O(nW) dynamic-programming table fill cell by cell for the 0/1 knapsack problem — green when taking an item beats skipping it, orange for the traceback path, blue for the optimal answer. Presets included; edit items and capacity live. |
| [Dijkstra's Shortest Path Visualizer](dijkstra.html) | Watch the greedy min-heap settle vertices in outward-wave order on any non-negative weighted graph. Every step shows the priority queue, per-edge relaxation, the shortest-path tree, and the final target path — with a negative-edge warning that steers you to Bellman-Ford when the assumption breaks. |
| [Suffix Array & LCP Builder](suffixarray.html) | Sort every suffix, build the LCP array in linear time via Kasai, and get instant substring search (binary-search range in SA), the longest repeated substring, distinct-substring count, and inverse-rank column — the same index behind `grep -r`, bioinformatics BWT, and full-text search engines. |
| [Aho-Corasick Multi-Pattern Matcher](ahocorasick.html) | Search every pattern from a dictionary in one text pass. Watch the trie get built, failure links wired via BFS (KMP generalized to a keyword tree), dictionary links surface shorter suffix matches, and the automaton stream through the text in `O(|patterns| + |text| + matches)` — the algorithm behind `fgrep`, keyword filters, and signature scanners. |
| [Rabin-Karp String Matching Visualizer](rabinkarp.html) | Step through the rolling-hash string search — polynomial hash slides window-by-window in `O(1)` per shift, and every hash-match runs a character verification with spurious-collision counts called out. Tune base, prime `q`, and watch the trace log. |
| [Longest Common Subsequence (LCS)](lcs.html) | Watch the classic `O(n·m)` DP table fill cell-by-cell for two strings, then backtrace to recover the LCS with ↖↑← arrows drawn on the grid. Enumerates alternate optimal solutions when ties in the `max` allow them — the same table that underlies `diff` and Needleman-Wunsch alignment. |
| [VIN Decoder & Validator](vindecoder.html) | Break down a 17-character Vehicle Identification Number — WMI (region + manufacturer), VDS, VIS, plant, and serial — plus the ISO 3779 position-9 check digit with full weighted-sum table. Decodes model year using the 30-year rollover rule (position 7 disambiguates pre-/post-2010). |
| [Kafka Partition & Throughput Sizer](kafkapartitions.html) | Turn a target throughput and retention window into a partition count, per-broker log footprint, and a starter `kafka-topics.sh` / Strimzi `KafkaTopic` config. Peak-vs-average burst, replication factor, compression ratio, on-disk overhead, single-partition write ceilings — all live, plus a warn box flagging >4k partitions/broker or a hot-partition risk. |
| [PostgreSQL Row Size Estimator](pgrowsize.html) | Add columns, tick nullability, and see the on-heap tuple size — 23-byte header, null bitmap, per-column MAXALIGN padding, TOAST-threshold check, rows-per-page at any `fillfactor`, and heap + PK-index footprint for a target row count. Presets for users, orders, jsonb events, pgvector 1536-dim tables, and PostGIS geometry. |
| [Prometheus Alert Rule Builder](promalert.html) | Pick a common SRE alert template (error rate, p95 latency, memory pressure, filesystem-fill prediction, crash-loop, CPU saturation, target-down, multi-window budget burn), tune `expr`, `for`, `keep_firing_for`, add routing labels and Alertmanager annotations, and copy a ready-to-paste `groups:` YAML block or a Kubernetes `PrometheusRule`. |
| [Bit Struct / Packed Field Decoder](bitstruct.html) | Slice a hex, binary, decimal, or octal value into named bit fields — pick MSB-first or LSB-first packing, mark fields as signed or unsigned, and see every field's dec / hex / bin plus a colour-coded bit map. Presets for IPv4, TCP flags, ARM PSR, x86 CPUID, and RGBA8888. |
| [Boyer-Moore String Matching Visualizer](boyermoore.html) | Step through the Boyer-Moore search — right-to-left pattern comparisons with two precomputed shift tables (bad character and good suffix). Watch each mismatch pick `max(bcShift, gsShift)` for jumps that push toward the sub-linear `O(n/m)` best case that makes `grep` fly. |
| [Hilbert Curve Visualizer](hilbert.html) | Draw the Hilbert space-filling curve at orders 1–8 and see how a 1-D distance `d` maps to a 2-D grid coordinate. Hover any cell to read `(x, y) ↔ d`, contrast the Morton / row-major indexes, and see why PostGIS, Bing quadkeys, and R-tree bulk-loaders sort along it for tight range-scan clustering. |
| [Splay Tree Visualizer](splaytree.html) | Insert, find, and delete keys in a live splay tree — every accessed node is splayed to the root by zig / zig-zig / zig-zag rotations. Watch the self-adjusting `O(log n)` amortized behaviour emerge with no stored balance metadata, and see the sequential-insert worst-case shape recover in one find. |
| [Union-Find (Disjoint Set) Visualizer](unionfind.html) | Build a disjoint-set forest live. Run makeSet, union, and find operations, watch union-by-rank flatten trees, see path compression collapse chains in a single find, and track the near-constant `O(α(n))` amortized cost. Toggle each optimization to compare tree shape. |
| [Bellman-Ford Shortest Path Visualizer](bellmanford.html) | Run Bellman-Ford on any weighted directed graph — negative edges welcome. Watch distance/predecessor tables tighten across \|V\|−1 relaxation passes, detect negative cycles on pass \|V\|, and trace the exact edges relaxed at each step. Includes currency-arbitrage and negative-cycle demos. |
| [k-means Clustering Visualizer](kmeans.html) | Interactive k-means: paint 2D points, pick k, seed centroids (Forgy / Random / k-means++), then step through the assign/update Lloyd loop. Watch WCSS drop, Voronoi cells recalculate, clusters converge — plus a live elbow curve over k = 1…8 to help pick k. |
| [Fenwick Tree (BIT) Visualizer](fenwick.html) | Build a Binary Indexed Tree from any array and watch prefix-sum queries, point updates, and range queries walk the tree in `O(log n)`. Every node highlights its exact `(i − lowbit(i), i]` range and traces the `i ± lowbit(i)` walk cell-by-cell. |
| [Z-Algorithm String Matching](zalgo.html) | Watch the Z-function get built one character at a time and see how the `[L, R]` mirror window copies already-computed radii to skip comparisons. Concatenate `pattern$text`, and any `Z[k]` equal to `|pattern|` is an exact-match hit — all in linear `O(n + m)` time. |
| [Manacher's Longest Palindrome](manacher.html) | Find every palindromic substring of a string in linear `O(n)` time using Manacher's algorithm. See the sentinel-interleaved transform, per-center radius array `p[i]`, and the sliding `[C, R]` mirror window feed the longest-palindrome result live. |
| [Numerical Integration Playground](numint.html) | Approximate `∫ₐᵇ f(x) dx` with Left / Right Riemann, Midpoint, Trapezoid, Simpson's 1/3, and Simpson's 3/8 side-by-side — with a live plot of the panels being summed and a log-log convergence chart showing each rule's empirical order (O(h), O(h²), O(h⁴)). |
| [Tower of Hanoi Visualizer](hanoi.html) | Watch the classical recursive solve unroll into the minimum `2ⁿ − 1` moves, or grab a disk yourself and race the optimal solver. Step, pause, rewind, and read the full `hanoi(n, src→tgt via aux)` recursion trace side-by-side. |
| [A* Pathfinding Visualizer](astar.html) | Race A*, Dijkstra, BFS, and Greedy Best-First on the same grid — paint walls and weighted terrain, pick a heuristic (Manhattan / Chebyshev / Euclidean / Octile), toggle 8-way movement, and compare cells expanded vs path cost across all four algorithms on the same map. |
| [Kaprekar's Routine Visualizer](kaprekar.html) | Sort a number's digits descending and ascending, subtract, repeat — and watch it fall into the Kaprekar constant 6174 for 4 digits or 495 for 3 digits in at most seven steps. Handles 3- to 8-digit inputs and flags cycles that longer widths get stuck in. |
| [KMP String Matching Visualizer](kmp.html) | Step through the Knuth-Morris-Pratt algorithm — first the failure function `lps[]` is built for the pattern, then the search runs against the text with every comparison, mismatch fallback, and match highlighted on a single strip in O(n + m) time. |
| [Runge-Kutta 4 ODE Solver](rk4.html) | Solve `dy/dx = f(x, y)` initial-value problems with classical RK4, then compare against Euler and Heun on the same plot. Inspect the four kᵢ slopes at every step, supply an optional exact solution, and see max &#124;error&#124; at a glance. |
| [Segment Tree Visualizer](segmenttree.html) | Build a segment tree over any integer array and pick an aggregate — sum, min, max, gcd, or xor. Run a range query and watch which internal nodes light up green (contribute) or blue (walked into); run a point update and watch the O(log n) yellow chain of re-aggregated ancestors climb back to the root. |
| [Skip List Visualizer](skiplist.html) | Insert, delete, and search keys in a live probabilistic skip list — coin flips promote towers, express-lane pointers grow, and the O(log n) search path zig-zags right-and-down from the header. Adjustable promotion probability p, tower height histogram vs the geometric expectation, and per-op hop counter. |
| [CPU Scheduling Simulator](cpusched.html) | Compare FCFS, SJF, SRTF, Round Robin, and priority (preemptive and non-preemptive) scheduling on the same process set. Edit arrival, burst, and priority per PID, pick a quantum for RR, and get a color-coded Gantt chart plus per-process start / finish / turnaround / waiting / response times and CPU utilization. |
| [Binary Heap Visualizer](heap.html) | Insert, extract-root, peek, or bulk-heapify a min or max binary heap and watch every sift-up and sift-down step both on the tree and on the backing array — with parent/child index arithmetic (`2i+1`, `2i+2`) called out at each swap. Includes a Floyd O(n) build-heap demo and a heap-sort playthrough. |
| [Ring Buffer Visualizer](ringbuf.html) | Push, pop, or peek on a fixed-capacity circular buffer and watch the head / tail indices wrap modulo capacity. Pick reject-on-full or overwrite-oldest policy, see the ring and linear array views update in lock-step, and read a canonical C implementation for reference. |
| [Smith Chart Visualizer](smithchart.html) | Plot complex impedances and admittances on an interactive Smith chart and read off VSWR, return loss, mismatch loss, and reflection coefficient. Pick any characteristic impedance Z₀ (50, 75, 100, 300, 377, or 600 Ω), enter values as `R + jX`, `|Γ|∠θ`, or `G + jB`, toggle constant-VSWR rings and the admittance overlay, and export an SVG. |
| [PID Controller Tuner](pidtuner.html) | Drag the Kp / Ki / Kd sliders and watch the closed-loop step response update in real time on a FOPDT, second-order, or integrator+delay plant. Snap to a classic tuning rule — Ziegler-Nichols, Cohen-Coon, AMIGO, IMC λ=τ, or Tyreus-Luyben — and read off rise time, settling time, overshoot, SSE, plus IAE / ITAE / ISE indices. Anti-windup and derivative-on-measurement built in. |
| [Bode Plot Generator](bodeplot.html) | Enter the numerator and denominator coefficients of `H(s) = N(s)/D(s)` (highest-power-first) and see the magnitude (dB) and phase (°) on a log-frequency axis. Extracts DC gain, −3 dB bandwidth, peak \|H\|, gain crossover ω_gc, phase crossover ω_pc, and the gain and phase stability margins, plus the full pole / zero list. Presets for LPF, HPF, lead, lag, notch, and Butterworth. |
| [Sankey Diagram Builder](sankey.html) | Type one flow per line as `Source [value] Target` and get a clean Sankey diagram with auto-laid columns, proportional node heights, and curved flow ribbons. Cycle detection, hover totals, configurable node width / column gap, and SVG / PNG export. |
| [Capacitor Code Calculator](capacitor.html) | Decode the 1-, 2-, 3-, and 4-digit numbers printed on ceramic and film capacitors (`104` → 100 nF), trailing tolerance letters (`J`, `K`, `M`), and EIA voltage-rating prefixes (`2A` = 100 V, `1H` = 50 V). Expand EIA-96 SMD markings (`10C`, `A2`) and reverse-build the marking for any capacitance, with a full tolerance and voltage reference and a visual disc-capacitor preview. |
| [Depth of Field & Hyperfocal Calculator](dofcalc.html) | For any focal length, aperture, and subject distance, find the hyperfocal distance, the near and far in-focus limits, and the total depth of field. Pick a sensor format (medium format, full frame, APS-C, Micro 4/3, 1″, 1/2.3″) and the circle of confusion is set for you, with a log-distance focus scale, front-vs-back split, and a diffraction-limit warning that catches you stopping down past usefully sharp. |
| [Box & Whisker Plot Generator](boxplot.html) | Paste raw numbers and get a proper Tukey box plot — Q1, median, Q3, IQR fences, mild and extreme outliers, mean diamond, optional 95% CI notch — for one series or several groups stacked side-by-side. Five-number summary, mean, stddev, and a scalable SVG you can screenshot. |
| [Beaufort Wind Scale Calculator](beaufort.html) | Convert wind speed between m/s, km/h, mph, knots, and ft/s; get the Beaufort force 0 – 12 with the WMO description, the matching sea state, and an animated breeze preview. Click any row of the scale table to jump to it, or drag the force slider to read off the equivalent speed. |
| [N-Queens Solver & Backtracking Visualizer](nqueens.html) | Watch the classic N-queens problem solve itself row by row — every column tried, every conflict flashed, every backtrack logged. Speed control, pause / resume, attack heat-map, instant all-solutions enumeration (92 for 8 × 8, 14 200 for 11 × 11, 73 712 for 12 × 12) with clickable thumbnails up to 16 × 16. |
| [Trie (Prefix Tree) Visualizer](trie.html) | Insert, delete, and prefix-search words in a live trie — watch autocomplete walk the matching branch, see how much memory shared prefixes save versus a flat word list, and inspect node / edge / depth / compression stats. Sample dictionary included, character labels on every edge. |
| [HyperLogLog Cardinality Estimator](hyperloglog.html) | Stream items into an interactive HLL sketch, watch the `2^p` register histogram fill in, and see the estimate converge on the true count — with LinearCounting low-range fix, α<sub>m</sub> bias correction, and an estimate-vs-truth trend chart. Pick precision `p` from 4 to 16 to trade σ ≈ 1.04 / √m error against sketch memory. |
| [AVL Tree Visualizer](avltree.html) | Insert, delete, and search keys in a live self-balancing AVL tree — every node shows its height and balance factor, imbalanced ancestors flash red, and the LL / LR / RL / RR rotation case fires with a labelled log entry. Worst-case ascending preset to see the height stay flat where a plain BST would degenerate to a linked list. |
| [Projectile Motion Calculator](projectile.html) | Compute the trajectory of a projectile from initial velocity, launch angle, height, and gravity — get range, max height (apogee), time of flight, impact velocity and angle, with an interactive SVG parabola and a 10-step time / position / velocity table. Gravity presets for Earth, Moon, Mars, Jupiter, the Sun, Venus, Mercury, and Pluto plus drag-free textbook physics. |
| [Wavelength ⇄ Frequency ⇄ Energy Converter](emspectrum.html) | Convert between wavelength λ, frequency ν, photon energy E (J / eV / keV / MeV / GeV / TeV), and wavenumber ν̃ across the whole electromagnetic spectrum — radio, microwave, IR, visible, UV, X-ray, gamma. Auto-identifies the band, shows approximate sRGB colour for visible light, and lists references (60 Hz mains, Wi-Fi 2.4G, CMB peak, Lyman α, HeNe, EUV litho, Cu Kα, 511 keV annihilation, 1 TeV gamma). |
| [DTMF Tone Generator](dtmf.html) | Play Dual-Tone Multi-Frequency touch-tone signals for digits `0-9`, `*`, `#`, and `A-D`. Tap a keypad key or dial a full sequence like a phone number — tune tone duration, pause length, and volume, see each key's row + column Hz pair light up. Web Audio API, no files needed. |
| [Voronoi Diagram Generator](voronoi.html) | Click to drop sites on a canvas and watch a Voronoi tessellation render in real time — each pixel colored by its nearest site. Switch between Euclidean (L²), Manhattan (L¹), Chebyshev (L∞), and Minkowski p=3 metrics, drag sites around, sprinkle random sets, and inspect the edge boundaries and per-site IDs. |
| [L-System Fractal Generator](lsystem.html) | Build Lindenmayer-system fractals from an axiom and production rules: Koch curve, Koch snowflake, Sierpinski triangle & arrowhead, dragon curve, Hilbert curve, Levy C, Gosper, plant, tree, and bush presets. Adjustable iterations (0–9), angle, step length, starting heading, stroke color or rainbow gradient. |
| [Convex Hull Visualizer](convexhull.html) | Click points to compute the convex hull using Andrew's monotone chain, Graham scan, or Jarvis march (gift wrapping). Side-by-side comparison of orientation-test counts, runtime, and hull size on the same input — plus uniform / disc / Gaussian random scatter presets and perimeter / area readouts. |
| [FFT Visualizer & Spectrum Analyzer](fftvisualizer.html) | Synthesize a signal (sum of sines, square, triangle, sawtooth, chirp, DTMF, white noise, DC offset) and watch the Fast Fourier Transform reveal its frequency content. Configurable sample rate, FFT size (64 – 8192), 5 window functions (Hann, Hamming, Blackman, Flat-top, Rectangular), dB / linear magnitude, dB-floor clipping, and parabolic-interpolated top-peak detection. Pure radix-2 Cooley–Tukey, no Web Audio dependency. |
| [Decibel (dB) Calculator](decibel.html) | Convert between decibels and linear ratios — 10·log for power, 20·log for voltage / SPL / current. Sum and subtract dB levels for combining noise sources (with the &lt;3 dB unreliable-correction warning from ISO&nbsp;1996), and round-trip `dBm`, `dBW`, `dBu`, `dBV`, `dBµV`, `dBFS` into voltages at 50 Ω / 75 Ω / 600 Ω. Includes a reference table of common SPL, audio, and RF signal levels. |
| [Julian Date Converter](juliandate.html) | Convert calendar date ⇄ Julian Date (JD), Modified JD, Reduced JD, Truncated JD, Dublin JD, J2000 days, ANSI Date, and Unix epoch — handles proleptic vs. historical Julian/Gregorian, with day-of-year, day-of-week, and JDN integer view. |
| [Trigonometry Calculator](trigcalc.html) | Evaluate sin/cos/tan, csc/sec/cot, asin/acos/atan, atan2(y, x), and the hyperbolic family for any angle. Live unit-circle diagram, degrees/radians toggle, exact-value table, and identity cheat sheet. |
| [Temperature Converter](tempconvert.html) | Convert across eight scales at once — Celsius, Fahrenheit, Kelvin, Rankine, Réaumur, Newton, Delisle, and Rømer — with reference-point presets (absolute zero → sun surface) and an absolute-zero violation warning. |
| [Syslog Message Parser & Builder](syslog.html) | Parse and build syslog messages in RFC&nbsp;5424 and RFC&nbsp;3164 (BSD) formats — split the PRI value into facility and severity, walk structured-data elements (`[SD-ID@PEN k="v"]`), and compose new lines field by field with NILVALUE handling and a live binary/hex view of the PRI. |
| [Music Chord Builder](chordbuilder.html) | Pick a root and quality (major, minor, dim, aug, sus, 7, m7, maj7, m7♭5, dim7, 9, 11, 13, add9, …) and read off the chord's notes, semitone intervals, MIDI numbers, Hz frequencies, every inversion, plus a piano visualization and Web Audio chord / arpeggio playback. |
| [Slippy Map Tile Calculator](maptile.html) | Convert WGS-84 lat/lon ↔ XYZ slippy-map tiles at any zoom — see the tile's NW/SE bounds, pixel offset within the tile, ground resolution in m/px, TMS-flipped Y, Bing quadkey, and copy-ready URL templates for OSM, CartoDB, Stamen, Esri, Bing, and Google Maps. |
| [Caddyfile Builder](caddyfile.html) | Compose a Caddy v2 `Caddyfile` by clicking instead of memorising directives — site blocks can mix `reverse_proxy`, `file_server`, redirects, custom headers, gzip / zstd encoding, basic auth, request logging, and TLS overrides. Automatic HTTPS is on by default for real hostnames. |
| [GitHub Actions Matrix Expander](ghmatrix.html) | Paste a `strategy.matrix` block and see every job the runner will spawn. Handles cartesian product, `include` entries that either extend an existing combination or append a brand-new job, and `exclude` filters — the same order and semantics the real GHA runner uses. |
| [PAC File Builder & Tester](pac.html) | Build a Proxy Auto-Config `FindProxyForURL` with a rule editor — match by host suffix, exact host, IP range, scheme, glob, or substring, then route to `DIRECT`, `PROXY`, `SOCKS5`, or `HTTPS`. Live single-URL and batch test runners use the same evaluation order browsers do. |
| [Topological Sort Visualizer](toposort.html) | Paste an edge list — `A -> B`, `A B`, or `A: B C` (Makefile-style) — and watch Kahn's algorithm produce a topological ordering step by step, with in-degree table, parallel-execution layers, cycle detection that pinpoints the offending nodes, and Graphviz `.dot` export. |
| [Intl.ListFormat Playground](intllistformat.html) | Turn an array of strings into a localized list — "A, B, and C", "A, B o C", "A・B・C" — with live `conjunction` / `disjunction` / `unit` and `long` / `short` / `narrow` options, a `formatToParts` breakdown, and a 21-locale side-by-side. |
| [TypeScript Utility Types Playground](tsutility.html) | Interactive reference for all 21 built-in TS utility types — `Partial`, `Pick`, `Omit`, `Record`, `ReturnType`, `Awaited`, `Uppercase` & friends. Pick a utility, paste your own type, and see the resolved shape plus a ready-to-paste snippet. |
| [GitLab CI YAML Generator](gitlabci.html) | Build a `.gitlab-ci.yml` from a checklist — stages, default image, caches, services, `workflow:rules`, Docker-in-Docker, `parallel:matrix`, JUnit artifacts, and per-job `rules`. Presets for Node CI, Docker build & push, and GitLab Pages. |
| [Iframe Sandbox Builder](iframesandbox.html) | Compose the `<iframe sandbox="…">` attribute token by token — each flag explained with its risk level, live preview in a real sandboxed iframe, and warnings for the `allow-scripts allow-same-origin` escape and other risky combos. |
| [HTML Heading Outline](headingoutline.html) | Parse an HTML document into its `h1`–`h6` tree and audit for skipped levels, multiple `h1`s, empty headings, and headings inside `aria-hidden` regions. Exports the outline as Markdown or plain text. |
| [Linear & Polynomial Regression](linreg.html) | Fit a straight line or polynomial (degree 2–10) to (x, y) data with OLS — R², adjusted R², residual SE, F-test, per-coefficient t-stats, and a scatter chart with the fitted curve and 95% confidence band. Built-in ln / log₁₀ / √ / 1/x transforms linearize exponential and power-law data. |
| [HTML &lt;dialog&gt; Builder](dialogbuilder.html) | Generate a native HTML `<dialog>` with the right opener — `showModal()` for blocking modals with focus trap and `::backdrop`, or `show()` for non-modal panels. Wire a `method="dialog"` form so the submit button auto-closes and returns `returnValue`, customize ESC and outside-click behavior with the new `closedby` attribute, and animate entry with `@starting-style`. Live preview plus copy-ready HTML, CSS, and JS. |
| [Set Similarity Calculator](setsimilarity.html) | Compute Jaccard, Sørensen–Dice, Overlap (Szymkiewicz–Simpson), Tversky T(α,β), and cosine similarity between two line-based sets — plus &#124;A&#124;, &#124;B&#124;, &#124;A∩B&#124;, &#124;A∪B&#124;, and the elements unique to each side. Toggle dedupe vs multiset mode, case-insensitive matching, and whitespace trimming. Useful for fuzzy duplicate detection, retrieval thresholds, and asymmetric tag-overlap scoring. |
| [VAT Number Validator](vatvalidator.html) | Validate the format and checksum of EU, UK, Swiss, and Norwegian VAT registration numbers — 30+ country prefixes with country-specific regex plus working checksums (MOD-11/10 for DE, MOD-97 for BE/NL, Luhn for IT/SE, the historical MOD-97 +55 branch for GB, and 20+ more). Single-input or paste-many batch mode with CSV export. |
| [Voltage Divider Calculator](voltagedivider.html) | Solve `V_out = V_in · R2 / (R1 + R2)`, pick the closest E12 / E24 / E48 / E96 resistor pair for a target output, and check how a load resistance sags the output — quiescent current, power, and Thévenin equivalent included. |
| [Video & Audio Bitrate Calculator](bitratecalc.html) | Lock any two of bitrate, file size, and duration to solve the third. Presets for YouTube 1080p / 4K, Twitch, Netflix HDR, Blu-ray, MP3, AAC, FLAC, plus a codec efficiency table (H.264 → H.265 → AV1) and transfer-time check on common upload pipes. |
| [Wavelength ↔ Frequency Converter](wavefreq.html) | Convert between Hz / kHz / MHz / GHz / THz and m / mm / µm / nm / Å for EM waves (uses *c*) or sound in air / water / steel — shows period, wavenumber, photon energy in eV, the spectrum band (radio → γ-ray), and a quarter-wave dipole length for RF antennas. |
| [Circuit Breaker Pattern Simulator](circuitbreaker.html) | Watch the **Closed → Open → Half-Open** state machine in action — tune failure threshold, recovery probes, and reset timeout, stream simulated requests, and copy production-ready config for Polly, Resilience4j, opossum, or gobreaker. |
| [Reservoir Sampling Visualizer](reservoir.html) | Watch **Algorithm R** (Vitter) and **Algorithm L** pick *k* uniformly random items from a stream of unknown length — step through every accept/reject decision, then run a Monte Carlo of 10,000 trials to verify the `k/n` inclusion guarantee with a per-position histogram and χ² goodness-of-fit. |
| [Consistent Hash Ring Visualizer](consistenthash.html) | Place nodes and keys onto a SHA-1 hash ring, tune **virtual nodes** per real node, and watch the load distribution flatten. Live churn simulator shows exactly which keys move when a node joins or leaves — used by Dynamo, Cassandra, Riak, and libketama. |
| [Vector & Lamport Clock Visualizer](vectorclock.html) | Build a distributed-systems time-space diagram — drop local events, send messages between processes, and watch Lamport scalars and vector clocks update by the textbook rules. Pick any two events to see whether they're causally ordered (*a → b*) or genuinely concurrent (*a ∥ b*). |
| [POSIX errno Reference](errno.html) | Searchable reference for 130+ POSIX / Linux / macOS / FreeBSD errno values — look up `EAGAIN`, `EACCES`, `EPIPE`, `ECONNRESET` by number, symbol, or message and see which platforms agree on the number and which don't. |
| [Core Web Vitals Score Calculator](webvitals.html) | Score `LCP`, `INP`, `CLS` (plus `FCP`, `TTFB`, legacy `FID`) against Google's official Good / Needs Improvement / Poor thresholds — see a pass/fail per metric, an overall verdict for the URL, and a focused optimization checklist for whichever metric is failing. |
| [Service Worker Cache Strategy Generator](serviceworker.html) | Generate a production-ready `sw.js` with per-route caching — cache-first, network-first, stale-while-revalidate, network-only, cache-only — plus precache list, version-bump cleanup, navigation preload, and an offline fallback page. Vanilla JS, zero dependencies, no Workbox. |
| [Display DPI / PPI Calculator](dpicalc.html) | Compute pixel density (PPI), dot pitch, physical size, and the minimum viewing distance at which the human eye stops resolving individual pixels — for any width × height × diagonal. Includes presets for popular phones, monitors, and TVs plus in-browser DPR / screen detection. |
| [IntersectionObserver Builder & Playground](intersectionobserver.html) | Compose an `IntersectionObserver` with custom `root`, `rootMargin`, and `threshold` list — scroll a live target through the viewport box, watch every `IntersectionObserverEntry` fire in real time with ratio + isIntersecting state, copy a ready-to-paste snippet with presets for lazy-load, infinite scroll sentinel, sticky-on-pin, and scrollspy patterns. |
| [Logfmt Parser & Formatter](logfmt.html) | Parse `key=value` log lines (Heroku, Go `slog`, Splunk) into a structured table — handles quoted values, `\"` / `\\` escapes, and repeated keys — then re-serialize edited pairs with correct quoting. Copy as JSON or TSV. |
| [MTU & Packet Overhead Calculator](mtu.html) | Stack tunnel headers (WireGuard, IPSec ESP, GRE, PPPoE, VXLAN, 6in4) on top of an Ethernet link and see the effective inner MTU, TCP MSS for v4/v6, UDP payload, and PMTUD blackhole warnings. |
| [DSCP / ToS / ECN Decoder](dscp.html) | Flip the 8 bits of the IP ToS / Traffic Class byte — DSCP code points (EF, AF, CS), ECN state (Not-ECT, ECT(0/1), CE), legacy IP precedence — with iptables / `tc` / `setsockopt` snippets for any value. |
| [HTML Popover API Builder](popover.html) | Build native HTML `popover`s — `auto / manual / hint` types, `popovertarget` triggers, anchor positioning, `::backdrop` styling, and `@starting-style` entry animation. Live preview, zero JS required for show/hide. |
| [Intl.NumberFormat Playground](intlnumberformat.html) | Test JavaScript's `Intl.NumberFormat` with live locale, style (decimal / currency / percent / unit), notation, sign, and rounding options — `formatToParts` breakdown and 15-locale side-by-side comparison. |
| [Intl.RelativeTimeFormat Playground](intlrelativetime.html) | Render "3 days ago" / "in 2 hours" across locales — auto-bucket a date diff into the right unit, compare `numeric: auto` vs `always`, and copy a ready-to-paste JS snippet. |
| [HTML &lt;details&gt; Accordion Builder](detailsbuilder.html) | Build accessible zero-JS disclosures and exclusive accordions with the `name=` attribute — chevron presets, `interpolate-size` animation, optional FAQPage JSON-LD schema, and copy-ready HTML + CSS. |
| [YouTube Embed Builder](youtubeembed.html) | Paste any YouTube URL and build a clean embed iframe — start/end time, autoplay, captions, loop, controls, related-off, and privacy mode (`youtube-nocookie.com`). Live preview, iframe / URL / oEmbed output. |
| [Stripe Test Card Numbers](stripetestcards.html) | Searchable reference of Stripe's test card numbers — successful charges, declines (`insufficient_funds`, `lost_card`, `stolen_card`, expired, CVC), 3D Secure / SCA challenge flows, AVS failures, and dispute triggers. Click to copy. |
| [Web Share API Tester](webshare.html) | Trigger `navigator.share()` with custom title, text, URL, and files. Probe `canShare()` per MIME type, inspect `AbortError`/`NotAllowedError`/`DataError`, and copy a ready-to-paste JS snippet. |
| [Browser Storage Quota Inspector](storagequota.html) | Inspect `navigator.storage.estimate()` plus a per-API breakdown of `localStorage`, `sessionStorage`, IndexedDB, Cache Storage, and cookies. Includes a stress-test writer and a persistent-storage toggle. |
| [Source Map Decoder](sourcemap.html) | Decode JavaScript source maps — parse VLQ `mappings`, browse embedded sources, and look up the original location for a generated `line:column` from a stack trace. |
| [Browser Fingerprint Inspector](fingerprint.html) | Probe the signals your browser exposes — UA, screen, canvas hash, WebGL renderer, audio stack, font list, timezone, client hints — and compute a stable SHA-256 fingerprint. Useful for privacy audits and bot-detection research. |
| [AbortSignal Playground](abortsignal.html) | Experiment with `AbortController`, `AbortSignal.timeout()`, and `AbortSignal.any()` — timeout, manual cancel, or race multiple signals against a live `fetch()` or sleep helper. |
| [Complex Number Calculator](complex.html) | Add, multiply, divide, power, and root complex numbers in rectangular or polar form. Modulus, argument, conjugate, exp, log, and Argand-plane plot. |
| [Vector Calculator](vectorcalc.html) | 2D/3D vector math — dot, cross, magnitude, normalize, angle, projection, and lerp with a live 2D preview. |
| [Quaternion ↔ Euler Converter](quaternion.html) | Convert between quaternions, Euler angles, axis-angle, and rotation matrices with a live 3D cube preview. |
| [Probability Distribution Visualizer](distribution.html) | Plot PMF/PDF/CDF for normal, binomial, Poisson, gamma, beta and more, with tail probabilities and quantiles. |
| [Regex Tester](regex.html) | Test regular expressions with real-time highlighting and capture groups. |
| [Unix Timestamp Converter](timestamp.html) | Convert between Unix timestamps and dates. |
| [Cron Builder](cron.html) | Build cron expressions visually with human-readable descriptions. |
| [Chmod Calculator](chmod.html) | Convert Unix file permissions between numeric and symbolic formats. |
| [.gitignore Generator](gitignore.html) | Generate .gitignore files for 50+ languages and frameworks. |
| [Git Command Builder](gitcmd.html) | Build complex git commands visually. |
| [GitHub Actions Workflow Generator](githubactions.html) | Generate GitHub Actions workflow YAML. |
| [Dockerfile Generator](dockerfile.html) | Generate production-ready Dockerfiles for any stack. |
| [Nginx Config Generator](nginx.html) | Generate Nginx configs for reverse proxy, static sites, and SSL. |
| [Semver Version Calculator](semver.html) | Compare, sort, and validate Semantic Versioning strings. |
| [Glob Pattern Tester](glob.html) | Test glob patterns against file paths in real-time. |
| [Subnet Calculator](subnet.html) | Calculate network address, broadcast, and host range. |
| [IP Address Lookup](iplookup.html) | Find your public IP, geolocation, ISP, and timezone. |
| [DNS Lookup](dnslookup.html) | Query A, AAAA, MX, CNAME, TXT, NS, SOA, SRV, and CAA records. |
| [User-Agent Parser](useragent.html) | Parse browser user-agent strings and detect browser/OS/device. |
| [Keyboard Event Tester](keyevent.html) | Test keyboard events: key, code, keyCode, and modifiers. |
| [Math Expression Evaluator](matheval.html) | Evaluate math expressions with variables and bitwise ops. |
| [Date Range Calculator](daterange.html) | Calculate days, weeks, months, and business days. |
| [Time Zone Converter](timezone.html) | Convert times between any time zones. |
| [Unit Converter](unitconvert.html) | Convert length, weight, temperature, area, volume, and more. |
| [Aspect Ratio Calculator](aspect.html) | Calculate and convert aspect ratios for images and screens. |
| [Bookmarklet Builder](bookmarklet.html) | Create bookmarklets from JavaScript. |
| [.env File Editor](envfile.html) | Parse, edit, compare, sort, and validate .env files. |
| [Log Analyzer](logviewer.html) | Paste logs, auto-detect formats, and filter by level. |
| [Live HTML/CSS/JS Editor](htmlpreview.html) | Write HTML, CSS, and JavaScript with live preview. |
| [HTML to JSX Converter](html2jsx.html) | Convert HTML to JSX for React components. |
| [Terminal Color Theme Preview](termcolors.html) | Design and preview terminal color themes. |
| [Font Pair Preview](fontpair.html) | Preview and compare Google Font pairings. |
| [PDF Merge & Split](pdftool.html) | Combine or split PDF files. All client-side. |
| [robots.txt Generator](robots.html) | Generate robots.txt files with user-agent rules. |
| [Robots.txt Tester](robotstest.html) | Test which URLs each user-agent can crawl using Google's longest-match rules with Allow/Disallow tie-breaking. |
| [XML Sitemap Generator](sitemap.html) | Generate valid XML sitemaps. |
| [Privacy Policy Generator](privacypolicy.html) | Generate a professional privacy policy in seconds. |
| [Fake Data Generator](mockdata.html) | Generate realistic fake data for testing. |
| [Invoice Generator](invoice.html) | Create professional invoices with PDF export. |
| [Chart Builder](chartbuilder.html) | Create bar, line, pie, and radar charts from CSV or JSON. |
| [Mermaid Diagram Editor](mermaid.html) | Create flowcharts, sequence diagrams, and Gantt charts. |
| [Meta Tag Generator](metatags.html) | Generate SEO meta tags, Open Graph & Twitter Cards. |
| [Uptime & SLA Calculator](sla.html) | Convert availability targets to downtime budgets. |
| [Ambient Noise Generator](noisegen.html) | Generate white noise, pink noise, rain, and ocean waves. |
| [Interactive Periodic Table](periodic.html) | Browse all 118 elements with atomic number, mass, electron configuration, and discovery year. |
| [FPS Frame Budget Calculator](fpsbudget.html) | Convert between target FPS and millisecond frame budget, slice into JS / style / paint / GPU phases, and live-measure real frame time. |
| [SQL Window Function Builder](sqlwindow.html) | Compose OVER (PARTITION BY ... ORDER BY ... ROWS BETWEEN ...) clauses for ROW_NUMBER, RANK, LAG, SUM and friends — generated SQL plus live result on sample data. |
| [Bash Parameter Expansion Tester](bashparam.html) | Test ${var:-default}, ${var/pat/repl}, ${var##*/}, ${#var} and every other bash parameter expansion form on your variables — built-in cheatsheet, no shell needed. |
| [Big O Complexity Comparator](bigo.html) | Compare O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ), O(n!) at any input size — operations and runtime budgets on a log–log chart. |
| [SMPTE Timecode Calculator](smpte.html) | Convert between SMPTE timecode `HH:MM:SS:FF` and frame counts at 23.976 / 24 / 25 / 29.97 DF + NDF / 30 / 50 / 59.94 / 60 fps — add or subtract timecodes, measure runtime between two points, and see wall-clock drift. |
| [EAN / UPC / GTIN Check Digit Calculator](ean13.html) | Generate or verify the check digit for EAN-13, EAN-8, UPC-A, UPC-E, and GTIN-14 barcodes — step-by-step mod-10 weighted sum, schematic bar preview, and bulk validation of mixed-format codes pasted one per line. |
| [Scientific & Engineering Notation Converter](scinotation.html) | Convert any number between standard decimal, scientific (1.23×10⁶), engineering (multiples of 3), SI prefix (k, M, μ, n, …), and E-notation — arbitrary precision via string arithmetic so values like `0.1 + 0.2` stay exact, with sig-fig control and bulk conversion. |
| [Sun Position & Solar Times](sunposition.html) | Compute the sun's altitude and azimuth for any latitude / longitude / instant, plus the day's sunrise, sunset, solar noon, golden &amp; blue hours, and civil / nautical / astronomical twilight — using NOAA's solar position algorithm, with refraction correction, a live south-facing sky dome, a coloured day-phase bar, and a full-day altitude arc. Handles polar latitudes (no-event days return "—"). |
| [Cron Jitter Randomizer](cronjitter.html) | Stagger N scheduled jobs across a jitter window using a deterministic hash of the job ID — every job keeps the same offset every fire, so retries hit the same slot and the aggregate load flattens instead of stampeding at `:00`. FNV-1a / djb2 / murmur3-32, bucket histogram, per-second peak, and copy-ready Python / Node / Go / bash snippets. |
| [API Key Rotation Planner](keyrotation.html) | Plan a zero-downtime rotation for JWT signing keys, webhook secrets, API tokens, DB credentials, or OAuth client secrets. Wall-clock timeline for issue → dual-accept deploy → cutover → verify soak → revoke, with rollback budget, per-fleet rollout math, dual-verify code snippet, Markdown runbook, and `.ics` calendar export. |

## AI & PM Tools

| Tool | Description |
|------|-------------|
| [Chi-Square Test Calculator](chisquare.html) | Run Pearson's χ² *goodness-of-fit* and *independence* tests without leaving the browser. Paste observed counts (with optional expected proportions) or an r×c contingency matrix, pick α, tick Yates' correction for 2×2, and get χ², df, p-value, critical value, Cramér's V / φ, plus a per-cell standardised-residual heat map to see which cells drive the statistic. |
| [Pareto Chart Builder](pareto.html) | Find the vital few — paste `category, count` rows and instantly get a sorted bar chart with an orange cumulative-percentage line, configurable 80% threshold, vital-few highlight, and SVG / PNG / TSV export. Built-in examples for bug causes, latency sources, support tickets, and defect types. |
| [SWOT & TOWS Analysis Builder](swot.html) | Lay out Strengths, Weaknesses, Opportunities, and Threats; drag to reorder; weight each item 1–5; and auto-derive the four TOWS strategy quadrants (SO grow, WO improve, ST defend, WT survive). Posture verdict (S−W vs O−T), Markdown / JSON / PNG export, auto-saves to local storage. |
| [RACI Matrix Builder](raci.html) | Build a RACI / RASCI responsibility matrix for tasks and stakeholders — assign Responsible, Accountable, Consulted, Informed (and optional Support), validate that every row has exactly one Accountable, flag overloaded owners, and export as Markdown, CSV, HTML, or JSON. |
| [ADR Generator](adr.html) | Write Architecture Decision Records in MADR, Nygard, or full template format — capture context, decision drivers, options with pros & cons, the chosen path, positive and negative consequences, and references. Live Markdown preview and `NNNN-slug.md` download. |
| [SaaS Metrics Calculator](saasmetrics.html) | Plug in customers, ARPU, gross margin, churn, expansion, and CAC — get the full unit-economics scorecard: MRR, ARR, NRR, customer LTV (simple & discounted), CAC payback, LTV:CAC ratio, quick ratio, and burn multiple with rule-of-thumb verdicts. |
| [Planning Poker](planningpoker.html) | Async story-point estimator for distributed teams — Fibonacci / modified-Fibonacci / T-shirt / power-of-two decks, hidden votes per voter, reveal-together flow, median & mode & spread, consensus verdict, and a locked-stories backlog with copy-ready Markdown summary. |
| [5 Whys Root Cause Analyzer](fivewhys.html) | Drill from the symptom of an incident, bug, or process failure to the underlying root cause — guided why chain, corrective-action list, common pitfalls, and copy-ready Markdown for your postmortem. |
| [Changelog Bullet Generator](changelog.html) | Turn commit notes into polished release notes. |
| [Commit Message Generator](commitmsg.html) | Build Conventional Commit messages from context. |
| [Issue Triage Assistant](issuetriage.html) | Turn a bug report into a crisp triage summary. |
| [Release Notes Generator](releasenotes.html) | Convert commits into clean changelogs. |
| [Release Note Diff Distiller](releasenotemaker.html) | Turn git diffs and PR summaries into release notes. |
| [Release Risk Radar](releaseradar.html) | Score release risk and generate a rollout checklist. |
| [PR Brief Generator](prbrief.html) | Generate a PR brief from feature notes and changed files. |
| [PR Description Generator](prdescription.html) | Generate polished PR descriptions with changes and risks. |
| [PR Review Checklist Generator](prreview.html) | Generate a focused PR review checklist. |
| [PR Review Time Estimator](prreviewtime.html) | Estimate PR review time from diff size and complexity. |
| [PR Scope Splitter](prscope.html) | Split a large feature into shippable PR slices. |
| [Diff Risk Radar](diffrisk.html) | Scan code diffs for risky changes and flag hotspots. |
| [Dev Handoff Pack Generator](handoff.html) | Generate a developer handoff pack from feature notes. |
| [OpenAPI Change Radar](openapiradar.html) | Compare two OpenAPI specs for breaking changes. |
| [README Generator](readme.html) | Generate professional README.md files for GitHub projects. |
| [Feature Flag Rollout Planner](rollout.html) | Plan safer feature launches with staged rollouts. |
| [Sprint Capacity Planner](sprintcapacity.html) | Estimate capacity, velocity, and task fit for your sprint. |
| [Sprint Retro Generator](sprintretro.html) | Turn raw retro notes into action items and themes. |
| [Priority Matrix](prioritymatrix.html) | Sort tasks by impact, effort, urgency, and risk. |
| [Cohort Retention Calculator](cohort.html) | Build a retention matrix from raw user activity — paste user_id,date pairs and see weekly or monthly retention curves with weighted averages. |
| [LLM API Cost Calculator](llmcost.html) | Compare per-call and monthly cost across Claude, GPT, Gemini, Llama and others — editable prices, prompt-cache savings, and side-by-side ranking. |

## Productivity

| Tool | Description |
|------|-------------|
| [Coupon Code Generator](couponcode.html) | Generate a batch of unique coupon, voucher, gift-card, invite, or licence codes with a customisable alphabet (no-confusables, Crockford base32, hex, URL-safe…), chunk pattern like `XXXX-XXXX-XXXX`, optional prefix/suffix, Luhn or mod-N check digit, uniqueness enforcement, entropy report, and CSV / TXT / JSON export. Includes a paste-and-verify tool. |
| [APR ⇄ APY Converter](aprapy.html) | Convert between nominal APR and effective APY across any compounding frequency — annual, semi-annual, quarterly, monthly, bi-weekly, weekly, daily, and continuous — with a live per-frequency comparison table and an N-year balance projector. |
| [One-Rep Max (1RM) Calculator](onerm.html) | Estimate your true 1RM from any sub-maximal set using all seven classic regression formulas (Epley, Brzycki, Lander, Lombardi, O'Conner, Mayhew, Wathen) plus their averaged consensus. Full training-percentage table from 50 % warmup through 100 % tested max to 105 % overload with target reps, plus an RPE / RIR cheat sheet of working loads for 1, 3, 5, and 8-rep targets. |
| [Hijri ⇄ Gregorian Converter](hijri.html) | Convert dates between the Islamic (Hijri AH) and Gregorian calendars in either direction using the tabular Kuwaiti / Umm al-Qura type-IIc 30-year leap cycle (epoch 1 Muḥarram 1 AH = 19 July 622 CE, Friday). Get the weekday in Arabic and English, day-of-year, year length (354 / 355), Julian Day Number, and a month-grid view that overlays each system on the other. Includes Ramaḍān, ʿĪd al-Fiṭr, ʿĪd al-Aḍḥā, Mawlid, ʿĀshūrāʾ, and Hajj key-date lookups. |
| [Business Days Calculator](businessdays.html) | Count business days between two dates, or add / subtract working days from a reference date for SLA &amp; deadline planning. Customizable weekend pattern (Sat/Sun, Fri/Sat for GCC, Sun-only, none), built-in US federal / UK bank / EU common holiday calendars (with Easter math), and a per-month calendar view that colors business days, weekends, and holidays. |
| [NPV, IRR & Payback Calculator](npv.html) | Discount any cash-flow series to find Net Present Value, Internal Rate of Return (Newton's method with bisection fallback for awkward series), modified IRR (separate finance &amp; reinvestment rates), discounted &amp; undiscounted payback (linear-interpolated within the crossing period), and the profitability index. Includes presets and a cumulative-flow chart that shows exactly when the project turns the corner. |
| [Stopwatch with Lap Timer](stopwatch.html) | Millisecond-accurate stopwatch with split / lap tracking, keyboard shortcuts, best & worst highlighting, and CSV / Markdown export — state survives reloads. |
| [Pomodoro Timer](pomodoro.html) | Customizable work/break intervals with audio alerts and tracking. |
| [Time Card / Timesheet Calculator](timecard.html) | Log clock-in / clock-out shifts and compute total hours, regular vs overtime, gross pay, and weekly breakdowns. |
| [Kanban Board](kanban.html) | Drag-and-drop Kanban board with customizable columns. |
| [Habit Tracker](habits.html) | Track daily habits with streaks and a GitHub-style heatmap. |
| [Focus Session Planner](focusplanner.html) | Plan a focused work session from a messy task list. |
| [Code Snippet Manager](snippets.html) | Save, organize, tag, and search code snippets. |
| [Online Whiteboard](whiteboard.html) | Freehand drawing, shapes, text, arrows, layers, and undo/redo. |
| [Card Deck Shuffler & Dealer](cards.html) | Shuffle a 52-card deck (or 54 with jokers) using a seeded Fisher-Yates shuffle, then deal hands of any size. |
| [Moon Phase Calculator](moonphase.html) | Compute moon phase, illumination percentage, and the next full/new moon for any date — with a lunar calendar grid and SVG phase preview. |
| [Date Difference Calculator](datediff.html) | Calculate the precise duration between two dates — calendar breakdown (years/months/days), totals in every unit, and weekday vs weekend counts. |
| [Tally Counter](tally.html) | Multiple labelled tally counters with per-counter step size, keyboard shortcuts (`1`–`9`, Shift to decrement, `Ctrl+Z` undo), history, autosave, and CSV / Markdown / JSON export — for bug bashes, code review nits, inventory, or habit counts. |

## Git & Workflow

| Tool | Description |
|------|-------------|
| [Branch Cleanup Planner](branchcleanup.html) | Plan the cleanest way to tidy a git branch. |
| [Git Branch Divergence Planner](branchdivergence.html) | Estimate branch divergence and merge risk. |
| [Bug Repro Script Builder](bugrepro.html) | Turn rough bug notes into a clean reproduction script. |
| [Bug Triage Matrix](bugtriage.html) | Score bugs by severity, impact, and reproducibility. |
| [Git Cherry-Pick Planner](cherrypick.html) | Plan cherry-picks and spot potential conflicts. |
| [Context Switch Cost Calculator](contextswitch.html) | Estimate the cost of task switching. |
| [Deadline Budget Planner](deadlinebudget.html) | Plan safe development time before a deadline. |
| [Deep Work Sprint Planner](deepwork.html) | Plan a deep work sprint with goals and focus schedule. |
| [Dev Day Budget](devdaybudget.html) | Plan a realistic developer day with focus and meeting time. |
| [Env Diff Inspector](envdiff.html) | Compare two .env files and see all differences. |
| [Focus Debt Calculator](focusdebt.html) | Estimate focus debt from meetings and interruptions. |
| [Incident Timeline Builder](incidenttimeline.html) | Build a clear incident timeline from loose notes. |
| [Interruption Shield](interruptionshield.html) | Estimate your interruption budget and protect deep work. |
| [Meeting Notes to Action Plan](meetingnotes.html) | Turn meeting notes into decisions and action items. |
| [Meeting Prep Brief Generator](meetingprep.html) | Generate a crisp meeting prep brief with agenda and talking points. |
| [Merge Queue Planner](mergequeue.html) | Plan safe PR merge order and identify risks. |
| [Pairing Session Planner](pairingplanner.html) | Plan a focused pair programming session. |
| [Port Conflict Finder](portfinder.html) | Find port conflicts and generate clean port plans. |
| [Incident Postmortem Generator](postmortem.html) | Draft an incident postmortem with timeline and action items. |
| [PR Impact Estimator](primpact.html) | Estimate PR impact, review load, and rollout readiness. |
| [PR Title Polisher](prtitle.html) | Turn messy branch notes into clean PR titles. |
| [Git Rebase Coach](rebasecoach.html) | Turn a git rebase situation into a clean step-by-step plan. |
| [Release Window Planner](releasewindow.html) | Plan the safest release window. |
| [Rollback Planner](rollback.html) | Plan a safe production rollback. |
| [Shortcut Cheat Sheet Builder](shortcutcheatsheet.html) | Build a keyboard shortcut cheat sheet. |
| [Git Stash Planner](stashplanner.html) | Plan, label, and prioritize Git stashes. |
| [Task Batch Planner](taskbatch.html) | Group tasks into smart batches to reduce context switching. |
| [Task Prioritizer](taskprioritizer.html) | Score tasks by impact, effort, urgency, and risk. |
| [WIP Limit Planner](wip.html) | Plan realistic work-in-progress limits. |
| [Open Source License Chooser](license.html) | Compare MIT, Apache 2.0, GPL, BSD, MPL, ISC, Unlicense and more side-by-side, then generate a ready-to-use LICENSE file. |
| [License Header Inserter](licenseheader.html) | Stamp source files with SPDX + copyright headers in the right comment syntax for 50+ languages. Preserves shebangs and BOMs, replaces existing top headers. |
| [CODEOWNERS Generator & Tester](codeowners.html) | Build a GitHub CODEOWNERS file rule by rule, test which rule routes any file path, and lint for invalid owners, shadowed rules, and unrouted paths. |

---

## Contributing

Each tool is a single self-contained HTML file. To add a new tool, create a new `.html` file and add a link to `index.html`.

## License

MIT
