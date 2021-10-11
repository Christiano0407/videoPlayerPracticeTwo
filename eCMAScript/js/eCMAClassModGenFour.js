console.group("Class");
// OPP JS>
// Methods JS>
class People {
  constructor({ name, firstName, country, all, car = [] }) {
    this.name = name;
    this.firstName = firstName;
    this.country = country;
    this.all = all;
    this.car = car;
  }
  //Method
  allSocial() {
    console.log(this.name + " " + this.country);
  }
  //Two Method
  allCars(auto) {
    this.car.push(auto);
  }
}

const luisa = new People({
  name: "Luisa",
  firstName: "Cantú",
  country: "CDMX",
  all: undefined,
  car: ["Ferrari model 2022", "Bugatti", "Porche"],
});

console.log(luisa);
luisa.allSocial(People);

console.groupEnd();
// Import and Export >>>>

console.group("Modules");
import { Sports } from "../js/exportImportFour.js";

const football = new Sports({
  name: "Fútbol Soccer",
  city: "CDMX",
});

console.log(football);

console.groupEnd();

console.group("Generadores");
// (A)
function* helloWorld() {
  if (true) {
    yield `Hello, `;
  }

  if (true) {
    yield `World`;
  }
}
//(B)
const generatorWorld = helloWorld();

//(C)
console.log(generatorWorld.next().value);
console.log(generatorWorld.next().value);

console.groupEnd();
