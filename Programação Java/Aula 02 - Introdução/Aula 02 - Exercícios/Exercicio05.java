package Aula02;

import java.util.Scanner;

public class Exercicio05 {
		
		
	public static void main (String[] args) {
		// TODO Auto-generated method stub
		
		
		
	
	
	float altura;
	float peso;
	float IMC;
	
	
	
	Scanner sc = new Scanner (System.in);
	System.out.println( "Digite o peso: " );
	peso = sc.nextFloat();
	System.out.println( "Digite a altura: " );
	altura = sc.nextFloat();
	sc.close();
	
	IMC = peso / (altura * altura);
	
	System.out.println( "Resultado:" + IMC  );
	System.out.printf( "Resultado: %.3f", IMC );
	
	
	}

}
