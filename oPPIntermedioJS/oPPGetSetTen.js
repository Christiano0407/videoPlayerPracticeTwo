console.group("Getters and Setters");

// (B)
// Invocar un error=> Cuando necesitamos Datos Obligatorios ==>
function requiredParameter(param) {
  throw new Error(param + " Es obligatorio");
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
    learningPaths,
    //Method >>
    // (D)
    readName() {
      return private["_name"];
    },
    changeName(newName) {
      private["_name"] = newName;
    },
  };
  // (E)
  Object.defineProperty(public, "readName", {
    writable: false, // evitar editar>
    configurable: false, // Evitar Borrar>
  });
  Object.defineProperty(public, "changeName", {
    writable: false,
    configurable: false,
  });

  return public;
}

// >>>>>>
const jennifer = createStudent({
  name: "Jennifer",
  email: "Jenny@gmail.com",
});

//>>
console.log(jennifer.readName());
jennifer.changeName("Lorena");
console.log(jennifer.readName());
console.log(jennifer);

// Recurda el POLIMORFISMO ===>>>>>

console.groupEnd();
