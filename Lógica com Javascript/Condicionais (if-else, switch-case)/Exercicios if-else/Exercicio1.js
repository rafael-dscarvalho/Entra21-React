
let nota1
let nota2
let nota3
let media

nota1 = Number(prompt("Digite a primeira nota"))
nota2 = Number(prompt("Digite a segunda nota"))
nota3 = Number(prompt("Digite a terceira nota"))

media = nota1+nota2+nota3 / 3

if (media >= 7){
    alert("Sua média é: " + media + "Aprovado!")
}
else{
    ("Sua média é: " + media + "Reprovado!")
}