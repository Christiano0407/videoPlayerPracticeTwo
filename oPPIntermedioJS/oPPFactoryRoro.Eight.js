console.group("Javascript / Factory / RORO");
// << Patrones elegantes en Javascript / RORO >>
// RORO => Recibir Objeto y Devolver un Objeto >>
// >> ========================================================================================= <<

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
  return {
    name,
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
  };
}

// >>>>>>
// Creando varios Ususarios / Varios Objetos y Arrays >
const paola = createStudent({
  // Agregamos una llave para que se retorne sin necesidad de estar en orden ==>>
  name: "Paola Velázquez",
  email: "Pao@gmail.com",
  twitter: "@Pao",
  instagram: "@paola_nerd",
  youtube: "PaolaGirlTech",
  approveCourses: ["Basic Devop", "Basic Javascript"],
});
// Marcar el error => Necesario Name y email =>
const mau = createStudent({
  name: "Mauricio",
  email: "Mau@gmail.com",
});
// Object Property >>
Object.seal(mau);
Object.freeze(mau);
Object.isSealed(mau);
Object.isFrozen(mau);

// ==>
console.log(paola);
console.log(mau);
console.groupEnd();
