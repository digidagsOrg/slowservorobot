radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 13) {
        Position1 = ServoSlow.setServoAngle(1, 90, 10, Position1, ServoSlow.ServoDirection.CW)
        basic.pause(1000)
        Position1 = ServoSlow.setServoAngle(1, 90, 10, Position1, ServoSlow.ServoDirection.CCW)
    }
})
let Position1 = 0
radio.setGroup(1)
Position1 = 90
let Position2 = 80
kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, Position1)
kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo2, Position2)
