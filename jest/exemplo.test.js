const exemplo = require('./exemplo')

describe('teste básico', () => {
  it('Função do dobro', () => {
    expect(exemplo.exemplo01(10)).toBe(20)
  })

  it('Errado: Função do dobro', () => {
    expect(exemplo.exemplo01(10)).toBe(22)
  })

  it('Mock: Mockar o teste somar', () => {
    const callback = jest.fn().mockReturnValue(1)
    expect(exemplo.exemplo02(10, callback)).toBe(11)
    // toEqual({}) // objeto e array
  })
})
