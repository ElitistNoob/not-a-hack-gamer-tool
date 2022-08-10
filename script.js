const navToggle = document.querySelector('.nav__mobile')
const navLinks = document.querySelectorAll(".nav-link")

const toggle = () => {
  document.body.classList.toggle('nav-open')
}

navToggle.addEventListener('click', toggle)

navLinks.forEach(item => {
  item.addEventListener("click", toggle)
})