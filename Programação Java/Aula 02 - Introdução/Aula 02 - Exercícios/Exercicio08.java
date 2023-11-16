package Aula02;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio08 {
		
		public static void main (String[] args) {
		
			Locale.setDefault(Locale.US);
			
		
			
		float x1;
		float x2;
		float y1;
		float y2;
		
		Scanner sc = new Scanner (System.in);
		
		System.out.println( "x1:" );
		x1 = sc.nextFloat();
		System.out.println( "x2:" );
		x2 = sc.nextFloat();
		System.out.println( "y1:" );
		y1 = sc.nextFloat();
		System.out.println( "y2:" );
		y2 = sc.nextFloat();
		
		sc.close();
		
		//processamento
	
		double d; //distancia entre ponto1 e ponto2
		
		d= Math.sqrt( Math.pow( (x2 - x1), 2 ) + Math.pow( (y2 - y1), 2 ));
		
		// saída
		System.out.printf("A distância entre p1 e p2 é %.3f", d);
		
			}

}