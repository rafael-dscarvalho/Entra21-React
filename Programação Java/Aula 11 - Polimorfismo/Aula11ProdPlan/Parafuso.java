package Aula11ProdPlan;

public class Parafuso extends Parte{

	
	private float comprimento;
	private float diametro;

	
	
	 public Parafuso() {
		 
	 }
	
	 public Parafuso( int cod, String nome, float valor, float comprimento, float diametro ) {
		 super(cod, nome, valor);
		 this.comprimento = comprimento;
		 this.diametro = diametro;
	 }

	 
	public float getComprimento() {
		return comprimento;
	}

	public void setComprimento(float comprimento) {
		this.comprimento = comprimento;
	}

	public float getDiametro() {
		return diametro;
	}

	public void setDiametro(float diametro) {
		this.diametro = diametro;
	}
	 
	 
	@Override
	public String toString() {
		return String.format("Cod: " + getCod() + "%nNome: " + getNome() + "%nValor: " + getValor() + 
				"%nComprimento: " + comprimento + "%nDiametro: " + diametro);
	}
	 
	 
	 
	 
	 
	 
	 
	 
	 
}