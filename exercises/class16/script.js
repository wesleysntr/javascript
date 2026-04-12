var select = document.getElementById('lista')
var txtnum = document.getElementById('txtnum')
var btnadd = document.getElementById('btnadd')
var btnfin = document.getElementById('btnfin')
var res = document.getElementById('res')
var lista = []
var c = 0
var maior = 0
var menor = 0
var total = 0
var média = 0
function add() {
    if (txtnum.value != '') {      
        let num = Number(txtnum.value)
        if (lista.indexOf(num) == -1) {
            if (lista.length == 0) {
                maior = num
                menor = num
            }
            lista.push(num)
            if (num > maior) {
                maior = num
            } else if (num < menor) {
                menor = num
            }
            total += num
            média = total / lista.length
            var item = document.createElement('option')
            item.value = `item${c}`
            item.innerHTML = `Valor ${num} foi adicionado.`
            c++
            select.appendChild(item)
            res.innerHTML = ''
        } else {
            window.alert('[ERRO] Valor já existenste na lista.')
        }
    } else {
        window.alert('[ERRO] Insira algum valor no campo.')
    }
    txtnum.value = ''
    txtnum.focus()
}
btnadd.addEventListener('click', add)
function fin() {
    if (lista.length > 0) {    
        res.innerHTML = `Ao todo, temos ${lista.length} números cadastrados.<br>`
        res.innerHTML += `O maior valor informado foi ${maior}.<br>`
        res.innerHTML += `O menor valor informado foi ${menor}.<br>`
        res.innerHTML += `Somando todos os valores, temos ${total}.<br>`
        res.innerHTML += `A média dos valores digitados é ${média}.<br>`
    } else {
        window.alert('[ERRO] Adicione algum valor à lista.')
    }
}
btnfin.addEventListener('click', fin)