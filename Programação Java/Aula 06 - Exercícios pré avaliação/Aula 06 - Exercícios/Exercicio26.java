package Aula06;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio26 {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);

		Scanner sc = new Scanner(System.in);

		int num1;
		int num2;
		int num3;
		int soma=0;


		System.out.println("Digite o primeiro n�mero: ");
		num1 = sc.nextInt();
		System.out.println("Digite o segundo n�mero: ");
		num2 = sc.nextInt();
		System.out.println("Digite o terceiro n�mero: ");
		num3 = sc.nextInt();

		if ((num1 < num2) && (num1 < num3)) {

			soma = num2 + num3;
		}
		else if ((num2 < num1) && (num2 < num3)) {

			soma = num1 + num3;
		}
		else if ((num3 < num1) && (num3 < num2)) {

			soma = num1 + num2;
		}
	
	System.out.println("A soma dos 2 maiores n�meros �: " + soma);
	sc.close();
}
}