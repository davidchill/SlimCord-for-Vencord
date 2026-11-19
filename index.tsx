/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

export default definePlugin({
    name: "SlimCord",
    description: "Targeted optimizations that aim to cut Discord's CPU and memory usage for a smaller footprint, without sacrificing functionality.",
    authors: [{ name: "David Rodriguez", id: 0n }],
    tags: ["Utility"],
    searchTerms: ["performance", "optimization"],

    // No active patches. The hover setState guard (find '"hoverstart"') was retired in
    // v0.1.4: Discord's useHover (React Aria) already skips setState unless hover really
    // changes, and the guard read stale state inside a useMemo. See CHANGELOG 0.1.4.

    start() {},
    stop() {},
});
