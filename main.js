const toggleBtn = document.querySelector('.mobile-toggle')
const links = document.querySelector('#nav-links')

const toggleLinks = () => {
    links.classList.contains('open') ? links.classList.remove("open") : links.classList.add("open")
}

toggleBtn.addEventListener('click', toggleLinks)