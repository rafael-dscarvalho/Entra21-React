let matriz = [[],[],[]]
let numeroDigitado = 0
let somaUltima = 0
let somaMeio = 0
let somaColuna1 = 0
let somaColuna2 = 0
let subtraiColunas = 0

for(let i=0;i<3;i++){
    
    for(let j=0;j<3;j++){
        numeroDigitado = Number(prompt("Digite um número para entrar na matriz"))
        matriz[i][j] = numeroDigitado
        if(i == 2){
            somaUltima += matriz[i][j]
        }
        if(j == 1){
            somaMeio += matriz[i][j]
        }
        if((i == 0 && j == 0)||(i == 1 && j == 1)||(i == 2 && j == 2)){
            somaColuna1 += matriz[i][j]
        }
        if((i == 0 && j == 2)||(i == 1 && j == 1)||(i == 2 && j == 0)){
            somaColuna2 += matriz[i][j]
        }
    }
}

subtraiColunas = somaColuna1 - somaColuna2

alert(`Soma da última linha: ${somaUltima}\nSoma da coluna do meio: ${somaMeio}\nSubtração da soma da diagonal principal pela diagonal inversa: ${subtraiColunas}`)

console.table(matriz)