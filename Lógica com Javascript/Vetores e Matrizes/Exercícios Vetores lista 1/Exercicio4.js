numeroLista1 = []
numeroLista2 = []
numeroLista3 = []



for(i=1; i < 4;i++){

    numero = Number(prompt(`Digite o ${i}º número: `))

    numeroLista1.push(numero)
}
for(i=1; i < 4;i++){

    numero = Number(prompt(`Digite o ${i}º número: `))

    numeroLista2.push(numero)
}

for(i=0; i < 6;i++){
    numeroLista3.push(numeroLista1[i])
    numeroLista3.push(numeroLista2[i])
}

alert(numeroLista1+"\n"+numeroLista2+"\n"+numeroLista3)