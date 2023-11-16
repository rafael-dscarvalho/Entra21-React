package Aula05;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio01 {


	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Modifica separador de "," para "."
		Locale.setDefault(Locale.US);

		// Entrada
		
		int num1; // Variável que recebe o valor digitado pelo usuário
      

		Scanner sc = new Scanner(System.in); // lê
		
		 do {
         	System.out.println( "1) Adição, 2) subtração, 3) divisão, 4) multiplicacão, 0) Sair." );  
 			num1 = sc.nextInt();
 			
         }while ( num1 != 0 );
         
		 
 
sc.close();
}


}