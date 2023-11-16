
package Aula05;



public class Exercicio11 {
	
public static void main(String[] args) {
	
float soma = 0;
float j = 1;


for(int i = 1; i <= 50; i++) {
	
float divisao = j / i;

soma = soma + divisao;

}
System.out.println("A soma de 1/1 até 1/50 é: " + soma);

}
}