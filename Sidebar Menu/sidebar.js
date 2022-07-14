const items = document.querySelectorAll('.item')
const menu = document.querySelector('.menu')
const sideBar = document.querySelector('.side-bar')
let sideBarOn = false
const texts = document.querySelectorAll('.text')
const links = document.querySelectorAll('.side-bar a')

// initially home is selected
items[0].style.left = '30px'

items.forEach(item => {
    item.onclick = () => {
        if (!sideBarOn) {
            items.forEach(item => {
                item.classList.remove('active')
                item.style.left = '0'
            })
            item.classList.add('active')
            item.style.left = '30px'
        }

    }
})


menu.addEventListener('click', () => {
    if (sideBarOn) {
        sideBar.style.width = '70px'
        texts.forEach(text => {
            text.style.visibility = 'hidden'
            text.style.left = '-200px'
        })

        links.forEach(link => {
            link.classList = ''
        })
    } else {
        sideBar.style.width = '170px'

        // turn off buttons
        items.forEach(item => {
            item.classList.remove('active')
            item.style.left = '0'
        })

        texts.forEach(text => {
            text.style.visibility = 'visible'
            text.style.left = '0px'
        })

        links.forEach(link => {
            link.classList = 'link'
        })
    }
    sideBarOn = !sideBarOn
})