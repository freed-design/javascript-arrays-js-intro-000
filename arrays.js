var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = (array, element) => {
  return [element, ...array]
}

var destructivelyAddElementToBeginningOfArray = (arrayArgument, element) => {
  arrayArgument.unshift(element)
  return arrayArgument
}

function addElementToEndOfArray(arrayArgument, element) {
  return [...arrayArgument, element]
}

function destructivelyAddElementToEndOfArray(arrayArgument, element) {
  arrayArgument.push(element)
  return arrayArgument
}

var accessElementInArray = (arrayArgument, indexNumber) => {
  return arrayArgument[indexNumber]
}

var destructivelyRemoveElementFromBeginningOfArray = (arrayArgument) => {
  arrayArgument.shift()
  return arrayArgument
}
