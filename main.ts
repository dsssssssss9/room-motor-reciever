radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        robotbit.MotorStopAll()
    } else if (receivedNumber == 1) {
        robotbit.MotorRun(robotbit.Motors.M1B, 64)
    }
})
input.onButtonPressed(Button.A, function () {
    robotbit.Servo(robotbit.Servos.S1, randint(20, 160))
    robotbit.Servo(robotbit.Servos.S8, randint(10, 175))
})
input.onButtonPressed(Button.AB, function () {
    robotbit.Servo(robotbit.Servos.S8, 90)
    robotbit.Servo(robotbit.Servos.S1, 90)
    robotbit.MotorStopAll()
})
input.onButtonPressed(Button.B, function () {
    robotbit.MotorRun(robotbit.Motors.M1B, 64)
})
radio.setGroup(80)
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(24)
strip.clear()
strip.showColor(neopixel.colors(NeoPixelColors.Green))
robotbit.MotorStopAll()
