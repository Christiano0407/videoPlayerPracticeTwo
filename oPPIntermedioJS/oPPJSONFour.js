console.group("JSON");
// JSON => parse / stringify ==>>
// ==== stringify ==> Conviertes un Objeto en String <<<
// ==== parse ==> Convierte un string en un Objeto (Object) <<<
// >>>> Tip: No saben trabajar con métodos / functiones <<<<

//>>

const objPlus = {
  a: "a",
  b: "b",
  c: {
    c: "c",
    d: "d",
    e: {
      e: "e",
    },
  },
};
// >>> Convertir a String
const objComplex = JSON.stringify(objPlus);
// >>> Convertir a objeto / Object
const convertObj = JSON.parse(objComplex);
// >>>
console.log("Obj", objPlus);
console.log("string", objComplex);
console.log("object", convertObj);

console.groupEnd();
