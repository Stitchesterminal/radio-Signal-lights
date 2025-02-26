input.onButtonPressed(Button.A, function () {
    radio.setGroup(2)
    radio.sendString(left)
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P1, 1023)
        pins.analogWritePin(AnalogPin.P1, 600)
    }
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(5000)
    for (let index = 0; index < 22; index++) {
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P1, 1023)
        basic.showLeds(`
            # # . # #
            . . . . .
            # # . # #
            . # . # .
            # # . # #
            `)
        basic.showLeds(`
            # # . # #
            . . . . .
            . . . # #
            . . . # .
            . . . # #
            `)
    }
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(1)
    radio.sendString(allway)
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P2, 1023)
        pins.analogWritePin(AnalogPin.P1, 1023)
    }
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        . # . # .
        . . # . .
        `)
    basic.pause(5000)
    for (let index = 0; index < 22; index++) {
        pins.analogWritePin(AnalogPin.P1, 1023)
        pins.analogWritePin(AnalogPin.P2, 1023)
        basic.showLeds(`
            # # . # #
            . . . . .
            # # . # #
            . # . # .
            # # . # #
            `)
        basic.showLeds(`
            # # . # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == left) {
        radio.setGroup(2)
        pins.analogWritePin(AnalogPin.P1, 1023)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.pause(100)
        for (let index = 0; index < 6; index++) {
            pins.analogWritePin(AnalogPin.P1, 0)
            basic.pause(100)
            pins.analogWritePin(AnalogPin.P1, 1023)
            basic.pause(100)
        }
        for (let index = 0; index < 8; index++) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # #
                . . . . #
                . . . . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # # #
                . . . # .
                . . . . #
                `)
            basic.showLeds(`
                . . . # .
                . . # . .
                . # # # #
                . . # . .
                . . . # .
                `)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            basic.showLeds(`
                # . . . .
                . . . . .
                # # # . .
                . . . . .
                # . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                . . . . .
                . . . . .
                `)
        }
        for (let index = 0; index < 11; index++) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        for (let index = 0; index < 10; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . #
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # #
                . . . . #
                . . . . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # # #
                . . . # .
                . . . . #
                `)
            basic.showLeds(`
                . . . # .
                . . # . .
                . # # # #
                . . # . .
                . . . # .
                `)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            basic.showLeds(`
                . # . . .
                # . . . .
                # # # # .
                # . . . .
                . # . . .
                `)
            basic.showLeds(`
                # . . . .
                . . . . .
                # # # . .
                . . . . .
                # . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                `)
        }
        for (let index = 0; index < 10; index++) {
            pins.analogWritePin(AnalogPin.P2, 0)
            basic.pause(100)
            pins.analogWritePin(AnalogPin.P2, 1023)
            basic.pause(100)
        }
        pins.analogWritePin(AnalogPin.P2, 0)
    }
    if (receivedString == right) {
        radio.setGroup(3)
        pins.analogWritePin(AnalogPin.P2, 0)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P2, 1023)
        basic.pause(100)
        for (let index = 0; index < 8; index++) {
            pins.analogWritePin(AnalogPin.P2, 0)
            basic.pause(100)
            pins.analogWritePin(AnalogPin.P2, 1023)
            basic.pause(100)
        }
        for (let index = 0; index < 8; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                # . . . .
                # # . . .
                # . . . .
                . . . . .
                `)
            basic.showLeds(`
                # . . . .
                . # . . .
                # # # . .
                . # . . .
                # . . . .
                `)
            basic.showLeds(`
                . # . . .
                . . # . .
                # # # # .
                . . # . .
                . # . . .
                `)
            for (let index = 0; index < 8; index++) {
                basic.showLeds(`
                    . . # . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . # . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            basic.showLeds(`
                . . . # .
                . . . . #
                . # # # #
                . . . . #
                . . . # .
                `)
            basic.showLeds(`
                . . . . #
                . . . . .
                . . # # #
                . . . . .
                . . . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . # #
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . #
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        for (let index = 0; index < 8; index++) {
            pins.analogWritePin(AnalogPin.P2, 1023)
            basic.pause(100)
            pins.analogWritePin(AnalogPin.P2, 0)
            basic.pause(100)
        }
        pins.analogWritePin(AnalogPin.P2, 0)
    }
    if (receivedString == allway) {
        radio.setGroup(1)
        pins.analogWritePin(AnalogPin.P2, 1023)
        pins.analogWritePin(AnalogPin.P1, 1023)
        for (let index = 0; index < 6; index++) {
            pins.analogWritePin(AnalogPin.P2, 0)
            pins.analogWritePin(AnalogPin.P1, 0)
            basic.pause(100)
            pins.analogWritePin(AnalogPin.P1, 1023)
            pins.analogWritePin(AnalogPin.P2, 1023)
            basic.pause(100)
        }
        for (let index = 0; index < 6; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . # . # .
                # # # # #
                . # . # .
                . . # . .
                `)
            basic.showLeds(`
                . # . # .
                # . . . #
                # # # # #
                # . . . #
                . # . # .
                `)
            basic.showLeds(`
                # . . . #
                . . . . .
                # # # # #
                . . . . .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . # #
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                . . . . .
                . . . . .
                `)
        }
        for (let index = 0; index < 8; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . # # # .
                . . # . .
                `)
            basic.showLeds(`
                . # . # .
                # # . # #
                # # # # #
                # # . # #
                . # . # .
                `)
            basic.showLeds(`
                # . . . #
                # . . . #
                # # # # #
                # . . . #
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . # #
                . . . . .
                . . . . .
                `)
        }
        for (let index = 0; index < 8; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                # . . . #
                # # . # #
                # . . . #
                . . . . .
                `)
            basic.showLeds(`
                # . . . #
                # # . # #
                # # # # #
                # # . # #
                # . . . #
                `)
            basic.showLeds(`
                . # . # .
                . # # # .
                # # # # #
                . # # # .
                . # . # .
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        for (let index = 0; index < 8; index++) {
            pins.analogWritePin(AnalogPin.P2, 0)
            pins.analogWritePin(AnalogPin.P1, 1023)
            basic.pause(100)
            pins.analogWritePin(AnalogPin.P1, 0)
            pins.analogWritePin(AnalogPin.P2, 1023)
            basic.pause(100)
        }
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(3)
    radio.sendString(right)
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P2, 1023)
        pins.analogWritePin(AnalogPin.P2, 600)
    }
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(5000)
    for (let index = 0; index < 22; index++) {
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P2, 1023)
        basic.showLeds(`
            # # . # #
            . . . . .
            # # . # #
            . # . # .
            # # . # #
            `)
        basic.showLeds(`
            # # . # #
            . . . . .
            # # . . .
            . # . . .
            # # . . .
            `)
    }
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
let allway = ""
let right = ""
let left = ""
radio.setGroup(1)
pins.setAudioPin(DigitalPin.P0)
left = "left"
right = "right"
allway = "allway"
let FUCK_OFF = "FUCK OFF"
