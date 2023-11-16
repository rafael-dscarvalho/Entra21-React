package Aula04;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio09 {

	public static void main(String[] args) {
		
		
		Locale.setDefault(Locale.US);


		int senha = 0;

		Scanner sc = new Scanner(System.in);
          
		while (senha != 2002) {
			System.out.println("Digite a Senha");
		senha=sc.nextInt(); 
     

		if (senha != 2002) {
			System.out.println("SENHA INVÁLIDA ");
		}
		}
		System.out.println("ACESSO PERMITIDO");
		sc.close();
	}
}