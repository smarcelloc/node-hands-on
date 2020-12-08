function * funGenerator () {
  console.log('Olá')
}

funGenerator().next()
console.log('------------------------------------------------')

/// //////////////////
function * funGenerator02 () {
  console.log('A')
  yield console.log('B') // Pausado
  console.log('C')
  yield console.log('D') // Pausado
  console.log('E')
}

funGenerator02().next().value // Resulado: A B
funGenerator02().next().value // Resulado: A B

console.log('------------------------------------------------')
const iterator = funGenerator02()
iterator.next() // Resulado: A B
iterator.next() // Resulado: C B
iterator.next() // Resultado: E
