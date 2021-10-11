console.group("ECMAScript 7");
// Nuevo >>
// (A) include>>>
const numbers = [1, 5, 7, 10, 15, 18, 20];

const playNum = () => {
  if (numbers.includes(5)) {
    console.log("Exactamente incluye un 5");
  } else {
    console.log("Lo siento");
  }
};

playNum();

//(B) Potencia (**)>>>
let base = 4;
let exponent = 3;
let results = base ** exponent;

console.log(results); // =64

console.groupEnd();
