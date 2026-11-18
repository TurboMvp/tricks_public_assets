---
id: portfolio
name: "Portfolio"
kind: specific
purpose: ["Show my work"]
card: "showcase of visual work"
examples: ["a photographer", "an architecture studio"]
heroshot: _heroshots/portfolio.png
fonts: ["JetBrains Mono", "Inter"]
sections: ["nav", "top", "work", "services", "studio", "testimonials", "faq", "cta", "contact", "footer"]
---

**Hero (`.hero3`).** Quiet gallery paper (`#F2F1EE`, ink `#121212`, cobalt `#2B44D6`). The h1 is JetBrains Mono 600, `clamp(3rem,1rem+9vw,9.5rem)`, line-height .96, `letter-spacing:-.075em`, three block lines that rise in (`up3` 1.2s, 70ms stagger); line two is indented `clamp(0,9vw,160px)` and the last word is cobalt. A short lede sits in a 300px right column aligned to the baseline (`grid-template-columns:1fr 300px`). Below, a full-bleed horizontal strip of 3:2 thumbnails (`.hs-track`, items `clamp(150px,20vw,300px)`, 14px radius, alternate items offset 14px, tiny rotation `(i-2)*.6deg`, mono project-label pills bottom-left) that slides left by `scrollY*.45` px during the first 1.5 viewports via `--hx`. Header is two pills: bordered logo, black "Index".

**Signature interaction: the index.** `.ix-list` is a typographic table: number, project name at up to 3rem, descriptor, year. On desktop hover the non-hovered rows fade to 35% ink and the hovered row slides `padding-left:12px`. A 300px 3:2 preview (`.ix-peek`, 16px radius) follows the cursor with lerp .18 and tilts `rotate((tx-x)*.03deg)`, appearing with `scale(.85)` to 1 over .5s. It only exists with `(hover:hover) and (min-width:900px)`. On mobile the menu is a `details` full-screen cobalt overlay with 13vw rows. The footer email link is `clamp(2.6rem,11.5vw,10rem)` with a live per-timezone clock.

**Shape language.** 14-16px image radii, pill nav, 1px ink rules; one image spans 21:9.

**Images.** Brand and product mockup photography on muted surfaces (bag and cards, phone in hand, lamp, posters), shown in 3:2 crops with slight desaturation. Note: `fonts/bricolage.woff2` ships but is not referenced.
