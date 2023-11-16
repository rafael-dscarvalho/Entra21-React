package Aula08lista2;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio04
{


	public static void main(String[] args) {

		Locale.setDefault(Locale.US);

		Scanner sc = new Scanner(System.in);


		int NUM_ELEMENTOS = 8;  
		int num_vetor[] = new int[NUM_ELEMENTOS];
		int X; 
		int Y;
		int a=0;
		int b=0;
		int c=0;
		int A=0;
		int B=0;
		int C=0;

		System.out.print("Digite um valor para x: " );
		X=sc.nextInt();
		System.out.print("Digite um valor para y: " );
		Y=sc.nextInt();


		for(int i=0; i < NUM_ELEMENTOS; i++) {
			System.out.print("Digite o valor " +i+ ": ");
			System.out.println("");
			num_vetor[i] = sc.nextInt();
		}


		for(int i=0; i < NUM_ELEMENTOS; i++) {

			if(num_vetor[i] == A) {
				a = a + 1;	
			}
			if(num_vetor[i] == B) {
				b = b + 1;	
				//}
				if(num_vetor[i] == C) {
					c = c + 1;	
				}






			}

			System.out.println("Quantidade de vezes que o valor A: " + A + " apareceu no programa: " + a);
			System.out.println("Quantidade de vezes que o valor B: " + B + " apareceu no programa: " + b);
			System.out.println("Quantidade de vezes que o valor C: " + C + " apareceu no programa: " + c);

            sc.close();

		}
	
}
}