package Aula09lista2;

public class Elevador{

	int andarAtual;
	int totalDeAndares;
	int capacidadeDoElevador;
	int numeroDePessoasNoElevador;

	public Elevador() {
		this.andarAtual=0;
		this.totalDeAndares=0;
		this.capacidadeDoElevador=0;
		this.numeroDePessoasNoElevador=0;

	}

	public int getAndarAtual() {
		return andarAtual;
	}

	public void setAndarAtual(int andarAtual) {
		this.andarAtual = andarAtual;
	}

	public int getTotalDeAndares() {
		return totalDeAndares;
	}

	public void setTotalDeAndares(int totalDeAndares) {
		this.totalDeAndares = totalDeAndares;
	}

	public int getCapacidadeDoElevador() {
		return capacidadeDoElevador;
	}

	public void setCapacidadeDoElevador(int capacidadeDoElevador) {
		this.capacidadeDoElevador = capacidadeDoElevador;
	}

	public int getNumeroDePessoasNoElevador() {
		return numeroDePessoasNoElevador;
	}

	public void setNumeroDePessoasNoElevador(int numeroDePessoasNoElevador) {
		this.numeroDePessoasNoElevador = numeroDePessoasNoElevador;
	}

	public void inicializa(int totalDeAndares, int capacidadeDoElevador) {
		this.totalDeAndares = totalDeAndares;
		this.capacidadeDoElevador = capacidadeDoElevador;
	}

	public void sobeElevador() {

		if (this.andarAtual+1 <= this.totalDeAndares) {
			this.andarAtual += 1;
		}
		else{
			System.out.println("O Elevador ja esta no andar mais alto!");
		}
	}

	public void desceElevador() {

		if (this.andarAtual+1 >= 0) {
			this.andarAtual -= 1;
		}
		else{
			System.out.println("O Elevador ja esta no andar mais baixo!");
		}
	}

 public void entraPessoa() {
	 
	 if(this.numeroDePessoasNoElevador +1 <= this.capacidadeDoElevador) {
		 this.capacidadeDoElevador +=1;
	 }
	 else {
		 System.out.println("Elevador cheio!");
	 }
	 
 }

 public void saiPessoa() {
	 if(this.numeroDePessoasNoElevador > 0) {
		 this.numeroDePessoasNoElevador -= 1;
	 }
	 else {
		 System.out.println("Elevador vazio!");
	 }
 }

}