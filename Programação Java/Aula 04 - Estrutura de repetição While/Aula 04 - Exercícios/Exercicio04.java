package Aula04;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio04 {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);

		int num;

		Scanner sc = new Scanner(System.in);

		System.out.println("Digite um número");
		num = sc.nextInt();
		if (num < 0) {
			System.out.println("Valor inválido");
			sc.close();
		}

		while (num != 0) {

			num = num -1;


			System.out.println(num);

		}
		sc.close();



	}
}