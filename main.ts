radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 13) {
        Position1 = ServoSlow.setServoAngle(1, 90, 10, Position1, ServoSlow.ServoDirection.CCW)
        basic.pause(1000)
        Position2 = ServoSlow.setServoAngle(2, 15, 50, Position2, ServoSlow.ServoDirection.CCW)
        basic.pause(1000)
        Position2 = ServoSlow.setServoAngle(2, 15, 50, Position2, ServoSlow.ServoDirection.CW)
        basic.pause(1000)
        Position1 = ServoSlow.setServoAngle(1, 90, 10, Position1, ServoSlow.ServoDirection.CW)
    } else if (receivedNumber == 14) {
        Position1 = ServoSlow.setServoAngle(1, 90, 10, Position1, ServoSlow.ServoDirection.CW)
        basic.pause(1000)
        Position1 = ServoSlow.setServoAngle(1, 90, 10, Position1, ServoSlow.ServoDirection.CCW)
    } else if (receivedNumber == 0) {
        ServoSlow.setServoPosition(1, 90)
        ServoSlow.setServoPosition(2, 75)
    }
})
let Position2 = 0
let Position1 = 0
radio.setGroup(1)
Position1 = 90
Position2 = 75
kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, Position1)
kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo2, Position2)
