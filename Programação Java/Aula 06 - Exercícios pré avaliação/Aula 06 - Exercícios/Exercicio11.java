package Aula06;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio11 {
	
public static void main(String[] args) {
	
	Locale.setDefault(Locale.US);
	Scanner sc = new Scanner(System.in);
	
	
	float nota1;
	float nota2;
	float nota3;
	float nota4;
	
	System.out.println("Digite a nota  da primeira prova do primeiro bimestre");
	nota1 = sc.nextInt();
	System.out.println("Digite a nota  da segunda prova do primeiro bimestre");
	nota2 = sc.nextInt();
	
	System.out.println("Digite a nota  da primeira prova do segundo bimestre");
	nota3 = sc.nextInt();
	System.out.println("Digite a nota  da segunda prova do segundo bimestre");
	nota4 = sc.nextInt();
	
	
	float b1 = nota1 + nota2;
	float b2 = nota3 + nota4;
	float mediasemestre = (b1 + b2) / 2;
     
	
     System.out.println("Sua média semestral é: " + mediasemestre);
}
}