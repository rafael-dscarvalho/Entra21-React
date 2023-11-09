let usuario
let password

usuario = prompt("Digite o nome de usuário")
password = prompt("Digite a senha")

if(usuario == 'admin' && senha == '123'){
    alert("Login efetuado!")
 }
 else if(usuario == 'admin' && senha != '123'){
    alert("Senha incorreta")
 }
 else if(usuario != 'admin' && senha == '123'){
    alert("Usuário incorreto")
 }
 else{
    alert("Login falhou!")
 }