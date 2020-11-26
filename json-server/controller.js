const dao = require('./dao')
const faker = require('faker/locale/pt_BR')
const Produto = require('./Produtos')
const cuid = require('cuid')

const produtos = async () => {
  dao.getAll()
    .then(res => res.json())
    .then(json => console.log(json))
}

const produto = async (id) => {
  dao.getByID(id)
    .then(res => res.json())
    .then(json => console.log(json))
}

const criarProdutos = async () => {
  const produto = new Produto(
    cuid(),
    faker.commerce.productName(),
    faker.commerce.productMaterial(),
    faker.commerce.productDescription(),
    faker.commerce.price()
  )

  dao.createProduto(produto.get())
    .then(res => {
      if (res.status) {
        console.log('Cadastro com sucesso')
      } else {
        console.log('Erro:', res.statusText)
      }
    })
}

produtos()
produto('ckhzb7c7o0000uclngv9k7pu9')
criarProdutos()
