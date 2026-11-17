# SlimCord Changelog

## 0.1.2 — 2026-11-17
- Fixed a TypeScript type error at `index.tsx:13`: `"Performance"` isn't one of Vencord's allowed plugin tags (`PluginTags` in `src/utils/types.ts`). Removed it; SlimCord keeps the `"Utility"` tag
- Added `searchTerms: ["performance", "optimization"]` so searching "performance" in Vencord's plugin list still finds SlimCord. The v0.1.1 description no longer contains that word, and tags are never searched (they only feed the tag filter dropdown)
- `tsc --noEmit` now reports 0 errors for SlimCord
- No patch changes; the hover setState guard is unchanged

## 0.1.1 — 2026-11-17
- Reworded the plugin description (`index.tsx` `description` and the README tagline) to state SlimCord's mission: reduce Discord's CPU and memory usage with targeted optimizations, without sacrificing functionality
- Added a "Goals" section to the README explaining the "leaner, not stripped-down" approach, and stating plainly that there are no per-optimization settings (enabling SlimCord applies all of its patches together)
- Added a `.gitignore` so local AI agent context files (`CLAUDE.md`, `AGENTS.md`, `.claude/`) stay out of the repo
- No code or patch changes; the hover setState guard is unchanged

## 0.1.0 — 2026-05-03
- Initial release
- Webpack patch on Discord's `useHover` hook: guards `setState` calls so hover state updates only fire when the boolean value actually changes, preventing redundant React re-renders on every `pointerover` event across all hoverable elements
