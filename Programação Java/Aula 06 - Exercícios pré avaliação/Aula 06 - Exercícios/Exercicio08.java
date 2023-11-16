package Aula06;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio08 {
	
public static void main(String[] args) {
	
	Locale.setDefault(Locale.US);
	Scanner sc = new Scanner(System.in);
	
	double f;
	
	System.out.println("Digite a temperatura em fahrenheit");
	f = sc.nextInt();
	
	double c;
	
	c = (f-32) * 5/9;
	

	System.out.printf("A conversão para Celsius é: %.3f", c);
	sc.close();
	
}
}