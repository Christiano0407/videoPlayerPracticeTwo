console.group("Class");
// OPP JS>
// Methods JS>
class People {
  constructor({ name, firstName, country }) {
    this.name = name;
    this.firstName = firstName;
    this.country = country;
  }
}

const luisa = new People({
  name: "Luisa",
  firstName: "Cantú",
  country: "CDMX",
});

console.log(luisa);

console.groupEnd();
console.group("Modules");

console.groupEnd();
console.group("Generadores");

console.groupEnd();
