const headerNav = document.querySelector(".header");
let lastScroll = scrollY;


window.addEventListener("scroll", (e) => {
  let currentScroll = scrollY;
  if (lastScroll < currentScroll) {
    headerNav.style.top = "-140px";
    headerNav.classList.remove("sticky");
  } else {
    headerNav.style.top = "0";
    headerNav.classList.add("sticky");
  }
  lastScroll = currentScroll;
});



//Sticky Header
/*
let height = document.querySelector(".header").style.height;

window.addEventListener("resize", function () {
  height = document.querySelector(".header").style.height;
});

window.addEventListener("scroll", function () {
  // Use window.scrollY || window.pageYOffset for compatibility
  if (window.scrollY || window.pageYOffset > 200) {
    document.querySelector(".header").classList.add("sticky");
    document.body.style.marginTop = height;
  } else {
    document.querySelector(".header").classList.remove("sticky");
    document.body.style.marginTop = 0;
  }
});
*/

// Managing the Mobile Menu

document.querySelector(".header__nav-toggle").addEventListener("click", function () {
  document.querySelector(".header__navigation").classList.toggle("open");
  document.body.classList.toggle("no-scroll");

  const menuOpen = document.querySelector(".header__navigation").classList.contains("open");

  if (menuOpen) {
    this.src = "./images/close.svg";
  } else {
    this.src = "./images/hamburger.svg";
  }
});

document.querySelector(".header__btn").addEventListener("click", function () {
  document.querySelector(".header__navigation").classList.remove("open");
  document.body.classList.remove("no-scroll");
  document.querySelector(".header__nav-toggle").src = "./images/hamburger.svg";
});

// Animating Items Inside the Mobile Menu

function animateMenuItems() {
  let delay = 0.2;

  document.querySelectorAll(".header__nav-link").forEach(function (item) {
    item.style.animation = "slideLeft 0.4s " + delay + "s";
    item.style.animationFillMode = "backwards";
    delay += 0.2;
  });

  document.querySelector(".header__btn").style.animation = "slideLeft 0.4s " + delay + "s";
  document.querySelector(".header__btn").style.animationFillMode = "backwards";
}

if (window.innerWidth <= 700) {
  animateMenuItems();
}

window.addEventListener("resize", function () {
  if (window.innerWidth <= 700) {
    animateMenuItems();
  }
});


// Managing the Accordion


document.querySelector(".accordion__item:first-child").classList.add("active");

document.querySelectorAll(".accordion__top").forEach(function (item) {
  item.addEventListener("click", function () {
    this.parentNode.classList.toggle("active");
  });
});

