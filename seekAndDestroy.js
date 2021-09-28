// Seek and Destroy

/**
 * Remove all elements (next arguments) from array (first argument)
 * @param {Array} arr 
 * @returns {Array} 
 */
function destroyer(arr) {
	// Convert arguments to array
	let args = [...arguments];
	// Iterate from the second arg
	for (let i = 1; i < args.length; i++) {
		let toRemove = args[i];
		arr = arr.filter(elem => elem !== toRemove);
	}
	return arr;
}

let result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(result);