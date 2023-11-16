package Aula02;

import java.util.Scanner;

public class Exercicio03 {
		
		public static void main (String[] args) {
			// TODO Auto-generated method stub
			
			
			// Declaraçao
		int num;
		
		Scanner sc = new Scanner (System.in);
		System.out.println( "Digite um número para obter a tabuada! " );
		num = sc.nextInt();
		sc.close();
		
		System.out.println(num + " x 1 = " + num*1 );
		System.out.println(num + " x 2 = " + num*2 );
		System.out.println(num + " x 3 = " + num*3 );
		System.out.println(num + " x 4 = " + num*4 );
		System.out.println(num + " x 5 = " + num*5 );
		System.out.println(num + " x 6 = " + num*6 );
		System.out.println(num + " x 7 = " + num*7 );
		System.out.println(num + " x 8 = " + num*8 );
		System.out.println(num + " x 9 = " + num*9 );
		System.out.println(num + " x 10 = " + num*10 );
		
		}

}

