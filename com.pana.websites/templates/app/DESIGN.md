---
id: app
name: "App"
kind: specific
purpose: []
card: "a mobile app, the goal is the download"
examples: ["a habit tracker", "a running club app"]
heroshot: _heroshots/app.png
fonts: ["Manrope", "Inter"]
sections: ["nav", "top", "how", "features", "pricing", "testimonials", "faq", "get", "footer"]
---

**Hero.** White page, two columns (`.hero-g`, grid `1.1fr .9fr`, gap 48px, max 1200px) over a faint `.sky` radial wash in `--acc` blue. Left: "New" pill, h1 at `clamp(2.75rem,1.6rem+5vw,5.5rem)`, weight 800, `letter-spacing:-.035em`, line-height 1, second line (`em`, `display:block`) in `--acc`; lede, App Store and Google Play badges, star rating. Right (`.hero-v`): two dark phones built entirely in HTML/CSS (sized by `--w` and `--pt` units, no screenshots). `.p-main` sits in front rotated -3deg, `.p-back` behind it at 6deg, opacity .75, shifted 52% right; two glass chips ("Asleep in 11 min", "+38 min deep sleep") float on the corners.

**Signature interaction: the pinned live demo.** `.how-track` is 340vh tall; `.how-pin` is `position:sticky` at `top:var(--top)` (64px). `app.js` turns scroll progress into 4 steps (`f=p*4`). The step list dims to opacity .4 and the active step gets a blue left border; the phone redraws a different screen per step from `R[i](q)` (q = progress inside the step): a timer counts down, `stroke-dasharray` rings fill, switches flip (`.sw.on`), bars `scaleY` in a stagger, a Now Playing sheet slides in with `translate3d`. A synthetic tap cursor (`.tap`, ripple, `scale(.78)` on press) is placed over the target element each frame. Steps are buttons that `scrollTo` their slice. Below 960px the pin is dropped: steps stack and the screens become a scroll-snap carousel (`.mcs`, 82% columns, dots) whose cards play once at 55% visibility (keyframes `mdraw`, `mbar`, `mgrow`, `mknob`, `msw`).

**Motion tokens.** `--ease:cubic-bezier(.2,.7,.2,1)`; `.rv` reveals rise 24px over .8s; sheets use `(.32,.72,0,1)`; switch knobs overshoot with `(.3,1.6,.5,1)`.

**Shape language.** `--r:24px` cards with a 1px inset line instead of shadows; pill buttons; phones with proportional radii (`calc(var(--w)*.135)`); the Pro plan and final CTA are near-black 160deg gradient panels, radius `calc(var(--r)+8px)`.

**Images.** None. Every visual is live UI. That is the point: the product is shown working, scrubbed by the reader's scroll.
