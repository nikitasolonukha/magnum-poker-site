---
name: MAGNUM
description: Editorial site for a Moscow sports-poker house at Flacon
colors:
  ink: "#08090B"
  warm-ink: "#14070A"
  wine-deep: "#26050C"
  wine-dark: "#430814"
  burgundy: "#7D0B29"
  burgundy-active: "#930E31"
  burgundy-light: "#B22554"
  paper: "#F1EFE9"
  paper-warm: "#ECE8E2"
  mute: "#8E8B8C"
typography:
  display: Unbounded
  body: Onest
radius: "4px"
spacing:
  page-gutter-mobile: "16–20px"
  page-gutter-desktop: "32–64px"
  content-max: "1360–1440px"
---

# Design System: MAGNUM

## Overview

**Creative North Star: "House at night + magazine + Flacon — never a template."**

MAGNUM mixes three atmospheres at once: a two-storey house in the evening, fashion/editorial type, and Design Factory Flacon (city, brick, culture). Sports poker is the activity, not the visual cliché. The site must not feel like a neuro-landing, a casino, a neon club, or a corporate brochure.

Density is editorial: long readable columns, large headings, thin rules, numbered sequences. Motion is sparse. If a section could be swapped with a generic Tailwind block, it is wrong.

**Key Characteristics:**
- Warm black / wine / paper, never purple-cyan AI palettes
- Unbounded + Onest only
- Radii 0–12px; 4px default
- Real club photos from `/public`
- Visible copy only from `data/content.ts`
- Each major section has its own composition (confirmed: current page still feels too template-like — fix that, do not freeze it)

## Colors

A wine-and-paper system. Burgundy is the voice, not the wallpaper.

### Primary
- **House wine** (`#7D0B29`): primary buttons, active states, italic title accents
- **Active wine** (`#930E31`): hover of primary

### Secondary
- **Bright wine** (`#B22554`): small typographic accents, fact dots — never long body text

### Neutral
- **Night** (`#08090B`): page ground, dark sections, primary text on paper
- **Warm night** (`#14070A`): dark panels
- **Deep cellar** (`#26050C` / `#430814`): burgundy fields, featured quotes
- **Paper** (`#F1EFE9`): light body text on dark, primary CTA on wine
- **Warm paper** (`#ECE8E2`): editorial light sections
- **Mute** (`#8E8B8C`): captions and labels only. Never long paragraphs on dark or wine.

**The Rarity Rule.** Burgundy fills at most one major band per viewport sequence. Do not alternate every section burgundy.

**The Contrast Rule.** Body copy on dark is paper (`#F1EFE9` at high opacity), not mute. Check pairs on [whocanuse.com](https://whocanuse.com) before inventing a new combination.

## Typography

**Display Font:** Unbounded (Cyrillic + Latin via `next/font`)  
**Body Font:** Onest  
**No third family** unless the customer Figma file specifies a Cyrillic serif.

**Character:** Display is architectural and slightly condensed; body is calm and human. Editorial contrast comes from size, italic, case, and column width — not from a decorative serif stolen from Pinterest.

### Hierarchy
- **Display / H1** (bold, `clamp(36px, 10vw, 52px)` mobile → `clamp(58px, 6.5vw, 96px)` desktop, lh ~0.92): one H1 only — the approved MAGNUM line
- **Headline / H2** (bold, `clamp(32px, 9vw, 46px)` → 52–84px): section titles; one italic wine word allowed
- **Title / H3** (semibold, 20–28px): step and feature titles
- **Body** (regular, 16–18px mobile, 17–20px desktop, lh 1.5–1.65, max ~52–60ch): leads and answers
- **Label** (semibold, 11–14px, tracking 0.15–0.2em, uppercase): eyebrows only

`text-wrap: balance` on headings, `pretty` on paragraphs. No negative letter-spacing that breaks Cyrillic.

**The One H1 Rule.** There is a single `h1` on the page.

## Layout

12 columns desktop, 8 tablet, 4 mobile. Content max ~1440px. Gutters 16–20px mobile, 32–64px desktop. Section vertical rhythm ~72–112px mobile.

Asymmetry is required between major sections: sticky-or-split timeline, bento why, mosaic gallery, quote rail, line FAQ, wine CTA. Do not reuse one card grid everywhere.

Images may bleed the inner container; text stays on the grid. `100svh`/`100dvh` instead of `100vh` for hero. `scroll-margin-top` 72–88px for header.

## Elevation & Depth

No glassmorphism, no heavy drop shadows, no neon glow. Depth = photography, overlays, scale, overlap of chip vs type.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat. A shadow is allowed only if a line, background shift, or crop cannot separate layers.

**The Chip Is Not the Hero Rule.** The photograph and the H1 own the first screen. The chip is a smaller object; it must not cover the heading, the CTA, or read as a splash screen.

## Shapes

Default radius **4px**. Images may be fully square. One intentionally round object is allowed: the chip. No 28px SaaS pills. No pill badges for the five hero facts.

Borders: 1px `black/10` on paper, `warm-white/8–15` on dark.

## Components

### Buttons
- **Shape:** 4px
- **Primary:** burgundy fill, paper text, height 44–56px, padding 24–40px
- **On wine fields:** paper fill, black text (final CTA)
- **Ghost:** 1px border, no fill
- **Hover:** background shift + arrow translate 3–5px. No magnetic cursor on touch
- **Focus:** visible `focus-visible` ring in burgundy/paper
- External links: `target="_blank" rel="noopener noreferrer"`

### Icons
One set: **Lucide** (`lucide-react` already in the stack), stroke ~1.5, sizes 16/20/24. Do not mix Phosphor, Heroicons, and Lucide. Decorative arrows in type (`→` `↗`) are allowed without an icon font. Brand marks: existing MAGNUM spade / chip assets only — never svgl competitor logos.

### Accordion (FAQ)
Button + `aria-expanded`. Plus rotates to ×. Content stays in DOM. ~280ms ease, instant if `prefers-reduced-motion`.

### Media
`next/image` with real `sizes`. Local files only. Do not load `magnum-live.mp4` as mobile LCP. No WebGL chip on mobile.

## Motion

GSAP for sequenced hero; CSS for FAQ; native scroll-snap for gallery/reviews. Never GSAP + Motion on the same transform. Easing from [easings.net](https://easings.net): cubic, not bounce/elastic.

`prefers-reduced-motion`: content visible immediately, no autoplay video, no chip spin, accordion instant.

## HTML design system (canonical primitives)

Use these shapes; do not invent a second button language.

```html
<!-- Primary -->
<a class="inline-flex items-center h-12 px-8 bg-burgundy text-warm-white text-[15px] font-semibold rounded-[4px] hover:bg-burgundy-active" href="https://t.me/magnum_app_bot" target="_blank" rel="noopener noreferrer">Записаться на игру →</a>

<!-- Ghost -->
<a class="inline-flex items-center h-12 px-6 border border-black/20 text-[14px] font-semibold rounded-[4px]" href="https://www.instagram.com/magnum_poker_moscow/" target="_blank" rel="noopener noreferrer">Смотреть фото в Instagram ↗</a>

<!-- Eyebrow + H2 -->
<p class="text-[12px] font-semibold tracking-[0.2em] uppercase text-muted">Формат вечера</p>
<h2 class="font-display font-bold text-[clamp(32px,9vw,46px)] leading-[0.95]">Как проходит <span class="italic text-burgundy">вечер</span></h2>

<!-- Hairline -->
<hr class="border-0 border-t border-black/10" />
```

## Content contract (visual work still obeys this)

`data/content.ts` is the only source of meaningful visible copy. Do not rewrite, shorten, or invent phone, years, ratings, or legal footer lines. Structure order is fixed in `app/page.tsx`.

## Anti-slop (this project)

Forbidden: Inter-only look, purple gradients, glass cards, 3-up equal cards, dashed placeholders, `href="#"`, gray body on burgundy, casino gold/neon, repeating chip-rails, “ТВОЙ ХОД.”, GameFormats, old reviews.

Detector: `npx impeccable detect app components` after UI edits. Hooks already installed under `.cursor/hooks.json`.

## Reference workflow

Before inventing a layout, pull 1–2 live references (Godly / Siteinspire / Awwwards / Pinterest board) and 1 component pattern (21st.dev / shadcn / React Bits only if motion is needed). Adapt grid and rhythm; never paste foreign photos, logos, or copy. Map lives in `docs/reference-map.md` and `docs/interface-toolkit.md`.
