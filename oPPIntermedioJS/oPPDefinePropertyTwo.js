console.group("Define Property");
// < Con esta propiedad se pueden definir nuevas propiedades a nuestro objeto >

const alma = {
  name: "Alma",
  age: 29,
  aproveCourses: [],

  // Method >
  addCourse(newCourse) {
    this.aproveCourses.push(newCourse);
  },
};
console.log(alma);
alma.addCourse("Course Javascript");
console.log(Object.getOwnPropertyDescriptors(alma));

// defineProperty >>>>>>>>>>
// > Examples >
// (1)
Object.defineProperty(alma, "girl", {
  value: "Girlfriend",
  enumerable: true,
  writable: true,
  configurable: true,
  // Puede ejecutar todo ====>>>>>>>>>>
});

// (2)
Object.defineProperty(alma, "friend", {
  value: "BestFriend",
  enumerable: false, // No aparecera en la lista de valores e clave >>>
  writable: true,
  configurable: true,
});

// (3)
Object.defineProperty(alma, "daughter", {
  value: "Daughter Girl",
  enumerable: true,
  writable: false, // No se puede sobrescribir >>>
  configurable: true,
});

// (4)
Object.defineProperty(alma, "working", {
  value: "CEO",
  enumerable: true,
  writable: true,
  configurable: false, // No se puede borrar >>>
});

// << ====================================================================================================== >>
// Recuerda que, ayuda al encapsulamiento >>
console.log(alma);
console.log(Object.keys(alma)); // La diferencia es que, no aparece "friend"
console.log(Object.getOwnPropertyNames(alma)); // "A quí sí" > La diferencia con "keys()"

// << =======================================================================>
// (A) << Seal and Freeze>>
// seal => Todas las propiedades en false> Se puedan borrar = configurable = false>>
console.log(Object.seal(alma));

// Freeze
// writable = false> No se puede sobrescribir> / configurable = false / Ambos
console.log(Object.freeze(alma));

console.log(Object.getOwnPropertyDescriptors(alma));
console.groupEnd();
