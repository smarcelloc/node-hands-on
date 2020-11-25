const request = require('request')

// Request (Estático)
request('https://google.com.br/', (err, res, body) => {
  if (err) {
    throw err;
  }

  if (res.statusCode !== 200) {
    throw new Error('Failed the servidor')
  }


  console.log(body)
});

const fs = require('fs')
const guid = require('guid')
const { join } = require('path')

request('https://google.com.br').pipe(fs.createWriteStream(join(__dirname, 'google.html')))

const imgName = guid.raw()
const imgURL = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'


function extractImgType(url) {
  return url.split('.').pop()
}

const imgType = extractImgType(imgURL);
console.log(imgType);

// Imagem da google
request(imgURL).pipe(fs.createWriteStream(join(__dirname, `${imgName + '.' + imgType}`)));