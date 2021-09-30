console.group("Sidebar");
const toggleBtn = document.querySelector(`.sidebar-toggle`);
const closeBtn = document.querySelector(`.close-btn`);
const sidebar = document.querySelector(`.sidebar`);

//> Events ==>
// (A) Open ==>
toggleBtn.addEventListener(`click`, function () {
  // (1)
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove(`show-sidebar`);
  } else {
    sidebar.classList.add(`show-sidebar`);
  }

  // (2)
  //sidebar.classList.toggle(`show-sidebar`);
});

// (B) ==> Close
closeBtn.addEventListener(`click`, function () {
  sidebar.classList.remove(`show-sidebar`);
});

//>
console.log(toggleBtn);
console.log(closeBtn);
console.log(sidebar);

console.groupEnd();
