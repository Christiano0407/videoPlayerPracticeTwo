console.group("Duck Typing con Javascript");
// (B)
// Invocar un error=> Cuando necesitamos Datos Obligatorios ==>
function requiredParameter(param) {
  throw new Error(param + " Es obligatorio");
}

//(I) Duck Typing
function createLearningPaths({
  name = requiredParameter("name"),
  courses = [],
} = {}) {
  const private = {
    _name: name,
    _courses: courses,
  };

  const public = {
    // Methods>
    get name() {
      return private["_name"];
    },

    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.error(
          "Es necesario que cumplas con el requerimiento mencionado"
        );
      }
    },
    // (J)
    get courses() {
      return private("_courses");
    },
  };

  return public;
}

// (A)
function createStudent({
  // Agregamos unas llaves para que sea un Object>>
  // PARÁMETROS =
  // Mandar argumentos (= []) = Cuando no mandamos datos >>
  // = Decirle a name y email, son obligatorios / llamar a la función >>
  name = requiredParameter("name"),
  email = requiredParameter("email"),
  twitter,
  instagram,
  facebook,
  tiktok,
  youtube,
  linkedin,
  twitch,
  approveCourses = [],
  learningPaths = [],
  // = {} = Todo lo que no tiene un argumento, es un Objeto Vacío.
} = {}) {
  // (C)
  const private = {
    _name: name,
    _learningPaths: learningPaths,
  };

  const public = {
    email,
    socialMedia: {
      twitter,
      instagram,
      facebook,
      tiktok,
      linkedin,
      youtube,
      twitch,
    },
    approveCourses,
    //Method >>
    // (D)
    //(G) Getters and Setters = remplazan a read y change>>>
    get name() {
      return private["_name"];
    },
    set name(newName) {
      // Validación >
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.error("Tu nombre debe de tener al menos un carácter");
      }
    },
    // (K) Duck Typing
    get learningPaths() {
      return private["_learningPaths"];
    },
    set learningPaths(newLp) {
      // Validación >
      if (!newLp.name) {
        console.error("Tu Learning Path, no tiene nombre");
        return;
      }

      if (!isArray.courses) {
        console.error("Tu Learning Paths, no existe");
        return;
      }

      if (!isArray(newLp.courses)) {
        console.error("Tu Learning Path, no tiene Cursos");
        return;
      }

      private["_learningPaths"].push(newLp);
    },
  };
  // (E) Proteger datos >>

  return public;
}

// >>>>>>
const jennifer = createStudent({
  name: "Jennifer",
  email: "Jenny@gmail.com",
});

const katy = createStudent({
  name: "Katy",
  email: "Katy@gmail.com",
});

const natalia = createStudent({
  name: "Natalia",
  email: "naty@gmail.com",
  learningPaths: {
    name: "Escuela de Desarrollo Web",
    courses: ["Curso Básico de Programación"],
  },
});

// (H)
//>>>> Object / Properties / Methods>
Object.seal(jennifer);
Object.freeze(jennifer);
console.log(Object.isSealed(jennifer));
Object.isFrozen(jennifer);
console.log(Object.getOwnPropertyDescriptors(jennifer));
// >> getOwn => su Get: value / set:writable <<

//>>>>>
jennifer.name = "Lorena Cantú";
console.log(jennifer.name);
console.log(jennifer);
//>
katy.name = "Katy Perry";
console.log(katy.name);
console.log(katy);

//>>
//console.log(createLearningPaths);
/* natalia.learningPaths.name = "Nueva Ruta de learnign Paths"; */
console.log(natalia.learningPaths);
console.log(natalia);

console.groupEnd();
