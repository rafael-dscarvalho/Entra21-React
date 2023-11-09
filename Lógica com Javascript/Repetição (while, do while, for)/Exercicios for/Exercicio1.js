let multas = 0 
let valor = 0
let pontos = 0
let somaValor = 0
let somaPontos = 0

multas = Number(prompt("Digite o número de multas que deseja cadastrar: "))

for(i=1;i <= multas;i++){

    valor = Number(prompt("Digite o valor da "+i+" multa: "))
    pontos = Number(prompt("Digite a quantidade de pontos da "+i+" multa: "))

    somaValor = somaValor + valor
    somaPontos = somaPontos + pontos

}

alert("Valor total das multas: " + somaValor)
alert("Valor total de pontos: " + somaPontos)

if(somaPontos >= 21){
    alert("Você está irregular.")
}
else{
    alert("Você está regular.")
}