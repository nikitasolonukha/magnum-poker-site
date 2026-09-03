# Interface toolkit (agent)

Use these when designing or reviewing MAGNUM UI. Do not replace `DESIGN.md` or `data/content.ts`.

## References (look first)

| Source | Use |
| --- | --- |
| [dribbble.com](https://dribbble.com) | Crops of composition, not whole mockups as truth |
| [pinterest.com](https://pinterest.com) | Project board → screenshots to the agent |
| [godly.design](https://godly.design) | Live first screens, footers, buttons |
| [awwwards.com](https://awwwards.com) | Craft bar; skip heavy 3D you will not ship |
| [siteinspire.com](https://siteinspire.com) | Filter: type, minimal, grid |

## Ready-made pieces (steal structure, restyle to MAGNUM tokens)

| Source | Use |
| --- | --- |
| [ui.shadcn.com](https://ui.shadcn.com) | Accessible primitives (accordion, dialog) |
| [21st.dev](https://21st.dev) | Component prompts — restyle, do not keep default shadcn look |
| [daisyui.com](https://daisyui.com) | Block ideas on Tailwind |
| [reactbits.dev](https://reactbits.dev) | Motion only if it serves MAGNUM; no marquee spam |
| [motion.dev](https://motion.dev) | Local transitions; not on the same node as GSAP transform |

## Images / video

| Source | Use |
| --- | --- |
| Local `public/` | Default. Club photos, chips, building |
| VelsVisual skill (`visual`) | Generate only if a real asset is missing. Needs `KIE_API_KEY`. Paid credits. `npx velsvisual …` |

## Type

| Source | Use |
| --- | --- |
| Unbounded + Onest | Locked in DESIGN.md |
| [fontshare.com](https://fontshare.com) | Only if Figma adds a licensed Cyrillic family |
| [typewolf.com](https://typewolf.com) | Pairing taste, not a third font by default |
| [utopia.fyi](https://utopia.fyi) | Fluid type scales if clamp() needs a system |

## Icons / marks

| Source | Use |
| --- | --- |
| [lucide.dev](https://lucide.dev) | Only icon set |
| [phosphoricons.com](https://phosphoricons.com) | Do not mix with Lucide |
| [svgl.app](https://svgl.app) | Never drop random company logos on MAGNUM |

## Finish

| Source | Use |
| --- | --- |
| [haikei.app](https://haikei.app) | Optional SVG fields; MAGNUM already has `magnum-bg.svg` |
| [squoosh.app](https://squoosh.app) | Compress new photos before `public/` |
| [whocanuse.com](https://whocanuse.com) | Contrast of body on wine/paper |
| [easings.net](https://easings.net) | Cubic easings; no bounce |

## Skills already installed in this repo

- `.cursor/skills/impeccable` — `/impeccable …`, 61-rule detector, hooks
- `.cursor/skills/design-taste-frontend` — layout/type/motion taste
- `.cursor/skills/redesign-existing-projects`
- `.cursor/skills/image-to-code`
- `.cursor/skills/visual` — VelsVisual generation (key not set)
