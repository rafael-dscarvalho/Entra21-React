package Aula05;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio10{

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		int num = 0;
		int maior = 0;
		int menor = 0;

		for(int repetir = 0;  repetir < 15; repetir++){
			
			System.out.println("Insira um valor:");
			num = sc.nextInt();
			
			if(repetir == 0){
				
				maior = num;
				menor = num;
			}
			
			else if(num > maior){
				
				maior = num;
			}
			
			else if(num < menor){
				
				menor = num;
			}
		}
		
		System.out.print("Maior: "+ maior +". Menor: "+ menor);

	}
}