// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
  let newArr = []
  for (var i = 0; i < 2; i++) {
      newArr.push(arr[i])
  }
  return newArr;
}

const returnLastTwoDrivers = function(arr) {
  let newArr = []
  for (var i = arr.length - 2; i < arr.length; i++) {
      newArr.push(arr[i])
  }
  return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
  return function(num){return multiplier * num;}
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(array, option){
  return option(array)
}
