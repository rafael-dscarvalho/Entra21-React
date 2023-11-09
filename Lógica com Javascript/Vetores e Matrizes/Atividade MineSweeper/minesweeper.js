let matriz = [[],[],[]]
let matrizAtualizada = [["?", "?", "?"+"\n"],["?", "?", "?"+"\n"],["?", "?", "?"]]
let max = 2
let min = 0
let x = 0
let y = 0
let bombas = 0
let pontosNecessarios = 0
let repeticao = 0
let pontos = 0

//cria matriz do tabuleiro
for(i=0;i<3;i++){
    for(j=0;j<3;j++){
         matriz[i][j] = (Math.floor(Math.random() * (max - min) + min))
     }
 }
console.table(matriz) // mostra tabuleiro no console (para fins de teste)

//verifica quantas bombas existem no tabuleiro e quantos pontos são necessarios para vencer
 for(i=0;i<3;i++){
    for(j=0;j<3;j++){
        verificaValor =  matriz[i][j]
        if(verificaValor == 1){
            bombas++
        }
        else{
            pontosNecessarios++
        }
     }
 }

 alert(`Bem vindo! \nBombas: ${bombas} \nPontos Necessários: ${pontosNecessarios} `)

 //repete o jogo até que uma bomba seja encontrada ou todos os pontos necessários para vencer sejam atingidos
while(repeticao != 1){
x = Number(prompt("Digite um valor para x: "))
y = Number(prompt("Digite um valor para y: "))

if(matriz[x][y] == 1){
    alert(`Você perdeu`)
    repeticao = 1
}
else{
    pontos++
}

if(pontos == pontosNecessarios){
    alert(`Parabéns! Você venceu!`)
    repeticao = 1
}

//atualiza o tabuleiro e mostra ao jogador
matrizAtualizada[x][y] = 0

alert(matrizAtualizada)

}


