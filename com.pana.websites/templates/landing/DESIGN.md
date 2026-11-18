---
id: landing
name: "Landing"
kind: specific
purpose: ["Collect signups"]
card: "one campaign, waitlist or event with a single CTA"
examples: ["a product launch waitlist", "a conference"]
heroshot: _heroshots/landing.png
fonts: ["JetBrains Mono", "Inter"]
sections: ["nav", "top", ".mq10", "features", "why", "how", "numbers", "testimonials", "faq", "cta", "footer"]
---

**Hero (`.h10`).** Neo-brutalist developer tool on `#F2F2EC` paper with a `#C6F432` lime accent and `#0A0A0A` ink. Grid `1.2fr 1fr`. Left: mono kicker with a green dot ("1,840 teams on the waitlist"), h1 in JetBrains Mono bold, `clamp(2.4rem,1.2rem+5.6vw,5.4rem)`, max 13ch, tight tracking, a lede, and an inline form (email field plus black button with lime text, all square corners, 1.5px ink borders). Right: a terminal card (`.term`: ink background, traffic-light dots, `CHANGELOG.md` with coloured `+`/`~` lines) with a hard `10px 10px 0` lime offset shadow. Header: `patchnote_` wordmark with a blinking underscore (`steps(1)`), and a split GitHub-style badge "v0.9 beta | How it works" with a lime half. Directly under the hero sits a lime marquee (`.mq10`, 26s linear) with a boxed "WORKS WITH" label cell and tool names divided by slashes.

**Interactions.** `.sc10-t` is a scrubbed statement: words are wrapped in `.sw` and switch on one by one as scroll progress through the section advances (highlight words `.hl` in a second colour). The how-it-works rail (`.hw10-l`) draws with `--hp` and uses dashed 1.5px dividers with ink `code` chips. Chart cards (`.ch10-c`) count up numbers (`data-to`, 1.5s ease-out quart, 300ms delay) when 35% visible. A sticky bottom bar `#sb10` slides in after the marquee and hides at the final CTA (`transform` + `visibility`, .35s `cubic-bezier(.2,.7,.2,1)`). Buttons roll their label and invert to lime on hover.

**Shape language.** Zero radius: `--r-card`, `--r-card-lg` and `--r-pill` are all 0. Structure comes from 1.5px solid ink borders, dashed rules and hard offset shadows; `--noise` grain overlays the CTA over a 48px masked grid.

**Images.** None; the terminal and charts are the imagery.
