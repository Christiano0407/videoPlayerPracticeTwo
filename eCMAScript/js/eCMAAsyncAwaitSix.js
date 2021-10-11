console.group("Ecma Script8 / Async and Await");
// (A)
// (1)
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello my friends"), 2000)
      : reject(new Error(`Test Error`));
  });
};

const myTeam = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("My Team of this Chelsea"), 1000)
      : reject(new Error("No team"));
  });
};

// (2) aSYNC AND aWAIT>
const asyncHello = async () => {
  const hello = await helloWorld();
  const team = await myTeam();
  console.log(hello);
  console.log(team);
};
// (3)
asyncHello();

// (B) Otra forma> Cachar ERRORES>>
// (1)
const anotherFunction = async () => {
  try {
    const helloNew = await helloWorld();
    console.log(helloNew);
  } catch (error) {
    console.error(error);
  }
};

// (C)> Asincronismo>>
// (1) Crear promesa>
const myPeople = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Es mi familia") : reject(new Error("No lo es")); // Se llama: Operación Ternaria>
  });
};

const soccerTeam = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => resolve("Es mi equipo de soccer"), 2000);
    } else {
      reject(new Error(error));
    }
  });
};

//(2) Async and Await / sincronizar>
const asyncPeople = async () => {
  const helloMyPeople = await myPeople();
  const soccerPlay = await soccerTeam();
  console.log(helloMyPeople);
  console.log(soccerPlay);
};

// (3) / Invocar o llamar>
asyncPeople();

anotherFunction();
console.groupEnd();
