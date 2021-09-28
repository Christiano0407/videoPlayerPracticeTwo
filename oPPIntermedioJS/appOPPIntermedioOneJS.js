console.group("opp Intermedio");
// Palabra reservada "Static", para atributos y métodos estáticos ===>>

// < Object >
const Objetito = {
  name: "Pammela",
  email: "pam@gmail.com",
  age: 30,
};

console.log(Object.keys(Objetito));
// >>>> More Property / Methos >>>>
// < getOwnPropertyNames >
// < entries >
// < getOwnPropertyDescriptors >
//===============================================================================>

// << Método Estático del Prototipo Object >>

const alma = {
  name: "Alma",
  age: 29,
  aproveCourses: [],

  // Method >
  addCourse(newCourse) {
    console.log("this", this);
    this.aproveCourses.push(newCourse);
  },
};
console.log(alma);
alma.addCourse("Course Javascript");
alma.addCourse("Course React Js");

//> Object> / keys>>
console.log(Object.keys(alma));
//> getOwnPropertyNames >
console.log(Object.getOwnPropertyNames(alma));
//> entries > Convierte los Objetos a Arrays>>
console.log(Object.entries(alma));
// getOwnPropertyDescriptor> Objeto con propiedades / atributos => alma>
console.log(Object.getOwnPropertyDescriptors(alma));

console.groupEnd();
