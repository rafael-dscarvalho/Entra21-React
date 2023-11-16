package Aula06;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio05 {
	
public static void main(String[] args) {
	
	Locale.setDefault(Locale.US);
	Scanner sc = new Scanner(System.in);
	
	int num;
	
	System.out.println("Digite um número");
	num = sc.nextInt();
	
	int sucessor = num +1;
	
	System.out.println("O sucessor de " +num+ " é: " +sucessor);
	sc.close();
	
}
}