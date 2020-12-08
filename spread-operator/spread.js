const array = [1, 2, 3]
console.log('Array normal', array)

console.log('Ficam espalhados, tirar array:', ...array)

const newArray = [...array, 4]
console.log('Array novo:', newArray)

const newArray02 = [4, ...array]
console.log('Array novo 02:', newArray02)

soma = (a, b, c) => a + b + c

const arrayValores = [10, 50, 20]
console.log('Como parametro da função 01:', soma(...arrayValores))

const arrayValores02 = [10, 50]
console.log('Como parametro da função 02:', soma(...arrayValores02, 5))
