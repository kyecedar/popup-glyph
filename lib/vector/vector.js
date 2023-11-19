/**
 * @file Handles vector image manipulation.
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



// https://stackoverflow.com/a/71488229
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element

/**
 * "SVG Namespace"
 */
const SVGNS = 'http://www.w3.org/2000/svg';

/**
 * @typedef {{
 * (name: string) => SVGElement;
 * (name: "a") => SVGAElement;
 * (name: "animate") => SVGAnimateElement;
 * (name: "animateMotion") => SVGAnimateMotionElement;
 * (name: "animateTransform") => SVGAnimateTransformElement;
 * (name: "circle") => SVGCircleElement;
 * (name: "clipPath") => SVGClipPathElement;
 * (name: "defs") => SVGDefsElement;
 * (name: "desc") => SVGDescElement;
 * (name: "ellipse") => SVGEllipseElement;
 * (name: "feBlend") => SVGFEBlendElement;
 * (name: "feColorMatrix") => SVGFEColorMatrixElement;
 * (name: "feComponentTransfer") => SVGFEComponentTransferElement;
 * (name: "feComposite") => SVGFECompositeElement;
 * (name: "feConvolveMatrix") => SVGFEConvolveMatrixElement;
 * (name: "feDiffuseLighting") => SVGFEDiffuseLightingElement;
 * (name: "feDisplacementMap") => SVGFEDisplacementMapElement;
 * (name: "feDistantLight") => SVGFEDistantLightElement;
 * (name: "feDropShadow") => SVGFEDropShadowElement;
 * (name: "feFlood") => SVGFEFloodElement;
 * (name: "feFuncA") => SVGFEFuncAElement;
 * (name: "feFuncB") => SVGFEFuncBElement;
 * (name: "feFuncG") => SVGFEFuncGElement;
 * (name: "feFuncR") => SVGFEFuncRElement;
 * (name: "feGaussianBlur") => SVGFEGaussianBlurElement;
 * (name: "feImage") => SVGFEImageElement;
 * (name: "feMerge") => SVGFEMergeElement;
 * (name: "feMergeNode") => SVGFEMergeNodeElement;
 * (name: "feMorphology") => SVGFEMorphologyElement;
 * (name: "feOffset") => SVGFEOffsetElement;
 * (name: "fePointLight") => SVGFEPointLightElement;
 * (name: "feSpecularLighting") => SVGFESpecularLightingElement;
 * (name: "feSpotLight") => SVGFESpotLightElement;
 * (name: "feTile") => SVGFETileElement;
 * (name: "feTurbulence") => SVGFETurbulenceElement;
 * (name: "filter") => SVGFilterElement;
 * (name: "foreignObject") => SVGForeignObjectElement;
 * (name: "g") => SVGGElement;
 * (name: "image") => SVGImageElement;
 * (name: "line") => SVGLineElement;
 * (name: "linearGradient") => SVGLinearGradientElement;
 * (name: "marker") => SVGMarkerElement;
 * (name: "mask") => SVGMaskElement;
 * (name: "metadata") => SVGMetadataElement;
 * (name: "mpath") => SVGMPathElement;
 * (name: "path") => SVGPathElement;
 * (name: "pattern") => SVGPatternElement;
 * (name: "polygon") => SVGPolygonElement;
 * (name: "polyline") => SVGPolylineElement;
 * (name: "radialGradient") => SVGRadialGradientElement;
 * (name: "rect") => SVGRectElement;
 * (name: "script") => SVGScriptElement;
 * (name: "set") => SVGSetElement;
 * (name: "stop") => SVGStopElement;
 * (name: "style") => SVGStyleElement;
 * (name: "svg") => SVGSVGElement;
 * (name: "switch") => SVGSwitchElement;
 * (name: "symbol") => SVGSymbolElement;
 * (name: "text") => SVGTextElement;
 * (name: "textPath") => SVGTextPathElement;
 * (name: "title") => SVGTitleElement;
 * (name: "tspan") => SVGTSpanElement;
 * (name: "use") => SVGUseElement;
 * (name: "view") => SVGViewElement;
 * }} fnSVGElementCreator
 */

/**
 * @type {fnSVGElementCreator}
 * @param {string} name - Name of the tag. Like "svg" would give you \<svg\>.
 */
const createSVGElem = (name) => document.createElementNS(SVGNS, name);

/**
 * 
 */
class Glyph {
	/**
	 * @type {SVGSVGElement}
	 */
	element = createSVGElem("svg");

	constructor(data) {}

	addPath() {
		var path = createSVGElem("path");
	}

	getData() {}

	// CLASSES //////////////////////////////

	static Path = class {
		/**
		 * @type {SVGPathElement}
		 */
		element = createSVGElem("path");

		constructor() {
		}
	};
}

/**
 * 
 * @param {()[]} data 
 */
const createGlyphFromData = (data) => {};

/**
 * @param {Glyph} glyph
 */
const createDataFromGlyph = (glyph) => {};



export {
	createGlyphFromData,
	createDataFromGlyph,
};