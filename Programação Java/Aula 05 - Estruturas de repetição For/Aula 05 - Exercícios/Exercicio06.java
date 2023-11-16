package Aula05;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio06 {

public static void main(String[] args) {
		

		// Modifica separador de "," para "."
		Locale.setDefault(Locale.US);

		// Entrada
		
		int soma = 0;  
		int num;
        int repetição = 0;
        int media = 0;

		Scanner sc = new Scanner(System.in); // lê

		System.out.println( "Digite um número:" );  
		num = sc.nextInt();
		
	    do {
	    	
	    	soma = soma + (num - repetição);
			repetição = repetição + 1;
	
	    	
	    }while(repetição <= num);
		
			 	 media = soma / num;
			
		
		System.out.println( "A média é = " + media);
                 sc.close();



	}
}

