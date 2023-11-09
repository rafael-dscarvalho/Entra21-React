let coresPrimarias = []
let coresSecundarias = []
let coresJuntas = []
let cor = ""

for (let i=1;i<4;i++){
    cor = prompt(`Digite a ${i} cor primária: `)
    coresPrimarias.push(cor)
}

for (let i=1;i<4;i++){
    cor = prompt(`Digite a ${i} cor secundária: `)
    coresSecundarias.push(cor)
}

for (let i=0;i<3;i++){

    coresJuntas.push(coresPrimarias[i])
    
}
for (let i=0;i<3;i++){

    coresJuntas.push(coresSecundarias[i])
    
}

   cor = prompt("Adicionar no ínicio da lista: ")

   coresJuntas.unshift(cor)

   cor = prompt("Adicionar no final da lista: ")

   coresJuntas.push(cor)

   alert(coresJuntas)
