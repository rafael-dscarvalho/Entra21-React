let numero = 0
let contador = 0
let divisor = 2
let primo = true
let mensagem = ""

numero = Number(prompt("Digite um número: "))

while(contador <= numero){
    
    while(divisor < contador){
        if(contador % divisor == 0){
            primo = false
        }

            divisor++
        }   

        if(contador <= 1 ){
            primo = false
        }

        if(primo == true){
            mensagem +=(`${contador}, `)
        }


        contador++
        divisor = 2
        primo = true
}

alert(`Números primos no intervalo de 1 até ${numero}:    ${mensagem}`)