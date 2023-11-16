package Aula04;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio03 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Modifica separador de "," para "."
		Locale.setDefault(Locale.US);


		int num1 = 1;
		int quantidade1 = 0;
		int quantidade2 = 0;
		int quantidade3 = 0;
		int quantidade4 = 0;


		Scanner sc = new Scanner(System.in);


		while (num1 >= 0) {
			System.out.println("Digite um numero");
			num1=sc.nextInt();

			if ((num1 >= 0) && (num1 <= 25)) {
				quantidade1 = quantidade1 +1;             
			}

			else if ((num1 >= 26) && (num1 <= 50)) {
				quantidade2 = quantidade2 + 1;
			}

			else if ((num1 >= 51) && (num1 <= 75)) {
				quantidade3 = quantidade3 + 1;
			}

			else if ((num1 >= 76) && (num1 <= 100)) {
				quantidade4 = quantidade4 + 1;
			}    
		}



		System.out.println("Quantidade de números no intervalo de 0 a 25, é de " + quantidade1);
		System.out.println("Quantidade de números no intervalo de 26 a 50, é de " + quantidade2);
		System.out.println("Quantidade de números no intervalo de 51 a 75, é de " + quantidade3);
		System.out.println("Quantidade de números no intervalo de 76 a 100, é de " + quantidade4);
		sc.close();

	}
}