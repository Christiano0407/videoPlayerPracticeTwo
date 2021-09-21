console.group("Abstraction");
// Repaso Abstracción =================>
// Atraer / abstracción de datos para crear uno nuevo ===>

// << Class or Prototype >>

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
});

const courseDefiniteProgBasic = new Course({
  name: "Curso Definitivo de HTML, CSS, Javascript y,  NodeJs",
});

const coursePracticeProg = new Course({
  name: "Curso práctico de Programación Frontend",
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
  }) {
    this.name = name;
    this.email = email;
    this.userName = userName;
    this.socialMedia = { instagram, twitter, facebook, tiktok, youtube };

    this.approvedCourse = Course;
    this.learningPath = learningPath;
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

console.groupEnd();
