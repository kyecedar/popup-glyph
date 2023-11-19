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

const REGEX_COLOR_STRING = /^#(?:[0-9a-f]{3}){1,2}(?:[0-9a-f]{2})?$/i;

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
	let /** Value from 0-1. @type {number} */ r,
		/** Value from 0-1. @type {number} */ g,
		/** Value from 0-1. @type {number} */ b,
		/** Value from 0-1. @type {number} */ a;

	switch(typeof(value)) {
		case 'object':
			if(Array.isArray(value)) {
				r = value[0] || 0;
				g = value[1] || 0;
				b = value[2] || 0;
				a = (value[3] === undefined) ? 1 : value[3];
				break;
			}

			r = value.r || 0;
			g = value.g || 0;
			b = value.b || 0;
			a = (value.a === undefined) ? 1 : value.a;
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
			a = 1;
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

};


/**
 * 
 * @param {*} hex 
 * @returns {[number,number,number,number]}
 */
const hexToRGBA = (hex) => {
	if(REGEX_COLOR_STRING.test(hex)) {

	}
};

/**
 * @callback fnRGBtoHex
 * @param {number} r - 0-1.
 * @param {number} g - 0-1.
 * @param {number} b - 0-1.
 * 
 * @callback fnRGBAtoHex
 * @param {number} r - 0-1.
 * @param {number} g - 0-1.
 * @param {number} b - 0-1.
 * @param {number} a - 0-1.
 */

/**
 * @type {fnRGBtoHex|fnRGBAtoHex}
 * @param {number} r - 0-1.
 * @param {number} g - 0-1.
 * @param {number} b - 0-1.
 * @param {number=} a - 0-1. Default is 1.
 */
const rgbToHex = (r, g, b, a = 1) => {
	var alpha = ((a * 255) | 1 << 8).toString(16).slice(1);
	return `#${
		((r * 255) | 1 << 8).toString(16).slice(1)
	}${
		((g * 255) | 1 << 8).toString(16).slice(1)
	}${
		((b * 255) | 1 << 8).toString(16).slice(1)
	}${
		alpha === 'ff' ? '' : alpha
	}`.toUpperCase();
};

//#endregion  METHODS.



export {
	Color,
	Palette,

	setPalette,
	setPlaceholderColor,
};