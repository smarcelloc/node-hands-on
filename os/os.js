const os = require('os')
const humanizeDuration = require('humanize-duration')

console.log('Arquitetura', os.arch())
console.log('CPUS', os.cpus())
console.log('CPU - NUCLEOS', os.cpus().length)
console.log('Plataforma', os.platform())
console.log('Versão', os.version())
console.log('Release', os.release())

const freemem = (os.freemem() / 1024) / 1024
const totalmem = (os.totalmem() / 1024) / 1024

console.log('Memória livre', parseInt(freemem), 'mb')
console.log('Total de memória', parseInt(totalmem), 'mb')
console.log('Memória em uso', parseInt(totalmem - freemem), 'mb')

const porcentagemMemoriaEmUso = parseInt(freemem * 100) / totalmem
console.log('Memória livre', 100 - porcentagemMemoriaEmUso, '%')
console.log('Memória em uso', porcentagemMemoriaEmUso, '%')

const milissegundosUptime = os.uptime() * 1000

console.log('tempo em atividade (até desligar)', humanizeDuration(milissegundosUptime, {
  language: 'pt',
  units: ['h', 'm'],
  round: true
}))

console.log('Placa de Rede', os.networkInterfaces())
