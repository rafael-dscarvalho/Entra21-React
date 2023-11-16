package Aula05;

	import java.util.Locale;
	import java.util.Scanner;
	
	public class dowhile {
		


	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Modifica separador de "," para "."
		Locale.setDefault(Locale.US);

		// Entrada

		int soma = 0;  // Variável que armazena soma
		int num1=0; // Variável que recebe o valor digitado pelo usuário


		Scanner sc = new Scanner(System.in); // lê


		// WHILE

		while( num1 != 0 ) {
			System.out.println( "Digita o número:" );  
			num1 = sc.nextInt();

			soma = soma + num1;

		}
		System.out.println( "Soma = " + soma);
		sc.close();




		//DO - WHILE

		do {
			System.out.println( "Digita o número:" );  
			num1 = sc.nextInt();

		}while ( num1 != 0 );



		System.out.println( "Soma = " + soma);
		sc.close();

	}
	}
