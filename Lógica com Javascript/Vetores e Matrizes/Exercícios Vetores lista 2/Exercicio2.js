let vetorDoencas = []
let vetorVirus = []
let vetorBacterias = []
let vetorAmbos = []
let nomeDoencas = ""
let tipoDoenca = ""

let numeroDoencas = Number(prompt("Quantas doenças você deseja cadastrar?"))

for(let i = 0;i < numeroDoencas;i++){

    nomeDoencas = prompt("Digite o nome da doença: ")
    vetorDoencas.push(nomeDoencas)
    tipoDoenca = prompt("Ela é transmitida por virus, bacteria ou por ambos?").toUpperCase()

    if(tipoDoenca == "VIRUS"){

        vetorVirus.push(nomeDoencas)
    }
    else if(tipoDoenca == "BACTERIA"){

        vetorBacterias.push(nomeDoencas)
    }
    else{
        vetorAmbos.push(nomeDoencas)
    }

}

    alert(`Doenças: ${vetorDoencas} \nDoenças transmitidas por vírus: ${vetorVirus} \nDoenças transmitidas por bactérias: ${vetorBacterias} \nDoenças transmitidas por ambos: ${vetorAmbos}`)