const { join } = require('path')

////////////////////////////////////////////
// .ENV
const env = require('dotenv').config({
  path: join(__dirname, '.env')
});

if (env.error) {
  throw env.error
} else {
  console.log(env.parsed)
}

////////////////////////////////////////////////////////////////////////////////
//////////// config.ini
const ini = require('ini')
const fs = require('fs')

fs.readFile(join(__dirname, 'config.ini'), (err, contents) => {
  const config = ini.parse(contents.toString())
  console.log(config)
})