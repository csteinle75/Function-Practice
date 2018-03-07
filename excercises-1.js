///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// READ FIRST
// The assertions are there only to help you make sure 
// your functions are written correctly. There is no need
// to change them. If you write your function correctly,
// the assertions will do nothing. If you write your function
// incorrectly or not at all, your assertions will fail
// in your console.


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum (val1, val2){
	return val1 + val2
}

console.assert(sum(2,4) === 6)
console.assert(sum(45, 23) === 68)
console.assert(sum(-2, -57) === -59)

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg(val1,val2,val3){
	return (val1 + val2 + val3)/3
}

console.assert(avg(2,3,4) === 3)
console.assert(avg(234, 63, 234) === 177)
console.assert(avg(123,234,345) === 234)

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length
function getLength(myStr){
	return myStr.length
}
console.assert(getLength('Michael') === 7)
console.assert(getLength('Javascript') === 10)
console.assert(getLength('supercalifragilisticexpialidocious') === 34)

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.
function greaterThan(val1, val2) {
	return val2 > val1
}

console.assert(greaterThan(2, 1) === false)
console.assert(greaterThan(23, 23) === false)
console.assert(greaterThan(-234, 1) === true)

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
function greet(myStr){
	return `Hello, ${myStr}!`
}
console.assert(greet("Michael") === "Hello, Michael!")
console.assert(greet("R2D2") === "Hello, R2D2!")
console.assert(greet("Iron Man") === "Hello, Iron Man!")

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
function madlib(noun, verb, adjective, adverb) {
	return `My ${adjective} ${noun} is ${adverb} ${verb}. I sure do love my ${noun}.`
}

console.assert(madlib('dog', 'smelly', 'hairy', 'extremely' === 'My hairy dog is extremely smelly. I sure do love my dog.'))
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////