package Aula08lista2;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio01
{
	
	
	public static void main(String[] args) {

		Locale.setDefault(Locale.US);

		Scanner sc = new Scanner(System.in);
		
		
 		int num_vetor[] = {1, 0, 5, -2, -5, 7};
 		int soma = 0;
 		
 
 	
 		for(int i=0; i < 6; i++) {
 			
 			if (i == 4) {
 				num_vetor[i] = 100;
 			}
 			System.out.print("Valor na posição  " +i+ ": " + num_vetor[i]);
 			System.out.println("");
 			
 			if(i == 0) {
 				soma = soma + num_vetor[i];
 			}
 			if(i == 1) {
 				soma = soma + num_vetor[i];
 			}
 			if(i == 5) {
 				soma = soma + num_vetor[i];
 			}
 		}
		
 		System.out.print("Soma: " +soma);
		
		

}
}
