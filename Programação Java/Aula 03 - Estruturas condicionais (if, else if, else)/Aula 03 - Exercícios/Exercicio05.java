package Aula03;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio05 {
	
public static void main (String[] args) {
			// TODO Auto-generated method stub

			Locale.setDefault(Locale.US);

			//Entrada

			int num1;
			int num2;
			

			Scanner sc = new Scanner (System.in);

			System.out.println( "Digite o primeiro número:" );
			num1 = sc.nextInt();
			System.out.println( "Digite o segundo número:" );
			num2 = sc.nextInt();
			sc.close();

			//processamento

	
			if (num1 < num2) {
				System.out.println(num1 + "é o menor número");
				System.out.println(num2 + "é o maior número");
			}
			
			else if (num2 < num1) {
				System.out.println(num2 + "é o menor número");
				System.out.println(num1 + "é o maior número");
			
			}
			 
		    
			}

		}

