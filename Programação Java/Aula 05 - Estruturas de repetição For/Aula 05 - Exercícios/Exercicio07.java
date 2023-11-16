package Aula05;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio07 {

public static void main(String[] args) {
		

	
		Locale.setDefault(Locale.US);

	
		
		int soma = 0;  
		int num;
        int repetição = 1;

		Scanner sc = new Scanner(System.in); // lê

		System.out.println( "Digite um número:" );  
		num = sc.nextInt();
		
	    do {
	    	
	    	soma = soma + repetição;
	    	
			repetição = repetição + 2;
	
	    	
	    }while(repetição <= num);
		
			 	 
			
		
		System.out.println( "A soma dos números ímpares entre 0 até " + num +  " é = " + soma);
                 sc.close();



	}
}

