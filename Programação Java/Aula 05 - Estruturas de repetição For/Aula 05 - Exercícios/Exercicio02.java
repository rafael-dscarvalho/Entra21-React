package Aula05;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio02 {


	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		Locale.setDefault(Locale.US);

		
		
		int num= 0;
		int alcool = 0;
		int gasolina = 0;
		int diesel = 0;
      

		Scanner sc = new Scanner(System.in); // lê
		
		 do {
         	System.out.println( "Opção 1 - Alcool; Opção 2 - Gasolina; Opção 3 - Diesel; Opção 4 - Fim" ); 
 			num = sc.nextInt();
 			
 			if (num == 1) {
				alcool = alcool +1;
			}

			else if (num == 2) {
				gasolina = gasolina +1;

			}

			else if (num == 3) {
				diesel = diesel +1;
			}

 			
         }while ( num != 4 );
		 System.out.println("MUITO OBRIGADO!");
			System.out.println("Álcool: " + alcool);
			System.out.println("Gasolina: " + gasolina);
			System.out.println("Diesel: " + diesel);
			sc.close();
}


}