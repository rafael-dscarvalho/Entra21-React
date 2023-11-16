package Aula09;

public class Livro {

	
	
	private String autor;
	private String nomeLivro;
	private int anoPublicacao;
	
	
	public void setautor(String autor) {
		this.autor = autor;
	}


	public String getautor() {
		return autor;
	}
	public void setnomeLivro(String nomeLivro) {
		this.nomeLivro = nomeLivro;
	}


	public int anoPublicacao() {
		return anoPublicacao;
	}
	public void setanoPublicacao(int anoPublicacao) {
		this.anoPublicacao = anoPublicacao;
	}


	public int getanoPublicacao() {
		return anoPublicacao;
	}
	
	public void mostraInformacaoLivro() {
		System.out.println("Nome do Autor: " + autor);
		System.out.println("Nome do Livro: " + nomeLivro);
		System.out.println("Ano de publica��o: " + anoPublicacao);
	}
}
