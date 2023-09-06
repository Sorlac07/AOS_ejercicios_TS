// 2.	Diseñar un programa TS que permita calcular la suma de los primeros N términos de la siguiente serie: 
// 64/21		+	62/24		+	60/27		+	58/30		+	…

let number: any = prompt("Ingrese el numero de terminos a sumar: ");
let number1: number = parseInt(number);
let suma: number = 0;

for (let i = 0; i < number1; i++) {
    suma = + suma + (64 - (i * 2)) / (21 + (i * 3));
}
prompt("La suma es",suma.toString());
