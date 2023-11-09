let nome1, nome2, nome3, nome4, nome5
let idade
let media = 0
let maiorIdade = 0
let somaIdade
let maiorNome

nome1 = prompt("Digite o nome da 1ª pessoa")
idade = Number(prompt("Digite a idade da 1ª pessoa"))

somaIdade = somaIdade + idade
if( idade > maiorIdade ){
    maiorIdade = idade
    maiorNome = nome1
}

nome2 = prompt("Digite o nome da 2ª pessoa")
idade = Number(prompt("Digite a idade da 2ª pessoa"))

somaIdade = somaIdade + idade
if( idade > maiorIdade ){
    maiorIdade = idade
    maiorNome = nome2
}

nome3 = prompt("Digite o nome da 3ª pessoa")
idade = Number(prompt("Digite a idade da 3ª pessoa"))

somaIdade = somaIdade + idade
if( idade > maiorIdade ){
    maiorIdade = idade
    maiorNome = nome3
}

nome4 = prompt("Digite o nome da 4ª pessoa")
idade = Number(prompt("Digite a idade da 4ª pessoa"))

somaIdade = somaIdade + idade
if( idade > maiorIdade ){
    maiorIdade = idade
    maiorNome = nome4
}

nome5 = prompt("Digite o nome da 5ª pessoa")
idade = Number(prompt("Digite a idade da 5ª pessoa"))

somaIdade = somaIdade + idade
if( idade > maiorIdade ){
    maiorIdade = idade
    maiorNome = nome5
}

media = somaIdade / 5

alert("A maior idade é: " + maiorIdade + " da pessoa: " + maiorNome)
alert("A media de idade entre as pessoas é: " + media)


