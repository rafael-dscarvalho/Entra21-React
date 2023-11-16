package Aula06;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio03 {
	
public static void main(String[] args) {
	
	Locale.setDefault(Locale.US);
	Scanner sc = new Scanner(System.in);
	
	double r;
   
    
    System.out.println("Digite o raio:");
    r = sc.nextInt();
  
    double a = 3.14 * (r*r);
    double p = (2 * 3.14) * r;
    
    System.out.println("A área do quadrado é: " + a);
    System.out.printf("O perímetro do quadrado é: %.1f ", p);
    sc.close();
    
}
}