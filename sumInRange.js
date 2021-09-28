// Sum All Numbers in a Range

/**
 * 
 * @param {Array} arr An array of 2 numbers
 * @returns {Number} The sum of those 2 numbers plus the sum of all numbers between them
 */
function sumAll(arr) {
	let first, last;
	let sum = 0;
	// Compare to decide first and last element for a loop
	if (arr[1] > arr[0]) {
		first = arr[0];
		last = arr[1];
	} else {
		first = arr[1];
		last = arr[0];
	}
	// Sum all elements from first to last
	for (let i = first; i <= last; i++) {
		sum += i;
	}
	return sum;
}

let result = sumAll([4, 1]);
console.log(result);