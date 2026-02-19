var botão = document.getElementById('btn')
botão.addEventListener('click', contar)
var inicio = document.getElementById('txtinicio')
var fim = document.getElementById('txtfim')
var passo = document.getElementById('txtpasso')
var resultado = document.getElementById('res')
function contar() {
    if (inicio.value == '' || fim.value == '' || passo.value == '' || Number(passo.value) == 0) {
        window.alert('[ERRO] Valores inválidos. Preencha todos os campos e tente novamente.')
    } else if (Number(inicio.value) < Number(fim.value)) {
        resultado.innerHTML = ''
        var c = Number(inicio.value)
        resultado.innerHTML = `Contando: <br>${c} \u{1F449} `
        while (c < Number(fim.value)) {
            c += Number(passo.value)
            resultado.innerHTML += ` ${c} \u{1F449} `
        }
        resultado.innerHTML += `\u{1F3C1}`
    } else {
        resultado.innerHTML = ''
        var c = Number(inicio.value)
        resultado.innerHTML = `Contando: <br>${c} \u{1F449} `
        while (c > Number(fim.value)) {
            c -= Number(passo.value)
            resultado.innerHTML += ` ${c} \u{1F449} `
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}