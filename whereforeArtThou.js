// Wherefore art thou

/**
 * @param {Array} collection 
 * @param {Object} source 
 * @returns {Array} An array of objects that have matching name and value pairs in source
 */
function whatIsInAName(collection, source) {
	var arr = [];
	// Iterate all elements in collection
	for (let i = 0; i < collection.length; i++) {
		let check = true;
		let obj = collection[i];
		// check if all (key, value) pairs in source match an element
		for (const [key, value] of Object.entries(source)) {
			if (obj[key] !== value) {
				check = false;
				break;
			}
		}
		// if check is passed, push it to arr
		if (check) {
			arr.push(obj);
		}
	}
	return arr;
}

let result = whatIsInAName(
	[
		{ "apple": 1, "bat": 2 }, 
		{ "bat": 2 }, 
		{ "apple": 1, "bat": 2, "cookie": 2 }
	], 
	{ "apple": 1, "bat": 2 }
);
console.log(result);