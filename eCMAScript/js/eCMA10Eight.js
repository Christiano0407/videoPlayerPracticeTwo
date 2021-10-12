console.group("ECMAScript 10");
// Acceder a la matriz >
// (A)>
// Array.flat>>
//(1)
let arrayOne = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10, [11, 12, 13, 14, 15]]];
console.log(arrayOne.flat(1));

//(B)>
//Flatmap>> Method>
//(1)
let arrayTwo = [
  1,
  2,
  3,
  4,
  5,
  [6, 7, 8, 9, 10, [11, 12, 13, 14, 15, [16, 17]]],
];
console.log(arrayTwo.flatMap((value) => [value, value * 2]));

//(C)
// Eliminar espacios en blanco>>
//Method tringStart>>
let Hello = `      Girl`;
console.log(Hello.trimStart());
// .trimEnd(borrar el espacio final)>>>

//(D)
// Optinal cash
try {
} catch {
  error;
}

//(E)
// fromEntries > Un Array en Object>> / Object>>>
// Clave / valor de un Objeto>>Transformar a Objeto>>>
let entries = [
  ["name", "Luisa"],
  ["city", "CDMX"],
];
console.log(Object.fromEntries(entries));

//(F)
// Acceder a una descripción >>>
let mySymbol = `White Tiger`;
let yourSymbol = Symbol(mySymbol);
console.log(yourSymbol.description);

console.groupEnd();
