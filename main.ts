radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 14) {
        motion1()
    } else if (receivedNumber == 13) {
        motion2()
    } else if (receivedNumber == 0) {
        Ausgangsposition()
    }
})
input.onButtonPressed(Button.A, function () {
    Position2 = Nicken(Position2)
})
function Nicken (PositionX: number) {
    Position2 = ServoSlow.setServoAngle(2, 20, 10, PositionX, ServoSlow.ServoDirection.CCW)
    basic.pause(500)
    Position2 = ServoSlow.setServoAngle(2, 30, 10, Position2, ServoSlow.ServoDirection.CW)
    basic.pause(500)
    Position2 = ServoSlow.setServoAngle(2, 10, 10, Position2, ServoSlow.ServoDirection.CCW)
    ServoSlow.setServoPosition(2, 75)
    Position2 = 75
    return Position2
}
function NaseRandom (Loop: number, Pause: number) {
    for (let index = 0; index < Loop; index++) {
        Pin = randint(0, 2)
        if (Pin == 0) {
            pins.digitalWritePin(DigitalPin.P0, randint(0, 1))
        } else if (Pin == 1) {
            pins.digitalWritePin(DigitalPin.P1, randint(0, 1))
        } else if (Pin == 2) {
            pins.digitalWritePin(DigitalPin.P2, randint(0, 1))
        }
        basic.pause(Pause)
    }
}
function NaseBackground () {
    Pin = randint(0, 2)
    if (Pin == 0) {
        pins.digitalWritePin(DigitalPin.P0, randint(0, 1))
    } else if (Pin == 1) {
        pins.digitalWritePin(DigitalPin.P1, randint(0, 1))
    } else if (Pin == 2) {
        pins.digitalWritePin(DigitalPin.P2, randint(0, 1))
    }
    basic.pause(500)
}
function motion2 () {
    Position1 = ServoSlow.setServoAngle(1, 51, 10, Position1, ServoSlow.ServoDirection.CW)
    Position2 = Nicken(Position2)
    Position1 = ServoSlow.setServoAngle(1, 51, 10, Position1, ServoSlow.ServoDirection.CCW)
}
function NaseRGB () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(1000)
}
input.onButtonPressed(Button.AB, function () {
    Ausgangsposition()
})
function Schuetteln (PositionX: number) {
    Position1 = ServoSlow.setServoAngle(1, 20, 10, PositionX, ServoSlow.ServoDirection.CCW)
    basic.pause(500)
    Position1 = ServoSlow.setServoAngle(1, 42, 10, Position1, ServoSlow.ServoDirection.CW)
    basic.pause(500)
    Position1 = ServoSlow.setServoAngle(1, 42, 10, Position1, ServoSlow.ServoDirection.CCW)
    basic.pause(500)
    Position1 = ServoSlow.setServoAngle(1, 20, 10, Position1, ServoSlow.ServoDirection.CW)
    ServoSlow.setServoPosition(1, 90)
    return Position1
}
input.onButtonPressed(Button.B, function () {
    Position1 = Schuetteln(Position1)
})
function Ausgangsposition () {
    Position1 = 90
    Position2 = 75
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, Position1)
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo2, Position2)
}
function motion1 () {
    Position1 = ServoSlow.setServoAngle(1, 51, 10, Position1, ServoSlow.ServoDirection.CCW)
    Position2 = Nicken(Position2)
    Position1 = ServoSlow.setServoAngle(1, 51, 10, Position1, ServoSlow.ServoDirection.CW)
}
let Position1 = 0
let Pin = 0
let Position2 = 0
radio.setGroup(1)
Ausgangsposition()
NaseRGB()
control.inBackground(function () {
    while (true) {
        NaseBackground()
    }
})
