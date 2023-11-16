package Aula05;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio05 {


	public static void main(String[] args) {



		Locale.setDefault(Locale.US);


		int hello=0; 


		Scanner sc = new Scanner(System.in); // lê

		do {

			hello = hello + 1;


			System.out.println( "Hello World!" );  


		}while ( hello < 11 );



		sc.close();
	}


}