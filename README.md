# SlimCord

**Current version:** 0.1.4

Targeted optimizations that aim to cut Discord's CPU and memory usage for a smaller footprint — without sacrificing functionality.

## Goals

Discord can be heavy: high CPU usage during normal interaction, growing memory footprint over long sessions, and general sluggishness. SlimCord sets out to tackle these with surgical optimizations that cut wasted work while preserving every feature you actually use. The aim is a leaner, snappier Discord — not a stripped-down one.

There are no per-optimization settings: enabling SlimCord applies all of its optimizations together. Each one is a precise webpack patch applied at load time, so there's no background polling or runtime overhead from SlimCord itself.

## Features

**No optimizations are active in this version.** SlimCord's only patch was retired in v0.1.4 (see below), and the next one will be added once there's a measurable win to ship. Until then, enabling SlimCord changes nothing about how Discord runs.

### Retired: hover setState guard (v0.1.0 – v0.1.3)
This patch guarded the `setState` calls in Discord's `useHover` hook, on the theory that they fired even when the hover state hadn't changed. A November 2026 Discord update renamed the variables it matched, so it stopped applying. Re-reading the current code showed the guard had nothing left to save: the hook (React Aria's `useHover`) already skips `setState` unless the hover state really changes. The guard also read React state inside a memoized callback, where it can be stale, which risks elements getting stuck in their "hovered" look. So it was removed rather than ported.

## How It Works

SlimCord uses Vencord's webpack patch system to surgically modify Discord's internal modules at load time. No DOM polling, no MutationObservers — just targeted code patches that apply once on startup. (There are none at the moment; see Features.)

## Installation

This is a [Vencord](https://github.com/Vendicated/Vencord) userplugin.

1. Clone or copy this folder into `src/userplugins/slimCord/` inside your Vencord repo.
2. Run `pnpm build` from the Vencord repo root. Don't use `pnpm buildStandalone`: a standalone build's updater replaces `dist/` with the official release, which drops every userplugin.
3. Fully quit and relaunch Discord.
4. Enable **SlimCord** in Vencord settings → Plugins.
