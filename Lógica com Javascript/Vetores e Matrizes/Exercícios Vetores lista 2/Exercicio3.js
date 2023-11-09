let vetorNomes = []
let vetorPrecos = []
let nomeProduto = ""
let precoProduto = 0
let quantidade = 0
let soma = 0
let quantidadeMedia = 0
let media = 0
let mensagemNomes = ""
let mensagemNomesFinal = ""


for(let i=0;i<5;i++){

    nomeProduto = prompt("Digite o nome do produto: ")
    vetorNomes.push(nomeProduto)
    precoProduto = Number(prompt("Digite o preço do produto: "))
    vetorPrecos.push(precoProduto)

}

for(let i=0;i<5;i++){
    
    if(vetorPrecos[i] < 50){
        quantidade++
    }
    if(vetorPrecos[i] >= 50 && vetorPrecos[i] <= 100){
        mensagemNomes += (`${vetorNomes[i]}, `)
    }
    if(vetorPrecos[i] > 100){
        soma += vetorPrecos[i]
        quantidadeMedia++
    }
}

media = soma / quantidadeMedia
mensagemNomesFinal = (`Nome dos produtos com preço de R$50 a R$100: ${mensagemNomes}`)

alert(`Quantidade de produtos com preço inferior a 50$: ${quantidade} \n${mensagemNomesFinal} \nMedia de preços dos produtos com preços maiores de 100$: ${media.toFixed(2)}.`)

