console.group("ECMAScript 9");
// (A)>
// Operador de reposo >>
//(1)
const obj1 = {
  name: "Alma",
  age: 29,
  city: "CDMX",
};
//(2)
let { city, ...all } = obj1;
let { name, age } = obj1;
//(3)
console.log(city, all);
console.log(name, age);

// (b)
// Operador de Propagación ==>> Meter un Objeto dentro de otro>>===>>
// (1)
const person = {
  name: "Luisa",
};

const personCity = {
  ...person, // Operador de Propagación >
  city: "New York",
};

// (2)
console.log(personCity);
console.log(personCity.name);

//(C)
// Promise.finally >>==> Ha terminado el llamado>>
//(1) Promesa>
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Hello Promise") : reject(new Error("Test error"));
  });
};
//(2)
helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log(`Fin`));

console.groupEnd();
