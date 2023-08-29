
// Array methods

const array1 = [1, 9, 4, 16];

/* Change existing array */
// Add the specified elements to the beginning of an array and returns the new length of the array
console.log(array1.unshift(4, 5));  // returns new length
console.log(array1);

// Add the specified elements to the end of an array and returns the new length of the array
const newLength = array1.push(23);
console.log(newLength);  // returns new length
console.log(array1);

// Remove the first element from an array and return that removed element
const firstElement = array1.shift();
console.log(firstElement);  // returns new length
console.log(array1);

// Remove the last element from an array and return that element.
console.log(array1.pop());
console.log(array1);

// Sort the elements of an array in place and return the reference to the same array, now sorted
array1.sort();
console.log(array1);

/* Create new array */
// Create a new array populated with the results of calling a provided function
const map1 = array1.map((x) => x * 2);
console.log(map1);


/* Search within an array */
// Return the first element in the provided array that satisfies the provided testing function
const found = array1.find((element) => element > 10);
console.log(found);

// Return the index of the first element in an array that satisfies the provided testing function
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));

/* Perform test on array */
// Test whether all elements in the array pass the test
const isBelowThreshold = (currentValue) => currentValue < 40;
console.log(array1.every(isBelowThreshold));

// Test whether at least one elements in the array pass the test
const even = (element) => element % 2 === 0;
console.log(array1.some(even));

// Test whether a certain element is in the array
console.log(array1.includes(9));

/* Reduce array to single value*/
// Execute a user-supplied "reducer" callback function on each element of the array
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumWithInitial);



const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// Execute a provided function once for each array element
array1.forEach((element) => console.log(element));

/* Create new array */
// Create a shallow copy of a portion of a given array, if the elements from the given array pass the test implemented by the provided function
const result = words.filter((word) => word.length > 6);
console.log(result);

// Return a shallow copy of a portion of an array into a new array object selected from start to end
console.log(words.slice(2));
console.log(words.slice(2, 4));
console.log(words.slice(-2));
console.log(words.slice(2, -1));

/* Search within an array */
// Return the first index at which a given element can be found in the array
console.log(words.indexOf('limit'));

/* Combine arrays*/
// Merge two or more arrays
const array2 = ['d', 'e', 'f'];
const array3 = words.concat(array2);
console.log(array3);

/* Reduce array to single string */
// Create and return a new string by concatenating all of the elements in this array
console.log(words.join());
console.log(words.join(''));
console.log(words.join('-'));

/* Reduce array to single value */
// Apply a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value
const array4 = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
const result1 = array4.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(result);

/* Change array */
// Changes all elements within a range of indices in an array to a static value
// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Fill with 6
console.log(array1.fill(6));

// Change the contents of an array by removing or replacing existing elements and/or adding new elements
words.splice(1, 0, 'Feb');
console.log(words);

// Reverse an array in place
const reversed = words.reverse();
console.log('reversed:', reversed);

