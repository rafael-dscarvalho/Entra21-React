package Aula11Xadrez;

public class testeXadrez {
	
	public static void main(String[] args) {
		
		Peca peao = new Peao();
		Peca torre = new Torre();
		Peca bispo = new Bispo();
		
		peao.mover();
		torre.mover();
		bispo.mover();
	}

}
