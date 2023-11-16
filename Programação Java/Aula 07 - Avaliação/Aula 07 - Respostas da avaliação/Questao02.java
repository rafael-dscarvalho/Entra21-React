package Aula07AVALIAÇAO;

import java.util.Scanner;
import java.util.Locale;

public class Questao02 {

	
	
	
	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		

		
		double nota1, nota2, nota3, nota4, nota5;
		double soma =0;
		int repeticao = 1;
		double media;
		int classificacao=0;
		
		 System.out.println("Digite a nota da sua 1ª avaliacao: ");
		 nota1 = sc.nextDouble();
		 System.out.println("Digite a nota da sua 2ª avaliacao: ");
		 nota2 = sc.nextDouble();
		 System.out.println("Digite a nota da sua 3ª avaliacao: ");
		 nota3 = sc.nextDouble();
         System.out.println("Digite a nota da sua 4ª avaliacao: ");
		 nota4 = sc.nextDouble();
		 System.out.println("Digite a nota da sua 5ª avaliacao: ");
		 nota5 = sc.nextDouble();
		 
		media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
		   System.out.println("Media: " + media);
		
		if ((nota1 > 70)&&(nota2 > 70)&&(nota3 > 70)&&(nota4 > 70)&&(nota5 > 70)) {
			System.out.println("Classificacao A");
		}
		
		else if ((nota1 > 70) && (nota2 > 70)&&(nota3 <= 70)&&(nota4 > 70)) {
			System.out.println("Classificacao B");
		}
		else if ((nota1 > 70) && (nota2 > 70)&&(nota4 > 70)&&(nota5 <= 70)) {
			System.out.println("Classificacao B");
		}
		else if ((nota1 > 70) && (nota2 > 70)&&(nota3 > 70)&&(nota5 <= 70)) {
			System.out.println("Classificacao C");
		}
		else if ((nota1 > 70) && (nota2 > 70)&&(nota4 > 70)&&(nota5 <= 70)) {
			System.out.println("Classificacao C");
		}
		else {
			System.out.println("Reprovado");
		}
		
		
	     sc.close();
	 
		
		
		
}
}