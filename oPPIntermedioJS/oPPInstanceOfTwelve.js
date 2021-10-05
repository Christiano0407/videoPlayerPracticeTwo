console.log("Instance Of | Javascript Vanilla | OPP");
// Recuerda: Prototype / This y New << / Los carácteres principales>>
// >>> =========================================================================================================== <<<
// (B)
// Invocar un error=> Cuando necesitamos Datos Obligatorios ==>
function requiredParameter(param) {
  throw new Error(param + " Es obligatorio");
}

// ARRAY>
function isArray(subject) {
  return Array.isArray(subject);
}
// Object>
function isObject(subject) {
  //typeOf = Tipo de valor>
  return typeof subject == "object";
}

//(I) Duck Typing
function LearningPath({ name = requiredParameter("name"), courses = [] } = {}) {
  //(J) Parameters / prototype>>
  this.name = name;
  this.courses = courses;
}

// (A)
function Student({
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
  //(J)
  this.name = name;
  this.email = email;
  (this.socialMedia = {
    twitter,
    instagram,
    tiktok,
    facebook,
    youtube,
    linkedin,
    twitch,
  }),
    (this.approveCourses = approveCourses);
  // (K)

  /*  if (!isArray(learningPaths)) { */
  /*    console.error("LearningPaths, no es un Array"); */
  /*    return; */
  /*  } */
  // Tenemos que validar >>>
  if (isArray(learningPaths)) {
    this.learningPaths = [];

    for (LearningPathIndex in learningPaths) {
      console.log(learningPaths[LearningPathIndex]);
      console.log(learningPaths[LearningPathIndex] instanceof LearningPath);

      if (learningPaths[LearningPathIndex] instanceof LearningPath) {
        this.learningPaths.push(learningPaths[LearningPathIndex]);
      }
    }
  }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//>> LearningPath
const webSchool = new LearningPath({
  name: "webDesignSystemSchool",
  courses: [],
});
webSchool.courses = [
  "Course Web System Design",
  "Course CSS GRID",
  "Course Design with Adobe",
];

const schoolWebDesign = new LearningPath({
  name: "School Web Design",
  courses: [],
});
schoolWebDesign.courses = [
  "Course Figma",
  "Course AdobeXD",
  "Course Design System",
  "Course Layout System",
];

const schoolIA = new LearningPath({
  name: "School Artificial Intelligence",
  courses: [],
});

schoolIA.courses = [
  "Course Basic Paython",
  "Course Redes Neurológicas",
  "Course Python avanzado",
];
//>>>
const jennifer = new Student({
  name: "Jennifer",
  email: "Jenny@gmail.com",
  learningPaths: [schoolIA],
});

const katy = new Student({
  name: "Katy",
  email: "Katy@gmail.com",
  learningPaths: [webSchool, schoolWebDesign],
});

// >>>>> Nuevo protoipo (Jennifer) es una instancia (instanceOf) del prototype Student = Validación <<<
console.log(jennifer instanceof Student);
console.log(jennifer);
//>
console.log(katy);
//>>
console.log(webSchool);
console.log(schoolWebDesign);

console.groupEnd();
