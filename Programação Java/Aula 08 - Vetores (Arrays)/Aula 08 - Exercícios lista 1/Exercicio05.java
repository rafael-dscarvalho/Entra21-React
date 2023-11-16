package Aula08;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio05{
	
	
	public static void main(String[] args) {

		Locale.setDefault(Locale.US);

		Scanner sc = new Scanner(System.in);
		
		
		

		
		
		int NUM_ELEMENTOS = 12;  
 		int num_vetor[] = new int[NUM_ELEMENTOS];
 		
 		
 		
 		for(int i=0; i < NUM_ELEMENTOS; i++) {
 			System.out.print("Digite o valor " +i+ ": ");
 			System.out.println("");
 			num_vetor[i] = sc.nextInt();
 		}
 		
 	
 		for(int i=0; i < NUM_ELEMENTOS; i++) {
 			System.out.print("Valor na posição  " +i+ ": " + num_vetor[i]);
 			System.out.println("");
 		}
		
 		int soma=0;
	
 		for(int i=0; i < 10; i++) {
 			soma = soma + num_vetor[i];
 		}
 			System.out.print("A soma dos 10 primeiros elementos é: " +soma);

}
}
