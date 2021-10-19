// Drop it

/**
 * remove elem until func(elem) returns true,
 * then return the rest of the array once the condition is satisfied
 * @param {Array} arr 
 * @param {Function} func 
 * @returns {Array}
 */
function dropElements(arr, func) {
	let index = 0;
	while (index < arr.length) {
		if (func(arr[0])) {
			break;
		}
		arr.shift();
	}
	return arr || [];
}

const result = dropElements([1, 2, 3, 4], function (n) { return n >= 3; });
console.log(result);