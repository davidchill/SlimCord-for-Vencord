# SlimCord Changelog

## 0.1.1 — 2026-11-17
- Reworded the plugin description (`index.tsx` `description` and the README tagline) to state SlimCord's mission: reduce Discord's CPU and memory usage with targeted optimizations, without sacrificing functionality
- Added a "Goals" section to the README explaining the "leaner, not stripped-down" approach, and stating plainly that there are no per-optimization settings (enabling SlimCord applies all of its patches together)
- Added a `.gitignore` so local AI agent context files (`CLAUDE.md`, `AGENTS.md`, `.claude/`) stay out of the repo
- No code or patch changes; the hover setState guard is unchanged

## 0.1.0 — 2026-05-03
- Initial release
- Webpack patch on Discord's `useHover` hook: guards `setState` calls so hover state updates only fire when the boolean value actually changes, preventing redundant React re-renders on every `pointerover` event across all hoverable elements
