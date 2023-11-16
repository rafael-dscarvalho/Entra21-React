package Aula03;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio02{

	public static void main (String[] args) {
		// TODO Auto-generated method stub

		Locale.setDefault(Locale.US);

		//Entrada

		int idade;
		

		Scanner sc = new Scanner (System.in);

		System.out.println( "Digite sua idade:" );
		idade = sc.nextInt();
		
		if (idade < 16)  {
			System.out.println("Idade inválida, digite novamente");
		}
		
		else {
		sc.close();
		
		
		if ( (idade < 0) || (idade > 100) ) {
			System.out.println("Idade inválida");
		}
		
		else if ( (idade > 67) || (idade < 18) ) {
			System.out.println("Você não pode doar sangue");	
		}
 
		else if ( (idade >= 18) || (idade <= 67) ) {
			System.out.println("Você pode doar sangue");	
		}
        
	    
		}

	}
	
}
	