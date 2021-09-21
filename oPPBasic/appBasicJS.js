console.group("opp Basic");
// Objeto >>>
const duck = {
  name: "Duck",
  numLegs: 2,
  country: "New York City",
  // Method >>
  sayName: function () {
    return `This is your name: ${duck.name}`;
  },
  // Method Two this >>
  //This es el objeto >>>
  sayCountry() {
    return `Your Country: ${this.country}`;
  },
};

// ===> Invocar ===>
console.log(duck);
console.log(duck.sayName());
console.log(duck.sayCountry());

// ======================= CONSTRUCTOR =====================>>>
function player() {
  (this.name = "Oliver"), (this.country = "Japan"), (this.age = 23);
}

let playerSoccer = new player();

console.log(playerSoccer);
console.log(((playerSoccer.name = "Tom"), (playerSoccer.country = "China")));
console.log(playerSoccer);

//  Verify Constructor ===>
let team = function (name, city, color) {
  this.name = name;
  this.city = city;
  this.color = color;
};

let teams = new team("Manchester United", "Manchester", "Red");
console.log(teams);
// Instance Of =>
console.log(teams instanceof team); // True>

console.groupEnd();
