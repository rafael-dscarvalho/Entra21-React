let nome
let idade
let formacao
let cidade

nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")
formacao = prompt("Digite sua formação")
cidade = prompt("Digite sua cidade")

if((idade >= 25 && idade <= 50) && (formacao == "Biologia" || formacao == "Ecologia")&& (cidade == "Florianópolis")){
    alert("Olá, " + nome + " Você está apto a concorrer para a vaga de Equipe de Resgate.")
}
else if((idade >= 22 && idade <= 60) && (formacao == "Veterinária") && (cidade == "Florianópolis")){
    alert("Olá, " + nome + " Você está apto a concorrer para a vaga de Equipe de Tratamento.")
}
else{
    alert("Olá, " + nome + " Você não está apto a concorrer.")
}