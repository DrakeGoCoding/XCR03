// Sorted Union

/**
 * Return a new array of unique values in the order of the original provided arrays
 * @param {Array} arr 
 * @returns {Array}
 */
function uniteUnique(...arr) {
	const flatArr = [].concat(...arr);
	return [...new Set(flatArr)];
}

let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);