const parseArgs = require('minimist')

// $ node minimist/arg.js
console.log(parseArgs(process.argv0))
/*
{ _: [ 'n', 'o', 'd', 'e' ] }
*/


// $ node minimist/arg.js
console.log(parseArgs(process.argv))
/*
{
  _: [
    '/usr/local/bin/node',
    '/workspaces/node-hands-on/minimist/arg.js'
  ],
}
*/



// $ node minimist/arg.js --nome=marcello --idade 10 -ns5 -khd=10
console.log(parseArgs(process.argv))
/*
{
  _: [
    '/usr/local/bin/node',
    '/workspaces/node-hands-on/minimist/arg.js'
  ],
  nome: 'marcello', // --nome=marcello
  idade: 10, // --idade 10
  n: 's5', // -ns5 
  k: 10 // -khd=10
}
*/
const params = parseArgs(process.argv)
console.log(params.nome, params.idade); // marcello 10

