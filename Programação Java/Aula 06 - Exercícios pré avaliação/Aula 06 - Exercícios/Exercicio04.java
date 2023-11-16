package Aula06;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio04 {
	
public static void main(String[] args) {
	
	Locale.setDefault(Locale.US);
	Scanner sc = new Scanner(System.in);
	
	double l1;
	double l2;
	double l3;
   
    
    System.out.println("Digite o lado 1 do triângulo:");
    l1 = sc.nextInt();
    System.out.println("Digite o lado 2 do triângulo:");
    l2 = sc.nextInt();
    System.out.println("Digite o lado 3 do triângulo:");
    l3 = sc.nextInt();
  
    double p = l1+l2+l3;
    
    System.out.printf("O perímetro do quadrado é: %.1f ", p);
    sc.close();
    
}
}