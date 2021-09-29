console.group("Recursividad");
// RECURSIVIDAD ==> Funciones recursivas >>>
// =============== (Parámetro)
function recursiva(numerito) {
  console.log(numerito);
  if (numerito < 5) {
    return recursiva(numerito + 1);
  } else {
    return 5; // Siempre tenemos que poner la "Validación", para que, no se "crashe" el sistema =======<<
  }
}
// También puedes poner Métodos >>

//>>>
//console.log(recursiva(1));

// ============================================================================================================================= >>>>>
// (1)
const numeros = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 30, 40, 50, 100,
  200,
];

const persons = ["Mau", "Pam", "Zad", "Al", "Rod", "Lor"];
//let numero = 0;
// (2)
/* for (let index = 0; index < numeros.length; index++) { */
/*   numero = numeros[index]; */
/*   console.log({ index, numero }); */
/* } */

// (3) Función Recursiva ====>>
function recursiva(numbersArray) {
  // Validación / Codicional
  if (numbersArray.length != 0) {
    const firstNum = numbersArray[0];
    console.log(firstNum);
    //Method > Validación >>
    numbersArray.shift();

    recursiva(numbersArray);
  }
}
//>>>>
console.log(numeros);
// (4)
recursiva(numeros);
recursiva(persons);

// recursiva >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Son mas cercanos a la descripción matemática.
// Generalmente mas fáciles de analizar
// Se adaptan mejor a las estructuras de datos recursivas.
// Los algoritmos recursivos ofrecen soluciones estructuradas, modulares y elegantemente simples.

// << Factible de utilizar recursividad >>
// Para simplificar el código.
// Cuando la estructura de datos es recursiva ejemplo : árboles.

// << No factible utilizar recursividad >>
// Cuando los métodos usen arreglos largos.
// Cuando el método cambia de manera impredecible de campos.
// Cuando las iteraciones sean la mejor opción.

console.groupEnd();
