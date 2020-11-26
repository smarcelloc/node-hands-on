const { exec } = require('child_process')

exec('git add --all', (err, stdout, stderr) => {
  if (err) {
    console.log(`[ERRO]: ${stderr}`)
    process.exit(1)
  } else {
    console.log('[OK]: Comando executado com sucesso')
  }
})
