const index = require('./../index')

test('Verificar se a função dobro do index está funcionando', () => {
  const num = 3
  const resultado = index.dobro(3)

  expect(resultado).toBe(num * 2)
})
