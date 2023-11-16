
package Aula04;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio06 {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Modifica separador de "," para "."
		Locale.setDefault(Locale.US);


		int num = 1;
		int soma = 0;
		int quantidade = 0;
		


		Scanner sc = new Scanner(System.in);


		
		while (num != 14805489) {
			System.out.println("Digite um numero");
			num=sc.nextInt();
           
			
			soma = soma + num;
			quantidade = quantidade +1;
					
			System.out.println("Soma = " + soma);
			System.out.println("Quantidade de números inseridos = " + quantidade);

		}
		sc.close();

	}
}