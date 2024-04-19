import { Application } from 'pixi.js'
import { Howl } from 'howler'

(async () => {
  const aSound = new Howl({ src: 'assets/sfx/pop/a.mp3' })
  const xSound = new Howl({ src: 'assets/sfx/pop/x.mp3' })
  const ySound = new Howl({ src: 'assets/sfx/pop/y.mp3' })
  const bSound = new Howl({ src: 'assets/sfx/pop/b.mp3' })
  const app = new Application()
  await app.init({
    width: 128,
    height: 128
  })
  const buttonState = {
    a: false,
    x: false,
    y: false,
    b: false
  }
  app.ticker.add(function (a) {
    const gamepad = navigator.getGamepads()[0]
    if (gamepad !== null) {
      if (gamepad.buttons[0].pressed) {
        if (!buttonState.a) {
          aSound.play()
        }
      }
      buttonState.a = gamepad.buttons[0].pressed
      if (gamepad.buttons[1].pressed) {
        if (!buttonState.b) {
          bSound.play()
        }
      }
      buttonState.b = gamepad.buttons[1].pressed
      if (gamepad.buttons[2].pressed) {
        if (!buttonState.x) {
          xSound.play()
        }
      }
      buttonState.x = gamepad.buttons[2].pressed
      if (gamepad.buttons[3].pressed) {
        if (!buttonState.y) {
          ySound.play()
        }
      }
      buttonState.y = gamepad.buttons[3].pressed
    }
  })
  document.body.appendChild(app.canvas)
})()