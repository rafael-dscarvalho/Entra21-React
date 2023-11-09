let nome
let idade
let comorbidade

nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")
comorbidade = prompt("Você tem alguma comorbidade? Digite 'S' ou 'N'")

if(idade >= 60 || comorbidade == 'S'){
    alert("Pode se vacinar.")
}
else{
    alert("Não pode se vacinar")
}