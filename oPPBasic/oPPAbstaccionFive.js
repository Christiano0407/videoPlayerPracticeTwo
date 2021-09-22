console.group("Abstraction");
// (1) Repaso Abstracción =================>
// Atraer / abstracción de datos para crear uno nuevo ===> clases, escuelas y cursos>>>>

// << Class or Prototype >>
// (C)
class AllClass {
  constructor({ name, all = [] }) {
    this.name = name;
    this.all = all;
  }
}

// (D)
const classOne = new AllClass({
  name: "Clases de HTML",
  all: [
    "Clase Básica de HTML",
    "Clase de HTML y el DOM",
    "Clase de HTML y etiquetas",
    "Clase de HTML y componentes",
  ],
});

const classTwo = new AllClass({
  name: "Clases de CSS",
  all: [
    "Clase básica de CSS",
    "Clase de CSS y componentes",
    "clases de CSS Grid y Flex",
  ],
});

const classThree = new AllClass({
  name: "Clases de Javascript",
  all: [
    "Clase de introducción a Javascript",
    "Clase de proyectos con Javascript",
    "Clase de Frameworks para Javascript",
  ],
});

const classFour = new AllClass({
  name: "Comprender el futuro con React Native, Python, Bases de Datos y, Ciberseguridad.",
  all: [
    "Clase introducción sobre ReactJs y React Native",
    "Clase sobre la IA, y Python",
    "Clase sobre ciberseguridad, y tu bases de datos",
  ],
});

// (C)
class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }
}

// (D)
const courseProgBasic = new Course({
  name: "Curso de Programación Básica",
  classes: [classOne],
});

const courseDefiniteProgBasic = new Course({
  name: "Curso Definitivo de HTML, CSS, Javascript y,  NodeJs",
  classes: [classOne, classTwo, classThree],
});

const coursePracticeProg = new Course({
  name: "Curso práctico de Programación Frontend",
  classes: [classOne, classTwo, classThree, classFour],
});

//(C) Agregar >
class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

// (D) Crear a partir de class >
const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML, Responsive y, CSS",
    courseProgBasic,
    coursePracticeProg,
  ],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    "Curso Básico de Bases de Datos",
    "Curso de Terminal para Bases de Datos",
    courseProgBasic,
    coursePracticeProg,
    courseDefiniteProgBasic,
  ],
});

const escuelaMarketing = new LearningPath({
  name: "Escuela de Marketing",
  courses: [
    "Curso de Marca Personal",
    "Curso de Básico de Marketing",
    courseProgBasic,
  ],
});

//(A) Principal>
class Student {
  constructor({
    name,
    email,
    userName,
    instagram,
    twitter,
    facebook,
    tiktok,
    youtube,
    approvedCourse = [],
    learningPath = [],
    allClass = [],
  }) {
    this.name = name;
    this.email = email;
    this.userName = userName;
    this.socialMedia = { instagram, twitter, facebook, tiktok, youtube };

    this.approvedCourse = Course;
    this.learningPath = learningPath;
    this.allClass = allClass;
  }
  // Methods / Métodos >>>
}

//>>>>> Instancias (Object o Array) >
// (B) nuevos>
const edith = new Student({
  name: "Edith",
  email: "edith@gmail.com",
  learningPath: [escuelaMarketing, escuelaWeb],
  approvedCourses: [courseProgBasic],
});

const chris = new Student({
  name: "Chris",
  userName: "Capitan",
  learningPath: [escuelaData, escuelaMarketing, escuelaWeb],
});

//>>>>> Invocar >
// > New students
console.log(edith);
console.log(chris);
//> escuelas
console.log(escuelaWeb);
console.log(escuelaData);
console.log(escuelaMarketing);
//> cursos
console.log(courseProgBasic);
console.log(courseDefiniteProgBasic);
console.log(coursePracticeProg);
//> classes
console.log(classOne);

console.groupEnd();
