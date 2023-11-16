package Aula02;

import java.util.Scanner;

public class Exercicio04 {
		
	public static void main (String[] args) {
		// TODO Auto-generated method stub

		float valor;


		Scanner sc = new Scanner (System.in);
		System.out.println( "Digite o valor em Fahrenheit: " );
		valor = sc.nextInt();
		sc.close();

		float Celsius;

		Celsius = (valor - 32)*5/9;

		System.out.println( "Celsius:" + Celsius );

	}

}
