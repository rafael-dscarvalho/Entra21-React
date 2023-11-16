package Aula06;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio12 {
	
public static void main(String[] args) {
	
	
	Locale.setDefault(Locale.US);
	Scanner sc = new Scanner(System.in);
	
	double num;
	
	System.out.println("Digite o valor em m/s:");
	num = sc.nextInt();
	
	double km = num * 3.6;
	
	
	System.out.println(num + " m/s é = " + km + " km/h");
	
	
	
}
}