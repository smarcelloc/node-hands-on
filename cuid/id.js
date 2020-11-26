const cuid = require('cuid')

console.log('ID:', cuid())

for (let index = 0; index < 100; index++) {
  console.log('INDEX:', index, 'ID:', cuid(), 'SLUG:', cuid.slug())
}
