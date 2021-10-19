// Smallest Common Multiple

/**
 * return the smallest common multiple of the provided params
 * that can be evenly divided by all sequential numbers in the range
 * @param {Array} arr 
 * @returns {Number} 
 */
function smallestCommons(arr) {
	const [min, max] = arr.sort((a, b) => a - b);
	const range = Array(max - min + 1).fill(0).map((_, i) => i + min);

	const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
	const lcm = (a, b) => a * b / gcd(a, b);

	return range.reduce((multiple, curr) => lcm(multiple, curr));
}

let result = smallestCommons([1, 30]);
console.log(result);