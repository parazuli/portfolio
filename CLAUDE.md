# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

Package manager is **pnpm** (`.mise.toml` pins Node 22 / pnpm 10.34.3); `package-lock.json` is stale leftover — `pnpm-lock.yaml` is the real lockfile.

```bash
pnpm dev                 # Vite dev server on $PORT (default 8443) — usually ALREADY RUNNING in Figma Make
pnpm build               # production build to dist/
pnpm preview             # serve the built output
pnpm format              # oxfmt (the only formatter; no ESLint/Prettier here)
pnpm exec tsc --noEmit   # type check — the closest thing to a lint step
```

There is no test framework, test script, or test file in this repo. Do not invent `pnpm test`; verify changes by type-checking, building, and looking at the running preview.

`.figma/make/*` are host wrapper scripts (`dev`, `install`, `format`, `deploy`, `deploy-preview`) that just shell out to the pnpm scripts above — run pnpm directly rather than calling them.

## Architecture

Single-page portfolio for Rohan Parajuli (UI/UX + graphic designer). No router, no backend, no CMS — `src/App.tsx` (~650 lines) is essentially the whole app, and `src/index.css` (~720 lines) is essentially the whole stylesheet.

**Content lives in `src/App.tsx`, inline.** `projects`, `services`, `processSteps`, and `toolBadges` are arrays declared inside `App()` and rendered via `.map()`. Edit content there; there are no data files, no JSON, no markdown sources.

- `projects` entries carry provenance as *state*, not decoration: `tag` + `chip` (`chip-solid` case study / `chip-quiet` hackathon / `chip-outline` practice) and `practice: true|false` drive the chip treatment and the muted `.is-practice` tile, so real work and practice work stay visually distinguishable. Preserve that distinction when adding projects (see PRODUCT.md).
- `projects[0]` is the featured project: it fills the hero's highlighted yellow row, the hero peek card, *and* the full-width feature card in the work section. Reordering the array changes all three.
- The Nepal Airlines case study is an in-page overlay (`csOpen` state → `.cs-overlay` / `.cs-scrim` at the bottom of the component), not a route. Its copy is real, hand-written, and must be preserved verbatim unless the user asks otherwise.
- `services` powers the "What I do" pill tabs and implements the full WAI-ARIA tabs keyboard pattern in `onTabKeyDown` — arrow/Home/End move selection and focus. Keep that if you touch the tabs.
- Imagery: `src/imports/*.png` imported via the `@/` alias (`ideaxWebImg`, `rohanHeadshot`); everything else is inline Unsplash URLs. The logo mark is a base64 data URI constant (`LOGO_MARK`) at the top of the file.
- `lucide-react` is the one runtime dependency besides React itself — used for icons throughout; there's no other icon set or SVG sprite system.

**Light theme only.** The previous `data-theme` dark/light toggle was retired in the redesign — there is one palette, defined once on `:root` in `index.css`. Don't reintroduce a theme attribute without being asked.

**Motion and behavior are hand-rolled** across small `useEffect` hooks — no animation library:

- One authored entrance: `.enter-nav`, the per-line `.hero h1 .line > span` slide (each line clipped by `overflow:hidden` on `.line`), `.enter-fade`, `.enter-stack`, `.enter-peek`, staggered by a `--d` custom property.
- `.reveal` scroll-ins: the CSS animation is declared on every `.reveal`, held at `animationPlayState: paused`, and released by an `IntersectionObserver`. **On `animationend` the JS removes the `reveal` class** — a filled animation keeps ownership of `transform` and would otherwise swallow the cards' hover lift. Per-element offsets come from a `--delay` custom property.
- Others: header scroll state, section scroll-spy (`activeSection`), `body` class toggles for `nav-open` / `cs-open`, an Escape handler closing both the mobile nav and the overlay, a CSS-only tool marquee, and an `IntersectionObserver`-triggered rAF count-up for the project tally.

**Grid items need `min-width:0`.** `index.css` sets it on the children of every major grid (`.hero`, `.about`, `.work-feature`, `.work-grid`, `.process-grid`, `.panel-grid`). Without it a single `white-space:nowrap` line inside the hero work card sizes the whole track to its longest row, which silently widens the page past the viewport on mobile and cramps the hero headline on desktop. Keep it when adding a grid.

**Styling: Tailwind is installed but effectively unused.** `index.css` imports Tailwind, but `App.tsx` uses zero utility classes — every `className` is a hand-written class defined in `index.css`, which is organized in commented sections (Buttons / Header / Hero / Marquee / About / Work / Process / Services / Contact / Case study overlay / Motion / Responsive) on top of a CSS-variable token block. Look up a class in `index.css` before assuming it's a utility, and add new styling there in the matching section rather than reaching for utilities.

**Fonts come from Fontshare, not Google.** `index.css` imports Satoshi from `api.fontshare.com` (CSS `@import` must stay first in the file, before `@import 'tailwindcss'`).

## Design and product contracts

Three documents constrain changes here, and they are the output of the `impeccable` design skill (vendored in `.agents/skills/impeccable/`) — read them before any visual or content work:

- `DESIGN.md` — the current design system: warm bone ground, white cards at large radii carried by wide soft shadows (no borders), ink-black type and buttons, and exactly one accent (a soft highlighter yellow) spent only on the featured work row, the active tab's label, and the case-study label. Satoshi throughout. Read its do's and don'ts before changing any visual decision.
- `PRODUCT.md` — audience (freelance clients + recruiters, weighted evenly), positioning, and hard content rules: never present hackathon/self-learning work as commissioned client work, never fabricate testimonials or client logos.
- `.impeccable/surfaces/src-app-tsx.md` — the direction contract for the shell (thesis, first viewport, known open items); `.impeccable/critique/` holds prior critique passes.

Known open item carried in those docs: featured-project imagery is still Unsplash placeholder art, deliberately deferred.

## Gotchas

- Unescaped apostrophes break the build. Existing code uses the `{"shouldn't"}` JSX-expression form throughout the case study — match it.
- `.figma/make/site.json` drives `<title>`, meta, favicon, and robots through a Vite plugin in `vite.config.ts`; `index.html` is just comment slots. Change page metadata there, not in `index.html`.
- `vite.config.ts` also contains several Figma Make dev-only plugins (error-overlay replay, React Refresh boundary fallback, a stories kit route). Leave them alone.
