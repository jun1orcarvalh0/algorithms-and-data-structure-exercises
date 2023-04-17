const addition = (array) => {
  return array.reduce((acc, curr) => acc + curr, 0)
}
const subtraction = (array) => {
  return array.reduce((acc, curr) => acc - curr, 0)
}

const multiplication = (array) => {
  return array.reduce((acc, curr) => acc * curr, 1)
}

const ordinaryMultiplication = (x, y) => {
  return x * y
}

const division = (x, y) => {
  if (x === 0) throw new Error('The dividend should not be 0')
  return x / y
}

console.log(addition([1, 2 , 3, 27]))
console.log(subtraction([1, 2 , 3, 27]))
console.log(multiplication([1, 2 , 3, 27])),
console.log(ordinaryMultiplication(1, 8)),
console.log(division(20,4))
console.log('Throw an error when dividend is equal to 0: ', division(0,1))