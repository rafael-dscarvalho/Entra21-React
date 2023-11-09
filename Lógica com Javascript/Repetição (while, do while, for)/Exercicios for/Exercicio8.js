let jogador1Nome = prompt("Digite o nome do primeiro jogador: ")
let jogador2Nome = prompt("Digite o nome do segundo jogador: ")
let valorCartaJogador1 = 0
let valorCartaJogador2 = 0
let somaCartas1 = 0
let somaCartas2 = 0

for(let i=1;i<6;i++){
    valorCartaJogador1 = Number(prompt(`Digite o valor da ${i}ª carta, do primeiro jogador: `))

    while(valorCartaJogador1 < 1 || valorCartaJogador1 > 13){
        alert(`Valor inválido! digite novamente um valor de 1 a 13.`)
        valorCartaJogador1 = Number(prompt(`Digite o valor da ${i}ª carta, do primeiro jogador: `))
    }
    
    valorCartaJogador2 = Number(prompt(`Digite o valor da ${i}ª carta, do segundo jogador: `))

    while(valorCartaJogador2 < 1 || valorCartaJogador2 > 13){
        alert(`Valor inválido! digite novamente um valor de 1 a 13.`)
        valorCartaJogador2 = Number(prompt(`Digite o valor da ${i}ª carta, do segundo jogador: `))
    }

    somaCartas1 += valorCartaJogador1
    somaCartas2 += valorCartaJogador2

}

if(somaCartas1 > somaCartas2){
    alert(`O jogador ${jogador1Nome} foi o vencedor! \nSoma de pontos: ${somaCartas1}`)
}
else if(somaCartas2 > somaCartas1){
    alert(`O jogador ${jogador2Nome} foi o vencedor! \nSoma de pontos: ${somaCartas2}`)
}
else if(somaCartas1 == somaCartas2){
    alert(`O jogo empatou!`)
}
else{
    alert(`Houve um problema. Tente novamente.`)
}

