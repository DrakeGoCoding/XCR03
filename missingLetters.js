// Missing letters

/**
 * Find the (first) missing letter in the passed letter range and return it
 * @param {String} str 
 * @returns {String}
 */
function fearNotLetter(str) {
	const arrStr = [...str];
	// iterate all characters
	for (let i = 1; i < arrStr.length; i++) {
		// check if the next character is correct in ascii code
		// if not return the true one
		if (str.charCodeAt(i - 1) + 1 != str.charCodeAt(i)) {
			return String.fromCharCode(str.charCodeAt(i - 1) + 1);
		}
	}
	return undefined;
}

let result = fearNotLetter("abce");
console.log(result);