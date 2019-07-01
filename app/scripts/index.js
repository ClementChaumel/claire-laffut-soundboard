import '../styles/main.scss'
import qqjdfSource from '../sounds/qqjdf.mp3'
import bonjourSource from '../sounds/bonjour.mp3'
import fauteAvoueeSource from '../sounds/FauteAvoueeEstAMoitiePardonnee.mp3'
import fullIntroSource from '../sounds/fullIntro.mp3'
import pasLeTempsSource from '../sounds/JaiPasLeTemps.mp3'
import vuALaTVSource from '../sounds/JlaiVuALaTele.mp3'
import talatatalataSource from '../sounds/Talatatalata.mp3'
import enferSource from '../sounds/SiJMensJVaisEnEnfer.mp3'
import tantPisSource from '../sounds/TantPis.mp3'
import ttQuitterSource from '../sounds/toutQuitte.mp3'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}

var qqjdfSound = new Audio(qqjdfSource)

var qqjdfElement = document.getElementById('qqjdf')
qqjdfElement.addEventListener('click', function () {
  const element = this
  element.className += ' rotate'
  qqjdfSound.addEventListener('ended', function () {
    element.className = 'button'
  })
  qqjdfSound.play()
})

var bonjourSound = new Audio(bonjourSource)

var bonjourElement = document.getElementById('bonjour')
bonjourElement.addEventListener('click', function () {
  const element = this
  element.className += ' rotate'
  bonjourSound.addEventListener('ended', function () {
    element.className = 'button'
  })
  bonjourSound.play()
})

var fauteAvoueeSound = new Audio(fauteAvoueeSource)

var fauteAvoueeElement = document.getElementById('fauteAvouee')
fauteAvoueeElement.addEventListener('click', function () {
  const element = this
  element.className += ' rotate'
  fauteAvoueeSound.addEventListener('ended', function () {
    element.className = 'button'
  })
  fauteAvoueeSound.play()
})

var fullIntroSound = new Audio(fullIntroSource)

var fullIntroElement = document.getElementById('fullIntro')
fullIntroElement.addEventListener('click', function () {
  const element = this
  element.className += ' rotate'
  fullIntroSound.addEventListener('ended', function () {
    element.className = 'button'
  })
  fullIntroSound.play()
})

var pasLeTempsSound = new Audio(pasLeTempsSource)

var pasLeTempsElement = document.getElementById('pasLeTemps')
pasLeTempsElement.addEventListener('click', function () {
  const element = this
  element.className += ' rotate'
  pasLeTempsSound.addEventListener('ended', function () {
    element.className = 'button'
  })
  pasLeTempsSound.play()
})

var vuALaTVSound = new Audio(vuALaTVSource)

var vuALaTVElement = document.getElementById('vuALaTV')
vuALaTVElement.addEventListener('click', function () {
  const element = this
  element.className += ' rotate'
  vuALaTVSound.addEventListener('ended', function () {
    element.className = 'button'
  })
  vuALaTVSound.play()
})

var talatatalataSound = new Audio(talatatalataSource)

var talatatalataElement = document.getElementById('talatatalata')
talatatalataElement.addEventListener('click', function () {
  const element = this
  element.className += ' rotate'
  talatatalataSound.addEventListener('ended', function () {
    element.className = 'button'
  })
  talatatalataSound.play()
})

var enferSound = new Audio(enferSource)

var enferElement = document.getElementById('enfer')
enferElement.addEventListener('click', function () {
  const element = this
  element.className += ' rotate'
  enferSound.addEventListener('ended', function () {
    element.className = 'button'
  })
  enferSound.play()
})

var tantPisSound = new Audio(tantPisSource)

var tantPisElement = document.getElementById('tantPis')
tantPisElement.addEventListener('click', function () {
  const element = this
  element.className += ' rotate'
  tantPisSound.addEventListener('ended', function () {
    element.className = 'button'
  })
  tantPisSound.play()
})

var ttQuitterSound = new Audio(ttQuitterSource)

var ttQuitterElement = document.getElementById('ttQuitter')
ttQuitterElement.addEventListener('click', function () {
  const element = this
  element.className += ' rotate'
  ttQuitterSound.addEventListener('ended', function () {
    element.className = 'button'
  })
  ttQuitterSound.play()
})

var raffutElement = document.getElementById('raffut')
raffutElement.addEventListener('click', function () {
  tantPisSound.play()
  enferSound.play()
  talatatalataSound.play()
  vuALaTVSound.play()
  pasLeTempsSound.play()
  fullIntroSound.play()
  fauteAvoueeSound.play()
  bonjourSound.play()
  ttQuitterSound.play()
  qqjdfSound.play()
})
