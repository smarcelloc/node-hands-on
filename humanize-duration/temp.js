const humanizeDuration = require('humanize-duration')
humanizeDuration(97320000) // '1 day, 3 hours, 2 minutes'

// Options ///////////////////////////
// Idioma
humanizeDuration(5000, { language: 'ko' }) // '5 초'
console.log(humanizeDuration.getSupportedLanguages()) // ['ar', 'bg', 'ca', 'cs', da', 'de', ...]

humanizeDuration(3000, {
  language: 'bad language', // Não existe "language bad" -> padrão é "es"
  fallbacks: ['bad language', 'es']
})

// Criar o idioma -> Short En
const shortEnglishHumanizer = humanizeDuration.humanizer({
  language: 'shortEn',
  languages: {
    shortEn: {
      y: () => 'y',
      mo: () => 'mo',
      w: () => 'w',
      d: () => 'd',
      h: () => 'h',
      m: () => 'm',
      s: () => 's',
      ms: () => 'ms'
    }
  }
})

shortEnglishHumanizer(15600000) // '4 h, 20 m'
