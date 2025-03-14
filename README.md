# Devel Monkeys 🐵

## Introduction
**Devel Monkeys** is a collection of simple scripts designed to ease development operations like viewing diff files or build log.
I've used this mostly while contributing to Ubuntu but I don't see why it can't used elsewhere.

Currently, this repository includes:
- ![Color Diff Icon](icons/color-diff-icon-16x16.png) **[Color Diff Viewer (Tampermonkey Script)](https://raw.githubusercontent.com/mclemenceau/devel-monkeys/main/scripts/color-diff.user.js)**: Enhances `.diff`, `.diff.gz` and `.patch` files viewed in Chrome/Firefox by adding syntax highlighting (green for additions, red for deletions, orange for headers).
**[Color Build Log Viewer (Tampermonkey Script)](https://raw.githubusercontent.com/mclemenceau/devel-monkeys/main/scripts/color-buildlog.user.js)**: Enhances `BUILDING.txt.gz` log files viewed in Chrome/Firefox by adding syntax highlighting for warnings and Error. Use mostly for Ubuntu packages build failures.

This project is intended to grow with more scripts relevant to helping development operations.

---

## 📦 Installation
### Install Tampermonkey
- Download and install **[Tampermonkey](https://www.tampermonkey.net/)** for Chrome or Firefox.
- Once Tampermonkey is installed clicking on the script should be enough to have it installed.

### If needed Add the Script Manually
- Open **Tampermonkey's** dashboard and create a **new script**.
- Copy and paste the contents of [`scripts/color-diff.user.js`](scripts/color-diff.user.js) into it.
- Save and enable the script.

---
