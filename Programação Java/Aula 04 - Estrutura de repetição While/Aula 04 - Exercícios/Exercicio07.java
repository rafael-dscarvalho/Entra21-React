package Aula04;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio07 {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);

		float nota1;
		float nota2;
		float nota3;
		float media;

		Scanner sc = new Scanner(System.in);
		
		System.out.println("Digite a primeira nota");
		nota1 = sc.nextFloat();
		System.out.println("Digite a segunda nota");
		nota2 = sc.nextFloat();
		System.out.println("Digite a terceira nota");
		nota3 = sc.nextFloat();
		
		media = (nota1 + nota2 + nota3) / 3;
		
        System.out.printf( "Sua média é: %.1f", media );
		sc.close();
		
	}
}