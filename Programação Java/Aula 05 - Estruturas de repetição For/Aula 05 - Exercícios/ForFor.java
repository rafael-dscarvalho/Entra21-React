package Aula05;

import java.util.Locale;
import java.util.Scanner;

public class ForFor {


	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Modifica separador de "," para "."
		Locale.setDefault(Locale.US);

		int i;
		int j;
		
		
	
		for( i = 1; i <= 4; i++) {
			
			for( j = 1; j <= 4; j++) {
				System.out.print("*");

			}
			System.out.println(" ");


		}
		System.out.println("FIM");
	}

	}