# UI/UX Pro — Premium Interface Audit & Upgrade

Run a full UI/UX audit on the specified component, page, or entire codebase, then apply improvements.
Invoke as `/uiux-pro` with an optional target: `/uiux-pro Hero` or `/uiux-pro homepage` or `/uiux-pro all`.

---

## Project Design System (source of truth)

### Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Noir | `#080808` | Primary backgrounds (hero, dark sections) |
| Anthracite | `#171717` | Secondary dark bg, body text on light |
| Or/Gold | `#C6A15B` | CTAs, accents, borders, labels, icons |
| Gold hover | `#b38e4a` | Gold interactive state |
| Crème | `#F7F3EA` | Light section backgrounds |
| Crème foncé | `#EDE8DC` | Cards on crème bg |
| Bordeaux | `#5A1F2B` | Accent CTAs (WhatsApp strip, events) |
| Gris | `#A3A3A3` | Muted text, captions |

### Typography
| Role | Class | Font |
|------|-------|------|
| Headings H1–H3 | `font-serif` | Cormorant Garamond |
| Body / UI | `font-sans` | Inter |
| Labels / tags | `text-xs font-semibold uppercase tracking-widest text-[#C6A15B]` | Inter |

### Spacing rhythm
- Section: `py-24` (desktop), `py-16` (mobile via responsive)
- Container: `max-w-7xl mx-auto px-6`
- Card gap: `gap-4` or `gap-5`
- Card padding: `px-6 py-6` or `p-8` for large cards

### UI atoms
- **Button** variants: `primary` (gold fill) · `outline-gold` · `outline-light` (white border) · `whatsapp` (green)
- **Card**: `bg-white rounded-sm border border-black/[0.03] shadow-sm hover:-translate-y-2 hover:shadow-lg`
- **Section label**: `text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block`
- **Borders**: `border-black/[0.06]` (cards) · `border-[#C6A15B]/20` (accent) · `border-white/10` (dark bg)
- **Radius**: `rounded-sm` everywhere (no `rounded-lg` — too casual for premium)
- **Animations**: `FadeIn`, `FadeInStagger` + `FadeInItem` from `@/components/ui/FadeIn`

---

## Audit Checklist

Run every item against the target. For each failure, produce a fix.

### 1. Hierarchy & Readability
- [ ] H1 uses `font-serif text-4xl md:text-6xl font-normal leading-tight`
- [ ] H2 uses `font-serif text-3xl md:text-4xl`
- [ ] H3 uses `font-serif text-xl md:text-2xl`
- [ ] Body text: `text-sm leading-relaxed` or `text-base leading-relaxed`
- [ ] Section labels present before each H2 (gold uppercase tag)
- [ ] No wall-of-text — max 3 lines per paragraph on mobile

### 2. Color consistency
- [ ] No hardcoded hex outside the palette above (flag any `#xxxxxx` not in the palette)
- [ ] Gold used only for accents — never as a background for large areas
- [ ] Dark sections (`bg-[#080808]`) have `text-white` or `text-white/70` body
- [ ] Light sections (`bg-white`, `bg-[#F7F3EA]`) have `text-[#080808]` or `text-gray-600` body
- [ ] CTAs on dark bg: `primary` (gold) + `outline-light` (white border)
- [ ] CTAs on light bg: `primary` (gold) + `outline-gold`

### 3. Spacing & Layout
- [ ] All sections use `py-24` (not `py-12` or `py-20` — consistency)
- [ ] No section bleeds into adjacent without visual break (bg alternates or border-t)
- [ ] Grid gaps consistent: `gap-4` for small cards, `gap-6` for large cards
- [ ] Container always `max-w-7xl mx-auto px-6` — no narrower containers on full-width sections

### 4. Mobile-first responsiveness
- [ ] All grids have `grid-cols-1` base + `sm:grid-cols-2` + `lg:grid-cols-3` or similar
- [ ] No fixed `w-[Npx]` widths that break on mobile
- [ ] Hero title readable on 375px (max `text-4xl`, no `text-6xl` without responsive prefix)
- [ ] Buttons full-width on mobile (`w-full sm:w-auto`) when stacked
- [ ] Touch targets ≥ 44px height

### 5. Animation & Interaction
- [ ] Every new section that enters viewport uses `FadeIn` (direction: up by default)
- [ ] Card grids use `FadeInStagger` + `FadeInItem` (not individual `FadeIn` per card — stagger is smoother)
- [ ] Hover states on cards: `hover:-translate-y-1` or `hover:-translate-y-2` (subtle lift)
- [ ] Hover states on links: color transition `transition-colors`
- [ ] No `transition-all` on large elements (performance) — prefer `transition-colors` or `transition-transform`
- [ ] No animation on elements already visible above fold (pointless + jarring)

### 6. Premium details
- [ ] Section labels (gold uppercase) present before every H2
- [ ] Separator `border-t border-black/[0.07]` or `border-white/10` between logical sub-blocks
- [ ] Cards don't have `rounded-lg` — use `rounded-sm` only
- [ ] No box-shadows above `shadow-md` (avoid heavy dropshadows)
- [ ] Images use `object-cover` with explicit `sizes` prop on `next/image`
- [ ] No emoji used as UI icons — use Lucide React icons instead
  - Exception: `★` for star ratings (semantic, not decorative)

### 7. Accessibility
- [ ] All `<a target="_blank">` have `rel="noopener noreferrer"`
- [ ] All images have descriptive `alt` text (not empty, not "image")
- [ ] Form inputs have associated `<label>` elements
- [ ] Color contrast: gold `#C6A15B` on white fails WCAG AA for small text — use only for decorative labels or large text
- [ ] Interactive elements have visible focus ring (not `outline-none` without replacement)
- [ ] `aria-hidden="true"` on purely decorative icons

### 8. Copy & Microcopy
- [ ] Section headings are benefit-driven, not feature-driven ("Discover the Beaujolais" > "Beaujolais Section")
- [ ] CTA labels are action verbs + object ("Book a wine tour", not "Click here")
- [ ] Price mentions include "from" / "dès" prefix (never bare prices without qualifier)
- [ ] No orphaned words on H1/H2 (last word alone on a line) — add `max-w` or reword

---

## Upgrade Patterns

### Pattern A — Section label + H2 + subtext
```tsx
<FadeIn>
  <div className="text-center mb-12">
    <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-3 block">
      {label}
    </span>
    <h2 className="font-serif text-4xl text-[#080808] mb-4">{heading}</h2>
    <p className="text-gray-500 text-base max-w-xl mx-auto">{subtext}</p>
  </div>
</FadeIn>
```

### Pattern B — Feature card grid
```tsx
<FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {items.map((item) => (
    <FadeInItem key={item.title}>
      <div className="border border-[#C6A15B]/20 bg-[#F7F3EA] rounded-sm p-6">
        <span className="text-[#C6A15B] font-serif text-lg mr-2">✓</span>
        <span className="font-semibold text-[#080808] text-sm">{item.title}</span>
        <p className="text-gray-500 text-xs leading-relaxed mt-2">{item.desc}</p>
      </div>
    </FadeInItem>
  ))}
</FadeInStagger>
```

### Pattern C — Dark section region card
```tsx
<div className="border border-white/10 rounded-sm p-8 hover:border-[#C6A15B]/40 transition-colors">
  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C6A15B] border border-[#C6A15B]/30 px-3 py-1 rounded-full">
    {tag}
  </span>
  <h3 className="font-serif text-3xl text-white mt-4 mb-2">{name}</h3>
  {/* content */}
  <a href={href} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C6A15B] hover:gap-4 transition-all">
    {cta} →
  </a>
</div>
```

### Pattern D — WhatsApp CTA strip
```tsx
<section className="bg-[#5A1F2B] py-16">
  <div className="max-w-3xl mx-auto px-6 text-center">
    <h2 className="font-serif text-3xl text-white mb-3">{heading}</h2>
    <p className="text-white/70 text-sm mb-8">{subtext}</p>
    <div className="flex flex-wrap justify-center gap-4">
      <Button href="https://wa.me/33658593922" variant="whatsapp" external>
        {lang === "en" ? "Message on WhatsApp" : "Message sur WhatsApp"}
      </Button>
      <Button href="tel:+33658593922" variant="outline-light">
        {lang === "en" ? "Call now" : "Appeler maintenant"}
      </Button>
    </div>
  </div>
</section>
```

### Pattern E — Stats box (trust signal)
```tsx
<div className="bg-[#F7F3EA] border border-[#C6A15B]/20 rounded-sm p-8 grid grid-cols-2 gap-6">
  {stats.map(({ value, label }) => (
    <div key={label} className="text-center">
      <p className="font-serif text-4xl text-[#C6A15B] mb-1">{value}</p>
      <p className="text-xs uppercase tracking-widest text-gray-500">{label}</p>
    </div>
  ))}
</div>
```

---

## Execution Instructions

1. **If a specific target is given** (e.g. `/uiux-pro Hero`):
   - Read the target file
   - Run the checklist — list every failure with file + line
   - Apply all fixes in a single Edit pass
   - Run `npm run build` to verify
   - Commit: `"style(uiux): upgrade [ComponentName] — [list top 3 fixes]"`

2. **If `/uiux-pro all` or no target**:
   - Use `/orchestrate` to fan out:
     - **Haiku** agents: audit-only pass on each component (read + report failures)
     - **Sonnet** agents: apply fixes to each component in parallel (non-overlapping files)
   - Aggregate findings into a single report
   - Commit all fixes: `"style(uiux): full UI/UX pro pass — N fixes across M components"`

3. **Always**:
   - Do not change component logic, data, or copy — only visual/structural markup
   - Do not introduce new dependencies
   - Match existing import style
   - Never break Server Component constraints (no `useState`/`useEffect` in non-client files)
