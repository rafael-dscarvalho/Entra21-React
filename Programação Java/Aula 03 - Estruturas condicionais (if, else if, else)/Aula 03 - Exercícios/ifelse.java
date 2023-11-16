package Aula03;

import java.util.Locale;
import java.util.Scanner;

public class ifelse {

	public static void main (String[] args) {
		// TODO Auto-generated method stub

		Locale.setDefault(Locale.US);

		//Entrada

		int hora;
		

		Scanner sc = new Scanner (System.in);

		System.out.println( "Digita a hora do dia:" );
		hora = sc.nextInt();
		//System.out.println( "y2:" );
		//y1 = sc.nextFloat();  
		sc.close();

		//processamento


		if( (hora >= 0) && (hora < 12) ) {
			System.out.println("Bom dia!");	
		}

		else if ( (hora >= 12) && (hora < 18) )  {
			System.out.println("Boa tarde!");
		}

		else if ((hora >= 18) && (hora <= 23)) {
			System.out.println("Boa noite!");
		}

		else
			System.out.println("Hora inválida");	
	}

}
