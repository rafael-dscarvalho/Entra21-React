let numero = Number(prompt("Digite um número:")) 
let divisor = 2
let primo = true

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
    alert(`${numero} é primo!`)
}
else{
    alert(`${numero} não é primo!`)
}
