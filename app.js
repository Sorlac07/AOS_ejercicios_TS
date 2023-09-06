"use strict";
// 4.	Guardar 5 números en un vector tal como A y 9 números en otro vector tal como B,
//  luego trasladar el último número de A al final de B.
let A = new Array(3, 5, 7, 9, 11);
let B = new Array(53, 23, 12, 65, 34, 76, 98, 45, 67);
//before 
prompt("El vector A es: " + A + "\nEl vector B es: " + B);
B.push(A.pop()); // ! = asegura que no sea null
// after
prompt("El vector A es: " + A + "\nEl vector B es: " + B);
