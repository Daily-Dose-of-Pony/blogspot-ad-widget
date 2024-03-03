// Copyright (c) Daily Dose of Pony 2024.
// Licensed under MIT License.

"use strict";

// This script is expected to be run after the page's fully interactive

// Import section
import widgetCssStyles from "../../dist/ad.css";

// Minification cheatcodes
let docRoot = self.document;

// Mount global CSS styles
let stylesLoader = docRoot.createElement("style");
stylesLoader.innerHTML = widgetCssStyles;
stylesLoader.classList.add("blogspot-ad-widget-css");
docRoot.head.appendChild(stylesLoader);

// Reserve a map for the ad pool
let adPool = new Map();

// Fetch a list of promotional sections
docRoot.querySelectorAll("div.ad-view").forEach((e) => {
	console.debug(e);
});
