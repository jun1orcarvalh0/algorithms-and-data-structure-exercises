const getLettersFromArray = (array) => {
  return array.filter((number) => typeof(number) === 'string')
}

const getNumbersFromArray = (array) => {
  return array.filter((number) => typeof(number) === 'number')
}

const getHighestNumberFromArray = (array) => {
  const filterArray = getNumbersFromArray(array)
  return Math.max(...filterArray)
}

const example_array = [ "a", 10, "b", "hola", 122, 15]

console.log(getLettersFromArray(example_array))
console.log(getNumbersFromArray(example_array))
console.log(getHighestNumberFromArray(example_array))