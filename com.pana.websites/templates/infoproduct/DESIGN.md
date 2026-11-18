---
id: infoproduct
name: "Infoproduct"
kind: specific
purpose: ["Sell a course"]
card: "course, ebook, coaching program or membership"
examples: ["an online baking course", "a CrossFit coaching plan"]
heroshot: _heroshots/infoproduct.png
fonts: ["Fraunces", "Figtree", "Inter"]
sections: ["nav", "top", "lessons", "instructor", "testimonials", "pricing", "faq", "cta", "footer"]
---

**Hero (`.ipx`).** A calm paper page (`--bg:#F4F1EC`, terracotta `--accent:#9A4B2F`). Top bar: italic-serif wordmark, centred course facts, pill CTA. Two columns: left, a tracked-caps eyebrow, the h1 in Fraunces (loaded as `Display`) weight 400, `clamp(2.25rem,1.4rem+3.4vw,4.5rem)`, line-height 1.04, max 13ch; lede; then a white buy box (`.ipx-buy`, 24px radius, 1px inset line) with a 2.25rem serif price, struck-through old price, a live "Launch price ends in 13d 02h 59m 52s" line and a full-width terracotta pill button; rating and refund line below. Right: the trailer facade `.vf` (16:9, 28px radius, deep soft shadow, 76px accent play button with a 10px halo from `color-mix`, caption chip). Clicking swaps in a youtube-nocookie iframe, so no player loads before the tap. A 3-column facts strip follows a 1px rule.

**Interactions.** Sticky buy bar `#ipbar` appears once the hero buy box leaves the viewport (IntersectionObserver) and adds 88px body padding. The countdown reads one constant, `OFFER_END` in `app.js`; after it passes the timers hide and only "Launch price" remains, with no resets. Reveals `.rv`/`.up` rise 28px over 1.1s `cubic-bezier(.22,1,.36,1)`, siblings staggered 70ms (max 5). Counters ease out cubic over 1.4s. The curriculum is a two-column block: sticky left column (`top:96px`, three summary tiles) beside eight numbered lesson rows with a "Free preview" tag. FAQ uses `details` with a circular "+" that rotates 45deg and a .4s `faqIn`. Thumbnail zooms 1.03 on hover.

**Shape language.** 24-28px radii, pills for buttons, circular icon buttons; hairline `--line` rings instead of shadows, one large shadow only under the video.

**Images.** Instructor portrait in a 4:5 crop (`ada-480/800.webp`) and a 16:9 video still in warm, terracotta-leaning light that matches the accent.
