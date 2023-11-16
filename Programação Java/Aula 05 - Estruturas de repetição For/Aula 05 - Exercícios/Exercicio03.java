package Aula05;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio03 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		Locale.setDefault(Locale.US);

		
		
		int num= 0;
		int tabuada = 0;
		int repeticao = 0;
        int multiplicacao = 0;

		Scanner sc = new Scanner(System.in); 
		
		System.out.println( "Digite um número para obter a tabuada:" ); 
			num = sc.nextInt();
			
			if (num <= 0) {
				System.out.println("Número inválido");
				sc.close();
			}
			
			else {
		do {
			
			tabuada = tabuada +1;
			repeticao = repeticao +1;
			multiplicacao = num * tabuada;
			
			System.out.println(num + "x" + repeticao + " = " +  multiplicacao );
			
			}while(tabuada < 10);
		
		sc.close();
		
}
	}
}