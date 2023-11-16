package Aula04;

import java.util.Locale;
import java.util.Scanner;

public class While {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Modifica separador de "," para "."
		Locale.setDefault(Locale.US);

		// Entrada
		
		int soma = 0;  // Variável que armazena soma
		int repeticao = 1;  // Conta números inseridos
		int num1; // Variável que recebe o valor digitado pelo usuário
        int NUMERO_DE_PEDIDOS = 4;

		Scanner sc = new Scanner(System.in); // lê

		
		while( repeticao <= NUMERO_DE_PEDIDOS) {
			System.out.println( "Digita o número" + repeticao + ":" );  
			num1 = sc.nextInt();

			soma = soma + num1;
			repeticao = repeticao +1; 
			
			System.out.println( "Soma = " + soma);
			repeticao = repeticao + 1;
		    System.out.println( "Repeticao = " + repeticao);
			System.out.println( "-----------" );
		}
		System.out.println( "Soma = " + soma);
                sc.close();

}
}