package Aula09;


public class ContaBancaria1 {
	
	public static void main(String[] args) {
		
		ContaBancaria minhaConta1 = new ContaBancaria( "Jo�o", 12345 );
		//ContaBancaria minhaConta2 = new ContaBancaria();
		//ContaBancaria minhaConta3 = new ContaBancaria();
		
	//	minhaConta1.setNome("Jo�o");
	//	minhaConta2.setNome("Jos�");
	//	minhaConta3.setNome("Carlos");
		
		
		System.out.println( "Propriet�rio da conta 1: " + minhaConta1.getNome() + ", Conta: " + minhaConta1.getnumeroConta() );
	}

}
