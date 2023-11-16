package Aula02;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio09 {
		
		public static void main (String[] args) {
		
			Locale.setDefault(Locale.US);
			
			Scanner sc = new Scanner (System.in);
			
		String nome;
		double salario;
		double totalvendas;
		double totalreceber;
		
		System.out.println( "Digite seu nome: " );
	    nome = sc.next();
	    System.out.println( "Digite seu salário: " );
		salario = sc.nextDouble();
		System.out.println( "Digite o total de vendas efetuadas este mês: " );
		totalvendas = sc.nextDouble();
	    
		totalreceber = (totalvendas * 0.15) + salario;
		
		System.out.println("Funcionário: " +  nome);
		System.out.printf("Total a receber: R$ %.2f", totalreceber);
		
		}
}