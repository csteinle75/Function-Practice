// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

// ---------------------------
// 1. Find largest number
// ---------------------------
function largest(myArray){
	let largestNum = myArray[0];
	for (let i = 0; i < myArray.length; ++i){
		if (myArray[i] > largestNum) {
			largestNum = myArray[i]
		}
	} 
	return largestNum
}

console.log(largest(numbers))
console.assert(largest(numbers) === 101)

// ---------------------------
// 2. Find longest string
// ---------------------------
function longestStr(myArray){
	let longStr = ""
	for (let i = 0; i < myArray.length; ++i) {
		if (myArray[i].length > longStr.length){
			longStr = myArray[i]
		}
	}
	return longStr
}
console.log(longestStr(strings))
console.assert(longestStr(strings) === "collection")

// ---------------------------
// 3. Find even numbers
// ---------------------------
function evenNumbers(myArray){
	let evenArr = []
	for(let i = 0; i < myArray.length; ++i) {
		if (myArray[i] % 2 === 0){
			evenArr.push(myArray[i])
		}
	}
	return evenArr
}
console.log(evenNumbers(numbers))
console.assert(evenNumbers(numbers).length === [12, 4, 18, 6].length)

// ---------------------------
// 4. Find odd numbers
// ---------------------------
function oddNumbers(myArray){
	let oddArr = []
	for(let i = 0; i < myArray.length; ++i) {
		if (myArray[i] % 2 === 1){
			oddArr.push(myArray[i])
		}
	}
	return oddArr
}

console.log(oddNumbers(numbers))
console.assert(oddNumbers(numbers).length === [1,9,7,11,3,101,5].length)

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
function containsIs(myArray) {
	let containsIsArray = []
	for(let i = 0; i < myArray.length; ++i){
		if(myArray[i].match(/is/i)){
			containsIsArray.push(myArray[i])
		}
	}
	return containsIsArray
}


console.log(containsIs(strings))
console.assert(containsIs(strings).length === ['this','is'].length )
// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
function joinArrays(arrayOne, arrayTwo){
	let joinedArrays = arrayOne
	for(let i = 0; i < arrayTwo.length; ++i){
		joinedArrays.push(arrayTwo[i])
	}
	return joinedArrays
}

console.log(joinArrays(numbers,strings))
//console.assert( === )
// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------
function jsInstructorSort(myArray) {
	let jsTeachers = []
	for(let i = 0; i < myArray.length; ++i){
		if(myArray[i].teaches.match(/javascript/i)){
			jsTeachers.push(myArray[i])
		}
	}

	return jsTeachers.sort((a, b) => {
		if (a.firstname.toLowerCase() < b.firstname.toLowerCase()){
			return -1
		} else if(b.firstname.toLowerCase() < a.firstname.toLowerCase()){
			return 1
		} else {
			return 0
		}
	}) //end of sort
}

console.log(jsInstructorSort(instructors))
//console.assert( === )