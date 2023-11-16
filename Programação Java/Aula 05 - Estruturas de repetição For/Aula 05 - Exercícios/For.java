package Aula05;

import java.util.Locale;
import java.util.Scanner;

public class For {


	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Modifica separador de "," para "."
		Locale.setDefault(Locale.US);

		// Entrada

		//contador = contador + 1 ou
		//contador = +=1 ou                     
		//contador ++      ; 
        //as 3 formas são equivalentes, porem "contador++" apenas funciona quando o incremento for equivalente a 1

		for( int contador = 1; contador <= 10; contador = contador +1) {
			System.out.println(contador);


		}
		System.out.println("Fim");
	}

	}