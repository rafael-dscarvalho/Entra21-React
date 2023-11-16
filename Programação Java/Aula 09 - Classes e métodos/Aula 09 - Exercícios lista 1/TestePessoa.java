package Aula09;

import java.util.Scanner;

public class TestePessoa {
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		Pessoa  pessoa1 = new Pessoa();
		
		pessoa1.setNome("João");
		pessoa1.setIdade(42);
		pessoa1.setAnoDeNascimento(1980);
		pessoa1.setAltura(1.7);
		pessoa1.mostraInformacaoPessoa();
	
	
		
		
		
sc.close();
}
}