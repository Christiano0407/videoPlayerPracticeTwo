console.group("Objects");
// Object  ===>>>

function Student(name, age, points) {
  this.name = name;
  this.age = age;
  this.points = points;
}
//> Palabra reservada "NEW">>>
const luisa = new Student("Luisa", 31, 750);
// Estancia de Objeto => STUDENT>
console.log(luisa);

console.groupEnd();
