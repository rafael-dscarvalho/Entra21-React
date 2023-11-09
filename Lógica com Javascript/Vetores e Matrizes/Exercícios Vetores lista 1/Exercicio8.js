

let vetor = []
let respostaDigitada = ""
let testeAno = 2009
let ultimoAno = 0



for(let i=0;i<10;i++){

    respostaDigitada = prompt(`Houve alistamento no ano 200${i}?`).toUpperCase()
    vetor.push(respostaDigitada)
}
for(let i=8;i>0;i--){

    testeAno--

    console.log(`Posição ${i}: ${vetor[i]}`)
    
    if(vetor[i] == 'S'){
        ultimoAno = testeAno
        alert(`O último ano que houve alistamento foi ${testeAno}`)
        i = 0
    }

}

console.table(vetor)

