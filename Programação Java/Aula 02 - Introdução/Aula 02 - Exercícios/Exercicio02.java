package Aula02;

import java.util.Scanner;

public class Exercicio02 {
public static void main (String[] args) {
			// TODO Auto-generated method stub
			
				
			float valormetro;
		
			
			Scanner sc = new Scanner (System.in);
			System.out.println( "Digite o valor em metros: " );
		    valormetro = sc.nextInt();
			sc.close();
			
			
		    double decímetro, centímetro, milímetro;
		    
		    decímetro = valormetro * 10;
			
		    centímetro = valormetro * 100;
			
		    milímetro = valormetro * 1000;
		    
		    System.out.println( "Decímetros: " + decímetro );
		    System.out.println( "Centímetrs: " + centímetro);
		    System.out.println( "Milímetros: " + milímetro );
		    
			}

	}