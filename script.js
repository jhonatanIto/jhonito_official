const calculadora = {
    init() {
        this.controllers.calculdora()
    },
    controllers: {
        calculdora() {
            let but1 = document.getElementById('but1')
            let calpage = document.getElementById("calculadoraPage")
            let home = document.getElementById("home")
            but1.onclick = () => {
                calpage.style.display = "inline"
                home.style.display = "none"

            }
            let exit = document.getElementById("exit")
            exit.onclick = () => {
                home.style.display = "flex"
                calpage.style.display = "none"
            }

            let display = document.getElementById("display")
            let buttons = Array.from(document.getElementsByClassName("button"))
            console.log(buttons)

            buttons.map(button => {
                button.addEventListener('click', (e) => {
                    switch (e.target.innerText) {
                        case "C":
                            display.innerText = ""
                            break
                        case "←":
                            if (display.innerText) {
                                display.innerText = display.innerText.slice(0, -1)
                            }

                            break
                        case "=":
                            try {
                                display.innerText = eval(display.innerText)
                            } catch {
                                display.innerText = "Error!"
                            }

                            break
                        default:
                            display.innerText += e.target.innerText
                    }
                })
            }
            )

        }
    },


}

const conversor = {
    init() {
        this.controllers.modal()
        this.controllers.closePop()

    },
    controllers: {
        modal() {
            let convBody = document.getElementById("conv")
            let but2 = document.getElementById("but2")
            but2.onclick = () => {
                convBody.style.display = "flex"
            }
        },

        closePop() {
            let convBody = document.getElementById("conv")
            convBody.addEventListener('click', (e) => {
                if (e.target.id == "conv") {
                    convBody.style.display = "none"
                }
            })


        }
    }
}

calculadora.init()
conversor.init()
