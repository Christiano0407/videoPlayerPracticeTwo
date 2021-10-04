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
    /* readName() { */
    /*   return private["_name"]; */
    /* }, */
    /* changeName(newName) { */
    /*   private["_name"] = newName; */
    /* }, */

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
  };
  // (E) Proteger datos >>
  /* Object.defineProperty(public, "readName", { */
  /*   writable: false, // evitar editar> */
  /*   configurable: false, // Evitar Borrar> */
  /* }); */
  /*  Object.defineProperty(public, "changeName", { */
  /*    writable: false, */
  /*    configurable: false, */
  /*  }); */

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

// Recurda el POLIMORFISMO ===>>>>>

console.groupEnd();
