//Declare a variable named coolArray containing an array of at least 5 elements (of any type)
let coolArray = [0, 'one', 2.2, 'three', false]

// Get the length of coolArray
console.log(coolArray.length)

//Get the value of...
//The 1st element in coolArray (at index 0)
console.log('The 1st element of coolArray is: ', coolArray[0])

// The 2nd element in coolArray (at index 1)
console.log('The 2nd element of coolArray is: ', coolArray[1])
// The last element in coolArray
console.log('The last element of coolArray is: ', coolArray[coolArray.length - 1])
// The element at index k in coolArray, where k is a variable containing a number
let k = 3;
if (k <= coolArray.length - 1) {
    console.log(`The element at index ${k} is: ${coolArray[k]}`)
} else {
    console.log(`There is not an element at index ${k}.`)
}

// Change the value of...
//  The 1st element in coolArray (at index 0)
coolArray[0] = 'zero'
console.log('The 1st element of coolArray is now:', coolArray[0])
//  The 2nd element in coolArray (at index 1)
coolArray[0] = 1
console.log('The 2nd element of coolArray is now:', coolArray[0])
//  The last element in coolArray
coolArray[coolArray.length-1] = true
console.log('The 1st element of coolArray is now:', coolArray[coolArray.length-1])
//  The element at index k in coolArray, where k is a variable containing a number
coolArray[k] = 17
console.log(`The element at index ${k} of coolArray is now: ${coolArray[k]}`)

// Append an element to coolArray
coolArray.push('Joe')
console.log('Added element: ', coolArray[coolArray.length-1])
console.log(coolArray)
//  Remove the last element of coolArray
coolArray.pop()
console.log('removed last element')
console.log(coolArray)
//  Prepend an element to coolArray
coolArray.unshift('Joe')
console.log('prepended coolArray')
console.log(coolArray)
//  Remove the first element of coolArray
coolArray.shift()
console.log('removed 1st element')
console.log(coolArray)