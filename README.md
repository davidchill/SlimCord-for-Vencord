# SlimCord

**Current version:** 0.1.3

Targeted optimizations that aim to cut Discord's CPU and memory usage for a smaller footprint — without sacrificing functionality.

## Goals

Discord can be heavy: high CPU usage during normal interaction, growing memory footprint over long sessions, and general sluggishness. SlimCord sets out to tackle these with surgical optimizations that cut wasted work while preserving every feature you actually use. The aim is a leaner, snappier Discord — not a stripped-down one.

There are no per-optimization settings: enabling SlimCord applies all of its optimizations together. Each one is a precise webpack patch applied at load time, so there's no background polling or runtime overhead from SlimCord itself.

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
