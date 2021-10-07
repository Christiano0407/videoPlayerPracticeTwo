console.group("Drawing-app");
// CONST CLAVES:
// ctx = contexto >
// Canvas arc()Method = Revisar>> ()
// (1)>>
const canvas = document.getElementById(`canvas`);
const ctx = canvas.getContext(`2d`);
// VARIABLES
const increaseBtn = document.getElementById(`increase`);
const decreaseBtn = document.getElementById(`decrease`);
const sizeEl = document.getElementById(`size`);
const colorEl = document.getElementById(`color`); //INPUT
const clearEl = document.getElementById(`clear`);

// (2)>>
// (C)>
let size = 30;
let isPressed = false; // Presionado / click>>
let color = "#000000";
let x = undefined; // Undefined>
let y = undefined; // Undefined>

//(A)>
canvas.addEventListener(`mousedown`, (e) => {
  //console.log(e);
  isPressed = true; // CLICK O PUSH>
  x = e.offsetX;
  y = e.offsetY;
});
// (E)>
canvas.addEventListener(`mouseup`, (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});
// (F)>
canvas.addEventListener(`mousemove`, (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);

    x = x2;
    y = y2;
  }
});
//(B)> Pintar el círculo >> Detalles>>>
drawCircle = (x, y) => {
  //comenzar a pintar
  ctx.beginPath();
  //características del circle>
  ctx.arc(x, y, size, 0, Math.PI * 2);
  //ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
};
//drawCircle(200, 200);

// (D)>
drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

// EXTRA: ANIMATION >>>>
/* function draw() { */
/*   ctx.clearRect(0, 0, canvas.width, canvas.height); */
/*   drawCircle(x++, y); */
/*   requestAnimationFrame(draw); */
/* } */
/* draw(); */

// (3)>>
// (G)>
increaseBtn.addEventListener(`click`, () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreaseBtn.addEventListener(`click`, () => {
  //console.log("Hola");
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

// (I)>
// Cambiar el color>>
colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});
//(J)>
// Clear / Limpiar >>
clearEl.addEventListener(`click`, () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// (H)
updateSizeOnScreen = () => {
  // Tamaño del pincel>>
  sizeEl.innerText = size;
};
console.groupEnd();
