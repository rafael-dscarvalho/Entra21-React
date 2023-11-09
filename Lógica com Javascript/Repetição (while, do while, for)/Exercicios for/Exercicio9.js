let numeroSecreto = Number(prompt("Digite um número secreto de 0 a 100: "))
let numeroDigitado = 0
let tentativas = 0

for(let i =1;numeroDigitado != numeroSecreto;i++){

    numeroDigitado = Number(prompt("Digite um número para tentar adivinhar o número secreto."))

    if(numeroDigitado > numeroSecreto){
        alert("O número digitado é  maior!")
    }
    if(numeroDigitado < numeroSecreto){
        alert("O número digitado é  menor!")
    }

    tentativas = i
}

alert(`Parabéns! \nNúmero de tentativas: ${tentativas}`)