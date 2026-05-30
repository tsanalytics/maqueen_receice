radio.onReceivedString(function (receivedString) {
    if (receivedString == "Open") {
        if (angle > 0) {
            angle += -1
            maqueen.servoRun(maqueen.Servos.S1, angle)
        }
    } else if (receivedString == "Close") {
        if (angle < 180) {
            angle += 1
            maqueen.servoRun(maqueen.Servos.S1, angle)
        }
    } else if (receivedString == "LEDL") {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    } else if (receivedString == "LEDR") {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "F") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Math.map(value, 550, 1023, 10, 255))
    } else if (name == "B") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Math.map(value, 1, 450, 255, 10))
    } else if (name == "L") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Math.map(value, 1, 450, 255, 40))
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    } else if (name == "R") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Math.map(value, 550, 1023, 40, 255))
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    }
})
let angle = 0
radio.setGroup(1)
angle = 90
maqueen.servoRun(maqueen.Servos.S1, angle)
