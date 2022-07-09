const input = document.querySelector('.text-input')
const label = document.querySelector('.label')

const input2 = document.querySelector('.text')
const label2 = document.querySelector('.label2')

input.addEventListener('change', () => {
    if (input.value) {
        label.style.visibility = 'hidden'
    } else {
        label.style.visibility = 'visible'
    }
})

input2.addEventListener('change', () => {
    if (input2.value) {
        label2.style.visibility = 'hidden'
    } else {
        label2.style.visibility = 'visible'
    }
})