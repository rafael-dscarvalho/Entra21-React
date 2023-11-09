let sequencia = 0

for(i=10;i>0;i--){
    sequencia = Number(prompt("Digite a sequência de 1 a 10 invertida: "))

    if(sequencia != i){
        i = 0
        alert("Você errou a sequência")
    }
    if(i==1){
        alert("Você terminou a sequência corretamente")
    }


}
