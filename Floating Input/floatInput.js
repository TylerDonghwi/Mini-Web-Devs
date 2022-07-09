document.querySelector('.text-input').forEach(element => {
    element.addEventListener('blur', event => {
        if (event.target.value != '') {
            event.target.nextElemnetSibling.classList.add('filled')
        } else {
            event.target.nextElemnetSibling.classList.remove('filled')
        }
    })
})