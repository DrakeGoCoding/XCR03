// DNA Pairing

/**
 * Take each character, get its pair and return the results as a 2d array 
 * 
 * by rules A-T, C-G
 * 
 * @param {String} str 
 * @returns {Array}
 */
function pairElement(str) {
	const pairs = {
		"A": "T",
		"T": "A",
		"G": "C",
		"C": "G"
	}
	const arr = Array.from(str);
	return arr.map(item => [item, pairs[item]]);
}

let result = pairElement("GCG");
console.log(result);