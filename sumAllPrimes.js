// Sum All Primes

/**
 * returns the sum of all prime numbers that are less than or equal to num.
 * @param {Number} num 
 * @returns {Number}
 */
function sumPrimes(num) {
	let sum = 0;
	for (let i = 2; i <= num; i++) {
		if (isPrime(i)) {
			sum += i;
		}
	}
	return sum;
}

function isPrime(num) {
	if (num <= 3) return num > 1;
	if (num % 2 === 0 || num % 3 === 0) return false;

	let count = 5;
	while (Math.pow(count, 2) <= num) {
		if (num % count === 0 || num % (count + 2) === 0)
			return false;

		count += 6;
	}
	return true;
}

let result = sumPrimes(10);
console.log(result);