package Aula03;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio01 {

	public static void main (String[] args) {
		// TODO Auto-generated method stub

		Locale.setDefault(Locale.US);

		//Entrada

		float num;
		

		Scanner sc = new Scanner (System.in);

		System.out.println( "Digite um número:" );
		num = sc.nextFloat();
		sc.close();
		
		
		if  (num < 0)  {
			System.out.println("Seu número é negativo");
		}
		
		else if (num > 0) {
			System.out.println("Seu número é positivo!");	
		}
 
		else if ( num == 0 )  {
			System.out.println("Seu número é neutro!");
		}
        
	    
		
			
		}

	}