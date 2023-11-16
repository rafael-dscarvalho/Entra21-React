package Aula09;

public class Data {

	
	private int mes;
	private int dia;
	private int ano;
	
	
	
	
	public void setmes(int mes) {
			this.mes= mes;
	}

	public int getmes() {
		return mes;
	}
	public void setdia(int dia) {
		this.dia = dia;
	}

	public int getdia() {
		return dia;
	}
	public void setano(int ano) {
		this.ano = ano;
	}
	
	public int getano() {
		return ano;
	}

	public void displayData(){
		System.out.println(dia + "/" + mes + "/" + ano);
	}
}
