---
id: product
name: "Product"
kind: specific
purpose: ["Sell a product"]
card: "one physical product or a small shop, hero object, buy or preorder"
examples: ["a ceramics studio", "a craft coffee roaster"]
heroshot: _heroshots/product.png
fonts: ["Playfair Display", "DM Sans", "JetBrains Mono", "Inter"]
sections: ["nav", "top", "specs", "ritual", "box", "reviews", "faq", "buy", "footer"]
---

**Hero (`.h4`).** Warm cream (`#F4EEE2`), rust accent `#8C3B1F`. The product name is split around the object: "So" and "ra" in Playfair Display italic 500, `clamp(8rem,2rem+30vw,20rem)`, line-height .9, left in ink, right in rust, with a transparent photo of the kettle (`k1.webp`, 990x692, `drop-shadow(0 30px 28px)`) standing between them. Three white pills ("0.9 L", "Hand-thrown stoneware", "Walnut handle") pop in around it (`h4t` .9s). Under the stage: eyebrow, serif h1 with a rust italic phrase, price and button. Header: dark announcement bar, italic centred wordmark, bag pill with price.

**Signature interactions.** Hero scroll (`--hp`): the two words slide apart `+-30vw`, the product drops 10svh, rotates -10deg and scales to .85. The Specs section (`.sp`) is a sticky 100svh stage driven by `--k`: a conic-gradient ring (masked to a donut) fills `calc(var(--k)*360deg)` around the product, which rotates -6 to +6deg and scales .96 to 1.04 while one of the spec panels (`.sp-p`) cross-fades in by step, with pill step dots. The Ritual photo opens with `clip-path:inset(calc((1-var(--rp))*14%) calc((1-var(--rp))*18%) round 28px)`. The box section pairs list items with hotspot pins: `js/kb.js` toggles `.on` on both on hover or focus (`data-pin`). A floating pill buy bar (`.sbar`) slides up after .8 viewport heights and leaves near the end.

**Motion tokens.** `--ease:cubic-bezier(.22,1,.36,1)`, `(.2,.8,.2,1)` for tags.

**Shape language.** Pills (999px), 28px media radius, 20px panels, rounded donut ring.

**Images.** Isolated object with a warm soft shadow, plus high-key warm lifestyle shots.
