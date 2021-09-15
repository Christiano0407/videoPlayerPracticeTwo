console.group("Color Project");
// Variables >>>>
// 1)
const colors = [
  "green",
  "red",
  "rgba(133, 122, 200)",
  "#f15025",
  "#53A69D",
  "#60BFAE",
  "#F2DC9B",
  "#F2AD85",
];
const btn = document.getElementById(`btn`);
const color = document.querySelector(`.color`);

// events and functions >>>>
//2)
btn.addEventListener(`click`, function () {
  //console.log(document.body);
  // get random number between 0 - 3 colors[3];
  const randomNumber = getRandomNumber(); //2; // posición del color>
  console.log(randomNumber);
  //body = completo>
  document.body.style.backgroundColor = colors[randomNumber];
  // texto = tomamos el nombre de la variable >
  color.textContent = colors[randomNumber];
});

//> random number >
// Math.floor => Traer el numero entero / Random => 0 a 1 / length => cantidad de elementos >>>>>>>>
//3)
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

// llamados >>>>

console.groupEnd();
