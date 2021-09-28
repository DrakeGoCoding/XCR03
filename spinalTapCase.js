// Spinal Tap Case

/**
 * Convert a string to spinal case (all lowercase words joined by dashes)
 * @param {String} str 
 * @returns {String}
 */
function spinalCase(str) {
	return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

let result = spinalCase('AllThe-small Things');
console.log(result);