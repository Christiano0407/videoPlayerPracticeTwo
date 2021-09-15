console.group("Counter");
// > Variables >>>>>>
// >>> initial counter <<<<
let count = 0;
// <<< value and buttons >>>>
const value = document.querySelector("#value");
console.log(value);
const btns = document.querySelectorAll(".btn");
console.log(btns);

// > Events / functions >>>>>>
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList; // valor de cada botón >>
    console.log(style);
    if (style.contains(`decrease`)) {
      count--; // decremento
    } else if (style.contains(`increase`)) {
      count++; // aumentar
    } else {
      count = 0; // reset
    }
    //> Change color>>>
    if (count > 0) {
      value.style.color = "hsl(205, 89%, 70%)";
    }
    if (count < 0) {
      value.style.color = "hsl(360, 67%, 44%)";
    }
    if (count === 0) {
      value.style.color = "#000000";
    }

    value.textContent = count;
  });
});

// > llamar >>>>>

console.groupEnd();
