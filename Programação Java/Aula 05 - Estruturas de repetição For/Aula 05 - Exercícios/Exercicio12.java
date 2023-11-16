
package Aula05;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio12 {
	
public static void main(String[] args) {
	
	Locale.setDefault(Locale.US);
	Scanner sc = new Scanner(System.in);
	
float soma = 0;
float j = 1;
float n;
int repeticao = 0;

System.out.println("Digite um número");
n = sc.nextInt();

for(int i = 1; i <= n; i++) {
	
float divisao = j / i;

repeticao = repeticao +1;

soma = soma + divisao;

}
System.out.println("A soma de 1/1 até 1/" + repeticao + " é: "  + soma);
sc.close();
}
}