package Aula11ProdPlan;

public abstract class Parte {
	
	private int cod;
	private String nome;
	private float valor;
	
	
	 public Parte() {
		 
	 }
	
	 public Parte( int cod, String nome, float valor ) {
		 this.cod = cod;
    	 this.nome = nome;
    	 this.valor = valor;
     }
	
	public int getCod() {
		return cod;
	}
	public void setCod(int cod) {
		this.cod = cod;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public float getValor() {
		return valor;
	}
	public void setValor(float valor) {
		this.valor = valor;
	}

	
	public void calculaValor() {
		
	}
	
	public String toString() {
		return String.format("Cod: " + cod + "%nNome: " + nome + "%nValor: " + valor);
	}
}
