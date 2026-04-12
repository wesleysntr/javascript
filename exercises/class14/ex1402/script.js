var txtnum = document.getElementById('txtnum')
var botão = document.getElementById('btn')
var res = document.getElementById('res')
var tabuada = document.getElementById('tabuada')
function gerarTabuada() {
    if (txtnum.value != ''){
        tabuada.innerHTML = ''
        res.innerHTML = `Confira a tabuada do ${Number(txtnum.value)} abaixo!`
        var número = Number(txtnum.value)
        var c = 0
        while (c <= 10) {
            multiplicação = número * c
            var item = document.createElement('option')
            item.value = `item${c}`
            item.innerHTML = `${número} X ${c} = ${multiplicação}`
            tabuada.appendChild(item)
            c++
        }
    } else {
        window.alert('Por favor, escolha um número!')
    }
}
botão.addEventListener('click', gerarTabuada)