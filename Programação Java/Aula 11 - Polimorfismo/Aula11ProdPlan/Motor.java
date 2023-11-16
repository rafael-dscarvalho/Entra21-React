package Aula11ProdPlan;

public class Motor extends Parte{

	
	private float potencia;
	private float corrente;
	private int rpm;
	
	
	 public Motor() {
		 
	 }
	
	 public Motor( int cod, String nome, float valor, float potencia, float corrente, int rpm ) {
		 super(cod, nome, valor);
		 this.potencia = potencia;
		 this.corrente = corrente;
		 this.rpm = rpm;
	 }
	
	
	
	public float getPotencia() {
		return potencia;
	}
	public void setPotencia(float potencia) {
		this.potencia = potencia;
	}
	public float getCorrente() {
		return corrente;
	}
	public void setCorrente(float corrente) {
		this.corrente = corrente;
	}
	public int getRpm() {
		return rpm;
	}
	public void setRpm(int rpm) {
		this.rpm = rpm;
	}
	
	
	@Override
	public String toString() {
		return String.format("Cod: " + getCod() + "%nNome: " + getNome() + "%nValor: " + getValor() + 
				"%nPotencia: " + potencia + "%nCorrente: " + corrente + "%nRPM: " + rpm);
	}
	
}
