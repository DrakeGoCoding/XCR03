// Convert HTML Entities

/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
 * in a string to their corresponding HTML entities.
 * @param {String} str 
 * @returns {String}
 */
function convertHTML(str) {
	const arrFromStr = Array.from(str);
	return arrFromStr.map(char => htmlDictionary[char] || char).join('');
}

const htmlDictionary = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&apos;"
}

let result = convertHTML("Schindler's List");
console.log(result);