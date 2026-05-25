# Orchestrate — 3-Tier Agent Strategy

Decompose the current task into subtasks and dispatch each to the right Claude model tier based on complexity and cost-efficiency.

## Tier Decision Matrix

| Tier | Model | Token cost | Use when |
|------|-------|-----------|----------|
| **Haiku** | `haiku` | ⚡ Cheapest | File reads, grep/search, renaming, copy edits, format fixes, simple regex, translation of existing strings, quick lookups, boilerplate generation from a clear template |
| **Sonnet** | `sonnet` | ⚖️ Balanced | Standard feature implementation, component creation, bug fixes, refactors, API integration, writing tests, SEO/metadata updates, multi-file edits with moderate logic |
| **Opus** | `opus` | 🧠 Premium | System architecture decisions, complex multi-step reasoning, security design, performance trade-off analysis, reviewing ambiguous requirements, cross-cutting refactors affecting 10+ files, anything where a wrong decision is expensive to reverse |

## Routing Rules

Apply these in order — first match wins:

1. **Haiku** if the task can be fully described by: "find X", "rename X to Y", "copy this pattern N times", "translate this string", "read file and summarize", "add a missing prop", "fix a typo/lint error"
2. **Opus** if the task involves: architectural trade-offs, security-sensitive design, ambiguous spec that needs reasoning before coding, or output that other agents will depend on for direction
3. **Sonnet** for everything else (default coding tier)

## How to Execute

1. **Analyse** the full request — identify all independent subtasks
2. **Classify** each subtask to a tier using the matrix above
3. **Batch** subtasks of the same tier when their files don't overlap
4. **Dispatch** using the Agent tool with `model` set to the tier's model name:

```
Agent(
  subagent_type = "general-purpose",   # or "claude-code-guide", "Explore", "Plan", etc.
  model         = "haiku"              # "haiku" | "sonnet" | "opus"
  prompt        = "...",
  run_in_background = true             # for parallel work
)
```

5. **Sequence** when outputs of tier N feed into tier N+1 (e.g. Opus designs → Sonnet implements → Haiku cleans up)

## Example Decomposition

**Request**: "Add a Burgundy wine tour page, update the sitemap, and decide whether to use a shared layout component or keep pages independent."

| Subtask | Tier | Reason |
|---------|------|--------|
| Decide shared layout vs standalone | **Opus** | Architectural trade-off, affects all future pages |
| Implement the page based on Opus decision | **Sonnet** | Standard component creation |
| Add route to sitemap.ts | **Haiku** | Mechanical file edit, no logic |
| Translate page copy EN→FR | **Haiku** | String translation from existing template |

Dispatch: Opus first (blocking), then Sonnet + Haiku in parallel once Opus returns.

## Reporting

After all agents complete, summarise:
- What each tier handled
- Total agents spawned per tier
- Any handoffs between tiers
- Files modified

## Notes

- Never use Opus for tasks Sonnet can handle — the cost difference is ~10×
- Never use Haiku for tasks requiring judgment — false economy
- Parallel dispatch (same-tier, non-overlapping files) is always preferred over serial
- If unsure between Haiku and Sonnet, choose Sonnet
- If unsure between Sonnet and Opus, ask yourself: "Would a wrong architecture decision here require rewriting 5+ files?" If yes → Opus
