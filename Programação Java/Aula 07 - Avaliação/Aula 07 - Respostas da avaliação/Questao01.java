package Aula07AVALIAÇAO;

import java.util.Scanner;
import java.util.Locale;

public class Questao01 {

	
	
	
	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
 
		int num;
		
		System.out.println("Digite um numero para saber o dia da semana:");
		num = sc.nextInt();
		
		if ((num <= 0 ) || (num > 7)){
			
			System.out.println("Erro! Numero inv�lido");
		}
		
		else if (num == 1) {
			System.out.println("Domingo");
		}
		else if (num == 2) {
			System.out.println("Segunda");
		}
		else if (num == 3) {
			System.out.println("Terca");
		}
		else if (num == 4) {
			System.out.println("Quarta");
		}
		else if (num == 5) {
			System.out.println("Quinta");
		}
		else if (num == 6) {
			System.out.println("Sexta");
		}
		else if (num == 7) {
			System.out.println("Sabado");
		}
	
			sc.close();
}
}
