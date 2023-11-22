/**
 * @file Handles colors and palettes.
 * @author Kye Cedar <dev@kye.dog>
 * @copyright Kye Cedar 2023
 * @license
 * THEY WATCH US DIE LICENSE v1
 * Check "LICENSE" for license.
 */



//#region //  VARIABLES.

/**
 * @type {HTMLHtmlElement}
 */
const root = document.querySelector(':root');

// https://stackoverflow.com/a/53330328
const REGEX_COLOR_STRING = /^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i;

/**
 * Color that is used if a palette color doesn't exist. Default is '#FF00FF'.
 * @type {string}
 */
var placeholder_color = '#FF00FF';

//#endregion  VARIABLES.



//#region //  CLASSES.

class Color {
	/** 0-1. @type {number} */ r = null;
	/** 0-1. @type {number} */ g = null;
	/** 0-1. @type {number} */ b = null;
	/** 0-1. @type {number} */ a = null;

	/**
	 * 
	 * @param {number} r
	 * @param {number} g
	 * @param {number} b
	 * @param {number} a
	 */
	constructor(r, g, b, a) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}

	/**
	 * 
	 * @returns {string}
	 */
	asHex() {
		return rgbToHex(r, g, b, a);
	}
}

// https://jsdoc.app/tags-interface
/**
 * @class Palette
 */
class Palette {
	/** 64 colors. @type {string[]} */ PALETTE = [];

	/** Color that represents white.  @type {string} */ WHITE  = null;
	/** Color that represents black.  @type {string} */ BLACK  = null;
	/** Color that represents light.  @type {string} */ LIGHT  = null;
	/** Color that represents dark.   @type {string} */ DARK   = null;
	/** Color that represents red.    @type {string} */ RED    = null;
	/** Color that represents orange. @type {string} */ ORANGE = null;
	/** Color that represents yellow. @type {string} */ YELLOW = null;
	/** Color that represents green.  @type {string} */ GREEN  = null;
	/** Color that represents blue.   @type {string} */ BLUE   = null;
	/** Color that represents indigo. @type {string} */ INDIGO = null;
	/** Color that represents violet. @type {string} */ VIOLET = null;

	/**
	 * @param {string[]} palette - 64 colors.
	 * @param {string}   white   - Color that represents white.
	 * @param {string}   black   - Color that represents black.
	 * @param {string}   light   - Color that represents light.
	 * @param {string}   dark    - Color that represents dark.
	 * @param {string}   red     - Color that represents red.
	 * @param {string}   orange  - Color that represents orange.
	 * @param {string}   yellow  - Color that represents yellow.
	 * @param {string}   green   - Color that represents green.
	 * @param {string}   blue    - Color that represents blue.
	 * @param {string}   indigo  - Color that represents indigo.
	 * @param {string}   violet  - Color that represents violet.
	 */
	constructor(palette, white, black, light, dark, red, orange, yellow, green, blue, indigo, violet) {
		this.PALETTE = palette;
		this.WHITE   = white;
		this.BLACK   = black;
		this.LIGHT   = light;
		this.DARK    = dark;
		this.RED     = red;
		this.ORANGE  = orange;
		this.YELLOW  = yellow;
		this.GREEN   = green;
		this.BLUE    = blue;
		this.INDIGO  = indigo;
		this.VIOLET  = violet;
	}
}

//#endregion  CLASSES.



//#region //  METHODS.

/**
 * 
 * @param {(string|[number,number,number]|[number,number,number,number]|{r:number,g:number,b:number}|{r:number,g:number,b:number,a:number})} value 
 * @returns {Color}
 */
const createColor = (value) => {
	// https://stackoverflow.com/a/46514736
	let /** Value from 0-255. @type {number} */ r,
		/** Value from 0-255. @type {number} */ g,
		/** Value from 0-255. @type {number} */ b,
		/** Value from 0-255. @type {number} */ a;

	switch(typeof(value)) {
		case 'object':
			if(Array.isArray(value)) {
				r = Math.min(Math.max(value[0] || 0, 0), 255);
				g = Math.min(Math.max(value[1] || 0, 0), 255);
				b = Math.min(Math.max(value[2] || 0, 0), 255);
				a = (value[3] === undefined) ? 1 : Math.min(Math.max(value[3], 0), 255);
				break;
			}

			r = Math.min(Math.max(value.r || 0, 0), 255);
			g = Math.min(Math.max(value.g || 0, 0), 255);
			b = Math.min(Math.max(value.b || 0, 0), 255);
			a = (value.a === undefined) ? 1 : Math.min(Math.max(value.a, 0), 255);
			break;
		case 'string':
			if(REGEX_COLOR_STRING.test(value)) {
				this.value = value.toUpperCase();
				break;
			}
		default:
			r = 0;
			g = 0;
			b = 0;
			a = 255;
	}
};

const createPalette = () => {};

/**
 * Exposes colors in CSS. Format is '--color-[name]'.
 * @param {Palette} palette - Color palette to switch color scheme to.
 */
const setPalette = (palette) => {
	root.style.setProperty('--color-white',  palette.WHITE  || placeholder_color);
	root.style.setProperty('--color-black',  palette.BLACK  || placeholder_color);
	root.style.setProperty('--color-light',  palette.LIGHT  || placeholder_color);
	root.style.setProperty('--color-dark',   palette.DARK   || placeholder_color);
	root.style.setProperty('--color-red',    palette.RED    || placeholder_color);
	root.style.setProperty('--color-orange', palette.ORANGE || placeholder_color);
	root.style.setProperty('--color-yellow', palette.YELLOW || placeholder_color);
	root.style.setProperty('--color-green',  palette.GREEN  || placeholder_color);
	root.style.setProperty('--color-blue',   palette.BLUE   || placeholder_color);
	root.style.setProperty('--color-indigo', palette.INDIGO || placeholder_color);
	root.style.setProperty('--color-violet', palette.VIOLET || placeholder_color);
};

/**
 * Replace the placeholder color.
 * @param {string} color - Replacement color.
 */
const setPlaceholderColor = (color) => {
	placeholder_color = color;
};

/**
 * Test if string is a hex color.
 * @param {string} input - Something like "#FF00eeAA" or "#F0e".
 * @returns {}
 */
const isHex = (input) => {
	return REGEX_COLOR_STRING.test(hex);
};


// https://stackoverflow.com/a/21648508
/**
 * 
 * @param {string} hex 
 * @returns {[number,number,number,number]}
 */
const hexToRGBA = (hex) => {
	hex = hex.substring(1);
	let r, g, b, a;

	if(hex.length === 6)
		hex = hex + 'FF';

	else if(hex.length === 4)
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];

	else if(hex.length === 3)
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + 'FF';

	hex = '0x' + hex;
	r = (hex>>24)&255;
	g = (hex>>16)&255;
	b = (hex>>8)&255;
	a = hex&255;

	return [r, g, b, a];
};

/**
 * @callback fnArrayRGBtoHex
 * @param {[number,number,number]} color - RGB.
 * @returns {string} Hex color value.
 *
 * @callback fnArrayRGBAtoHex
 * @param {[number,number,number,number]} color - RGBA.
 * @returns {string} Hex color value.
 * 
 * @callback fnRGBtoHex
 * @param {number} r - 0-255.
 * @param {number} g - 0-255.
 * @param {number} b - 0-255.
 * @returns {string} Hex color value.
 * 
 * @callback fnRGBAtoHex
 * @param {number} r - 0-255.
 * @param {number} g - 0-255.
 * @param {number} b - 0-255.
 * @param {number} a - 0-255.
 * @returns {string} Hex color value.
 */

/**
 * @type {fnArrayRGBtoHex|fnArrayRGBAtoHex|fnRGBtoHex|fnRGBAtoHex}
 * @param {number}  r - 0-255.
 * @param {number=} g - 0-255.
 * @param {number=} b - 0-255.
 * @param {number} [a=255] - 0-255.
 * @returns {string} Hex color value.
 */
// https://stackoverflow.com/a/49974627
const rgbaToHex = (r, g, b, a) => {
	if(Array.isArray(r)) {
		return `#${
			(Math.min(Math.max(r[0], 0), 255) | 1 << 8).toString(16).slice(1)
		}${
			(Math.min(Math.max(r[1], 0), 255) | 1 << 8).toString(16).slice(1)
		}${
			(Math.min(Math.max(r[2], 0), 255) | 1 << 8).toString(16).slice(1)
		}${
			(Math.min(Math.max(r[3] === undefined ? 255 : r[3], 0), 255) | 1 << 8).toString(16).slice(1)
		}`.toUpperCase();
	}

	return `#${
		(Math.min(Math.max(r, 0), 255) | 1 << 8).toString(16).slice(1)
	}${
		(Math.min(Math.max(g, 0), 255) | 1 << 8).toString(16).slice(1)
	}${
		(Math.min(Math.max(b, 0), 255) | 1 << 8).toString(16).slice(1)
	}${
		(Math.min(Math.max(a === undefined ? 255 : a, 0), 255) | 1 << 8).toString(16).slice(1)
	}`.toUpperCase();
};

//#endregion  METHODS.



export {
	// classes.
	Color,
	Palette,

	// creators.
	createColor,
	createPalette,

	// setters.
	setPalette,
	setPlaceholderColor,

	// testers.
	isHex,

	// converters.
	hexToRGBA,
	rgbaToHex,
};