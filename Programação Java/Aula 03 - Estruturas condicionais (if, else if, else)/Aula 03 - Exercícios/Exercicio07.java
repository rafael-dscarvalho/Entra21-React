package Aula03;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio07 {
 

	public static void main (String[] args) {
			// TODO Auto-generated method stub

			Locale.setDefault(Locale.US);

			//Entrada

			int idade;
			

			Scanner sc = new Scanner (System.in);

			System.out.println( "Digite sua idade:" );
			idade = sc.nextInt();
			
			if (idade < 16)  {
				System.out.println("Idade inválida, só é permitido votar a partir dos 16 anos");
			}
			
			else {
			sc.close();
			
			
			if ( (idade < 0) || (idade > 100) ) {
				System.out.println("Idade inválida");
			}
			
			else if ( (idade >= 16) && (idade < 18) ) {
				System.out.println("Seu voto é facultativo");	
			}
			
			else if ( idade > 70) {
				System.out.println("Seu voto é facultativo");	
			}
	 
			else if ( (idade >= 18) || (idade <= 70) ) {
				System.out.println("Seu voto é obrigatório");	
			}
	        
		    
			}

		}
		
	}