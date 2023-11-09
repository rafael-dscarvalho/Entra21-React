let pontuacaoUm
let pontuacaoDois
let pontuacaoTres
let pontuacaoTotal

pontuacaoUm = Number(prompt("Digite a 1ª pontuação de 0 a 5: "))
pontuacaoDois = Number(prompt("Digite a 2ª pontuação de 0 a 5: "))
pontuacaoTres = Number(prompt("Digite a 3ª pontuação de 0 a 5: "))

pontuacaoTotal = pontuacaoUm+pontuacaoDois+pontuacaoTres

switch(true){



case pontuacaoTotal == 15:

alert("Você fez: "+pontuacaoTotal+" Pontos. Um Deus da peteca!")
break

case pontuacaoTotal <= 14 && pontuacaoTotal >= 10:

alert("Você fez: "+pontuacaoTotal+" Pontos. Petequeiro profissa!")
break

case pontuacaoTotal <= 9 && pontuacaoTotal >= 5:

alert("Você fez: "+pontuacaoTotal+" Pontos. Petequeiro de final de semana!")
break

case pontuacaoTotal <= 4 && pontuacaoTotal >= 1:

alert("Você fez: "+pontuacaoTotal+" Pontos. Pseudo-petequeiro!")
break

case pontuacaoTotal == 0:

alert("Você fez: "+pontuacaoTotal+" Pontos. Nunca petequeiro!")
break

default:

alert("Pontuação inválida!")

}