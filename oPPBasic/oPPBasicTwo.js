console.group("Objects");
// Object  ===>>>
// 1) ================================================================== >>>
function Student(name, age, points, courseOk) {
  this.name = name;
  this.age = age;
  this.points = points;
  this.courseOk = courseOk;
  // methods One>
}
// Method Two for Prototype>>>>>
Student.prototype.approvedCourses = function (newCourse) {
  this.courseOk.push(newCourse);
};

//> Palabra reservada "NEW">>>
const luisa = new Student("Luisa", 31, 750, "Course Basic Programming");
const natalia = new Student(
  "Natalia",
  30,
  2000,
  "Course CSS GRID and Javascript"
);

// Estancia de Objeto => STUDENT>
console.log(luisa);
console.log(natalia);

// 29 <<<<<<< ========================================================== >>>>>>>>>>>>>>>>>>>
const liz = {
  name: "Lizbeth",
  age: 26,
  cursosAprobados: [
    "Curso Definitivo de HTML Y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  // crear un Method>>
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};
// Method > Agregar un curso
//liz.cursosAprobados.push("Curso de Javascript");

console.log(liz);
liz.aprobarCurso("Curso de Javascript OPP");
liz.aprobarCurso("Curso de CSS GRID");
console.log(liz.cursosAprobados[0]);

// 3) <<<<<<<<<<<< ======================================================================== >>>>>>>>>>>>>>>

console.groupEnd();
