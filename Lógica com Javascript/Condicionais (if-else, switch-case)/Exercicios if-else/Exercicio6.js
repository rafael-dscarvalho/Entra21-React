let nome1, nome2, nome3, nome4, nome5
let idade1, idade2, idade3, idade4, idade5
let media

nome1 = prompt("Digite o nome da 1ª pessoa")
idade1 = Number(prompt("Digite a idade da 1ª pessoa"))

nome2 = prompt("Digite o nome da 2ª pessoa")
idade2 = Number(prompt("Digite a idade da 2ª pessoa"))

nome3 = prompt("Digite o nome da 3ª pessoa")
idade3 = Number(prompt("Digite a idade da 3ª pessoa"))

nome4 = prompt("Digite o nome da 4ª pessoa")
idade4 = Number(prompt("Digite a idade da 4ª pessoa"))

nome5 = prompt("Digite o nome da 5ª pessoa")
idade5 = Number(prompt("Digite a idade da 5ª pessoa"))

if(idade1 > idade2 && idade1 > idade3 && idade1 > idade4 && idade1 > idade5){
    alert(nome1 + " É a pessoa com a maior idade.")
}
else if(idade2 > idade1 && idade2 > idade3 && idade2 > idade4 && idade2 > idade5){
    alert(nome2 + " É a pessoa com a maior idade.")
}
else if(idade3 > idade1 && idade3 > idade2 && idade3 > idade4 && idade3 > idade5){
    alert(nome3 + " É a pessoa com a maior idade.")
}
else if(idade4 > idade1 && idade4 > idade2 && idade4 > idade3 && idade4 > idade5){
    alert(nome4 + " É a pessoa com a maior idade.")
}
else{
    alert(nome5 + " É a pessoa com a maior idade.")
}

media = (idade1+idade2+idade3+idade4+idade5) / 5

alert("A media de idade entre as pessoas é: " + media)


