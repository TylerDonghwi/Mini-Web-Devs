const items = document.querySelectorAll('.item')


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