// Pig Latin

/**
 * Alter English words by rules:
 * 
 * - If a word begins with a consonant, 
 * take the first consonant or consonant cluster,
 * move it to the end of the word,
 * and add "ay" to it.
 * 
 * - If a word begins with a vowel,
 * just add "way" to the end.
 * 
 * @param {String} str 
 * @returns {String}
 */
function translatePigLatin(str) {
	const vowelList = ['u', 'e', 'o', 'a', 'i'];

	// if the first letter is a vowel
	if (vowelList.includes(str[0])) {
		return str + 'way';
	}
    
	// if the first letter is a consonant
	let toSplitIndex = -1;
	// find the first vowel in string
	for (let i = 0; i < str.length; i++ ) {
		if (vowelList.includes(str[i])) {
			toSplitIndex = i;
			break;
		}
	}
	// split string by the vowel found
	let leftHalf = str.substring(0, toSplitIndex);
	let rightHalf = str.substring(toSplitIndex);
	
	return rightHalf + leftHalf + 'ay';
}

let result = translatePigLatin("schwartz");
// console.log(result);