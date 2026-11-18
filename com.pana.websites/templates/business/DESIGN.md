---
id: business
name: "Business"
kind: catch-all
purpose: ["Get clients for my business"]
card: "local or service business that wants bookings and enquiries"
examples: ["a dental clinic", "a law firm"]
heroshot: _heroshots/business.png
fonts: ["Cormorant Garamond", "Karla", "JetBrains Mono", "Inter"]
sections: ["nav", "top", ".in8", "treatments", "first-visit", "rooms", ".bd8", "team", "testimonials", "visit", "faq", "book", "footer"]
---

**Hero.** Desktop is a 12-column grid, `min-height:max(100svh,720px)`. The photo (`.hx-media`) takes columns 7-12 edge to edge, with one huge rounded top-left corner (`border-top-left-radius:min(30vw,520px) min(36vw,620px)`) that sweeps like an arch; on mobile it is an arch window (`border-radius:50vw 50vw 0 0 / 38vw 38vw 0 0`). The h1 is Cormorant Garamond 500, `clamp(5.5rem,9.6vw,11.5rem)`, line-height .86, two lines; line two is indented `.62em`, italic, in the sage `--accent`, and overlaps the photo (`z-index:2`). Under it a 1px rule carries tracked caps services, a check-mark note and an italic-serif pill CTA. A round sage `.hx-stamp` ("Since 2014") sits on the photo. Above the nav is a sage utility strip whose "Open today" text and dot colour are computed from the clinic hours in JS (Europe/Lisbon).

**Interactions.** Entrance: each h1 line is an `overflow:hidden` `.hx-l`; the inner span goes `translateY(105%)` to none (`hxUp` 1.2s `cubic-bezier(.2,.7,.1,1)`, line two +.14s), copy fades up 12px (`hxFade`). The photo scales 1.04 to 1.16 and drifts (`--hz`, `--hy`) while the hero scrolls away. Section reveals `.fd`: 16px rise over 1.6s `cubic-bezier(.2,.6,.2,1)`. The intro sentence is a scroll-scrubbed ink: each word's opacity `--o` runs .18 to 1 as you read. Treatment rows draw a 1px underline (`background-size` 0 to 100%, 1.4s) and tint on hover. Room figures have `data-speed` parallax (desktop) and `data-zoom` 1.16 to 1; the bathhouse band parallaxes `--by`. A blurred compact bar (`.m8s`) drops in after the hero. Buttons roll their label (duplicate span, `translateY(-110%)`, .5s).

**Shape language.** Arches everywhere: `.arch` is `999px 999px 18px 18px`, `--r-card-lg:200px 200px 24px 24px`; pills for buttons; no hard-cornered photos except the full-bleed bathhouse band and CTA backdrop.

**Images.** Warm daylight interiors, low contrast, golden grade, subjects off-centre, always inside arches; a hand-drawn sprig illustration (`il-sprig.webp`) decorates panels.
