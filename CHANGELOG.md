# SlimCord Changelog

## 0.1.4 — 2026-11-18
- Retired the hover setState guard, SlimCord's only patch, instead of porting it. Discord's November 2026 rspack build renamed the minified variables it hard-coded (`n&&n(!0),_(!0)` is now `r&&r(!0),d(!0)`), so `renderer_js.log` showed "Patch by SlimCord had no effect (Module id is 599291)" for both replacements. The renamed code is already in the oldest cached Discord build (2026-11-05), so the patch couldn't have applied on any build since then
- Why not port it with `\i` captures: re-reading module 599291 showed the hook is React Aria's `useHover`, which already guards both setter calls with a ref (`hoverStart` returns early when `isHovered` is already true, and `hoverEnd` only runs when it's true). So `setState` only fires on real hover changes, and the guard had nothing to save. The guard also read the `isHovered` state inside a `useMemo` whose dependency list doesn't include it, so the value can be stale, and `isHovered&&setHovered(false)` could then never fire. That risks elements staying stuck in their "hovered" state
- SlimCord now has no active optimizations. The plugin definition (name, description, tags, `searchTerms`) is unchanged, and the next optimization will be added as a new patch once there's a measurable win
- README: the Features section says no optimizations are active, with a "Retired" note explaining why. Installation now says `pnpm build` instead of `pnpm buildStandalone`, because a standalone build's updater replaces `dist/` with the official release and drops every userplugin

## 0.1.3 — 2026-11-17
- Reworded the plugin description (`index.tsx` `description` and the README tagline) so it states CPU and memory reduction as a goal, not a result: "Targeted optimizations that aim to cut Discord's CPU and memory usage for a smaller footprint, without sacrificing functionality." The one shipped patch (the hover setState guard) mainly saves CPU by skipping redundant re-renders; memory savings aren't shipped yet
- README "Goals": "SlimCord tackles these" → "SlimCord sets out to tackle these", for the same reason (the list it refers to includes the growing memory footprint)
- No code or patch changes; the hover setState guard is unchanged

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
