let idadeDigitada
let vetorIdades = []


for(let i=0;i<5;i++){

    idadeDigitada = Number(prompt(`Digite a ${i+1}ª idade: `))
    vetorIdades.push(idadeDigitada)
}

let verificaIdades = vetorIdades.every(valorAtual => valorAtual >= 18)

if(verificaIdades === true){

    alert(`Todo mundo é maior de idade! \o/`)
}
else{

    alert(`Tem menor de idade na parada :/`)
}

console.log(verificaIdades)