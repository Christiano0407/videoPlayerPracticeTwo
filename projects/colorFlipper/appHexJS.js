console.group("HEX / HEXADECIMAL");
// Variables >>>>
//1)
const hexadecimal = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
];
const btn = document.getElementById(`btn`);
const color = document.querySelector(`.color`);
// events and functions >>>>
// 2)
btn.addEventListener(`click`, function () {
  // Traer los colores (hexadecimales)>>
  let hexColor = `#`;
  //ciclo para traer los hexadecimales >>
  for (let i = 0; i < 6; i++) {
    hexColor += hexadecimal[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// 3)
function getRandomNumber() {
  return Math.floor(Math.random() * hexadecimal.length);
}

// llamados >>>>

console.groupEnd();
