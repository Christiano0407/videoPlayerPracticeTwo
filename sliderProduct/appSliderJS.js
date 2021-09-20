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

// > Part Two / function / clave <
// == Obtener el porcentaje del scroll
function getScrollPercentage() {
  return (
    (slider.parentElement.scrollLeft /
      (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) *
    100
  );
}

console.groupEnd();
