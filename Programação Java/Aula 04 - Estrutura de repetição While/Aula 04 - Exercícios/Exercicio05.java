package Aula04;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio05 {

public static void main(String[] args) {
		

		// Modifica separador de "," para "."
		Locale.setDefault(Locale.US);

		// Entrada
		
		int soma = 0;  
		int num;
        int repetição = 0;

		Scanner sc = new Scanner(System.in); // lê

		System.out.println( "Digite um número:" );  
		num = sc.nextInt();
		
		while( repetição <= num) {
		
			soma = soma + (num - repetição);
			repetição = repetição + 1;
			
			 	 
			
		}
		System.out.println( "Soma = " + soma);
                 sc.close();



	}
}
