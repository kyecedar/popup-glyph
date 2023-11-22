/**
 * @file Handles vector image manipulation.
 * @author Kye Cedar <dev@kye.dog>
 * @copyright Kye Cedar 2023
 * @license
 * THEY WATCH US DIE LICENSE v1
 * Check "LICENSE" for license.
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