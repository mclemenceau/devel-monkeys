// ==UserScript==
// @name         Colorize Diff, compressed Diff and Patch Files
// @namespace    https://github.com/mclemenceau
// @version      1.0.1
// @author       Matthieu Clemenceau
// @description  Highlights .diff files with standard syntax colors
// @homepage     https://github.com/mclemenceau/devel-monkeys
// @homepageURL  https://github.com/mclemenceau/devel-monkeys
// @icon         https://raw.githubusercontent.com/mclemenceau/devel-monkeys/refs/heads/main/icons/color-diff-icon.ico
// @updateURL    https://raw.githubusercontent.com/mclemenceau/devel-monkeys/refs/heads/main/scripts/ColorDiff.js
// @downloadURL  https://raw.githubusercontent.com/mclemenceau/devel-monkeys/refs/heads/main/scripts/ColorDiff.js
// @supportURL   https://github.com/mclemenceau/devel-monkeys/issues
// @match        *://*/*.diff
// @match        *://*/*.diff.gz
// @match        *://*/*.patch

// ==/UserScript==

(function() {
    'use strict';

    function colorizeDiff() {
        const pre = document.querySelector("pre");
        if (!pre) return;

        const lines = pre.innerHTML.split("\n");
        const coloredLines = lines.map(line => {
            if (line.startsWith("+") || line.startsWith("diff ")) {
                return `<span style="color: green;">${line}</span>`;
            } else if (line.startsWith("-")) {
                return `<span style="color: red;">${line}</span>`;
            } else if (line.startsWith("@")) {
                return `<span style="color: orange; font-weight: bold;">${line}</span>`;
            }
            return line;
        });

        pre.innerHTML = coloredLines.join("\n");
    }

    colorizeDiff();
})();

