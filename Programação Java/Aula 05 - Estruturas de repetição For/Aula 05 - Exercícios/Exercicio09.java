package Aula05;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio09 {


	public static void main(String[] args) 
	{

		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		int n;
		int contador;

		System.out.println("Digite um valor");
		n = sc.nextInt();

		if(n < 0) {
			System.out.println("Valor inválido");
			sc.close();
		}


		else {

			for( contador = n; contador >= 0; contador--) 
			{


				System.out.print(contador +  " ");
			}


		}
		sc.close();
	}

}