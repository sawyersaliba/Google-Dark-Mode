// ==UserScript==
// @name         Dark Mode - Google Calendar
// @namespace    https://github.com/sawyersaliba/google-dark-mode
// @version      1.1.0
// @description  IMPORTANT: Make sure to also enable Google Calendar's native dark mode for best performance.
// @author       Sawyer Saliba
// @match        https://calendar.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=128&domain=google.com
// ==/UserScript==

/* Change Accent Colors Here */
const accent = '#0090ff';
/* Change Accent Colors Here */

/* Advanced Color Options */
const mainBackground = '#0e0e0e';
const secondaryBackground = '#131313';
const mainText = '#d7d7d7';
const secondaryText = '#a7a7a7';
const selectorOpacity = '25';
const gridColor = '#3f3f3f';
/* Advanced Color Options */

/* DO NOT EDIT CODE BELOW THIS LINE */
(function() {
    'use strict';

    const aCol1 = accent;

    const css = `
        body {
            --gm3-sys-color-surface: ${mainBackground} !important;
            --gm3-sys-color-surface-container: ${mainBackground} !important;
            --gm3-checkbox-selected-icon-color: ${mainBackground} !important;
            --gm3-sys-color-surface-container-highest: ${gridColor} !important;
            --gm3-sys-color-surface-variant: ${gridColor} !important;
            --gm3-sys-color-surface-container-low: ${secondaryBackground} !important;
            --gm3-sys-color-on-secondary-container: ${secondaryText} !important;
            --gm3-sys-color-surface-container-high: ${mainBackground} !important;
            --gm3-sys-color-on-primary-container: ${mainText} !important;
            --gm3-sys-color-on-background: ${mainText} !important;
            --gm3-sys-color-on-surface: ${mainText} !important;
            --gm3-sys-color-on-surface-variant: ${mainText} !important;
            --gm3-sys-color-on-primary: ${mainText} !important;
            --gm3-sys-color-primary-container: ${aCol1} !important;
            --gm3-sys-color-secondary-container: ${aCol1} !important;
            --gm3-sys-color-primary: ${aCol1} !important;
            --gm3-sys-color-outline: ${aCol1} !important;
            --gm3-sys-color-surface-bright: ${aCol1}50 !important;
        }
    `;

    function applyCSS() {
        if (!document.getElementById('darkmode-style')) {
            const style = document.createElement('style');
            style.id = 'darkmode-style';
            style.textContent = css;
            document.head.appendChild(style);
        }
    }

    applyCSS();
    const observer = new MutationObserver(applyCSS);
    observer.observe(document.documentElement, {childList: true, subtree: true});
})();
