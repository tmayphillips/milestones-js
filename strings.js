//Assign different strings to two variables named str1 and str2
//Print the values of str1 and str2
let str1 = 'string';
let str2 = 'string_two';

console.log('String 1 is:', str1);
console.log('String 2 is:', str2);

//Concatenate str1 and str2
console.log('str1 + str2:', str1 + str2);

//Determine whether str1 appears in str2 using String.prototype.includes
console.log(`String 1 ${str2.includes(str1) ? 'does' : 'does not'} appear in String 2.`);

//Assign a string to a variable named waffles
let waffles = 'waffle_string'

//Get the number of characters in the string (its length)
console.log(`There are ${waffles.length} characters in ${waffles}`)

//Convert it to uppercase
waffles = waffles.toUpperCase()
console.log('Waffles in upper case:', waffles)

//Convert it to lowercase
waffles = waffles.toLowerCase()
console.log('Waffles in lower case:', waffles)

//Get the 1st character in waffles (at index 0)
console.log('First character of waffles is:', waffles.charAt(0));

//Get the 2nd character in waffles (at index 1)
console.log('Second character of waffles is:', waffles.charAt(1));

//Get the last character in waffles
console.log('Last character of waffles is:', waffles.charAt(waffles.length - 1));

//Define a variable k containing a number and get the character at index k in waffles
let k = 5;
if (k <= waffles.length - 1) {
    console.log(`The character at index ${k} is: ${waffles.charAt(k)}`)
} else {
    console.log(`There is not a character at index ${k}.`)
}

//Modify the value of waffles by appending the letter 'a' to it
waffles = waffles + 'a'
console.log(waffles)

//Use template literals to print a formatted string containing dynamic information
let firstName = 'Jesse'
console.log(`Hello, ${firstName}!`)