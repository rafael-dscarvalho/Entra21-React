let numeroDigitado = Number(prompt("Digite um número: "))
let tipoNumero = ""
let resultado = verificarNumero(numeroDigitado)


function verificarNumero(numero){
    
    if(numero % 2 == 0){
        tipoNumero = ("O número é par!")
    }
    else(
        tipoNumero = ("O número é ímpar")
    )
    return tipoNumero
}

alert(resultado)
