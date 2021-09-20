console.group("Slider One Javascript Product");
// ==== Variables ====
// > Part One <
const slider = document.querySelector(`.slider-inner`);
console.log(slider);
const progressBar = document.querySelector(`.prog-bar-inner`);
console.log(progressBar);
// Grabbed => Agarrado.
let sliderGrabbed = false;

// <<< Functions and events >>>
// == Part Three / activar el % del scroll ==
slider.parentElement.addEventListener(`scroll`, (e) => {
  console.log(getScrollPercentage());
  progressBar.style.width = `${getScrollPercentage()}%`;
});

// == Part Four / mouse ==
// activar la "manita o Mouse / cerrar" >>
slider.addEventListener(`mousedown`, (e) => {
  sliderGrabbed = true;
  slider.style.cursor = `grabbing`;
});

// abrir la mano o mouse >>
slider.addEventListener(`mouseup`, (e) => {
  sliderGrabbed = false;
  slider.style.cursor = `grab`;
});

slider.addEventListener(`mouseleave`, (e) => {
  sliderGrabbed = false;
});

// << ================= clave para activar en "X" y "Y" ================================= >>
// Mover la "mano" o mouse >>
slider.addEventListener(`mousemove`, (e) => {
  // Si tomo con la mano los slider>
  if (sliderGrabbed) {
    slider.parentElement.scrollLeft -= e.movementX;
  }
});

// wheel = rueda >>
slider.addEventListener(`wheel`, (e) => {
  e.preventDefault();
  slider.parentElement.scrollLeft += e.deltaY;
});

// > Part Two / function / clave <
// == Obtener el porcentaje del scroll ==
function getScrollPercentage() {
  return (
    (slider.parentElement.scrollLeft /
      (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) *
    100
  );
}

console.groupEnd();
