console.group("ECMA Script 6");
// ==> >> MODULES JAVASCRIPT>>
// =====================================================================================>>>

// (H)
//Polimorfismo >===>
import { Comment } from "./oPPPolimorfismoTen.js";

// (f)
// MODULES>>>
// <== importar ==>
import { VideoClass } from "../oPPBasic/oppVideoModulesEight.js";

//(G)
// Llamar a esa class>>

const peopleVideo = new VideoClass({
  name: "Javascript Modules Video",
  videoID: "0011223344556677",
});

// > Llamar a funciones de reproducir.
/* peopleVideo.reproducir(); */
/* peopleVideo.pause(); */

// (c)
class AllClass {
  constructor({ name, all = [] }) {
    this.name = name;
    this.all = all;
  }
  // (E)
  // Getters and Setters son Métodos ==>
  get name() {
    return this._name;
  }

  set name(newNameClass) {
    if (newNameClass === "Clases Inicio Frontend") {
      console.warn("Error Web...no!");
    } else {
      this._name = newNameClass;
    }
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

// (C) 7 (G) = Agregamos: isFree y lang ==>
class Course {
  constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }
  //(E)
  // Condición al Acceso >>
  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName === "Curso Inicio Programación Básica") {
      console.error("Web...No!");
    } else {
      this._name = newName;
    }
  }

  // Method construido ===>
}

// (D)
const courseProgBasic = new Course({
  name: "Curso de Programación Básica",
  classes: [classOne],
  // (G)
  isFree: true,
});

const courseDefiniteProgBasic = new Course({
  name: "Curso Definitivo de HTML, CSS, Javascript y,  NodeJs",
  classes: [classOne, classTwo, classThree],
});

const coursePracticeProg = new Course({
  name: "Curso práctico de Programación Frontend",
  classes: [classOne, classTwo, classThree, classFour],
  // (G)
  lang: "english",
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

//(A) Principal> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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

// >>> Herencia <<<
// (G)

/* import { FreeStudent } from "../oPPBasic/oPPHerenciaNine.js"; */
/*  */
/* import { BasicStudent } from "../oPPBasic/oPPHerenciaNine.js"; */
/*  */
/* import { ExpertStudent } from "../oPPBasic/oPPHerenciaNine.js"; */

// Nuevas Instancias de OBJETO >>>>> No sólo va existir Student (madre)>>>>>>>>
class FreeStudent extends Student {
  constructor(props) {
    // Validar
    super(props); // Referenciar al constructor de nuestra "Madre >> Student" ==>
  }
  // methods ==>
  approved(newCourse) {
    // Validar >>
    // propiedad => isFree>

    if (newCourse.isFree) {
      this.approvedCourse.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos mucho, " +
          this.name +
          ", no puedes acceder a éste curso. Sólo es para planes Expert y Plus"
      );
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
    // props => parámetros >
  }
  // Methods => Nuevo método >
  approved(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourse.push(newCourse);
    } else {
      console.warn("Lo siento" + this.name + " Sólo es para Plus");
    }
  }
}
class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
  // Methods =>
  approved(newCourse) {
    this.approvedCourse.push(newCourse);
  }
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

// Nuevas Instancias ==>>
// (G)

const alejandra = new FreeStudent({
  name: "Alejandra",
  email: "edith@gmail.com",
  userName: "Alexa",
  learningPath: [escuelaMarketing, escuelaWeb],
});

const rodrigo = new ExpertStudent({
  name: "Rodrigo",
  email: "Rodri@gmail.com",
  userName: "Guero",
  learningPath: [escuelaData, escuelaMarketing, escuelaWeb],
});

//>>>>> Invocar >
// > New students>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log(edith);
console.log(chris);
//> escuelas >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log(escuelaWeb);
console.log(escuelaData);
console.log(escuelaMarketing);
//> cursos >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log(courseProgBasic);
console.log(courseDefiniteProgBasic);
console.log(coursePracticeProg);
//> classes >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log(classTwo);
// > Getters y Setters >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//courseProgBasic.name = "Curso Inicio Programación Básica";
//courseProgBasic.name = "Curso Frontend";
console.log(courseProgBasic);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//classOne.name = "Clases Inicio Frontend";
console.log(classOne);
//> Modules>> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
peopleVideo.reproducir();
peopleVideo.pause();
console.log(peopleVideo);
// >> HERENCIAS ====================================================>
console.log(FreeStudent);
console.log(alejandra);
alejandra.approvedCourse = "CourseProgBasic";
console.log(alejandra.approvedCourse);

console.log(rodrigo);
rodrigo.approvedCourse = "coursePracticeProg";
// =======================================================================>
// POLIMORFISMO >>>
console.log(Comment);

console.groupEnd();
