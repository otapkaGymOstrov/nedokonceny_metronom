input.onButtonPressed(Button.A, function () {
    screensaver_posledni_stisk = control.millis()
    pocet_stisku += 1
    if (pocet_stisku == 1) {
        cas_druheho_stisku = 0
        cas_prvniho_stisku = control.millis()
        led.plot(2, 2)
        basic.pause(100)
        basic.clearScreen()
    } else if (pocet_stisku == 2) {
        cas_druheho_stisku = control.millis()
        casovy_rozdil = cas_druheho_stisku - cas_prvniho_stisku
        serial.writeString("Nastavena doba cekani: ")
        serial.writeLine("" + (casovy_rozdil))
    } else {
        pocet_stisku = 0
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    screensaver_posledni_stisk = control.millis()
})
let casovy_rozdil = 0
let cas_prvniho_stisku = 0
let cas_druheho_stisku = 0
let screensaver_posledni_stisk = 0
let pocet_stisku = 0
pocet_stisku = 0
let screensaver_kolik_minut = 0.5
basic.forever(function () {
    if (pocet_stisku == 2) {
        led.plot(2, 2)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(casovy_rozdil)
    }
})
