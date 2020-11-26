module.exports = class Produtos {
  constructor (id, nome, material, descricao, preco) {
    this.id = id
    this.nome = nome
    this.material = material
    this.descricao = descricao
    this.preco = preco
  }

  get () {
    return {
      id: this.id,
      nome: this.nome,
      material: this.material,
      descricao: this.descricao,
      preco: this.preco
    }
  }
}
