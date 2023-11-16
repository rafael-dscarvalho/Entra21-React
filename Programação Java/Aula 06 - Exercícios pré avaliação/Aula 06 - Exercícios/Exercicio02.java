package Aula06;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio02 {
	
public static void main(String[] args) {
	
	Locale.setDefault(Locale.US);
	Scanner sc = new Scanner(System.in);
	
	int l;
   
    
    System.out.println("Digite o lado do quadrado:");
    l = sc.nextInt();
  
    int a = l*l;
    int p = 4*l;
    
    System.out.println("A área do quadrado é: " + a);
    System.out.println("O perímetro do quadrado é: " + p);
    sc.close();
    
}
}