
package Aula02;

import java.util.Scanner;

public class Exercicio06 {
	
	public static void main (String[] args) {
		// TODO Auto-generated method stub
	
		float km;
		float litros;
		
		
		Scanner sc = new Scanner (System.in);
		System.out.println( "Digite a quantidade de Km: " );
		km = sc.nextFloat();
		System.out.println( "Digite a quantidade de litros gastos: " );
		litros = sc.nextFloat();
		sc.close();
		
		float soma;
		
		soma = km / litros;
		
		System.out.printf("Resultado: %.3f Km/l " , soma );
		
		
		}
		
	}
