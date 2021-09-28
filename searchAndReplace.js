// Search and Replace

/**
 * Replace substring from a string by another substring
 * @param {String} str Source sentence
 * @param {String} before Replace this
 * @param {String} after By this
 * @returns {String} New sentence
 */
function myReplace(str, before, after) {
	const arrStr = str.split(' ');
	const [toReplaceStr] = arrStr.filter(item => item === before);
	return toReplaceStr[0].toUpperCase() !== toReplaceStr[0]
		? arrStr.map(item => (item === before) ? after[0].toLowerCase() + after.slice(1) : item).join(' ')
		: arrStr.map(item => (item === before) ? after[0].toUpperCase() + after.slice(1) : item).join(' ');
}

let result = myReplace("I think we should look up there", "up", "Down")
console.log(result);