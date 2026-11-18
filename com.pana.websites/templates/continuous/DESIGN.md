---
id: continuous
name: "Continuous"
kind: catch-all
purpose: []
card: "story-led scroll about a place or experience"
examples: ["a boutique hotel", "a tasting-menu restaurant"]
heroshot: _heroshots/continuous.png
fonts: ["Syne", "JetBrains Mono", "Inter"]
sections: ["nav", "top", "c1", "c2", "c3", ".facts", "testimonials", "faq", "stay", "footer"]
---

**Hero.** `.h5` is 210svh tall with a sticky 100svh stage; `--hp` (0 to 1) is the scroll progress through it. The image starts as an arch window, `clip-path:inset(16% 14% 30% 14% round 999px 999px 24px 24px)` with the photo scaled 1.25, and opens to full bleed (inset 0, radius 0, scale 1) as you scroll; a dark gradient fades in and the text block lifts 12svh. The headline is Syne 800 uppercase, `clamp(3rem,(100vw-48px)/6,13rem)`, line-height .84, `letter-spacing:-.06em`, no wrap ("SLOW DOWN."), anchored bottom-left. A "Keep scrolling" hint fades at `1-hp*3`.

**Signature interaction: the page changes colour as you read.** Each chapter carries `data-bg`, `data-fg`, `data-ac` (dusk `#1B1730`, forest `#12241A`, night `#0B1630`, then cream `#F1E7DA` and sand `#E9DCCB`). `app.js` interpolates between neighbouring chapters in RGB and writes `--bg`, `--ink`, `--accent` on `:root` (surface via `color-mix`), so the whole page crossfades. Chapter figures (`.ch-win`) are windows whose `clip-path:inset(0 calc(var(--cp)*16%) round calc(28px + var(--cp)*200px))` goes from a narrow arch to a full rectangle as they reach centre, with the image scaling `1+cp*.3`. A fixed left rail (`.rail`) shows dots with labels on hover, a progress line `scaleY(--sp)`, an accent-filled active dot; it appears after 1.6 viewports and hides at the footer. A counter (`.m5-n`) reads 01-04 via IntersectionObserver at the viewport middle. Logo marquee runs 40s linear and pauses on hover; list children stagger 70ms; headings split into masked words.

**Tokens.** `--ease:cubic-bezier(.22,1,.36,1)`, reveals .9-1s. Chapter titles Syne 700, `clamp(2.5rem,1rem+6vw,7rem)`, `-.05em`; numbered circle badges (44px, 1px border).

**Images.** Three moody blue-hour landscapes: saturated orange horizon against deep indigo, heavy bottom gradient for legibility, always full-bleed or inside the morphing window.
