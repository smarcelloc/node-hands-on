const { CronJob } = require('cron')
/// /////// ┌────────────── second (optional) 0-59
/// /////// │ ┌──────────── minute 0-59
/// /////// │ │ ┌────────── hour 0-23
/// /////// │ │ │ ┌──────── day of month 1-31
/// /////// │ │ │ │ ┌────── month 1-12
/// /////// │ │ │ │ │ ┌──── day of week 0-7
/// /////// │ │ │ │ │ │
/// /////// │ │ │ │ │ │
// CronJob(* * * * * *)
const job = new CronJob('5 * * * * *', () => {
  console.log('Somente em 5 segundos, fazer backup no sistema')
  // 00:00:05   00:03:05
  // 00:01:05   00:04:05
  // 00:02:05   00:05:05
}, () => {
  console.log('Foi pausado com sucesso')
}, true, 'America/Sao_Paulo')
// parametro true é oconst job =  mesmo job.start();
// job.start();
if (job.running === true) {
  console.log('[OK] Sucesso está rodando [JOBS]')
}
// new CronJob('*/5 * * * * *', () => {
//   if (job.running == true) {
//     job.stop()
//   }
//   console.log('CADA segundo 5 fazer backup no sistema')
// }, null, true)

// https://www.npmjs.com/package/node-cron
// https://www.npmjs.com/package/cron
