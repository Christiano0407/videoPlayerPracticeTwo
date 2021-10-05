console.group("Atributos y Métodos Privados en Prototipos");
// Proteger todos mis datos ==> LearningPaths>>><
// Getters y Setters>>
// >>> =========================================================================================================== <<<<<<
// Object>>
function isObject(subject) {
  return typeof subject == "object";
}
// Array>>
function isArray(subject) {
  return Array.isArray(subject);
}
//> deepCopy >>>
function deepCopy(subject) {
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

// >>>>>>>>>>>>>>>>>>>>>
console.log(juan);
console.log(jennifer);
console.groupEnd();
