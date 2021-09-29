console.group("Deep Copy con Recursividad");
console.log("Deep Copy");

// Palabra reservada "Type Of">>>
// Funciones para saber si es un "Array", o un "Object">>
// Copias de Objetos y arrays = con Javascript = con fumciones recursivas = >primero, tenemos que validar ==>>
// Copiando el valor de nuestros Objetos y Arrays>>
// <<<<<<<<<< ================================================= >>>>>>>>>>>>
// (A)
//> Object
const obj1 = {
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
//> Array
const obj2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
// ===============================================================================>
// (2)
// Validar si es un Object>
function isObject(subject) {
  //typeOf = Tipo de valor>
  return typeof subject == "object";
}
// Validar si es un Array>
function isArray(subject) {
  return Array.isArray(subject);
}

// (1) Deep Copy >>
// subject = parameter, que vamos a validar>
function deepCopy(subject) {
  //Vamos a devolver >
  let copySubject;

  // (3) Validar Obj o Array >>
  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  // (4) Revalidar / conditional >>
  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  // (5)
  // Iteración y llamados recursivos >>
  for (key in subject) {
    const keyIsObject = isObject(subject[key]);
    //(true)
    if (keyIsObject) {
      // Valor recursivo>
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

//>>>
//console.log(obj1);
//console.log(obj2);

//console.log(deepCopy(obj1));
console.log(deepCopy(obj2));
console.groupEnd();
