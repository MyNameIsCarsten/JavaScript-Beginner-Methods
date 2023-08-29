
// Array methods

const array1 = [1, 9, 4, 16];

// Create a new array populated with the results of calling a provided function
const map1 = array1.map((x) => x * 2);
console.log(map1);

// Sort the elements of an array in place and return the reference to the same array, now sorted
array1.sort();
console.log(array1);

// Return the first element in the provided array that satisfies the provided testing function
const found = array1.find((element) => element > 10);
console.log(found);

// Return the index of the first element in an array that satisfies the provided testing function
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));

// Test whether all elements in the array pass the test
const isBelowThreshold = (currentValue) => currentValue < 40;
console.log(array1.every(isBelowThreshold));

// Test whether at least one elements in the array pass the test
const even = (element) => element % 2 === 0;
console.log(array.some(even));

// Test whether oa certain element is in the array
console.log(array1.includes(9));


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// Execute a provided function once for each array element
array1.forEach((element) => console.log(element));

// Create a shallow copy of a portion of a given array, if the elements from the given array pass the test implemented by the provided function
const result = words.filter((word) => word.length > 6);
console.log(result);

// Return the first index at which a given element can be found in the array
console.log(words.indexOf('limit'));

// Merge two or more arrays
const array2 = ['d', 'e', 'f'];
const array3 = words.concat(array2);

console.log(array3);


.includes()
.join()
.reduce((currentSum, rating) => currentSum + rating, initialValue);
.reduceRight()
.fill()
.slice()
.splice()
.reverse()
.push()
.pop()
.shift()
.unshift()
