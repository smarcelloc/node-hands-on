const open = require('open')
const { join } = require('path')

open('https://google.com', { app: ['google-chrome', '--incognito'] })
open('https://google.com', { app: ['firefox', '--private-window'] })
open(join(__dirname, 'google.png'), { wait: true })

// (async () => {
//     // Opens the image in the default image viewer and waits for the opened app to quit.
//     // await open(join(__dirname, 'google.png'), { wait: true });
//     // console.log('The image viewer app quit');

//     // Opens the URL in the default browser.
//     await open('https://google.com');

//     // Opens the URL in a specified browser.
//     //await open('https://google.com', { app: 'firefox' });

//     // Specify app arguments.
//     //await open('https://google.com', { app: ['google chrome', '--incognito'] });
// })();
