let numero = 0
let maiorNumero = 0
let menorNumero = 999999999999

for(let i=1;i<=10;i++){

    numero = Number(prompt("Digite o "+i+" Numero entre 0 e 50: "))

if(numero >= 0 && numero <= 50){

    if(numero > maiorNumero){
        maiorNumero = numero
    }
    if(numero < menorNumero){
        menorNumero = numero
    }
}
}
alert(`Maior: ${maiorNumero}\nMenor: ${menorNumero}`)