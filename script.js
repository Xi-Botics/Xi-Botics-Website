const menuBurger = document.getElementById("menu-burger");
const menuExtend = document.getElementById("menu-extend");
let isMenuExtended = false;

menuBurger.addEventListener('click', () => {
  if (isMenuExtended) {
    menuExtend.style.display = "none"
  }
  else {
    menuExtend.style.display = "flex"
  }
  isMenuExtended = !isMenuExtended;
})

const logo = document.getElementById("logo")