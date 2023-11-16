package Aula08;

import java.util.Locale;
import java.util.Scanner;

public class arrayVETORnome {
	
	
	public static void main(String[] args) {

		Locale.setDefault(Locale.US);

		Scanner sc = new Scanner(System.in);
		
		
		

		// vetor com 4 elementos (0...3)
		int NUM_ELEMENTOS = 4;  // mesmo que quantidade de células
 		String nomes[] = new String[NUM_ELEMENTOS];
 		
 		
 		//Leitura
 		for(int i=0; i < NUM_ELEMENTOS; i++) {
 			System.out.print("Nome " +i+ ": ");
 			System.out.println("");
 			nomes[i] = sc.next();
 		}
 		
 		//Exibição dos dados
 		for(int i=0; i < NUM_ELEMENTOS; i++) {
 			System.out.print("Nome na posição  " +i+ ": " + nomes[i]);
 			System.out.println("");
 		}
		
	    
 		String nome_meses[] = {"Janeiro", "Fevereiro", "Março", "Abril"};
 		
 		System.out.println("Tamanho do vetor de meses:" + nome_meses.length);
		

}
}
