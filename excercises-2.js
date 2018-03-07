// ---------------------
// Define a function max() that takes two numbers as 
// arguments and returns the largest of them. Use the 
// if-then-else construct available in JavaScript.
// ---------------------
function max(val1, val2){
	return val1 > val2 ? val1 : val2
}

console.assert(max(2,3) === 3)
console.assert(max(23,24) === 24)
console.assert(max(-23, 12) === 12)

// ---------------------
// Define a function maxOfThree() that takes three 
// numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(val1, val2, val3){
	let maxVal = val3;
	if (val1 > val2 && val1 > val3) {
		return maxVal = val1
	} else if (val2 > val1 && val2 > val3) {
		return maxVal = val2
	} else {
		return maxVal
	}
}

console.assert(maxOfThree(2,56,3) === 56)
console.assert(maxOfThree(12,3,4) === 12)
console.assert(maxOfThree(-12,4,-5) === 4)

// ---------------------
// Write a function that takes a character (i.e. a 
// string of length 1) and returns true if it is a 
// vowel, false otherwise.
// ---------------------
function isVowel(char){
	if(typeof char === 'string'){
		if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u'){
			return true
		} else {return false}
	} else {return false}
}
console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("A") === true);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);
console.assert(isVowel("2") === false)

// ---------------------
// Write a function translate() that will translate 
// a text into "Rovarspraket". That is, double every 
// consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return 
// the string "tothohisos isos fofunon".
// ---------------------
function rovarspraket(str){
	str = str.toString()
/*
	let rovarStr = ""
	for (let i = 0; i < str.length; ++i) {
		if (str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u' || str[i].toLowerCase() === '0' || str[i].toLowerCase() === '1' || str[i].toLowerCase() === '2' || str[i].toLowerCase() === '3' || str[i].toLowerCase() === '4' || str[i].toLowerCase() === '5' || str[i].toLowerCase() === '6' || str[i].toLowerCase() === '7' || str[i].toLowerCase() === '8' || str[i].toLowerCase() === '9'){
			rovarStr += str[i]
		} else {
			rovarStr += `${str[i]}o${str[i]}`
		}
	}
	//console.log(rovarStr)
	return rovarStr
*/

	//using .replace & regular expressions:
		let consonants = /[^aeiou0-9]/gi
		const replacer = function(match){
			return match + 'o' + match 
		}
		return str.replace(consonants, replacer);

}
console.log(rovarspraket("JavaScript"))
console.assert(rovarspraket("JavaScript") === "JoJavovaSoScocroripoptot")
console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")


// ---------------------
// Define a function reverse() that computes the reversal 
// of a string. For example, reverse("jag testar") should 
// return the string "ratset gaj".
// ---------------------
function reverse(str){
	reverseStr = ""
	for (let i = str.length -1 ; i >= 0 ; --i){
		reverseStr += str[i]
	}
	//console.log(reverseStr);
	return reverseStr
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")