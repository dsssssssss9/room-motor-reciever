/**
 * RobotBit with in-built Neopixel driver
 * 
 * Radio group set to 80
 * 
 * RobotBit led on pin16
 * 
 * DC motor connected to M1B
 * 
 * 2 servos connected to S1 & S8
 * 
 * Number received meaning : 
 * 
 * 0 = stop all DC motors + set S1 & S8 to 90°
 * 
 * 1 = Set DC motor to speed of 64
 * 
 * 2 = set S! + S8 to random posistions
 * 
 * Use A / B / A+B to test 
 * 
 *  motor / servo manually
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        robotbit.MotorStopAll()
        robotbit.Servo(robotbit.Servos.S1, 90)
        robotbit.Servo(robotbit.Servos.S8, 90)
    } else if (receivedNumber == 1) {
        robotbit.MotorRun(robotbit.Motors.M1B, 64)
    } else if (receivedNumber == 2) {
        robotbit.Servo(robotbit.Servos.S1, randint(20, 160))
        robotbit.Servo(robotbit.Servos.S8, randint(20, 160))
    }
})
// Set S1 + S8 to random posistions
// 
input.onButtonPressed(Button.A, function () {
    robotbit.Servo(robotbit.Servos.S1, randint(20, 160))
    robotbit.Servo(robotbit.Servos.S8, randint(10, 175))
})
// Stop DC motor on M1B
// 
// Set S1 & S8 to 90°
input.onButtonPressed(Button.AB, function () {
    robotbit.Servo(robotbit.Servos.S8, 90)
    robotbit.Servo(robotbit.Servos.S1, 90)
    robotbit.MotorStopAll()
})
// Set M1B to s[eed of 64
input.onButtonPressed(Button.B, function () {
    robotbit.MotorRun(robotbit.Motors.M1B, 64)
})
radio.setGroup(80)
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(24)
strip.clear()
strip.showColor(neopixel.colors(NeoPixelColors.Green))
robotbit.MotorStopAll()
