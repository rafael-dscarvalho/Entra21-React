package Aula06;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio09 {
	
public static void main(String[] args) {
	
	Locale.setDefault(Locale.US);
	Scanner sc = new Scanner(System.in);
	
	
	int r;
	int h;
	
	System.out.println("Digite o raio");
	r = sc.nextInt();
	System.out.println("Digite a altura");
	h = sc.nextInt();
	
	double a = 3.14*(r*r);
	double v = a * h;
	
	System.out.println("O volume da lata de óleo cilíndrica é de: " + v + " litros");
}
}