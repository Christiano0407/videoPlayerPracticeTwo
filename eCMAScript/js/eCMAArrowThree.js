console.group("Arrow Functions / Promesas / Parámetros / Objetos");
// OBJETOS / OBJECTS>>>>
// (A)>
let name = "Luisa";
let age = 30;
// Antes ==>
obj = { name: name, age: age };
console.log(obj);
// ECMA6>>>
obj2 = { name, age };
console.log(obj2);

// (B)>
// Arrow Functions >>
const names = [
  { name: `Chris`, age: 30 },
  { name: `Luisa`, age: 21 },
];
// Antes==>
let listOfNames = names.map(function (item, index) {
  console.log(item.name, index);
});
// ECMA6>>>
// Arrow Functions en variables/method>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//(1)
let listOfNamesTwo = names.map((item, index) => console.log(item.name, index));

// (C)> (2)
peopleTwo = (user) => {
  return user;
};

const peopleThree = (name) => {
  return name;
};
console.log(peopleThree("Aníbal"));

// (D)> (3)
const listOfNamesFour = (name) => {
  //Code
};

// (E)> (4)
const square = (num) => num * num;
console.log(square(5));

// Promesas / Promise ======================================================================================
// (1)
const hello = () => {
  // Ejecutar Promesa >
  return new Promise((resolve, reject) => {
    //code>
    if (true) {
      resolve(`Hello Resolved`);
    } else {
      reject(`No!!!!!`);
    }
  });
};
//EJECUTAR PROMESA=>
hello()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
//> EXERCISE:
const friend = (one) => {
  return new Promise((resolve, reject) => {
    if (one === "Alma") {
      true;
      resolve(`Yes! I´ts she!!!`);
    } else {
      reject(`Sólo es un sueño`);
    }
  });
};
friend("Alma")
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

console.groupEnd();
