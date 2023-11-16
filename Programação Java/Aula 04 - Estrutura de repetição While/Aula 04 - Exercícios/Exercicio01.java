package Aula04;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio01 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Modifica separador de "," para "."
		Locale.setDefault(Locale.US);

		// Entrada
		
		int num; 
		int tabuada = 0;
       
		Scanner sc = new Scanner(System.in); // lê
		
		System.out.println( "Digite um número:" );  
		num = sc.nextInt();
		
		if (num <= 0) {
			System.out.println( "Número inválido" );	
		}
		else {
		
			
		while( tabuada < 10) {
			 
					 
			tabuada = tabuada +1;
			int resultado = num * tabuada;
			
			System.out.println( tabuada +"x" + num + " = "+ resultado );
			
		}
		
	
		sc.close();



	}

}
}

