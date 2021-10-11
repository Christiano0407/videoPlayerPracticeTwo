console.group(`ECMAScript8`);
//(A)>
//Object.entries>
// Return a un array o matriz> Convierte un Objeto en un Array individual>>>
//(1)
const data = {
  name: "Data Base",
  frontend: "Daniela",
  design: "Luisa",
};
//(2)
const entries = Object.entries(data);
//(3)
console.log(entries);
console.log(entries.length);

//(B)>
// Object.value>> Objeto a Array>>
//(1)
const baseData = {
  name: "Data Base",
  frontend: "Daniela",
  design: "Luisa",
  backend: "Alejandra",
  Area: "Department Of The Science",
};
//(2)
const dataValue = Object.values(baseData);
//(3)
console.log(dataValue);
console.log(dataValue.length);

//(c)
// Padding >> Agregar caracteres
const music = "Music";
console.log(music.padStart(7, `My`));
console.log(music.padEnd(9, `love`));

//(D)
// ASYNC AND AWAIT>>>>>>>>>

console.groupEnd();
