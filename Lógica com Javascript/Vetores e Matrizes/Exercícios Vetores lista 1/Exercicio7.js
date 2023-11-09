let numerosVetor = []
let numero = 0
let maior = 0
let somaMultiplicacao = 0
let soma = 0

for (let i=1;i<6;i++){
    numero = Number(prompt(`Digite o ${i} número: `))
    numerosVetor.push(numero)
    if(numero > maior){
        maior = numero
    }
}

for (let i=0;i<numerosVetor.length;i++){
    
    if(numerosVetor[i] != maior){
       somaMultiplicacao +=  numerosVetor[i]*maior
    }
}

alert( somaMultiplicacao)