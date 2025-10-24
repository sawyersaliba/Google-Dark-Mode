// ==UserScript==
// @name         Dark Mode - Google Classroom
// @namespace    https://github.com/sawyersaliba/google-dark-mode
// @version      1.0.0
// @description  IMPORTANT: Various visual fixes are yet to come, including in the classwork tab and the blue selection indicator. Please report any issues so I can fix them.
// @author       Sawyer Saliba
// @match        https://classroom.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=128&domain=google.com
// ==/UserScript==

// Change Accent Color Here //
const accent = '#0090ff';
// Change Accent Color Here //

// Advanced Color Options //
const mainBackground = '#0e0e0e';
const secondaryBackground = '#131313';
const mainText = '#d7d7d7';
const secondaryText = '#a7a7a7';
const selectorOpacity = '25';
// Advanced Color Options //

// DO NOT EDIT CODE BELOW THIS LINE //
(function() {
    'use strict';

    const css = `
        body, .KEDCCd, .TgJ2ub .uQ3ESd, .kFwPee, .O68mGe-xl07Ob, .Z3qXvc, .QRiHXd, .vnnr5e .I9OJHe, .vnnr5e .CIy9F, .d4Fe0d, .Aopndd, .uW2Fw-P5QLlc {
            background-color: ${mainBackground} !important;
        }
        .OkLq5b {
            fill: ${mainBackground} !important;
        }
        .DC55n td, .WufxEd .ynt9Dc {
            background: ${mainBackground} !important;
            border-top: .0625rem solid ${secondaryBackground} !important;
            border-bottom: .0625rem solid ${secondaryBackground} !important;
        }
        .rknsod, .aqdrmf-clz4Ic, .V8apv, .cC1eCc .VfPpkd-P5QLlc, .hgjBDc, .Fgl6fe-fmcmS-yrriRe:not(.Fgl6fe-fmcmS-yrriRe-OWXEXe-OWB6Me), .N6nSod, .riU7le {
            background-color: ${secondaryBackground} !important;
        }
        .joJglb, .EXL71e {
            background: ${secondaryBackground} !important;
        }
        .lXuxY .u73Apc {
            border-color: ${secondaryBackground} !important;
        }
        .VDj5V {
            border-top: ${secondaryBackground} !important;
        }
        .GRvzhf, .nk37z, .fliwXd-OWXEXe-V67aGc, .huI6Cb, .qoXqmb, .mvRF3b, .Aitr4c, .Evt7cb, .Evt7cb:visited, .lziZub, .lziZub:visited, .XL4gNd, .uW2Fw-Sx9Kwc-OWXEXe-vOE8Lb .uW2Fw-k2Wrsb, .Fgl6fe-fmcmS-yrriRe:not(.Fgl6fe-fmcmS-yrriRe-OWXEXe-OWB6Me) .Fgl6fe-fmcmS-wGMbrd, .aqdrmf-rymPhb-fpDzbe-fmcmS, .qCWAqb, .HqpJve, .WOPwXe, #yDmH0d, .LNBrBd, .asQXV, .y183Ub, .hN1OOc.eumXzf, .gJk24c, .onkcGd, .onkcGd:visited, .WPhuJf, .WPhuJf:visited, .rHGeGc-uusGie-fmcmS, .B7SYid, .tLDEHd, .cC1eCc .VfPpkd-k2Wrsb, .K6Ovqd, .EZrbnd, .z3vRcc, .tDxNLe, .saYe1e, .zuzKle.xVPuB, .zuzKle.vnnr5e, .rHGeGc-O1htCb.rHGeGc-O1htCb-OWXEXe-XpnDCe .rHGeGc-uusGie-fmcmS {
            color: ${mainText} !important;
        }
        .QUEiXc {
            --gm3-sys-color-on-surface: ${mainText} !important;
        }
        .hN1OOc.eumXzf::after {
            border-color: ${mainText} !important;
        }
        .DWJNgb, .wZTANe, .J1raN, ViCi4, .dDKhVc, .slDfNd, .slDfNd:visited, .U0QIdc, .U0QIdc:visited {
            color: ${secondaryText} !important;
        }
        .NMm5M, .vnnr5e.u3bW4e .I9OJHe.vTcY1d .snByac, .sdmSCf, .AeBiU-kBDsod-Rtc0Jf, .mefVYc, .pYTkkf-Bz112c-LgbsSe, .mUIrbf-vQzf8d, .AeBiU-vQzf8d {
            color: ${accent} !important;
        }
        .RIDjNe {
            border-right: .0625rem solid ${accent} !important;
        }
        .d4Fe0d, .q1Kmyc {
            border: .0625rem solid ${accent} !important;
        }
        .riU7le, .Aopndd, .GhEnC-gBXA9-bMcfAe:enabled:checked+.GhEnC-RsCWK .GhEnC-wVo5xe-LkdAo, .GhEnC-gBXA9-bMcfAe:enabled+.GhEnC-RsCWK .GhEnC-Z5TpLc-LkdAo {
            border-color: ${accent} !important;
        }
        .s2g3Xd {
            border-top: .0625rem solid ${accent} !important;
        }
        .UywwFc-LgbsSe, .eBlXUe-scr2fc-OWXEXe-gk6SMd .eBlXUe-l6JLsf, .GhEnC-gBXA9-bMcfAe:enabled+.GhEnC-RsCWK .GhEnC-Z5TpLc-LkdAo {
            background-color: ${accent} !important;
        }
        .mUIrbf-LgbsSe {
            --gm3-ripple-hover-color: ${accent} !important;
            --gm3-ripple-pressed-color: ${accent} !important;
        }
        .wQiG5d, .hN1OOc.eumXzf:hover, .hN1OOc.eumXzf:focus, [class*="Ysl7Fe"] {
            background-color: ${accent}${selectorOpacity} !important;
        }
        .vnnr5e:not(.RDPZE).u3bW4e {
            caret-color: ${accent} !important;
        }
        .rHGeGc-YPmvEd {
            --gm3-menu-container-color: ${secondaryBackground} !important;
            --gm3-list-list-item-label-text-color: ${mainText} !important;
            --gm3-list-list-item-hover-label-text-color: ${mainText} !important;
            --gm3-list-list-item-focus-label-text-color: ${mainText} !important;
            --gm3-list-list-item-selected-label-text-color: ${mainText} !important;
            --gm3-list-list-item-selected-hover-label-text-color: ${mainText} !important;
            --gm3-list-list-item-selected-focus-label-text-color: ${mainText} !important;
            --gm3-list-list-item-selected-container-color: ${accent}${selectorOpacity} !important;
        }
        li, .mwJvDe .KEDCCd {
            border-bottom: transparent !important;
        }
        .LKqFXc {
            border-top: transparent !important;
        }
        .OmA97e {
            background-image: none !important;
        }
        .GWZ7yf {
            box-shadow: 0 1px 1px 0 ${accent}, 0 2px 8px 1px ${accent}; !important;
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
