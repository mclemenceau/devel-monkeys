// ==UserScript==
// @name         Colorize Diff, compressed Diff and Patch Files
// @namespace    http://github.com/mclemenceau
// @version      1.0.1
// @description  Highlights .diff files with standard syntax colors
// @author       Matthieu Clemenceau
// @icon
// @match        *://*/*.diff
// @match        *://*/*.diff.gz
// @match        *://*/*.patch
// @grant        none
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

