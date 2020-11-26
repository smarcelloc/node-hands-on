const sh = require('shelljs') // multiplataforma (win, linux, apple)
const { join } = require('path')

const file = join(__dirname, '..', 'request', 'google.html')
const file02 = join(__dirname, '..', 'node-fetch', 'cep.js')
const content = sh.cat(file, file02)
console.log(content.toString())
