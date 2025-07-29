const btnConsole = document.getElementById('botaoConsole')
const btnText = document.getElementById('botaoTexto')
const btnReset = document.getElementById('botaoReset')
const Paragrafo = document.getElementById('mensagem')

btnConsole.addEventListener('click', () => {
    console.log("status: Ok.")
})

btnText.addEventListener('click', () => {
    Paragrafo.textContent = "Status: Ok"
    Paragrafo.style.color = "green"
})

btnReset.addEventListener('click', () => {
    Paragrafo.textContent = "Texto Original"
    Paragrafo.style.color = "black"
})