console.group("ECMAScript 6 Javascript");
// === Default Params (Parámetros por defecto) y Concatenación =====

//(A)>
// Antes >>
function newFunction(name, age) {
  var name = name || "Chris";
  var age = age || 29;
  console.log(name, age);
}
newFunction();
// ECMA6 = HOY>>
newFunctionTwo = (name = "Mau", age = 29, country = "México") => {
  console.log(name, age, country);
};
newFunctionTwo();
// Agregar uno nuevo>
newFunctionTwo(`Leopoldo`, 30, "CO");
newFunctionTwo(`Ella es:` + `Pammela`, 29, "CDMX");

// (B)>
// === Templates Literals ===
let hello = "Hello";
let world = "World";
let epicPhrase = `${hello} ${world}`;

console.log(epicPhrase);

console.groupEnd();
