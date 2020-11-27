const soap = require('soap')

const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'

// PRODUÇÃO: https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl
// DESENVOLVIMENTO: https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl

/*
O SIGEP WEB é um sistema disponibilizado pelos próprios Correios.
Ele é totalmente gratuito, e tem como objetivo o aperfeiçoamento da
logística interna das empresas. Como é um sistema de gerenciamento de entregas
que melhora a integração entre vários serviços, ajuda a diminuir o tempo de espera
do seu cliente pelo produto que comprou. Assim, você satisfaz o cliente e ganha
a sua confiança. O que é algo muito bom para sua empresa. O aplicativo
é desenvolvido em plataforma Java, que possibilita a interatividade
não só com os sistemas dos Correios, mas também com os do cliente.

https://blog.bling.com.br/sistema-para-gerenciar-entregas-sigep-web/#:~:text=O%20SIGEP%20WEB%20%C3%A9%20um,da%20log%C3%ADstica%20interna%20das%20empresas.
*/

soap.createClient(url, (err, client) => {
  if (err) {
    console.log(filtragemDeErro(err))
  } else {
    client.consultaCEP({
      cep: '37552171'
    }, (err, res) => {
      console.log((err || res))
    })
  }
})

const filtragemDeErro = (err) => {
  const errStr = String(err)
  return {
    code: errStr.match(/(?<=Code.+)([\d]+)/g).join(),
    title: errStr.match(/(?<=<title>)(.*)(?=<\/title>)/g).join(),
    message: errStr.match(/(?<=<p>)(.*)(?=<\/p>)/g).join()
  }
}

// const removerTags = (tag) => {
//   return String(tag).replace(/<([^>]+)>/g, '')
// }
