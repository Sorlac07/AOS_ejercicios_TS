//1.	Diseñar un programa TS que permita calcular la suma de los primeros N términos de la siguiente serie: 
//   	1  - 1/3 +	1/5	-	1/7	+	1/9	-	…

let number: any = prompt("Ingrese el numero de terminos a sumar: ");
let number1: number = parseInt(number);
let suma: number = 0;

for (let i = 0; i < number; i++) {
    suma += (-1) ** (i) / (1 + 2 * i);
}
prompt("La suma es",suma.toString());
