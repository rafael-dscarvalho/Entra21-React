package Aula11;


public class TesteAnimal {
	
	public static void main(String[] args) {
		
		Animal cachorro = new Cachorro();
		Animal gato = new Gato();
		Animal pato = new Pato();
		
		cachorro.movimentar();
		cachorro.comunicar();
		gato.movimentar();
		gato.comunicar();
		pato.movimentar();
		pato.comunicar();
	}

}