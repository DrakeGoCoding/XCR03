// Diff Two Arrays

/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns {Array} The symmetric difference of 2 arrays
 */
function diffArray(arr1, arr2) {
	var newArr = [];
	// Combine 2 arrays into a single array
	let combineArr = arr1.concat(arr2);
	// Iterate all elements
	combineArr.forEach(elem => {
		newArr.includes(elem)
			// Splice element if exists more than twice
			? newArr.splice(newArr.indexOf(elem), 1)
			// Push new element if not exist
			: newArr.push(elem);
	})
	return newArr;
}

let result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(result);

