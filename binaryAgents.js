// Binary Agents

/**
 * Return an English translated sentence of the passed binary string.
 * @param {String} str 
 * @returns {String}
 */
function binaryAgent(str) {
	const arrFromStr = str.split(' ');
	return arrFromStr
		.map(elem => String.fromCharCode(parseInt(elem, 2)))
		.join("");
}

let result = binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");
console.log(result);