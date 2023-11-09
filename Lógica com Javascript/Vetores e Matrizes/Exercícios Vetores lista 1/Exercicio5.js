let lista = [1, 4, 6, 8, 4, 2, 3, 1, 0, 9]
let numero = 0
let mensagem = ``
let mensagemFinal = ``

numero = Number(prompt("Qual número você deseja verificar se existe na lista?"))

for(i=0; i < lista.length;i++){

    if(lista[i] == numero){
 
        mensagem = (`\n ${i} `)
        mensagemFinal =  mensagemFinal+mensagem
    }
}

alert(`O número ${numero} está nos índices: ${mensagemFinal}`)