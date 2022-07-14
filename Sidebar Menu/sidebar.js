const items = document.querySelectorAll('.item')

// initially home is selected
items[0].style.left = '30px'

items.forEach(item => {
    item.onclick = () => {

        items.forEach(item => {
            item.classList.remove('active')
            item.style.left = '0'
        })
        item.classList.add('active')
        item.style.left = '30px'
    }
})

const menu = document.querySelector('.menu')
const sideBar = document.querySelector('.side-bar')
let sideBarOn = false
menu.addEventListener('click', () => {
    if (sideBarOn) {
        sideBar.style.width = '70px'
    } else {
        sideBar.style.width = '220px'
        items.forEach(item => {
            item.classList.remove('active')
            item.style.left = '0'
        })
    }
    sideBarOn = !sideBarOn
})