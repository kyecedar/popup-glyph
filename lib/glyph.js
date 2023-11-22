/**
 * @file The Glyph Library.
 * @author Kye Cedar <dev@kye.dog>
 * @copyright Kye Cedar 2023
 * @license
 * THEY WATCH US DIE LICENSE v1
 * 
 * This is anti-capitalist, anti-bigotry software, released for free use by individuals and organizations that do not operate by capitalist principles.
 * 
 * Permission is hereby granted, free of charge, to any person or organization (the "User") obtaining a copy of this software and associated
 * documentation files (the "Software") to use, copy, modify, merge, distribute, and/or sell copies of the Software, subject to the following conditions:
 * 
 * 1. The above copyright notice and this permission notice shall be included in all copies or modified versions of the Software.
 * 
 * 2. The User is one of the following:
 *     a. An individual person, laboring for themselves
 *     b. A non-profit organization
 *     c. An educational institution
 *     d. An organization that seeks shared profit for all of its members, and allows non-members to set the cost of their labor
 * 
 * 3. If the User is an organization with owners, then all owners are workers and all workers are owners with equal equity and/or equal vote.
 * 
 * 4. If the User is an organization, the User is not working with, working under, or themselves are the law enforcement or military.
 * 
 * 5. The User does not use the Software to promote, platform, train, or create:
 *     a. Bigotry, including but not limited to racism, xenophobia, homophobia, transphobia, ableism, sexism, antisemitism, and religious intolerance
 *     b. Law enforcement and/or the military
 *     c. Works containing pedophilia, zoophilia, and/or incest
 *     d. Works containing blockchain-related technology, including but not limited to cryptocurrencies
 *     e. AI software or AI-generated works allowing and/or using unethically obtained or sorted datasets, including but not limited to scraping the internet for data, utilizing mass amounts of low-wage workers to categorize data, or using data without the owner’s express consent.
 * 
 * 6. The User does not use the Software to promote, platform, or create scams, defined as a work where an outsider who engages in or promotes said work is not immediately aware of a detrimental factor of the work, to themselves or to others, that may affect their mental, physical, or financial well-being.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT EXPRESS OR IMPLIED WARRANTY OF ANY KIND, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */



import {
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
} from './color.js';

import {
} from './vector.js';

import {
	pngToIco,

	getFile, getBlob,
	download,
} from './files.js';

import { resurrect } from './palettes/resurrect.js';

setPalette(resurrect);

(async () => {
	// getFile('/lib/color.js')
	// 	.then((response) => {
	// 		console.log(response.body);
	// 	})
	// 	.catch(console.log);
	
	// getBlob('/lib/vector.js')
	// 	.then(async (blob) => {
	// 		console.log(await blob.text());
	// 	})
	// 	.catch(console.log);

	// getFile('https://www.google.com/')
	// .then(async (blob) => {
	// 	console.log(await blob.text());
	// })
	// .catch(console.log);
})();

// console.log(await getBlob('/shit.js'));

/**
 * Changes all glyphs on DOM from "\<glyph src='path' /\>", that do not have an 'exempt' attribute, to an element with the associated "glyph" class.
 */
const initGlyphs = () => {
	for(const elem of document.querySelectorAll('glyph[src]:not([exempt])')) {
		console.log(elem);
	}
};

/**
 * Checks for any new Glyphs in the DOM. >:3c
 * @type {MutationObserver}
 */
const observer = new MutationObserver((_mutation_list, _observer) => {
	initGlyphs();
});

/**
 * Observes an element for any updates and initializes all "\<glyph src='path'/\>", that do not have an 'exempt' attribute, to an element with the associated "glyph" class.
 * @param {Node|Element} target
 */
const observeGlyphs = (target) => {
	observer.observe(target, {attributes: false, childList: true, subtree: true});
};

export {
	initGlyphs,
	observeGlyphs,

	// color.
	Color, Palette,
	createColor, createPalette,
	setPalette, setPlaceholderColor,
	isHex,
	hexToRGBA, rgbaToHex,

	// vector.

	// files.
	pngToIco,
	getFile, getBlob,
	download,
};