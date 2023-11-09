let lotacao = 0
let pessoas = 0
let insumos = ""

while(lotacao < 50){

    pessoas = Number(prompt("Quantas pessoas chegaram ao restaurante?"))
    insumos = prompt("Como está o estoque de insumos? Ok/Insuficientes").toUpperCase()
    if(insumos == "INSUFICIENTES"){
    lotacao  = 51
    }

    lotacao += pessoas
    
}

if(insumos == "INSUFICIENTES"){
    alert(`Faltaram insumos no restaurante.`)
}
else{
    alert(`Restaurante atingiu o limite de pessoas.`)
}