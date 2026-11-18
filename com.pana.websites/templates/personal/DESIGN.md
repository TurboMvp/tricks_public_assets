---
id: personal
name: "Personal"
kind: catch-all
purpose: []
card: "personal brand built on ideas and credentials"
examples: ["a writer", "a consultant"]
heroshot: _heroshots/personal.png
fonts: ["Archivo Black", "Archivo", "JetBrains Mono", "Inter"]
sections: ["nav", "top", "about", "work", "writing", "testimonials", "contact", "footer"]
---

**Hero (`.h9`).** Loud, sticker-style. Yellow `#FFE14D` field, grid `1.25fr .9fr`. Left: an outlined white pill tag, then the h1 in Archivo Black, `clamp(3.6rem,2rem+9vw,8.6rem)`, uppercase, four lines ("HI, I AM / LENA. / I NAME THINGS."); "LENA." is `.hl`, an ink block rotated -2deg with yellow text. Lede, then a pink and a white button. Right: the portrait in `.h9-ph`: 2.5px ink border, 22px radius, hard `8px 8px 0` ink shadow, rotated 1.5deg on a `#FFD21F` panel, with a tilted "BERLIN" tag and a pink circular sticker ("12 years of naming"). A black sticky ticker bar (`.m9`) tops the page with "Booking spring 2027 - 2 slots left" and a yellow button.

**Signature interactions.** Neo-brutalist press: `.b9:hover` moves `translate(-2px,-2px)` and grows a `7px 7px 0` shadow; `:active` moves `translate(5px,5px)` and drops the shadow to 0, so buttons physically press. The Work section is a stack of sticky cards (`.card9`, `position:sticky; top:calc(84px + var(--i)*14px)`); as the next card covers one, JS writes `--d` (overlap 0-1) and the covered card scales `1-d*.06` and darkens `brightness(1-d*.25)`. Card fills cycle yellow, pink `#FF4FA3`, white, mint `#7FE3B5`, lilac `#B8A6FF`, orange `#FF9A57`. Fit section pairs a mint "yes" card with a white one. Contact band is pink with 2.5px rules. Shared helpers: word-split headings (masked `translateY(105%)`), staggered lists, counters (1.6s ease-out quart), quote carousel (6s, swipe), label-roll buttons.

**Shape language.** Thick 2.5px ink outlines everywhere, 22px cards, 14px buttons, 999px pills, hard offset shadows instead of blur, small deliberate rotations (-2deg labels, 1.5deg photo).

**Images.** One flat-lit, saturated portrait on a yellow backdrop (`ip-1.webp`), framed by the border; no cut-out.
