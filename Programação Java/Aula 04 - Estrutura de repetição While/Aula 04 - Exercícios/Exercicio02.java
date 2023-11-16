package Aula04;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio02 {

	public static void main(String[] args) {
		
		Locale.setDefault(Locale.US);
		
	
		int hello = 1; 


		Scanner sc = new Scanner(System.in); // lê

		
		while( hello <= 11) {
			System.out.printf("Hello World! ");  

			hello = hello +1;
	}
		sc.close();
}
}