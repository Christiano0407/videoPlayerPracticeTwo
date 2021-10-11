console.group("Let / Const / Multilínea / Spread Operators / Destructivas");
//(A)>
// Multilíneas
// ANTES ==>
// alt + 92 (\)
let lorem =
  "loremkmsdfksfkmklvmdfkvmdfkmkfmvkfmkmdfkvmdfkvmkdfmvkfm \n" +
  "Otra frase mcskdmckmdskcmdksmckds";
console.log(lorem);

// ECMA6>>>
let loremTwo = `kdlkjljdnjnfvjnfvkjndfjvnjdfnvjdfnvdjnjnsk
mkkfvkmfkmvkfmvkmf
kmdsfkvmfdksvmkdmfkmfmfkm
nfvlnfvljnfjvnfjnvjfn`;
console.log(loremTwo);

//(B)>
//Destructuración de elementos>>
// Antes ==>
let person = {
  name: "Luisa",
  age: 29,
  country: "CDMX",
};
console.log(person.name, person.age, person.country);

// ECMA6 >>>
let { name, country } = person;
console.log(name, country);

// (C)>
//Operador de propagación>>
//Antes ==>
//ECMA>>>
const men = [`Mau`, `Leo`, `Ivan`, `Rodrigo`];
const girl = [`Natasha`, `Luisa`, `Ivana`, `Pamela`];
const team = [`Chris`, ...men, ...girl];
console.log(team);

console.groupEnd();
