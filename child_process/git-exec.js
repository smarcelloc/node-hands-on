const { exec } = require('child_process')

exec('git add --all', (err, stdout, stderr) => {
  if (err) {
    console.log(`[ERRO]: ${stderr}`)
    process.exit(1)
  } else {
    console.log('[OK]: Comando executado com sucesso')
  }
})

/**
 * exec('comando', (parametros))
 *
 * Parametro
  stdout: trata a saída da execução do processo;
  stderr: trata a saída de erro na execução do processo;
  stdin: trata a entrada de dados na execução do processo;
  pid: retorna o PID, ID do processo no sistema operacional;
  kill: mata o processo atual;
 */
