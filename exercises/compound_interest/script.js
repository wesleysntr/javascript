// M = C * (1 + i) ** t

var capital = document.getElementById('txtaporte')
var taxa = document.getElementById('txtjuros')
var tempo = document.getElementById('txtperiodo')
var montante

var resultados_mensais = document.getElementById('lista')
var resultado_final = document.getElementById('retorno')

function calcular() {
    if (capital.value == '' || taxa.value == '' || tempo.value == '') {
        window.alert('Por favor, preencha os campos corretamente.')
    } else if (capital.value < 0 || taxa.value < 0 || tempo.value < 1) {
        window.alert('Por favor, preencha os campos corretamente.')
    } else {
        let aporte = parseFloat(capital.value)
        let juros = parseFloat(taxa.value)
        let periodo = parseInt(tempo.value)

        let contador = 1

        resultados_mensais.innerHTML = ""
        do {
            let option = document.createElement("option")
            option.value = `item${contador}`
            montante = aporte * (1 + juros/100) ** contador
            option.text = `Mês ${contador}: R$${montante.toFixed(2).replace('.', ',')}`
            resultados_mensais.appendChild(option)
            contador++
        } while (contador <= periodo)
        retorno.innerHTML = `R$${montante.toFixed(2).replace('.', ',')}`
    }
}

var botão = document.getElementById('btncalcular')
botão.addEventListener('click', calcular)