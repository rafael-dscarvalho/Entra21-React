package Aula09;

public class TesteLivro {
	
	public static void main(String[] args) {
		
		
		
		Livro testelivro = new Livro();
		
		
		testelivro.setautor("Graciliano Ramos");
		testelivro.setnomeLivro("Vidas Secas");
		testelivro.setanoPublicacao(1938);
		testelivro.mostraInformacaoLivro();
	}

}
