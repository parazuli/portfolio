---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: []
---

## Scope

Whole portfolio shell (`src/App.tsx`, `src/index.css`): floating pill header, hero, tool marquee, about, featured work, case-study showcase, process, services tabs, contact, footer, case-study overlay. Mode: Experience (portfolio) with Persuade elements (contact CTA). Redesign, not extension — replaces the incumbent "Departures Board" dark monochrome system, which is now anti-reference.

## Audience, job, action, constraints

Freelance clients and recruiters, weighted evenly (see PRODUCT.md). Job: judge hire-worthiness fast. Action: open the Nepal Airlines case study or reach out. Constraints: Nepal Airlines case-study copy stays verbatim; contact info and social links stay accurate; project provenance stays honestly distinguishable (real case study / hackathon / self-directed practice, never uniform); the tool row must read as tools, never as client logos. Light theme only — the dark/light toggle is retired by user decision.

## Direction contract

**THESIS:** A designer's portfolio built with the exact craft of the product surfaces he is hired to design — a warm, generously-spaced modern product page where the work itself sits in the product-screenshot slots. It refuses both the dark "creative portfolio" default and the SaaS template's own emptiness: every card that would hold invented dashboard UI holds real project material instead.

**OWN-WORLD:** Warm bone ground (`#efece5`) under pure-white cards at 24–32px radii, carried by wide soft shadows and no borders. Ink near-black (`#131313`) for type and every primary action, which are full-black pills with a circled arrow. One accent: a soft highlighter yellow (`#f7ec9b`) spent only on the one featured row and the active tab's label pill — never decoratively. Type is Satoshi throughout, display weight 700 at large optical sizes with -0.03em tracking, body 400/500 at 17px. Icons are lucide, one stroke weight. No mono, no uppercase tracking, no grain, no borders-as-structure.

**STORY:** Within one viewport the visitor reads Rohan as a product designer, not a decorator — because the page he is standing on is built to product-surface standard and the floating cards show his actual work, statuses and all. They scroll a paced sequence (proof → identity → the one deep case study → how he works → what he does) and act by opening the Nepal Airlines audit or mailing him.

**FIRST VIEWPORT:** Floating white pill nav centered at the top over a bone ground. Left column: a 76–104px headline, "Design that makes complicated things feel obvious.", a two-line sub, then a black "See the work" pill beside an outlined "Get in touch". Right column: a white "Selected work" card, its Nepal Airlines row filled soft yellow, three further rows beneath with real thumbnails and honest status chips, "All work →" at the foot; a second smaller card overlaps its lower-left corner, tilted ~-3deg, holding the Nepal Airlines case-study preview. Below the fold edge, a greyscale tool marquee captioned as tools.

**FORM:** User-pinned — the "Grovia" modern-SaaS reference the user supplied as four images, matched closely (pill nav, bone ground, overlapping soft-shadow cards, yellow highlight row, 01/02/03 cards, pill tab bar with yellow label). Pinned brief beats the roll; the dice assigned index 6 of the grounded list under seed key `fbd47d91`, acknowledged and overridden by the pin.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Known open items

- Featured-project imagery for Nepal Airlines, Livora, and Nepal Tourism is still Unsplash abstract placeholder art (a long-standing P1 in `.impeccable/critique/2026-09-12T14-21-21Z__src-app-tsx.md`). Only IdeaX has a real asset (`src/imports/ideax_web.png`). The new layout gives imagery far more area than the old manifest rows did, so replacing these with real project shots is now the highest-value next pass.
- No image generation in this session; build is code-led, ambition carried by FIRST VIEWPORT above.
- Project status tiers carried forward unchanged: Nepal Airlines = case study; IdeaX 2026 = hackathon; Livora and Nepal Tourism = self-directed practice.
