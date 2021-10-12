console.group("ECMAScript 11 / 2020");
// >Nuevas versiones >>>>

// (A) >
// <<<< Dynamic Import >>>>> Async and Await>>>>
//(1)
// Variables>>
const button = document.getElementById(`btn`);
// Function and Events ==>>

//(3)
button.addEventListener(`click`, async () => {
  const module = await import("./eCMA11File.js");
  module.hello();
});

// EXERCISE>>
const buttonTwo = document.getElementById(`btnTwo`);

buttonTwo.addEventListener(`click`, async () => {
  const play = await import("./eCMA11File.js");
  play.start();
});

// (B) >
console.groupEnd();
