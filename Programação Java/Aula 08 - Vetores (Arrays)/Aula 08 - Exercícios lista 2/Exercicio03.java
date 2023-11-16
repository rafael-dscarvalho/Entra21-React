package Aula08lista2;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio03
{
	
	
	public static void main(String[] args) {

		Locale.setDefault(Locale.US);

		Scanner sc = new Scanner(System.in);
		
		
		
		
		int NUM_ELEMENTOS = 6;  
 		float num_vetor[] = new float[NUM_ELEMENTOS];
 		
 		
 		
 		for(int i=0; i < NUM_ELEMENTOS; i++) {
 			System.out.print("Digite o valor " +i+ ": ");
 			System.out.println("");
 			num_vetor[i] = sc.nextInt();
 		}
 		
 	
 		for(int i=0; i < NUM_ELEMENTOS; i++) {
 			System.out.print("Valor na posição  " +i+ "A: " + num_vetor[i]);
 			System.out.println("");
 		}
		
 		for(int i=0; i < NUM_ELEMENTOS; i++) {
 			float quadrado = num_vetor[i]*num_vetor[i];
 			System.out.print("Valor na posição  " +i+ "B: " + quadrado);
 			System.out.println("");
 		}
	
		
		

}
}
