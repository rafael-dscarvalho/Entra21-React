let dataNascimento = parseInt(dataNascimento)

dataNascimento = prompt("Digite sua data de nascimento: ")

switch(true){

    case dataNascimento <= 1945:

    alert("Sem geração")
    break

    case dataNascimento >= 1946 && dataNascimento <= 1964:

    alert("Baby Boomers ")
    break

    case dataNascimento >= 1965 && dataNascimento <= 1980:

    alert("Geração X")
    break

    case dataNascimento >= 1981 && dataNascimento <= 1996:

    alert("Geração Y")
    break

    case dataNascimento >= 1997 && dataNascimento <= 2010:

    alert("Geração Z")
    break

    case dataNascimento >= 2011:

    alert("Geração Alfa")
    break

    default:
    
    alert("Data inválida")
}