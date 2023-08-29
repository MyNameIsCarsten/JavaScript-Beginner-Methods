let string = 'Hello World!'
let string1 = '  Hello World!  '

// Return length of string
console.log(string.length);

// Convert string to lower case
console.log(string.toLowerCase());

// Convert string to upper case
console.log(string.toUpperCase());

// Return index of first occurence
console.log(string.indexOf('o'));
console.log(string.indexOf('World'));

// Extract a sequence from string
console.log(string.substring(2, 6));

// Divide string at each space
console.log(string.split(' '));

// Replace value with another
console.log(string.replace('World', 'Universe'));

// Get rid of spaces at beginning and end
console.log(string1.trim());