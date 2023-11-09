let mes

mes = prompt("Digite o número correspondente ao mês do ano")

switch(true){

    case mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12:

    alert("O mês tem 31 dias.")
    break

    case mes == 4 || mes == 6 || mes == 9 || mes == 11:

    alert("O mês tem 30 dias.")
    break

    case mes == 2:

    alert("O mês tem 28 dias.")
    break

    default:

    alert("Dado inválido.")


}



[]