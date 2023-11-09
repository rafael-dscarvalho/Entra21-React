let numero = 0
let divisor = 2
let primo = true
let contador = 0
let mensagem = ""

while(contador < 5){

    numero = Number(prompt("Digite um número:")) 

    while(divisor < numero){
        if(numero % divisor == 0){
            primo = false
        }

            divisor++
        }   

        if(numero <= 1 ){
            primo = false
        }

        if(primo == true){
            mensagem +=(`${numero} É primo!\n`)
        }
        else{
            mensagem +=(`${numero} não é primo!\n`)
        }

        contador++
        divisor = 2
        primo = true
}

alert(mensagem)