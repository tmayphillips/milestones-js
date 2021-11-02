//Declare a variable named personData containing an empty object {}
let personData = {}

//Modify personData so that...
//  The value for the key firstName is 'Jean-Luc'
personData = {firstName: 'Jean-Luc'}
console.log('Added first name to personData object')
console.log(personData)
//  The value for the key lastName is 'Picard'
personData.lastName = 'Picard'
console.log('Added last name to personData object')
console.log(personData)
//  The value for the key age is 79
personData.age = 79
console.log('Added age to personData object')
console.log(personData)

//Create an object named daysInMonth whose keys are strings of the month names 'January', 'February', etc. and the keys are the number of days in that month.
let daysInMonth = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    Decemeber: 31
}

console.log('The number of days in the month:', daysInMonth)