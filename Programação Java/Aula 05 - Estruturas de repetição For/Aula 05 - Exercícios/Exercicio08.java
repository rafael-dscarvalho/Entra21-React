package Aula05;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio08 {


	public static void main(String[] args) 
	{
	
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		int n;
		int contador1;
		int contador2;

		System.out.println("Digite um valor");
		n = sc.nextInt();


		for(contador1 = 1; contador1 <= n; contador1 ++) 
		{

			for (contador2 = 1; contador2 <= contador1; contador2++) {
				System.out.print("*");
			}

			System.out.println(" ");
		}
	}
}
