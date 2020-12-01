const co = require('co')
const { readFileSync } = require('fs')
const { resolve } = require('path')

// const file = join(__dirname, '..', 'yarn.lock')

// USO DO CO (Continuar assicrona, mas controla o fluxo de dados)
// uso do function * você controla o proximo valor
// co(function* () {
//   var result = yield Promise.resolve(readFileSync(file))
//   return result.toString();
// }).then((value) => {
//   console.log(value);
// }, (err) => {
//   console.error(err.stack);
// });

// var fn = co.wrap(function* (val) {
//   return yield Promise.resolve(val);
// });

// const val = "ok";
// fn(val).then((data) => {
//   console.log(data)
// });
// PARALERISMO
co(function * () {
  resolve(__dirname, '..')
  const files = ['yarn.lock', 'package.json', '.gitignore', 'README.md', 'git.js']
  const filesPromise = []

  files.forEach(file => {
    filesPromise.push(readFileSync(file))
  })

  const contents = yield filesPromise
  console.log(contents.toString())
})

// const fs = require('fs')

// USO NORMAL
// function lerArquivo(file) {
//   fs.readFile(file, 'utf-8', (err, data) => {
//     if (err) { throw err }
//     console.log(data)
//   })
// }

// lerArquivo(file);

// USO DE PROMISE
// function lerArquivoPromisse(file) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, 'utf-8', (err, data) => {
//       if (err) { reject(err) }
//       resolve(data)
//     })
//   })
// }

// lerArquivoPromisse(file).then(data => console.log(data)).catch(err => { throw err });
