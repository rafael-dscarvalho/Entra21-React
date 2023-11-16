package Aula09;

public class Retangulo {

	
	private double altura;
	private double largura;
	private double perimetro;
    private double area;	

	
	
	
	
	public void setaltura(double altura) {
			this.altura= altura;
	}

	public double getaltura() {
		return altura;
	}
	public void setlargura(double largura) {
		this.largura = largura;
	}

	public double getlargura() {
		return largura;
	}
	
	public void perimetro(){
		perimetro = altura + altura + largura + largura;
		
		System.out.println("perimetro: " + perimetro);
	}
	
	public void area(){
		area = largura*altura;
		
		System.out.println("area: " + area);
}
}