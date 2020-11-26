// CrawLey

const fetch = require('node-fetch')
const cheerio = require('cheerio');
const guid = require('guid');

const user = 'smarcelloc';
const struct = []

fetch(`https://github.com/${user}?tab=repositories`)
  .then(res => res.text())

  .then(body => {
    let $ = cheerio.load(body);
    $('#user-repositories-list .wb-break-all a').each(function () {
      struct.push({
        id: guid.raw(),
        text: tratamentoTexto($(this).text()),
        link: 'https://github.com/' + $(this).attr('href')
      });
    });
    console.log(struct);
  })

  .catch(err => {
    console.log(err);
    process.exit(1);
  })


function tratamentoTexto(text) {
  return String(text)
    .trim()
    .replace('\n', '') // primeiro que encontrar
    .replace(/-/g, ' ') // todos os - serão substituído por espaço
}
