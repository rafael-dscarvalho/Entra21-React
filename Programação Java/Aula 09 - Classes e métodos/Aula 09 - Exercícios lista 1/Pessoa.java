package Aula09;

public class Pessoa{


	private String nome;
	private int idade;
	private int anoDeNascimento;
	private double altura;


	public void mostraInformacaoPessoa() {
		System.out.println("Nome: " + nome);
		System.out.println("Idade : " + idade);
		System.out.println("Ano de Nascimento : " + anoDeNascimento);
		System.out.println("Altura : " + altura + "m");

	}

	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getNome() {
		return nome;
	}


	public void setIdade(int idade) {
		this.idade = idade;
	}


	public int getIdade() {
		return idade;
	}


	public void setAnoDeNascimento(int anoDeNascimento) {
		this.anoDeNascimento = anoDeNascimento;
	}


	public int getanoDeNascimento() {
		return anoDeNascimento;
	}

	public void setAltura(double altura) {
		this.altura = altura;
	}


	public double getAltura() {
		return altura;


	}
}
