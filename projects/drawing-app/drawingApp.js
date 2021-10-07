console.group("Drawing-app");
// CONST CLAVES:
// ctx = contexto >
// Canvas arc()Method = Revisar>> ()
// (1)>>
const canvas = document.getElementById(`canvas`);
const ctx = canvas.getContext(`2d`);
// VARIABLES
const decreaseBtn = document.getElementById(`increase`);
const sizeEl = document.getElementById(`size`);
const colorEl = document.getElementById(`color`); //INPUT
const clearEl = document.getElementById(`clear`);

// (2)>>
// (C)>
let size = 30;
let isPressed = false; // Presionado>
let color = "#000000";
let x = undefined;
let y = undefined;

//(A)>
canvas.addEventListener(`mousedown`, () => {});

//(B)>
drawCircle = (x, y) => {
  //comenzar a pintar
  ctx.beginPath();
  //características del circle>
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.stroke();
};
drawCircle(200, 200);

console.groupEnd();
