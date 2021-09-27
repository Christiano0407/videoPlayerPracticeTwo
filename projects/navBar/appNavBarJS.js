console.group("NavBar");
// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// (A) >>>
const navToggle = document.querySelector(`.nav-toggle`);
console.log(navToggle);
const links = document.querySelector(".links");
console.log(links);
// (B) >>>

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

console.groupEnd();
