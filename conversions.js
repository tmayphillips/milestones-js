// Convert a number to a string, e.g., 1234 to '1234'
let num = 1234;
console.log('Converted the number to a string:', num.toString())


//  Convert a string to a number, e.g., '1234' to 1234
let str = '1234'
console.log('Converted the stirng to a number:', parseInt(str))

//  Convert a string to an array containing its characters, e.g.,
str = 'apples'
console.log('Converted the stirng to an array:', str.split(''))

//Given an array containing strings, join the strings together into a single string
let arr = ['one', '--two--', 'three'];
console.log('Joined array:', arr.join(''));

//Given an array containing strings, join the strings together into a string separated by a | character
arr = ['one', 'two', 'three']
console.log('Joined array with |:', arr.join('|'));