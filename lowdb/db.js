// https://github.com/typicode/lowdb/#usage
const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const faker = require('faker/locale/pt_BR')
const cuid = require('cuid')

const { join } = require('path')

const adapter = new FileSync(join(__dirname, 'db.json'))
const db = lowdb(adapter)
const _id = cuid()

// Modelo
db.defaults({ posts: [], user: {}, count: 0 })
  .write()

// Add a post
db.get('posts')
  .push({ id: _id, title: faker.lorem.words(2), published: faker.random.boolean() })
  .write()

// Set a user using Lodash shorthand syntax
db.set('user.name', faker.name.findName())
  .write()

// Increment count
db.update('count', n => n + 1)
  .write()

// Consultar
const posts = db.get('posts')
  .find({ id: _id })
  .value()

console.log(posts)
console.log('TODOS published')
console.log(db.get('posts')
  .filter({ published: true })
  .sortBy('title')
  .take(5) // limite
  .map((el) => {
    return { id: el.id, title: el.title }
  }) // somente o campo title
  .value())
