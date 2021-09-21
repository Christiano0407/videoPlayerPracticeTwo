console.group("Class in Javascript");
// >>>> Clases / class ======================== >>>>>
// JS > Está basado en prototypes o prototipos >>>>>
// Azúcar sintáctica ==== Una forma más fácil de hacer >>>>>>

// Palabra reservada => Class>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ROOR > Retorno y llamar => constructor>
// 1)
class Student {
  constructor({ name, age, approvedCourse }) {
    this.name = name;
    this.age = age;
    this.approvedCourse = approvedCourse;
  }
  //methods >>>>>
  coursesNewApproved(newCourse) {
    this.approvedCourse.push(newCourse);
  }
}
//>>>>>>
// 2)
const alma = new Student({
  name: "Alma",
  age: 30,
  approvedCourse: ["Course Material Design", "Course Basic Programming"],
});
//>>
alma.coursesNewApproved = "Course GitHub";

//>>>>>
console.log(alma);

console.groupEnd();
