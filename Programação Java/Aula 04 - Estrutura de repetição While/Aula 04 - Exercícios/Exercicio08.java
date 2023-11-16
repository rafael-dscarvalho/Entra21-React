package Aula04;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio08 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Modifica separador de "," para "."
		Locale.setDefault(Locale.US);


		int num = 1;

		Scanner sc = new Scanner(System.in);


		while (num != 0) {
			System.out.println("Digite um valor inteiro");
			num=sc.nextInt();

			if (num < 0) {
				System.out.println( num + " É um valor negativo" );
			}
			else if (num > 0)
				System.out.println( num + " É um valor Positivo" );

		}

		System.out.println("FIM DO PROGRAMA");
		sc.close();

	}
}
