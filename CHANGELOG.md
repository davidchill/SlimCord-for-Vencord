# SlimCord Changelog

## 0.1.0 — 2026-05-03
- Initial release
- Webpack patch on Discord's `useHover` hook: guards `setState` calls so hover state updates only fire when the boolean value actually changes, preventing redundant React re-renders on every `pointerover` event across all hoverable elements
