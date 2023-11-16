package Aula03;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio03 {

	public static void main (String[] args) {
		// TODO Auto-generated method stub

		Locale.setDefault(Locale.US);

		//Entrada

		int senha;
		

		Scanner sc = new Scanner (System.in);

		System.out.println( "Digite a senha:" );
		senha = sc.nextInt();
		sc.close();
		
		
		if  (senha == 1234) {
			System.out.println("ACESSO PERMITIDO");
		}
		
		else if (senha != 1234) {
			System.out.println("ACESSO NEGADO");	
		}
 
	    
		}

	}

