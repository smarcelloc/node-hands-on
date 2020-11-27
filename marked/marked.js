const marked = require('marked')
const open = require('open')
const { join } = require('path')
const fs = require('fs')

fs.readFile(join(__dirname, 'smarcelloc.md'), 'utf-8', function (err, data) {
  if (err) throw err
  const htmlMD = marked(data) // transforma MARKDOWN (github) -> HTML

  fs.writeFile(join(__dirname, 'smarcelloc.html'), htmlMD, {
    enconding: 'utf-8',
    flag: 'w'
  }, (err) => {
    if (err) throw err
    open(join(__dirname, 'smarcelloc.html'), { app: 'google-chrome' })
  })
})

/*
 * Flags
  r	  Abre o arquivo para leitura. Uma exceção ocorre se o arquivo não existe.
  r+	Abre o arquivo para leitura e escrita. Uma exceção ocorre se o arquivo não existe.
  rs	Arquivo aberto para leitura no modo síncrono.
  rs+	Arquivo aberto para leitura e escrita, contando a OS para abri-lo de forma síncrona.
  w	  Abre o arquivo para escrita. O arquivo é criado (se não existir) ou truncado (se existir).
  wx	Como ‘w’, mas não consegue se existe caminho.
  w+	Abre o arquivo para leitura e escrita. O arquivo é criado (se não existir) ou truncado (se existir).
  wx+	Como ‘w+’, mas não consegue se existe caminho.
  a	  Abre o arquivo para acrescentar. O arquivo é criado se ele não existe.
  ax	Como ‘a’, mas não consegue se existe caminho.
  a+	Abre o arquivo para leitura e acrescentando. O arquivo é criado se ele não existe.
  ax+	Como ‘a+’, mas não consegue se existe caminho.
*/
