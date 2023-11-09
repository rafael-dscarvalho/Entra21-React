let quantidadePalavras = 1
let palavra = ""
let caracteres = 0
let mensagem = ""


while(quantidadePalavras < 6){

    palavra = (prompt(`Dgite a ${quantidadePalavras}ª palavra:`))

    caracteres = palavra.length

    mensagem += (`${palavra}: ${caracteres} caracteres.\n`)

    quantidadePalavras++
}

alert(mensagem)