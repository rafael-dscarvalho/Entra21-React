package Aula08lista2;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio06
{
	
	
	public static void main(String[] args) {

		Locale.setDefault(Locale.US);

		Scanner sc = new Scanner(System.in);

		
		int NUM_ELEMENTOS = 10;  
 		int num_vetor[] = new int[NUM_ELEMENTOS];
 		int maior=0;
		int menor=0;
 		int posicaomaior=0;
 		int posicaomenor=0;
 		
 		
 		
 		for(int i=0; i < NUM_ELEMENTOS; i++) {
 			System.out.print("Digite o valor " +i+ " : ");
 			System.out.println("");
 			num_vetor[i] = sc.nextInt();
 		}
 		
 	
 		for(int i=0; i < NUM_ELEMENTOS; i++) {
 			
 		
 			if (i == 0) {
 				maior = num_vetor[i];
 				menor = num_vetor[i];
 			}
 			
 			if (num_vetor[i] > maior) {
 				maior = num_vetor[i];
 				posicaomaior = i;
 			}
 			
 			if (num_vetor[i] < menor) {
 				menor = num_vetor[i];
 				posicaomenor = i;
 			}
 			
 			
 		}
 		
 		System.out.println("Valor na posi��o  " +posicaomaior+ ": " + maior + " � o maior");
 		System.out.println("Valor na posi��o  " +posicaomenor+ ": " + menor + " � o menor");
		
		

}
}
