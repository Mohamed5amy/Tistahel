//menu

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu")

menuBtn.addEventListener("click" , ()=>{
  menu.classList.toggle("active")
  
  if (menu.classList.contains("active")) {
    menuBtn.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`
  } else {
    menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
  }
})

window.addEventListener("scroll", ()=> {
  menu.classList.remove("active")

  if (menu.classList.contains("active")) {
    menuBtn.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`
  } else {
    menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
  }
})