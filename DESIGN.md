---
name: The Departures Board
description: A UI/UX portfolio built as one live airport-manifest — every project, skill, and credential a row on a single board.
colors:
  bg: "#101214"
  board: "#17191c"
  panel: "#1b1e21"
  panel-quiet: "#151719"
  text: "#f4f3ef"
  muted: "#aeb1b3"
  soft: "#75797c"
  line: "#2a2d30"
  line-strong: "#3a3d40"
  accent: "#f4f3ef"
  accent-hover: "#d7d7d2"
  accent-dim: "#54575a"
  on-accent: "#101214"
  live: "#6fcf5a"
  draft: "#6b6e70"
  cursor-neutral: "#7d8184"
typography:
  display:
    fontFamily: "Big Shoulders Display, system-ui, sans-serif"
    fontWeight: 800
    letterSpacing: "-.01em"
    fontFeature: "uppercase"
  body:
    fontFamily: "IBM Plex Sans, system-ui, -apple-system, sans-serif"
    fontWeight: 400
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, monospace"
    fontWeight: 600
    letterSpacing: ".1em"
    fontFeature: "uppercase"
rounded:
  sm: "3px"
  md: "6px"
  lg: "10px"
  full: "999px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.full}"
    padding: "0 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
---

# Design System: The Departures Board

## Overview

**Creative North Star: "The Departures Board"**

The whole portfolio reads as one live manifest, not a set of disconnected tabs and cards — the exact failure mode Rohan's own Nepal Airlines case study diagnoses in a national airline's booking systems. Lineage: rail and airport split-flap concourse boards. The system is a near-black board face on a brushed-steel frame (or its daylight inverse — see Themes), condensed uppercase display type standing in for cascading flap letters, and **no accent hue at all** — the "accent" is the theme's own ink color (near-black on light, near-white on dark), the way an award-winning UI/UX portfolio typically lets typography, contrast, and restraint carry the page rather than a brand color. Confirmed rejection: no gradient text, no soft pastel-and-cream "AI portfolio" default, no decorative grid-line backgrounds outside an actual measurement surface, and — as of this revision — no saturated accent color of any hue (an amber "delay lamp" accent was tried and explicitly rejected by the user as not reading modern enough).

This is a monochrome system: neutrals (ink and its tints) carry everything, including the primary action. The one color that survives is not a brand accent at all — it's the small green "available" status dot, kept because it's a universally understood functional signal (the way a status page or availability indicator uses green everywhere), not because it's decorative.

**Key Characteristics:**
- One live manifest, not disconnected cards — the metaphor is load-bearing, not decorative
- Fully monochrome: the "accent" is ink (theme text color), not a hue — primary actions read through contrast and fill, not color
- The only surviving color is a small functional "available" status dot (green) — a universal signal, not a brand accent
- Condensed uppercase display type standing in for split-flap letterforms
- Real vs. practice work is a visible system state (solid vs. dashed rows), never uniform
- Motion is the metaphor made literal: hero text actually flap-cycles through glyphs before landing, work-manifest rows and process steps reveal in a choreographed stagger (not one flat fade), and a fine-pointer-only custom cursor grows over anything interactive

### Named Rules
**The Transform-Only Rule.** Every animation — the cursor, the magnetic CTA, row reveals — animates `transform`/`opacity` only, never `width`/`height`/`margin`. No exceptions; layout-thrash defeats the "live board" feeling it's meant to sell.

## Colors

A monochrome system: ink and its tints do everything, including the primary action. One functional exception survives as a status signal, not a brand color.

### Primary (ink, not a hue)
- **Accent = Ink** (`#f4f3ef` on dark / `#14171a` on light): The system's "accent" is simply the theme's own text color, used at full fill for the one primary action and the "on review" status mark. There is no separate brand hue — contrast and fill density carry emphasis instead. `--on-accent` is the required contrasting text color for anything filled with it (`#101214` on dark, `#ffffff` on light).

### Neutral
- **Board Black** (`#101214`) / **Board White** (`#ffffff` in light theme): Base page/panel ground.
- **Panel Charcoal** (`#17191c` / `#1b1e21`): Raised surfaces — the hero board, work manifest, skills panel, process list, contact board, case-study overlay (their light-theme equivalents are near-white panels; see Themes).
- **Muted Steel** (`--muted` / `--soft`): Body copy and tertiary labels respectively.
- **Line** (`--line` / `--line-strong`): Hairline rules and borders throughout — the board's own ruled structure, never a soft shadow standing in for a border.

### Semantic (status, not accent — the one place color survives)
- **Live Green** (`#6fcf5a` dark / `#1f8a3b` light): "Boarding" / available status only. This is the single non-monochrome color in the system, kept because it is a universal functional signal, not a brand choice.
- **Draft Gray** (`--draft`): "Practice run" / self-directed status, paired with dashed type treatment.

### Named Rules
**The One Ink Rule.** There is no brand accent hue. Emphasis comes from ink fill (the primary button, the active tab, the current nav link), never from color. The only color permitted anywhere in the system is the live-status green, and only for that one status. A second color of any kind is a violation, not a variant. (This rule replaces an earlier "One Lamp" amber-accent rule, retired at the user's request as not reading modern enough for a UI/UX portfolio.)

## Typography

**Display Font:** Big Shoulders Display (condensed, extra-bold, always uppercase) — stands in for a split-flap letterform without literally simulating one.
**Body Font:** IBM Plex Sans.
**Label/Mono Font:** IBM Plex Mono — every status word, code, timestamp, and section eyebrow.

**Character:** A technical, slightly severe display face paired with a warm, legible humanist body and a disciplined mono for anything that reads as "data" (status, codes, labels) — the pairing argues precision the same way the manifest metaphor does. With no color to lean on, this pairing plus ink-fill contrast is what now carries the system's personality.

### Hierarchy
- **Display** (800, clamp(40px,7.4vw,92px), 1.02, uppercase): Hero name/title only.
- **Section head** (700, clamp(30px,3.6vw,46px), uppercase): One per section, always paired with a mono-label eyebrow and a hairline rule.
- **Body** (400, 15.5–16px, 1.75–1.8): Running copy in About and case-study blocks; capped near 65ch.
- **Label** (600, 10–12px, letter-spacing .1–.16em, uppercase, mono): Status words, codes, eyebrows, button text.

### Named Rules
**The Mono-Data Rule.** Anything that functions as data — a status, a code, a timestamp, a button label — is set in IBM Plex Mono, uppercase, tracked. Anything that is prose is set in IBM Plex Sans, sentence case. The two never swap roles.

## Layout

**Hero fills the first viewport with no frame at all**, not a bordered "board" card: it's the one section on the page without a border, corner radius, or shadow — content sits directly on the page ground, edge-to-edge within the same content column as everything else, at full viewport height below the header (`min-height: 100svh - header offset`), matching the user's own earlier (v1) design's unboxed, whole-page hero rather than the boxed-card treatment every other section uses. The manifest head/foot meta rows (status, tally) survive as free-floating content, not a card's header/footer strip. Inside that space the layout is asymmetric, not centered: large-scale copy (display type up to 128px) on the left, a boarding-badge photo card (300px, itself still a bordered object) on the right, at `grid-template-columns: 1fr auto` — the badge column is sized to its own content, not a stretchy fraction. Stacks to one centered column below 900px, badge first, still filling the viewport height. A dot-grid ground texture was tried here and removed — it read as noise rather than board texture; the hero ground is plain.

**Named exception — the hero has no board frame**, unlike every other major section (work manifest, skills panel, process list, contact), which keep the bordered-panel treatment described under Components. That's the *only* structural way the hero differs from the rest of the page — it sits inside the exact same `.container` (max 1320px) as the header and everything below it.

**A width experiment, tried and reverted.** Making the hero wider than the nav's own container was attempted twice (a literal 100vw full-bleed, then a bounded ~1720px sibling-of-`.container` width) and both read as "stretched" or "odd" — a fraction-based grid (`1.3fr .7fr`) stretched wider than its actual content leaves a genuinely hollow gap between the text and the photo, and a wider frame breaks the hero's left edge alignment with the header above it. Real practice (checked against current guidance) caps hero content at the same width as the rest of the site and gets the "big, modern" read from full viewport height and large type, not extra horizontal width. **Don't re-widen the hero past `.container` without re-solving both problems** — the content gap and the header-alignment break — that caused this to be reverted twice already.

The rest of the page is a single-column container (`min(1320px, calc(100% - 12vw))`) holding a sequence of bordered "boards" (hero, work manifest, skills panel, process list, contact) rather than free-floating cards — every major section is one ruled rectangle with a head, a body, and (where relevant) a foot, echoing a physical board's own frame. Section eyebrows are numbered (`01 · About`, `02 · Featured Work`...) because the sections genuinely are a sequence down the page. Responsive behavior collapses the work manifest's five-column row into a stacked two-column card below 820px, and the skills/process grids stack to one column below 900px/760px respectively.

## Elevation & Depth

Flat by default — depth comes from the steel-frame border and a single ambient shadow under the topmost overlays (hero board, skills panel, case-study modal), never a stack of soft card shadows. This matches the physical reference: a departures board is a lit panel in a frame, not a floating card.

### Shadow Vocabulary
- **sm** — Header bar only.
- **md** — Scrolled header, skills panel.
- **lg** — Hero board, contact board, case-study modal — the "lit panel" moments.

(Exact shadow values are theme-scoped — dark uses black-based shadows, light uses ink-based shadows at lower opacity; see the `--shadow-*` tokens per theme in `src/index.css`.)

### Named Rules
**The Flat-Board Rule.** Nothing gets a shadow at rest except the hero, skills panel, contact board, and modal — the handful of surfaces meant to read as physically raised panels. Everything else sits flush on hairline rules.

## Shapes

Hard-edged and precise: 3–10px radii only (`--radius-sm` 3px through `--radius-lg` 10px), reserved for panel corners and small controls; `--radius-full` exists for status dots and the navbar exception below. No pill buttons or heavily rounded cards outside that exception — the board reads as machined, not soft.

**Named exception — the navbar.** The header, its Contact CTA, and its icon buttons (theme toggle, mobile menu) are deliberately pill-shaped (`--radius-full`) with a "liquid glass" treatment: a subtle vertical sheen gradient, a soft multi-layer outer shadow, and inset top/bottom highlight lines faking a glossy, reflective edge — modeled directly on a Framer "Liquid Glass Navbar" component the user pointed to and asked for by name. This is a scoped, user-pinned exception to the Flat-Board and hard-edge rules above; it is not a license to round or glass-ify anything else on the page. New tokens introduced for it: `--glass-sheen-top/bottom`, `--glass-inset-top/bottom`, `--glass-shadow` (defined per theme).

## Components

### Buttons
- **Shape:** primary is a full pill (matches the navbar exception, since the primary CTA lives in the header and hero); secondary is 6px radius. Mono uppercase label, tracked, on both.
- **Primary:** Solid ink fill (`--accent`), `--on-accent` text — no color, full contrast.
- **Secondary:** Transparent with a steel-strong border, brightens on hover.

### Manifest rows (signature component)
The work section's core device: a bordered table where each row carries a status dot + word (live/review/draft), a mono code, a title + meta line, a small saturation-muted thumbnail, and a right-aligned action. Only rows with a real deliverable (a case study) are clickable — styled with a hover-only ink left rule and a "→" action; rows without one render as plain, non-interactive rows with an honest "Write-up pending" label. Self-directed practice rows additionally render at reduced opacity with a dashed underline on the title, distinguishing them from real client/hackathon rows without hiding them.

### Boarding badge (hero signature component)
A real photo, framed like a staff ID/boarding badge — the hero's one asymmetric, off-center visual, and the page's one deliberate full-color element against an otherwise monochrome system, the way a real ID card prints a color photo on a gray/white card body. Structure: photo (square crop, zoomed to fill so the frame reads as a portrait, not a person floating in white space), a mono ID-code + role strip, a decorative barcode rule. Slightly rotated at rest (`-1.4deg`), straightens on hover — a small tactile touch, not a system-wide pattern. It does **not** hang from a line/clip: that device only made sense while the hero was a bordered card with a divider to hang it from; once the hero-frame exception (below) removed that border, a dangling line with nothing to attach to read as a rendering bug, not a design, and was removed.

### Tabs (skills / "What I do")
A four-way tab strip with a sliding dark pill behind the active label. Fully keyboard-operable: click, Enter/Space (native button behavior), and Left/Right/Home/End arrow keys all move selection, per the WAI-ARIA tabs pattern.

### Cards / Containers
- **Corner style:** 10px radius on all major boards.
- **Background:** Panel tone on board ground (charcoal-on-black in dark, near-white-on-white in light).
- **Border:** 1px hairline (`--line-strong`) doing the work a shadow would elsewhere.

### Navigation
Sticky glass-pill bar (see Shapes exception); active section is tracked via scroll-spy and marked with `aria-current` plus an ink underline — the nav always tells the visitor where they are on the board, through contrast, not color.

## Themes

Light ("the daylight board") ships as the default; a dark variant ("the night board") is available via a header toggle (and a text toggle in the mobile menu), persisted per-visitor in `localStorage`. Both variants share the exact same monochrome system — there is no per-theme accent hue to reconcile anymore, since the accent is just each theme's own ink color:

- Ground: near-white board (`#ffffff` panels on `#eef0ef` page) in light vs. near-black (`#101214` / `#17191c`) in dark.
- Text/accent: near-black ink (`#14171a`) in light vs. flap-white (`#f4f3ef`) in dark — the same value serves as both body text color and the fill "accent," by design.
- Status colors (live green, draft gray) are deepened in light theme for AA contrast on white.

## Do's and Don'ts

### Do:
- **Do** keep the manifest metaphor mechanically true: status, code, and action columns must mean something real, never decorative labels.
- **Do** use ink fill (`--accent`/`--on-accent`) for the one primary action or the "on review" status — never a color — per the One Ink Rule.
- **Do** distinguish real client/hackathon work from self-directed practice work visually (solid vs. dashed, full vs. muted) any time new project rows are added.
- **Do** set anything data-like (status, code, timestamp, label) in IBM Plex Mono, uppercase.

### Don't:
- **Don't** introduce a saturated accent color anywhere in the system — this was tried (amber) and explicitly rejected; the system is monochrome-plus-one-functional-status-green now, not "pick a different hue."
- **Don't** reintroduce soft drop-shadows on ordinary cards — depth comes from the steel-frame border, not shadow stacking.
- **Don't** make a manifest row look clickable (hover state, "→" action) unless it actually leads somewhere.
- **Don't** use a decorative grid-line or blueprint background outside an actual measurement/board surface — that pattern was deliberately rejected during the direction round.
- **Don't** give the custom cursor a pure theme-ink color with `mix-blend-mode: difference` — it disappears against a same-colored ground. It's intentionally a fixed neutral gray for this reason; keep it that way if it's ever touched again.
