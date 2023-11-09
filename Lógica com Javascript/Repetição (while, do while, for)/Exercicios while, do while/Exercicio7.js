let numeroJogadores = 0
let rodada = 1
let jogador = 1
let valorJogada = 0
let somaJogada = 0
let mensagem = ""

    numeroJogadores = Number(prompt("Digite a quantidade de jogadores: "))

while(jogador < numeroJogadores+1){

while(rodada < 5){

    valorJogada = Number(prompt(`Digite o valor da ${rodada}ª rodada, do ${jogador}º jogador: `))

    while(valorJogada < 1 || valorJogada > 20){

        valorJogada = Number(prompt(`Digite o valor da ${rodada}ª rodada, do ${jogador}º jogador: `))

    }

    if(rodada == 2 || rodada == 3){
        somaJogada += valorJogada
    }

    rodada++
}

    mensagem += (`Jogador ${jogador}, pontuação: ${somaJogada}\n`)
    rodada = 1
    somaJogada = 0
    jogador++
}
    
    alert(mensagem)