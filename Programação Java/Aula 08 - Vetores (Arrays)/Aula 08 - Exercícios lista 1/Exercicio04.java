package Aula08;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio04
{
	
	
	public static void main(String[] args) {

		Locale.setDefault(Locale.US);

		Scanner sc = new Scanner(System.in);

		
		int NUM_ELEMENTOS = 5;  
 		int num_vetor[] = new int[NUM_ELEMENTOS];
 		
 		
 		
 		for(int i=0; i < NUM_ELEMENTOS; i++) {
 			System.out.print("Digite o valor " +i+ " : ");
 			System.out.println("");
 			num_vetor[i] = sc.nextInt();
 		}
 		
 	
 		for(int i=0; i < NUM_ELEMENTOS; i++) {
 			
 					
 			
 			if (num_vetor[i]  >= 10) {
 				System.out.print("Valor na posição  " +i+ ": " + num_vetor[i]);
 			}
 			System.out.println("");
 		}
		
	
		
		

}
}
