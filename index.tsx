/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

export default definePlugin({
    name: "SlimCord",
    description: "Improves Discord's runtime performance by reducing unnecessary work.",
    authors: [{ name: "David Rodriguez", id: 0n }],
    tags: ["Performance", "Utility"],

    patches: [
        {
            // Discord's useHover hook fires setState on every pointerover event,
            // even when hover state is unchanged. Guard the calls so setState only
            // runs when the boolean value actually changes.
            find: '"hoverstart"',
            replacement: [
                {
                    match: /n&&n\(!0\),_\(!0\)/,
                    replace: "n&&n(!0),d||_(!0)"
                },
                {
                    match: /n&&n\(!1\),_\(!1\)/,
                    replace: "n&&n(!1),d&&_(!1)"
                }
            ]
        }
    ],

    start() {},
    stop() {},
});
