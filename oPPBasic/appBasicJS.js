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

// <<< ===============================================================>>>>>>
// OwnProperties

let girlTeam = function (name, number, city) {
  this.name = name;
  this.number = number;
  this.city = city;
};

let girlsTeams = new girlTeam("The Power Pink", 12, "Las Vegas");
console.log(girlsTeams);

let ownProps = ["Almas"];

for (let property in girlsTeams) {
  if (girlsTeams.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps);

// <<<<<<< ================ Use Prototype Properties to Reduce Duplicate Code =================== >>>>
function gamer(name, age) {
  this.name = name;
  this.age = age;
}
gamer.prototype.nation = "Americana";

let gamers = new gamer("Luisa", 21);
console.log(gamers);
console.log(gamers.nation);

let ownsProps = [];
let prototypeProps = [];

for (let property in gamers) {
  if (gamers.hasOwnProperty(property)) {
    ownsProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(ownsProps);
console.log(Object.keys(ownsProps));
console.log(prototypeProps);
console.log(Object.keys(prototypeProps));

// <<<============ Change the Prototype to a New Object ============================== >

console.groupEnd();
