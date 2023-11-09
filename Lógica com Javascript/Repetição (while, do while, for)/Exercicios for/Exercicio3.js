let nome = ""
let idade = 0
let somaIdade = 0
let media = 0
let maiorIdade = 0

for(i=1;i<=5;i++){
    nome = prompt("Digite o nome da "+i+" pessoa.")
    idade = Number(prompt("Digite a idade da "+i+" pessoa."))

    if(idade > maiorIdade){
        maiorIdade = idade
    }
    somaIdade = somaIdade + idade
}

media = somaIdade / 5

alert(`Média: ${media.toFixed(2)} \nMaior idade: ${maiorIdade}`)