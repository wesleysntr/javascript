var vetor = [3, 4, 1, 2]
console.log(`O vetor possui ${vetor.length} posições`)
console.log(vetor)
/*
for (let pos = 0; pos < vetor.length; pos++) {
    console.log(`Na posicão ${pos} está o valor ${vetor[pos]}`)
}
*/
for (let pos in vetor) {
    console.log(`Na posição ${pos} está o valor ${vetor[pos]}`)
}

console.log(`Em ordem, o vetor fica assim: ${vetor.sort()}`)
vetor.push(5)
valor = 90
if (vetor.indexOf(valor) == -1) {
    console.log('O valor não foi encontrdo')
} else {
    console.log(`O valor está na posição ${vetor.indexOf(valor)}`)
}