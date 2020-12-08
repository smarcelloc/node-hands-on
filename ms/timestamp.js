const ms = require('ms')

// Pegar do horário atual
//const timestamp = new Date().getTime();
//console.log(timestamp)
const dataHumana = ms(1607469933660, { long: true });
console.log(dataHumana);

const timestamp = ms('18605d', { long: true });
console.log(timestamp)