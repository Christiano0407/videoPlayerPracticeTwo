console.group("Slider Two");
//1)
const slider = document.querySelector(`.slider-inner`);
console.log(slider);

const progressBar = document.querySelector(`.prog-bar-inner`);

let sliderGrabbed = false;

//3)
slider.parentElement.addEventListener(`scroll`, (e) => {
  console.log(getScrollPercentage());
  progressBar.style.width = `${getScrollPercentage()}%`;
});

slider.addEventListener(`mousedown`, (e) => {
  sliderGrabbed = true;
  slider.style.cursor = `grabbing`;
});

slider.addEventListener(`mouseup`, (e) => {
  sliderGrabbed = false;
  slider.style.cursor = `grab`;
});

slider.addEventListener(`mouseleave`, (e) => {
  sliderGrabbed = false;
});

// Move ==>
slider.addEventListener(`mousemove`, (e) => {
  if (sliderGrabbed) {
    slider.parentElement.scrollLeft -= e.movementX;
  }
});

slider.addEventListener(`wheel`, (e) => {
  e.preventDefault();
  slider.parentElement.scrollLeft += e.deltaY;
});

//2)
function getScrollPercentage() {
  return (
    (slider.parentElement.scrollLeft /
      (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) *
    100
  );
}

//

console.groupEnd();
