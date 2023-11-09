let matrizNomes = [[],[],[]]
let matrizIntercalada = [[],[],[]]
let nomeDigitado = ""
let contadorNome = 1
let verificaNome = false

for(let i=0;i<3;i++){

    for(let k=0;k<4;k++){

        nomeDigitado = prompt(`Digite o ${contadorNome}º nome: `)

        
        verificaNome = matrizNomes.flat().includes(nomeDigitado)

            while(verificaNome === true){

                alert(`Esse nome já existe na matriz. por favor insira um nome diferente.`)

                nomeDigitado = prompt(`Digite o ${contadorNome}º nome: `)

                verificaNome = matrizNomes.flat().includes(nomeDigitado)

            }

        matrizNomes[i][k] = nomeDigitado

        if(k == 0 || k == 2){

            matrizIntercalada[i][k] = nomeDigitado
        }

        contadorNome ++

        verificaNome = false
    }
}

console.table(matrizNomes)
console.table(matrizIntercalada)