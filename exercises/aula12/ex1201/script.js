var agora = new Date()
var hora = agora.getHours()
var horaws = window.document.getElementById('horario')
horaws.innerHTML += `${hora}h.`
var horaimgws = window.document.getElementById('horaimg')
var corpo = window.document.getElementById('corpo')
if (hora < 12 && hora >=6) {
    horaimgws.innerHTML += `<img src="images/dia.png" alt="Bom dia">`
    corpo.style.background = 'rgb(161, 161, 0)'
} else if (hora < 18 && hora > 12) {
    horaimgws.innerHTML += `<img src="images/tarde.jpg" alt="Boa tarde">`
    corpo.style.background = 'rgb(201, 136, 15)'
} else if (hora <= 23) {
    horaimgws.innerHTML += `<img src="images/noite.jpg" alt="Boa noite">`
    corpo.style.background = 'rgb(20, 20, 70)'
} else {
    horaimgws.innerHTML += `<img src="images/noite.jpg" alt="Boa noite">`
    corpo.style.background = 'rgb(20, 20, 70)'
}