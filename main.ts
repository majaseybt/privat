let X = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.turnRgbLedOff()
    X = randint(1, 6)
    basic.showNumber(X)
    if (X) {
        basic.setLedColor(0x00ffff)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
