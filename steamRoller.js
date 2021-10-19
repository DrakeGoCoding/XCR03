// Steamroller

/**
 * return a flatten nested array
 * @param {Array} arr 
 * @returns {Array}
 */
function steamrollArray(arr) {
	const flatArr = [];
	arr.forEach(elem => {
		Array.isArray(elem)
			? flatArr.push(...steamrollArray(elem))
			: flatArr.push(elem)
	});
	return flatArr;
}

let result = steamrollArray([
	1,
	[2],
	[
		3,
		[[4]]
	]
]);
console.log(result);