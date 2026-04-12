var botão = window.document.getElementById('btn')
botão.addEventListener('click', verificar)
var ano = new Date()
var anosis = ano.getFullYear()
var anonas = window.document.getElementById('txtano')
var restxt = window.document.getElementById('res1')
var resimg = window.document.getElementById('res2')
var mas = window.document.getElementById('mas')
function verificar() {
    resimg.innerHTML = ''
    var idade = anosis - Number(anonas.value)
    if (mas.checked) {
        if (idade <= 0 || idade > 120) {
            window.alert('[ERRO] Verifique os valores e tente novamente!')
        } else {
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (idade < 12) {
                res1.innerHTML = `Detectamos um <strong>homem</strong> de <strong>${idade}</strong> anos.`
                img.setAttribute('src', 'images/menino.jpg')
            } else if (idade < 60 && idade >= 12) {
                res1.innerHTML = `Detectamos um <strong>homem</strong> de <strong>${idade}</strong> anos.`
                img.setAttribute('src', 'images/homem.jpg')
            } else if (idade < 120 && idade >= 60) {
                res1.innerHTML = `Detectamos um <strong>homem</strong> de <strong>${idade}</strong> anos.`
                img.setAttribute('src', 'images/senhor.jpg')
            }
            resimg.appendChild(img)
        }
    } else {
        if (idade <= 0 || idade > 120) {
            window.alert('[ERRO] Verifique os valores e tente novamente!')
        } else {
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (idade < 12) {
                restxt.innerHTML = `Detectamos uma <strong>mulher</strong> de <strong>${idade}</strong> anos.`
                img.setAttribute('src', 'images/menina.jpg')
            } else if (idade < 60 && idade >= 12) {
                restxt.innerHTML = `Detectamos uma <strong>mulher</strong> de <strong>${idade}</strong> anos.`
                img.setAttribute('src', 'images/mulher.jpg')
            } else if (idade < 120 && idade >= 60) {
                restxt.innerHTML = `Detectamos uma <strong>mulher</strong> de <strong>${idade}</strong> anos.`
                img.setAttribute('src', 'images/senhora.jpg')
            }
            resimg.appendChild(img)
        }
    }
}