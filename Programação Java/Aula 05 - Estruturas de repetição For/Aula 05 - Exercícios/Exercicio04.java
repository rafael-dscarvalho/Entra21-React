package Aula05;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio04 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		Locale.setDefault(Locale.US);

		
		
		int num;
        int multiplicacao = 0;
        int fim;
        int inicio;
        
		Scanner sc = new Scanner(System.in); 
		
		System.out.println( "Digite um número para obter a tabuada:" ); 
			num = sc.nextInt();
			if (num <= 0) {
				System.out.println("Número inválido");
				sc.close();
			}
			
			else {
			System.out.println( "Digite o ínicio da tabuada:" ); 
			inicio = sc.nextInt(); // esta variavel "inicio" pode ser substituida por "repeticao", que servirá à mesma lógica. fiz com nome diferente apenas para definir o inicio da tabuada e nao confundir
			System.out.println( "Digite o fim da tabuada:" ); 
			fim = sc.nextInt();
			
			int repeticao = inicio;  
			
		do {
			
			multiplicacao = num * repeticao;
			
			System.out.println(num + "x" + repeticao + " = " +  multiplicacao );
			
			repeticao = repeticao +1;
			
			}while(repeticao <= fim);
		
		sc.close();
		
}
	}
}