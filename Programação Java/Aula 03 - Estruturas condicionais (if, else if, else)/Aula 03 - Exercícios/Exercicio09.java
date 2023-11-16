package Aula03;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio09 {

		public static void main (String[] args) {
			// TODO Auto-generated method stub

			Locale.setDefault(Locale.US);

			//Entrada

			float mediafinal;
			String nome;
			

			Scanner sc = new Scanner (System.in);
           
			System.out.println("Digite seu nome:");
			nome = sc.next();
			System.out.println( "Digite média final:" );
			mediafinal = sc.nextFloat();
			
			if ( (mediafinal < 0) || (mediafinal > 10) )  {
				System.out.println("Valor de Média Final Incorreto!");
			}
			
			else {
			sc.close();
			
			
			if (mediafinal < 5)  {
				System.out.println("Reprovado");
			}
			
			else if ( (mediafinal >= 5) && (mediafinal < 7) ) {
				System.out.println("Aprovado com conceito Regular");	
			}
			
			else if ( (mediafinal >= 7) && (mediafinal < 9) ) {
				System.out.println("Aprovado com conceito Bom");	
			}
	        
			else if (mediafinal >= 9) {
				System.out.println("Aprovado com conceito Ótimo");	
			}
	        


		    
			}

		}
		
	}
