console.group("Creando Métodos estáticos en Javascript");
// >>> =========================================================================================================== <<<<
// Object>>
/* function isObject(subject) { */
/*   return typeof subject == "object"; */
/* } */
// Array>>
/* function isArray(subject) { */
/*   return Array.isArray(subject); */
/* } */
//> deepCopy >>> Comprobar si es un Object o un Array>>
/* function deepCopy(subject) { */
/*   let copySubject; */
/*  */
/*   const subjectIsObject = isObject(subject); */
/*   const subjectIsArray = isArray(subject); */
/*  */
/*   if (subjectIsArray) { */
/*     copySubject = []; */
/*   } else if (subjectIsObject) { */
/*     copySubject = {}; */
/*   } else { */
/*     return subject; */
/*   } */
/*  */
/*   for (key in subject) { */
/*     const keyIsObject = isObject(subject[key]); */
/*  */
/*     if (keyIsObject) { */
/*       copySubject[key] = deepCopy(subject[key]); */
/*     } else { */
/*       if (subjectIsArray) { */
/*         copySubject.push(subject[key]); */
/*       } else { */
/*         copySubject[key] = subject[key]; */
/*       } */
/*     } */
/*   } */
/*  */
/*   return copySubject; */
/* } */
// Four >>
class SuperObject {
  //(2)
  /* static isObject(subject) { */
  /*   return typeof subject == "object"; */
  /* } */
  static isObject = function (subject) {
    if (Array.isArray(subject)) {
      return false;
    }
    return typeof subject == "object";
  };
  // Método estático>
  //(1)
  static deepCopy(subject) {
    let copySubject;
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }
    for (key in subject) {
      const keyIsObject = isObject(subject[key]);
      if (keyIsObject) {
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
}

//Five >>
// Para que no tome los arrays como objetos >>>
// Es como agregar un Prototype pero, directo a "SuperObject" => Ya no como un método (This) que todos podrían tomar=> único=>>
/* SuperObject.isObject = function (subject) { */
/*   if (Array.isArray(subject)) { */
/*     return false; */
/*   } */
/*   return typeof subject == "object"; */
/* }; */
// Three>>
function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}
// Two>>
function LearningPath({ name = requiredParam("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;
}
// One>>
function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };
  // (1)
  const private = {
    _learningPaths: [],
  };
  // (B)
  Object.defineProperty(this, "learningPaths", {
    get() {
      return private["_learningPaths"];
    },
    set(newLp) {
      if (newLp instanceof LearningPath) {
        private["_learningPaths"].push(newLp);
      } else {
        console.warn(
          "Alguno de los LPs no es una instancia dell prototipo LearningPath"
        );
      }
    },
  });
  // (C)
  for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex];
  }
}

//>> Example:
const people = ["Mau", "Luisa", "Alejandra", "Pamela", "Natasha", "Leopoldo"];

const human = {
  name: "Luisa",
  age: 31,
  country: "City Mexico",
};

// >>>>>>>> LearningPaths >>>>>>>>>>>>>>
const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
escuelaWeb.courses = [
  "Basic HTML",
  "Basic CSS",
  "Basic CSS GRID",
  "Basic Javascript",
];
const escuelaData = new LearningPath({ name: "Escuela de Data Science" });
//>>>>>>>>>>> New Students >>>>>>>>>>>>>>>>>>>>>>>>>>>
const juan = new Student({
  email: "juanito@frijoles.co",
  name: "Juanito",
  learningPaths: [escuelaWeb, escuelaData],
});

const jennifer = new Student({
  email: "juanito@frijoles.co",
  name: "Juanito",
  learningPaths: [escuelaWeb, escuelaData],
});

//const copia = SuperObject.deepCopy({ a: "a", b: "b", c: "c" });

//>Pruebas>>
//const person = new superObject(escuelaWeb);
//const persons = new Student({});
/* const humans = new superObject(human); */

// >>>>>>>>>>>>>>>>>>>>>
console.log(juan);
//superObject.deepCopy({ juan });
console.log(SuperObject.isObject({ juan }));
console.log(jennifer);
console.log(SuperObject.isObject(people)); // False === Array>>
console.log(SuperObject.isObject(human)); // True === Object>>
//console.log(copia);
//>
//console.log(person);
//console.log(persons);
//console.log(humans);

console.groupEnd();
