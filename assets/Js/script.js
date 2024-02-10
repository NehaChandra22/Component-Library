const sideBar = document.querySelector(".left-sidebar");
const hideHamBurgerL = document.querySelector("#hamburger-L");
const hideHamBurgerR = document.querySelector("#hamburger-R");
const hideCrossL = document.querySelector("#cross-icon-L");
const hideCrossR = document.querySelector("#cross-icon-R");
const navBar = document.querySelector(".navbar");
const darkModeC = document.querySelector(".dark-mode");
const lightModeC = document.querySelector(".light-mode");
const body = document.querySelector("body");
const linkCont = document.querySelector(".link-container");
const aside = document.querySelector("aside");
const rightDoc = document.querySelector(".right-doc");
const listItems = document.querySelectorAll(" .menu li");
const preLoad = document.querySelector("#loading");

const preLoader = () => {
  setTimeout(() => {
    preLoad.style.display = "none";
  }, 400);
};
function showSidebar() {
  sideBar.style.display = "block";
  hideCrossL.style.display = "block";
  hideHamBurgerL.style.display = "none";
}
function hideSidebar() {
  if (screen.width <= 998) {
    sideBar.style.display = "none";
    hideHamBurgerL.style.display = "block";
    hideCrossL.style.display = "none";
  }
}

function showAside() {
  aside.style.display = "block";
  hideCrossR.style.display = "block";
  hideHamBurgerR.style.display = "none";
  rightDoc.style.display = "none";
}
function hideAside() {
  if (screen.width <= 998) {
    aside.style.display = "none";
    hideHamBurgerR.style.display = "block";
    hideCrossR.style.display = "none";
    rightDoc.style.display = "block";
  }
}
// active-link-bgcolor

listItems.forEach(function (item) {
  item.addEventListener("click", function (e) {
    // Remove 'active' class from all li elements
    listItems.forEach(function (li) {
      li.classList.remove("active");
    });

    // Add 'active' class to the clicked li element
    this.classList.add("active");
  });
});

// dark-mode
function darkMode() {
  lightModeC.style.display = "block";
  darkModeC.style.display = "none";
  navBar.style.backgroundImage = "none";
  navBar.style.backgroundColor = "black";
  body.style.backgroundImage = "none";
  body.style.backgroundColor = "#030637";
  body.style.color = "white";
  docText.style.color = "white";
  navBar.style.borderBottom = " 1px solid grey";
  sideBar.style.backgroundColor = "black";
  menuh13.style.setProperty("--dark-blue-color", "#fff");
}

function lightMode() {
  lightModeC.style.display = "none";
  darkModeC.style.display = "block";
  navBar.style.backgroundImage = "";
  navBar.style.backgroundColor = "";
  body.style.backgroundImage = "";
  body.style.backgroundColor = "";
  body.style.color = "";
  navBar.style.borderBottom = "";
  sideBar.style.backgroundColor = "";
}
// darkMode ends

//top-function
function topFunction() {
  document.documentElement.scrollTop = 0;
}
//top func ends


// documentation js--

//  accordion
const accordionBtns = document.querySelectorAll(" .accordion.one  .accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});
// accordion js end
// alert//
document.querySelectorAll(".alert-doc .close").forEach(function (closeButton) {
  closeButton.addEventListener("click", function () {
    var alertContainer = this.closest(".alert");
    var alertType = alertContainer.classList[1];
    alertContainer.style.display = "none";
  });
});
// alert ends
