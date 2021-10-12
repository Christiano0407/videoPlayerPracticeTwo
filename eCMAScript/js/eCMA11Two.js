console.group("CONTINUE ECMA11 / 2020 / Part Two / Caracteristics");
// (A)>
// Números enteros / BigIn (Method)>>> / Una "n", al final del numero>>>>>
//(1)

// (B)>
// Promise.allSettled>> Esperará a que todas sean resueltas >><
// (1)>>
const promiseOne = new Promise((resolve, reject) => reject("Reject"));
const promiseTwo = new Promise((resolve, reject) => resolve("Resolve"));
const promiseThree = new Promise((resolve, reject) => resolve("Resolve"));

//(2)>>
Promise.allSettled([promiseOne, promiseTwo, promiseThree])
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//(C)>
// Global this>> Acceder al valor global ==>> window(chrome)>>>>
//(1)>
//como: console.log(window);
console.log(globalThis);

// (D)>
// element Nulo ==> Ayuda a trabajar con los elementos nulos >>>
// String por default / Null
const foo = null ?? `Default String / Null`;
console.log(foo);

// (E)>
// Optional sheining (?)
// (1)>
// Trabajar los diferentes niveles de array / functions / prototype ..etc>>
const user = [];
console.log(user?.profile?.email);
