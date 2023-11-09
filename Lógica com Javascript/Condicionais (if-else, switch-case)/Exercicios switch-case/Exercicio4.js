let numConta
let operacao
let saldo = 1000
let valor

numConta = prompt("Digite o número da sua conta bancária")
operacao = Number(prompt("Digite o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3)"))

switch(operacao){

    case 1:

    alert("Seu saldo é:" + saldo)
    break

    case 2:

    valor = Number(prompt("Digite o valor a ser depositado: "))

    saldo += valor

    alert("saldo atualizado: " + saldo)
    break

    case 3:

    valor = Number(prompt("Digite o valor a ser sacado: "))

    if (valor > 1000){
        
        alert("Saldo insuficiente!")
    }
    else{

    saldo -= valor

    alert("saldo atualizado: " + saldo)
    break
    }
    default:
        
    alert("Opção inválida.")
    
}