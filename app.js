"use strict";
// 3.	Construir un programa TS que permita ingresar N números enteros a un vector, 
//      luego determine el primer número par de las posiciones pares
let tam = prompt("Ingrese el tamaño del vector: ");
let num1 = parseInt(tam);
let vector = new Array();
for (let i = 0; i < num1; i++) {
    let num2 = prompt("Ingrese el el numero: ");
    vector.push(parseInt(num2));
}
for (let i = 1; i < num1; i = i + 2) {
    console.log(i);
    if (vector[i] % 2 == 0) {
        prompt("El primer numero par de las posiciones pares es: " + vector[i]);
        break;
    }
}
