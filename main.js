const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

document.querySelectorAll('li a').forEach((n) => {
    n.addEventListener('click', () => {
        navLinks.classList.remove('active')
    })
})