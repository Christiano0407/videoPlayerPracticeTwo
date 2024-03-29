console.group("REVIEW");
// (A)
// local reviews data / All Data and Create >>>>>>>>>>
const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "Web Designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Chris Jones",
    job: "Journalist",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag",
  },
  {
    id: 4,
    name: "Andrew Henderson",
    job: "The Boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
console.log(reviews);

// (B)
// Const and Variables ==>>>>>>>
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(`.prev-btn`);
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// (C)
// set starting item ==>>>>>>>>>
// Run people >
let currentItem = 0;

// (D)
// load initial item / Events and Functions ==>>>>>>>>
window.addEventListener("DOMContentLoaded", function () {
  // Clave >>
  const item = reviews[currentItem];
  // Tomar toda la info del array>>
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// (E)
// show person based on item>>
showPerson = (person) => {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

// (F)
// show next person / Events ====>
nextBtn.addEventListener("click", function () {
  // Más, más
  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  // Call Function >
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", function () {
  /* console.log("Previous"); */
  // Menos, menos
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  // Call Function >
  showPerson(currentItem);
});

// show random person >>>>
randomBtn.addEventListener("click", function () {
  console.log("Hello");
  // Números de 0 a 1 por la cantidad de datos>>>
  currentItem = Math.floor(Math.random() * reviews.length);

  showPerson(currentItem);
});

console.groupEnd();
