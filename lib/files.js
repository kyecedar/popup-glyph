/**
 * Use to convert images.
 * @type {HTMLCanvasElement}
 */
const canvas = document.createElement('canvas');

/**
 * Use to convert images.
 * @type {CanvasRenderingContext2D}
 */
const context = canvas.getContext('2d');

/**
 * 
 * @param {string} src - Path to png.
 * @returns {Promise}
 */
// https://stackoverflow.com/a/63598918
// https://stackoverflow.com/a/6011402
// https://stackoverflow.com/a/626505
const pngToIco = (src) => {
	const image = new Image();
	const promise = new Promise((resolve, reject) => {
		image.onload = function() {
			let /** @type {number} */ width  = this.width,
				/** @type {number} */ height = this.height;
			context.drawImage(image, 0, 0);

			canvas.toBlob(
				() => {
					const link = document.createElement('a');

					link.style.display = 'none';
					link.href = URL.createObjectURL();

					
				},
				'image/vnd.microsoft.icon',
				'-moz-parse-options:format=bmp;bpp=32'
			);
		};
	});
	
	image.src = src;
};

const callbackGetFilePromise = (resolve, reject) => {
	fetch(url.them())
};

/**
 * @param {string} url 
 * @returns {Promise<Response>}
 */
const getFile = async (url) => {
	return new Promise(
	/**
	 * @param {(value: Response) => void} resolve 
	 * @param {(reason?: number) => void} reject 
	 */
	(resolve, reject) => {
		fetch(url).then((response) => {
			if(!response.ok) {
				reject(response.status);
				return;
			}

			resolve(response);
		});
	});
};

/**
 * @param {string} url 
 * @returns {Promise<Blob>}
 */
// https://stackoverflow.com/a/52410044
const getBlob = async (url) => {
	return new Promise(
	/**
	 * @param {(value: Blob) => void} resolve 
	 * @param {(reason?: number) => void} reject 
	 */
	(resolve, reject) => {
		getFile(url)
			.then((response) => {
				resolve(response.blob());
			})
			.catch(reject);
	});
};

/**
 * @callback fnDownloadFromURL
 * @param {string} url
 * @param {string} filename - Name the file will have when prompted to download.
 * @returns {Promise<void>}
 * 
 * @callback fnDownloadFromBlob
 * @param {Blob} blob
 * @param {string} filename - Name the file will have when prompted to download.
 * @returns {Promise<void>}
 * 
 * @callback fnDownloadFromFile
 * @param {MediaSource} file
 * @param {string} filename - Name the file will have when prompted to download.
 * @returns {Promise<void>}
 */

/**
 * @type {fnDownloadFromURL|fnDownloadFromBlob|fnDownloadFromFile}
 * @param {string|Blob|MediaSource} source
 * @param {string} filename - Name the file will have when prompted to download.
 * @returns {Promise<void>}
 */
// https://www.stefanjudis.com/snippets/how-trigger-file-downloads-with-javascript/
const download = (source, filename) => {
	const promise = new Promise(async (resolve, reject) => {
		const /** @type {HTMLAnchorElement} */ link = document.createElement('a');
		link.style.display = 'none';
		if(
			source instanceof Blob ||
			source instanceof MediaSource
		) link.href = URL.createObjectURL(source instanceof Promise ? await source : source);
		else link.href = URL.createObjectURL(getBlob(source));
		link.download = filename;

		document.body.appendChild(link);
		link.click();

		// firefox, wait before removing.
		setTimeout(() => {
			URL.revokeObjectURL(link.href);
			link.parentNode.removeChild(link);
			resolve();
		}, 0);
	});
};

export {
	pngToIco,

	getFile, getBlob,
	download,
};