package Aula08lista2;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio05
{
	
	
	public static void main(String[] args) {

		Locale.setDefault(Locale.US);

		Scanner sc = new Scanner(System.in);

		
		int NUM_ELEMENTOS = 10;  
 		int num_vetor[] = new int[NUM_ELEMENTOS];
 		int par=0;
 		
 		
 		
 		for(int i=0; i < NUM_ELEMENTOS; i++) {
 			System.out.print("Digite o valor " +i+ " : ");
 			System.out.println("");
 			num_vetor[i] = sc.nextInt();
 		}
 		
 	
 		for(int i=0; i < NUM_ELEMENTOS; i++) {
 			
 					
 			
 			if (num_vetor[i] %2 == 0) {
 				par = par+1;
 			}
 		
 		}
 		System.out.println("O vetor possui " + par + " valores pares");
		
	
		
		

}
}
