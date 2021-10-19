// Sum All Odd Fibonacci Numbers

/**
 * return the sum of all odd Fibonacci numbers 
 * that are less than or equal to num.
 * @param {Number} num 
 * @returns {Number}
 */
function sumFibs(num) {
	let prev = 0, next = 1, sum = 0;
	while (next <= num) {
		if (next % 2 === 1) {
			sum += next;
		}
		next = prev + next;
		prev = next - prev;
	}
	return sum;
}

let result = sumFibs(10);
console.log(result);