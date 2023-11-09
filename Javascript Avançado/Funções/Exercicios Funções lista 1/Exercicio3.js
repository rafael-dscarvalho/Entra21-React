let limite = Number(prompt("Digite um número: "))
let mensagem = ""

exibirNumerosPrimos(limite)

function exibirNumerosPrimos(limite){

    for(let numero=2;numero <= limite;numero++){
        if(numeroPrimo(numero) == true){
            mensagem += (` ${numero}, `)
        }
    }
}

function numeroPrimo(numero){

    for(let divisor=2;divisor < numero;divisor++){

        if(numero % divisor === 0){
            return false
        }
    }
    return true
}

alert(`Números primos de 1 até ${limite}:    ${mensagem}`)