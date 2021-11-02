//Print out every integer between 40 and 60 (including both 40 and 60)
console.log('printing 40 through 60')
for (let i = 40; i <= 60; i++) {
    console.log(i)
}

//Print out every even integer between 40 and 60 (including both 40 and 60)
console.log('printing even numbers between 40 and 60')
for (let i = 40; i <= 60; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// Define variables min and max containing integers and...
let min = 7;
let max = 16;
console.log(`min value is ${min}; max value is ${max}`)

// Print out every integer between min and max (inclusive)
console.log('printing integers between min and max')
for (i = min; i <= max; i++) {
    console.log(i)
}

// Print out every even integer between min and max (inclusive)
console.log('printing even integers between min and max')
for (i = min; i <= max; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// Print the first 10 multiples of 7
console.log('first 10 multiples of 7')
for (i = 1; i <= 10; i++) {
    console.log(i * 7)
}

// Print the first k multiples of 7, where k is a variable containing a positive integer
console.log('first k multiples of 7')
let k = 17
for (i = 1; i <= k; i++) {
    console.log(i * 7)
}
// Print the first k multiples of n, where k is a variable containing a positive integer and n is any number
console.log('first k multiples of n')
k = 3
n = 9
for (i = 1; i <= k; i++) {
    console.log(i * n)
}