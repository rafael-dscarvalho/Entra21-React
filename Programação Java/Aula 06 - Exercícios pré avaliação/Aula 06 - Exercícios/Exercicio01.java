package Aula06;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio01 {
	
public static void main(String[] args) {
	
	Locale.setDefault(Locale.US);
	Scanner sc = new Scanner(System.in);
	
	int b;
	int h;
   
    
    System.out.println("Digite a base do retângulo:");
    b = sc.nextInt();
    System.out.println("Digite a altura do retângulo:");
    h = sc.nextInt();
    
    int a = b*h;
    int p = 2 * (b+h);
    
    System.out.println("A área do retângulo é: " + a);
    System.out.println("O perímetro do retângulo é: " + p);
    sc.close();
    
}
}