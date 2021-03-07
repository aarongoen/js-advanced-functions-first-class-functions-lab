// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
 
const returnFirstTwoDrivers = function() {return drivers.slice(0,2)}

const returnLastTwoDrivers = function() {return drivers.slice(-2)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(mult) {
    return function callback(fare) {
        return fare*mult }
    }

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
    }
