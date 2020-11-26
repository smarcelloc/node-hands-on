const fetch = require('node-fetch')

const cep = '04821000'

const urlApi = `http://viacep.com.br/ws/${cep}/json/`

fetch(urlApi)
  .then(res => res.json()) // é necessário para body
  .then(json => {
    if (json) {
      console.log(json)
    } else {
      console.log('Não foi encontrado este cep', cep)
    }
  })
  .catch(err => { console.log(err); process.exit(1) })

const urlSite = 'http://google.com'

fetch(urlSite)
  .then(res => res.text())
  .then(body => console.log(body))
  .catch(err => { console.log(err); process.exit(1) })
