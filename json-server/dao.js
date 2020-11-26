const fetch = require('node-fetch')

const baseUri = 'http://localhost:3000/produtos'
const headers = new fetch.Headers()
headers.append('Accept', 'application/json')
headers.append('Content-Type', 'application/json')

/**
 * Trazer todos os produtos cadastrados
 */
exports.getAll = async () => {
  const response = await fetch(baseUri)
  return response
}
/**
 * Trazer um produto pelo ID
 *
 * @param {String} id Identificação do produto
 */
exports.getByID = async (id) => {
  const response = await fetch(`${baseUri}/${id}`)
  return response
}

/**
 * Cadastrar produtos
 * @param {Produto} produto
 */
exports.createProduto = async (produto) => {
  const response = await fetch(baseUri, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(produto)
  })
  return response
}

/**
 * Atualizar dados do produto
 * @param {String} id
 */
exports.updateProduto = async (id, produto) => {
  const response = await fetch(`${baseUri}/${id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(produto)
  })
  return response
}

exports.deleteProduto = async (id) => {
  const response = await fetch(`${baseUri}/${id}`, {
    method: 'DELETE'
  })
  return response
}

// POST
// fetch(`${baseUri}`, {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     id: cuid(),
//     nome: faker.commerce.productName(),
//     material: faker.commerce.productMaterial(),
//     descricao: faker.commerce.productDescription(),
//     preco: faker.commerce.price,
//   })
// }).then(response => {
//   if (response.status === 201) {
//     console.log('Produto criado com sucesso');
//   } else {
//     console.log('[ERRO]', response.status, ':', response.statusText,)
//   }
// }).catch(err => {
//   console.log(err);
//   process.exit(1)
// })
