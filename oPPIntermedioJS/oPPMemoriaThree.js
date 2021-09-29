console.group("Memoria Js");
// <<< Shallow Copy >>>
// Métodos estáticos del objeto Object ==> Sirven para copiar Objetos>>>
//  ====== 1-Object assign / 2-Object create >>>
// (1)
const obj1 = {
  a: "a",
  b: "b",
  c: {
    c: "c",
    d: "d",
    e: "e",
  },
};

const obj2 = {};
// (2)
for (prop in obj1) {
  obj2[prop] = obj1[prop];
}
// (3)
// Object assign >
const obj3 = Object.assign({}, obj1);

// (4)
// Object Create >
// Guardado en memoria =>
const obj4 = Object.create(obj1);

//>>
console.log("obj1", obj1);
console.log("obj2", obj2);
console.log("obj3", obj3);
console.log("obj4", obj4);
console.groupEnd();
