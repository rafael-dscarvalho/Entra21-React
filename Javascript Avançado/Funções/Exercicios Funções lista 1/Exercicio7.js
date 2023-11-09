let numero1Prompt = Number(prompt("Digitar o primeiro número: "))
let numero2Prompt = Number(prompt("Digitar o segundo número: "))
let numero3Prompt = Number(prompt("Digitar o terceiro número: "))
let maiorNumero = verificaMaiorNumero(numero1Prompt, numero2Prompt, numero3Prompt)
let menorNumero = verificaMenorNumero(numero1Prompt, numero2Prompt, numero3Prompt)


 alert(`O maior número é: ${maiorNumero} \n O menor número é: ${menorNumero}`)

function verificaMaiorNumero(numero1, numero2, numero3){
    if(numero1Prompt > numero2Prompt && numero1Prompt > numero3Prompt){
    maior = numero1Prompt
       
    }
    else if(numero2Prompt > numero1Prompt && numero2Prompt > numero3Prompt){
         maior = numero2Prompt
        
    }
    else{
         maior = numero3Prompt
        
    }
    return maior
}

function verificaMenorNumero(numero1, numero2, numero3){
    if(numero1Prompt < numero2Prompt && numero1Prompt < numero3Prompt){
        menor = numero1Prompt
    }
    else if(numero2Prompt < numero1Prompt && numero2Prompt < numero3Prompt){
         menor = numero2Prompt
    }
    else{
         menor = numero3Prompt
    }
    return menor
}