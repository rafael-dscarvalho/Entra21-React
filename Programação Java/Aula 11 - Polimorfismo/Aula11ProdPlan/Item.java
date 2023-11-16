package Aula11ProdPlan;

public class Item extends Parte {
	
	private int quantidade;
	private Parte parte;
	
	
	
	public Item() {
		
	}
	
	public Item(int cod, String nome, float valor, int quantidade) {
		super(cod, nome, valor);
		this.quantidade = quantidade;
		
	}
	
	public int getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}
	public Parte getParte() {
		return parte;
	}
	public void setParte(Parte parte) {
		this.parte = parte;
	}
	
    public void calculaValor() {
		
	}

}
