package Aula08;

import java.util.Locale;
import java.util.Scanner;

public class arrayVETORnumero {
	
	
	public static void main(String[] args) {

		Locale.setDefault(Locale.US);

		Scanner sc = new Scanner(System.in);
		
		
		

		// vetor com 4 elementos (0...3)
		int NUM_ELEMENTOS = 4;  // mesmo que quantidade de células
 		int num_vetor[] = new int[NUM_ELEMENTOS];
 		
 		
 		//Leitura
 		for(int i=0; i < NUM_ELEMENTOS; i++) {
 			System.out.print("Digite o valor " +i+ ": ");
 			System.out.println("");
 			num_vetor[i] = sc.nextInt();
 		}
 		
 		//Exibição dos dados
 		for(int i=0; i < NUM_ELEMENTOS; i++) {
 			System.out.print("Valor na posição  " +i+ ": " + num_vetor[i]);
 			System.out.println("");
 		}
		
		/*num_vetor[0] = 1;
		num_vetor[1] = 5;
		num_vetor[2] = 6;
		num_vetor[3] = 8;*/
		
		

}
}
