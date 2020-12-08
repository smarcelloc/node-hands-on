const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

// Middlaware é interceptador de requisição
//app.use(morgan('combined')) 
// RESULTADO: ::ffff:127.0.0.1 - - [08/Dec/2020:22:02:04 +0000] "GET /favicon.ico HTTP/1.1" 404 150 "http://localhost:3000/" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"

//app.use(morgan('common'))
// RESULTADO: ::ffff:127.0.0.1 - - [08/Dec/2020:22:02:49 +0000] "GET / HTTP/1.1" 304 -

//app.use(morgan('dev'))
// RESULTADO: GET / 304 3.385 ms - -

//app.use(morgan('short'))
// ::ffff:127.0.0.1 - GET / HTTP/1.1 304 - - 3.423 ms


//app.use(morgan('tiny'))
// RESULTADO: GET / 304 - - 3.057 ms

app.use(morgan(':method :url :response-time'))
// RESULTADO: GET / 4.517
////////////////////////////////////////////

// Routes /////////////////////////////////
app.get('/', (req, res, next) => {
  res.send('Verifica no console os logs de requisição')
})
//////////////////////////////////////////

app.listen(port, () => {
  process.stdout.write(`[OK] Server listening on port ${port}\n`);
});