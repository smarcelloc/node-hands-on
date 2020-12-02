const rimraf = require('rimraf')
const { mkdir } = require('fs')
const { join } = require('path')

const dir = join(__dirname, 'test')

mkdir(dir, (err) => {
  if (err) { throw err } else { console.log('Criado: ', dir) }
})

mkdir(join(dir, 'test'), (err) => {
  if (err) { throw err } else { console.log('Criado: ', dir) }
})

setTimeout(() => {
  rimraf(dir, (err) => {
    if (err) { throw err } else { console.log('Deletado: ', dir) }
  })
}, 2000)
