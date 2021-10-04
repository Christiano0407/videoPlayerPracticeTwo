console.group("Abstracción con Objetos Literales y Deep Copy");

// <<<<<<<<<< ================================================= >>>>>>>>>>>>
// (A)
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

// Abstracción sin prototipos ==>
// (1 / 6)
const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};
//==>>
const luisa = deepCopy(studentBase);
const rebec = deepCopy(studentBase);
// 1)
//luisa["name"] = "Luisa";
luisa.email = "Lui@gmail.com";
luisa.socialMedia = { instagram: "@Luigi", twitter: "@Luisa91" };

rebec.name = "Rebeca Landa";

//2)
Object.defineProperty(luisa, "name", {
  value: "Luisa Sánchez",
  enumerable: true, //(Yes)
  writable: false,
  configurable: false, //(No)
});
// == Con seal ya no es necesario defineProperty ==
//No lo podemos borrar / Ningúna propiedad se puede borrar =>
Object.seal(rebec);
Object.freeze(rebec);
console.log(Object.isSealed(rebec)); // Verificar si todas las propiedades de configurable = están protegidas == true = protegido <<<<
console.log(Object.isFrozen(rebec)); // Verificar si todas las propiedades de configurable / writable = están protegidas == true = protegido <<<<

//>>> Call / Llamar >
//console.log(studentBase);
console.log(luisa);
console.log(rebec);

console.groupEnd();
