// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
 
const returnFirstTwoDrivers = function() {return drivers.slice(0,2)}

const returnLastTwoDrivers = function() {return drivers.slice(-2)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// let int
// let func
// function createFareMultiplier(int){
// return func(){5*int}
// }

let func = 8
let fare
let mult = 4
function createFareMultiplier(mult) {
    return function() {fare*mult}
}

const fareDoubler = function(fare) {
    let mult = 2
    return createFareMultiplier(fare)
}