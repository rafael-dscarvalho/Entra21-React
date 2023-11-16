package Aula06;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio06 {
	
public static void main(String[] args) {
	
	Locale.setDefault(Locale.US);
	Scanner sc = new Scanner(System.in);
	
	int num1;
	int num2;
    int resto;
    int quociente;
	
	System.out.println("Digite o primeiro número");
	num1 = sc.nextInt();
	System.out.println("Digite o segundo número");
	num2 = sc.nextInt();
	
	resto = (num1*num1)-num2;
	int divisão = num1 / num2;
	
	
	
}
}