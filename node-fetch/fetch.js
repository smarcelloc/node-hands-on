const fetch = require('node-fetch')

// API EXTERNA
const apiUrl = 'https://jsonplaceholder.typicode.com/todos'
const apiUrlPost = 'https://httpbin.org/post'
fetch(apiUrl)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => { console.log(err); process.exit(1) })

fetch(apiUrlPost, {
  method: 'POST',
  body: {
    name: 'julio',
    age: 2
  }
})
  .then(json => console.log(json))
  .catch(err => { console.log(err); process.exit(1) })

// Atenção: node-fetch vs windows.fetch (browser)
