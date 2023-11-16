package Aula09;

public class ContaBancaria {

     private String nome;
     private int numeroConta;
     
   // Construtor
     public ContaBancaria( String nome, int numeroConta) {
    	 this.nome = nome;
    	 this.numeroConta = numeroConta;
     }
     
 	
 	
 	// set - definir
 	public void setnumeroConta(int numeroConta) {
 		this.numeroConta = numeroConta;
 	}
 	
 	
 	
 	// get - acessar
 	public int getnumeroConta() {
 		return numeroConta;
 	}
 
     
	// set - definir
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	
	// get - acessar
	public String getNome() {
		return nome;
	}
}
