let numero1Digitado = Number(prompt("Digite o primeiro número: "))
let numero2Digitado = Number(prompt("Digite o segundo número: "))
let operacao = Number(prompt("Digite qual operação deseja realizar: 1)Soma 2)Subtração 3)Multiplicação 4)Divisão"))
let calcular = 0
let calculo = 0

function calcularSoma(numero1, numero2){
    calculo = numero1+numero2
    return calculo
}
function calcularSubtracao(numero1, numero2){
    calculo = numero1-numero2
    return calculo
}
function calcularMultiplicacao(numero1, numero2){
    calculo = numero1*numero2
    return calculo
}
function calcularDivisao(numero1, numero2){
    calculo = numero1/numero2
    return calculo
}

if (operacao == 1){
    calcular = calcularSoma(numero1Digitado, numero2Digitado)
}
else if (operacao == 2){
    calcular = calcularSubtracao(numero1Digitado, numero2Digitado)
}
else if (operacao == 3){
    calcular = calcularMultiplicacao(numero1Digitado, numero2Digitado)
}
else if (operacao == 4){
    calcular = calcularDivisao(numero1Digitado, numero2Digitado)
}

if(operacao >=1 && operacao <= 4){
    alert(`O resultado do cálculo da operação é: ${calcular}`)
}
else{
    alert("Número inválido! Digite um número de 1 a 4 para a operação desejada.")
}