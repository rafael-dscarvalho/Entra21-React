package Aula07AVALIAÇAO;

import java.util.Scanner;
import java.util.Locale;

public class Questao04 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		int opcao;
		char continuar;

		do {
			System.out.println( "1) Adicao, 2) subtracao, 3) divisao, 4) multiplicacao, 0) Sair." );  
			opcao = sc.nextInt();
		
			while ( opcao == 0 ) {
				System.out.println( "Voce deseja sair? (s/n):" );  
				continuar = sc.next().charAt(0);


				if(continuar == 'n') {
					opcao = 1;
				}
				if(continuar == 's') {
					opcao = 55943;
				}
			}
			}while ((opcao != 0) && ( opcao != 55943));
				
		
			sc.close();
		}
	}
	




