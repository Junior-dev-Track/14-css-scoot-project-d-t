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

