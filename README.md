# SlimCord

**Current version:** 0.1.0

Improves Discord's runtime performance by reducing unnecessary work.

## Features

### Hover setState guard
Discord's `useHover` hook fires `setState` on every `pointerover` event, even when the hover state hasn't changed. SlimCord patches the hook so state updates only trigger when the value actually flips, cutting redundant React re-renders during normal mouse movement.

## How It Works

SlimCord uses Vencord's webpack patch system to surgically modify Discord's internal modules at load time. No DOM polling, no MutationObservers — just targeted code patches that apply once on startup.

## Installation

This is a [Vencord](https://github.com/Vendicated/Vencord) userplugin.

1. Clone or copy this folder into `src/userplugins/slimCord/` inside your Vencord repo.
2. Run `pnpm buildStandalone` from the Vencord repo root.
3. Fully quit and relaunch Discord.
4. Enable **SlimCord** in Vencord settings → Plugins.
