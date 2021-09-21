console.group("Ventajas OPP");
// <<<<<<< Diferencias >>>>>>>>>>>>>>
// A)
// Instancia Literal de Objeto / Básico / Literales  ===== >>>>>>
const juan1 = {
  name: "Juan DC",
  userName: "Juandc",
  points: 100,
  socialMedia: {
    twitter: "JuanTW",
    instagram: "JuanIns",
    facebook: undefined,
  },
  approvedCourse: [
    "Curso Definitivo de HTML, y CSS",
    "Curso práctico de HTML, CSS GRID y Javascript",
  ],
  //Un array de Objetos >> rutas de Aprendizaje>>>
  learningPath: [
    {
      name: "Escuela de Desarrollo Web",
      courses: [
        "Curso Definitivo de HTML, y CSS",
        "Curso práctico de HTML, CSS GRID y Javascript",
        "Curso de Git y GitHub",
      ],
    },
    {
      name: "Escuela de VideoJuegos",
      courses: [
        "Curso Básico de Videojuegos",
        "Curso de Real Engine",
        "Curso Básicpo de C++",
      ],
    },
  ],
};

//>> 2==)
const miguel1 = {
  name: "Miguel One",
  userName: "MiguelOne",
  points: 500,
  socialMedia: {
    twitter: "MiguelTW",
    instagram: undefined,
    facebook: undefined,
  },
  approvedCourse: [
    "Curso Definitivo de Bases de Datos",
    "Curso práctico de Linux",
    "Curso Básico de Terminal de Comandos",
  ],
  //Un array de Objetos >> rutas de Aprendizaje>>>
  learningPath: [
    {
      name: "Escuela de Desarrollo Web",
      courses: [
        "Curso Definitivo de HTML, y CSS",
        "Curso práctico de HTML, CSS GRID y Javascript",
        "Curso de Git y GitHub",
      ],
    },
    {
      name: "Escuela de VideoJuegos",
      courses: [
        "Curso Básico de Videojuegos",
        "Curso de Real Engine",
        "Curso Básicpo de C++",
      ],
    },
  ],
};

//>>>>>>
console.log(juan1);
console.log(miguel1);
// ===================> >>> Ésta forma no es escalable = (A)

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ====================== >>>>>>>>>>>>>>>>>>>>

// <<<<< Programación Orientada a Objetos >>>>>>>>>>>>>>
//B)
// Instancias de Objeto / Class and Prototype ==== >>>>>>>

// (B)
class Student {
  constructor({
    name,
    email,
    userName,
    instagram,
    twitter = undefined,
    facebook = undefined,
    tiktok = undefined,
    approvedCourses = [],
    learningPath = [],
  }) {
    this.name = name;
    this.email = email;
    this.userName = userName;
    this.socialMedia = { instagram, twitter, facebook, tiktok };
    this.approvedCourse = [];
    this.learningPath = [];
  }
  // Methods ==>
  /* socialRedMedia(newSocial) { */
  /*   this.socialMedia.push(newSocial); */
  /* } */
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 1era Instancia de propiedad Object>
const pammela = new Student({
  name: "Pammela",
  email: "pammela@girl.com",
  userName: "Pamm",
  instagram: "Pam@photo.com",
});
// eda instancias>
const jennifer = new Student({
  name: "Jennifer",
  userName: "Jenny",
});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//pammela.socialRedMedia = "Instagram";
console.log(pammela);
console.log(jennifer);

console.groupEnd();
