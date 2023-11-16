package Aula04;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio10 {

	public static void main(String[] args) {
		
		
		Locale.setDefault(Locale.US);

		Scanner sc = new Scanner(System.in);
		
		int x = 1;
		int y = 1;
		
		while ( (x != 0)  || ( y != 0) ) {
			
			System.out.println("Digite a coordenada x:");
			x=sc.nextInt();
			System.out.println("Digite a coordenada y:");
			y=sc.nextInt();
			
			if ((x > 0) && (y > 0)) {
				System.out.println("Primeiro quadrante");
			}
			
			else if ((x < 0) && (y > 0)) {
				System.out.println("Segundo quadrante:");
			}
			else if ((x < 0) && (y < 0)) {
				System.out.println("Terceiro quadrante:");
			}
			else if ((x > 0) && (y < 0)) {
				System.out.println("Quarto quadrante:");
			}
		   	
			
			}
		
		sc.close();
		
		}
	}
	