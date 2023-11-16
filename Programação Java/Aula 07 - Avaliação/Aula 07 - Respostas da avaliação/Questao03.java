package Aula07AVALIAÇAO;

import java.util.Scanner;


public class Questao03 {
	
	
	public static void main(String[] args) {
		
	
		Scanner sc = new Scanner(System.in);
		
		int pessoas;
		float salario;
		int filhos;
		int repeticao= 1 ;
		float somasalario =0;
		int somafilhos = 0;
		float maior=0;
		float menor =0;
		

		System.out.println("Digite o numero de pessoas na pesquisa: ");
		pessoas = sc.nextInt();

		do {
			System.out.println("Digite o salario da " + repeticao + " pessoa:");
			salario = sc.nextInt();
			System.out.println("Digite quantos filhos a " + repeticao + " pessoa possui:");
			filhos = sc.nextInt();
			
			if  (repeticao == 0){
				maior = salario;
			}
			
			if ( salario > maior) {
				maior = salario;
			}
			
			if (salario < 150) {
				menor = menor +1;
			}
			somasalario = somasalario + salario;
			somafilhos = somafilhos + filhos;
			repeticao = repeticao+1;
			
		}while (repeticao <= pessoas);
		
		float mediasalario = somasalario / pessoas;
		int mediafilhos = somafilhos / pessoas;
		float percentual= (menor*100) / 5;
		
		
		System.out.println("Media de salario da populacao: R$ " + mediasalario );
		System.out.println("Media de filhos da populacao: " + mediafilhos);
		System.out.println("Maior salario entre os habitantes: R$ " + maior);
		System.out.println("Percentual de pessoas com salario menor que R$ 150,00: " + percentual + "%");
		sc.close();
}
}  