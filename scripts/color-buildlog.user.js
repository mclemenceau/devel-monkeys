// ==UserScript==
// @name         Color build logs
// @namespace    https://github.com/mclemenceau
// @version      1.0.1
// @author       Matthieu Clemenceau
// @description  Highlights Build log Error and Warnings
// @homepage     https://github.com/mclemenceau/devel-monkeys
// @homepageURL  https://github.com/mclemenceau/devel-monkeys
// @updateURL    https://raw.githubusercontent.com/mclemenceau/devel-monkeys/main/scripts/color-buildlog.user.js
// @downloadURL  https://raw.githubusercontent.com/mclemenceau/devel-monkeys/main/scripts/color-buildlog.user.js
// @supportURL   https://github.com/mclemenceau/devel-monkeys/issues
// @match        *://*/*BUILDING.txt.gz


// ==/UserScript==

(function() {
    'use strict';

    function highlightLog() {
        const pre = document.querySelector("pre"); // Build logs are usually inside a <pre> tag
        if (!pre) return;

        let logText = pre.innerHTML;

        // Apply color coding to different log messages
        const replacements = [
            { regex: /(^|\s)(error:.*?)(\s|$)/gi, color: 'red' }, // Errors
            { regex: /(^|\s)(warning:.*?)(\s|$)/gi, color: 'orange' }, // Warnings
            { regex: /^E: .*/gm, color: 'red', bold: true } // Lines starting with "E: "
        ];

        // Wrap detected keywords with colored spans
        replacements.forEach(({ regex, color, bold }) => {
            logText = logText.replace(regex, (match) => {
                return `<span style="color:${color}; ${bold ? 'font-weight:bold;' : ''}">${match}</span>`;
            });
        });

        // Replace the preformatted text with the new styled version
        pre.innerHTML = logText;
    }

    highlightLog();

})();

