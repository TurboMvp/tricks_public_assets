---
id: personal-cutout
name: "Personal cut-out"
kind: specific
purpose: []
card: "personal brand led by a strong cut-out photo of the person"
examples: ["a speaker", "a football player"]
heroshot: _heroshots/personal-cutout.png
fonts: ["Anton", "JetBrains Mono", "Inter"]
sections: ["nav", "top", ".manifesto", "method", "about", "talks", "services", "testimonials", "socials", "cta", "contact", "footer"]
---

**Hero (`.hero2`).** 175svh tall with a sticky 100svh stage; `--hp` is scroll progress through it. Warm studio backdrop (radial cream + orange glow over `#E9E4DC`, multiply noise). The name is split into two Anton rows, `clamp(6.5rem,1rem+26vw,15rem)` (NOOR in `.back` near the top, HALDEN in `.front` near the feet), with a transparent full-length cut-out (`cut-woman.webp`, 760x1746, `drop-shadow(0 30px 40px)`) standing between the layers, so the figure interleaves with the letters (see the hero shot for the overlap). A glass role card (blur 12px) bottom-left, a pill CTA with a circular arrow chip bottom-right, vertical "Scroll" text, a pill chapter rail on the left.

**Signature interactions.** Scrolling through the hero moves the cut-out down 6svh and scales it to .88 while the meta fades (`1-hp*2.2`); on load the rows slide in (`slide`, 1.6-1.8s, row two +.18s) and the cut-out rises (`rise`). The manifesto text fills word by word (`.mw.on`, .9s). The method section (`.story`) is a second pinned stage keyed to `--q`: a dark `#191714` scene with an orange radial glow whose centre moves, a back word "METHOD" in `#2A2622` sliding left, a front word "ONE LINE" as an outline (`-webkit-text-stroke:2px`, "LINE" filled in accent) sliding right, the cut-out travelling from +16vw to -26vw with saturation .6 to 1, and three blurred glass chapter cards cross-fading with a 01-03 counter. The rail's dots grow into 18px bars when active, show label pills on hover, turn dark over the story and hide at the footer. Service rows fill with `--accent-soft` from the left (`scaleX` 0 to 1, .5s) on hover.

**Motion tokens.** `--t-reveal:1.2s`, `--ease:cubic-bezier(.22,1,.36,1)`, a calmer `--ease-calm`.

**Images.** The cut-out is everything: a standing figure on transparent background with generous headroom and feet; `cut-man.webp` is an alternate.
