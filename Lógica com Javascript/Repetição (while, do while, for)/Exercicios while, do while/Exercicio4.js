let nomeVinil = ""
let valorVinil = 0
let valorDisponivel = 200
let calculaValorTotal = 0
let valorTroco = 0
let quantidadeVinil = 0
let calculaMediaValor = 0
let mediaFinal = 0
let verificaVinilMaisCaro = 0
let verificaVinilMaisBarato = 999999999999
let vinilMaisCaro = ""
let vinilMaisBarato = ""

while(valorDisponivel > 0){
    nomeVinil = prompt("Digite o nome do vinil: ")
    valorVinil = Number(prompt("Digite o valor do vinil: "))

    valorDisponivel -= valorVinil
    calculaValorTotal += valorVinil
    quantidadeVinil++
    calculaMediaValor += valorVinil

    if(valorVinil > verificaVinilMaisCaro && calculaValorTotal <= 200){
        verificaVinilMaisCaro = valorVinil
        vinilMaisCaro = nomeVinil
    }
    if(valorVinil < verificaVinilMaisBarato && calculaValorTotal <= 200){
        verificaVinilMaisBarato = valorVinil
        vinilMaisBarato = nomeVinil
    }
}
if(calculaValorTotal > 200){
    calculaValorTotal -= valorVinil
    quantidadeVinil --
    calculaMediaValor -= valorVinil
}

valorTroco = 200 - calculaValorTotal
mediaFinal = calculaMediaValor / quantidadeVinil

alert(`Total gasto em vinis: ${calculaValorTotal} \nValor que sobrou: ${valorTroco} \nQuantidade de vinis comprados: ${quantidadeVinil} \nMedia de preço dos vinis: ${mediaFinal.toFixed(2)} \nVinil mais caro: ${vinilMaisCaro} \nVinil mais barato: ${vinilMaisBarato}`)