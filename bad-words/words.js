const Filter = require('bad-words')
const filter = new Filter()

/// ENGLISH
const words = 'you are a asshole'

console.log('clean:', filter.clean(words))
console.log('tem palavrão?', filter.isProfane(words))
console.log('clean:', filter.clean(words))

console.log('--------------------------------------------')
/// PORTUGUES
const lista = require('./palavrao.json')
const filterPtBr = new Filter({
  list: lista.palavraos,
  placeHolder: 'x'
})

const palavra = 'Você é um porra';

console.log(filterPtBr.clean(palavra))

filterPtBr.removeWords('porra')
console.log(filterPtBr.clean(palavra))