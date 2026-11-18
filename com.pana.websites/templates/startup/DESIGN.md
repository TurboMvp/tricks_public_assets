---
id: startup
name: "Startup"
kind: specific
purpose: []
card: "early company story for investors, hires and press"
examples: ["a seed-stage fintech", "a climate hardware startup"]
heroshot: _heroshots/startup.png
fonts: ["Inter Tight", "JetBrains Mono", "Inter"]
sections: ["nav", ".hero", ".backers", "thesis", "product", ".traction", "team", ".investors", ".press", "careers", "join", "footer"]
---

**Hero.** Near-black `#0B0C0E`, amber `#F2B544` and teal `#7FE3D6`. A full-bleed `<canvas id="field">` draws a Fibonacci sphere of 1500 dots (700 on mobile), each radius modulated by `1+.07*sin(7X+.8t)*cos(11Y-.5t)+.04*sin(13*1.618Z+t)`, perspective `s=2.6/(3.2-z)`, alpha by depth. Every seventh dot is amber and larger, near dots teal, far dots grey-green; one tilted amber ellipse orbit is stroked at 25%. It rotates slowly (`t*.12`) and tilts toward the pointer (x*.4, y*.25), pauses off-screen, and is centred at 70% x on desktop. A left-to-right gradient (`hero::after`) keeps copy legible. Copy sits bottom-left: mono eyebrow with a pulsing cyan dot (2s), h1 Inter Tight 600, `clamp(46px,7.6vw,120px)`, line-height .96, max 11ch, last phrase gradient-clipped amber to cream to teal at 100deg; lede, amber pill and ghost pill. A mono caps bar closes the hero with a live "Candidates screened - 2,184,906" counter (+8 to +48 every 180ms).

**Interactions.** Hero children fade up 24px over 1s `cubic-bezier(.2,.7,.1,1)`, delays .1/.22/.34s. Sticky nav blurs 14px over 60% black. Traction stats count up (1.6s ease-out quart, 56-96px numerals). The product console is a three-column window (260px spec list, runs table with 4px `--v` meter bars, 340px image pane with caption chip) lit by an amber radial glow. Reveals use `.rv` at -10% margin.

**Shape language.** 14px base radius (`--r`), 18px console, 28px join panel, pill buttons; 1px hairlines at `rgba(237,235,230,.1)` instead of shadows; thesis in three columns split by vertical rules with cyan mono numerals.

**Images.** Lab and team photographs sit inside bordered panels; the generative sphere replaces a stock hero image.
