//Define an array called coolArray containing at least 4 elements of any type and...
let coolArray = [1, 2, 2.2, 3.5]

// Print every element of coolArray
console.log('every element of coolArray')
for (let i = 0; i < coolArray.length; i++) {
    console.log(coolArray[i])
}

// Print every other element of coolArray, starting with the first element
console.log('every other element of coolArray')
for (let i = 0; i < coolArray.length; i += 2) {
    console.log(coolArray[i])
}
// Print the elements of coolArray in reverse order
console.log('every element of coolArray in reverse order')
let revArray = coolArray.reverse()
for (let i = 0; i < revArray.length; i++) {
    console.log(revArray[i])
}

// Declare an array containing at least 8 numbers called listOfNumbers and...
let listOfNumbers = [1, 5, 3, 9, 4, 2, 8, 6, 7]

//  Print out the largest element
console.log('largest number in listOfNumbers:', Math.max(...listOfNumbers))

//  Print out the smallest element
console.log('smallest number in listOfNumbers:', Math.min(...listOfNumbers))

//  Print out all the elements greater than 0
console.log('numbers greater than 0 in listOfNumbers')
for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers[i] > 0) {
        console.log(listOfNumbers[i])
    }
}
//  Print out all the elements greater than k, where k is a variable containing a number
console.log('numbers greater than k in listOfNumbers')
let k = 4
for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers[i] > k) {
        console.log(listOfNumbers[i])
    }
}
//  Print out all the even elements
console.log('even numbers in listOfNumbers')
for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers[i] % 2 === 0) {
        console.log(listOfNumbers[i])
    }
}

// Using sort()...
//  Print out elements of coolArray sorted from largest to smallest
console.log('list of coolArray elements from largest to smallest', coolArray.sort((a,b) => b - a))

//  Print out the elements of coolArray sorted from smallest to largest
console.log('list of coolArray elements from smallest to largest', coolArray.sort((a,b) => a - b))

// Define an array containing at least 8 strings called listOfStrings and...
let listOfStrings = ['apple', 'banana', 'mango', 'grape', 'kiwi', 'pineapple', 'strawberry', 'orange']

//  Print out the longest string
let longestString = (listOfStrings.sort((a, b) => (b.length - a.length)))[0]
console.log('The longest string in listOfStrings is', longestString)

//  Print out the shortest string
let shortestString = (listOfStrings.sort((a, b) => (a.length - b.length)))[0]
console.log('The shortest string in listOfStrings is', shortestString)

//  Print out all the strings longer than 3 characters
console.log('list of strings greater than 3 characters')
for (let i = 0; i < listOfStrings.length; i++) {
    if (listOfStrings[i].length > 3) {
        console.log(listOfStrings[i])
 
    }
}

//  Print out all the strings longer than minLength characters, where minLength is a variable containing a number
let minLength = 7
console.log('list of strings greater than minLength characters')
for (let i = 0; i < listOfStrings.length; i++) {
    if (listOfStrings[i].length > minLength) {
        console.log(listOfStrings[i])
 
    }
}

//  Print out the first string that begins with the letter A
console.log('first string that starts with A')
for (let i = 0; i < listOfStrings.length; i++) {
    if (listOfStrings[i].toLowerCase().startsWith('a')) {
        console.log(listOfStrings[i])
        break
    }
}

//  Print 'found it!' if listOfStrings contains the string 'needle'
if (listOfStrings.includes('needle')) {
    console.log('found it!')
}

//  Using sort()...
//  Print out elements of listOfStrings sorted alphabetically (from A to Z)
listOfStrings.sort((a,b) => {
    let stringA = a.toLowerCase()
    let stringB = b.toLowerCase()

    if (stringA < stringB) {
        return -1
    } 
    if (stringB < stringA) {
        return 1
    } 
    return 0
})
console.log('listOfString A to Z')
for (let i = 0; i < listOfStrings.length; i++) {
    console.log(listOfStrings[i])
}

//  Print out the elements of listOfStrings sorted reverse alphabetically (from Z to A)
listOfStrings.sort((a,b) => {
    let stringA = a.toLowerCase()
    let stringB = b.toLowerCase()

    if (stringA < stringB) {
        return 1
    } 
    if (stringB < stringA) {
        return -1
    } 
    return 0
})
console.log('listOfString Z to A')
for (let i = 0; i < listOfStrings.length; i++) {
    console.log(listOfStrings[i])
}