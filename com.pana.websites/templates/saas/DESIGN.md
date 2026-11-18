---
id: saas
name: "SaaS"
kind: specific
purpose: ["Launch an app or software"]
card: "software or B2B tool sold on plans"
examples: ["an invoicing tool", "a CRM for clinics"]
heroshot: _heroshots/saas.png
fonts: ["Inter Tight", "JetBrains Mono", "Inter"]
sections: ["nav", "top", ".lg7", "product", "stats", "pricing", "reviews", "faq", "cta", "footer"]
---

**Hero (`.h7`).** Centred, on `#F7F7F5` with a dot grid (`radial-gradient` 22px) masked to an ellipse at top centre via `::before`. Stack: a "New - Auto-matched receipts from email" pill (black "New" chip), h1 in Inter Tight, `clamp(2.6rem,1.4rem+6.4vw,6rem)`, line-height .98, `letter-spacing:-.02em`, max 14ch, with the key phrase in `#C23C08` over a soft underline highlight (`linear-gradient(transparent 62%, var(--accent-soft) 62%)`), lede (max 46ch), orange `#FF5A1F` primary and white ghost buttons, a one-line trust note. Directly below, a browser-chrome app window (`.app`: 16px radius, traffic-light dots, url pill, 200px sidebar, KPI cards, receipts table) deliberately cut by the fold, then a greyscale wordmark strip.

**Signature interactions.** The hero demo plays one live moment: about 2.2s after the window is 30% visible, a receipt chip flips to "Matched", its row flashes (1.6s), a toast slides in, the KPI counter increments and its meter fills. The Product section is an ARIA tablist of four panes that auto-advances every 6.5s with a progress fill in each tab (`--f`); hover pauses, any user input stops autoplay for good, arrows/Home/End move focus, and panes animate in (`pdIn`, `pdCard`, `rowIn`, `barUp`, `meterIn`, `scan`). Stats: the first tile spans full width in accent with a radial highlight; numerals use tabular figures at `-.07em`. Bento rows are 220px with mono KPIs. Buttons roll their label.

**Motion tokens.** `--ease:cubic-bezier(.22,1,.36,1)`, 1s reveals, `--t-hover:.22s`, `--t-press:.16s`.

**Shape language.** Tight and product-like: buttons 9px (`--r-pill:9px`), cards 14px, large cards 18px, app window 16px, nav links 8px, 1px rings.

**Images.** None; the interface is the image.
