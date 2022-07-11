const inputs = document.querySelectorAll('.otp-field input')
const submitBtn = document.querySelector('#submitBtn')
let disabled = false

// if the button is clicked it submits only if the inputs are filled with all 6 characters
submitBtn.addEventListener('click', () => {
    if (disabled) {
        inputs.forEach(input => {
            input.disabled = false
            input.classList.remove("disabled")
            input.value = ''
        })
    } else {
        checkSuitable()
    }

})

inputs.forEach((input, index) => {
    input.dataset.index = index
    input.addEventListener('paste', handleOnPasteOtp)
    input.addEventListener('keyup', handleOtp)
})

function handleOtp(e) {
    const input = e.target
    let value = input.value
    input.value = ''
    input.value = value ? value[0] : ''

    if ((value.length > 0 || e.key == 'ArrowRight') && input.dataset.index < inputs.length - 1) {
        input.nextElementSibling.focus()
    }

    if ((e.key == 'Backspace' || e.key == 'ArrowLeft') && input.dataset.index > 0) {
        input.previousElementSibling.focus()
    }

    if (e.key == 'Enter') {
        checkSuitable()
    }
}

function checkSuitable() {
    let suitable = true
    inputs.forEach(input => {
        if (input.value.length == 0) {
            suitable = false
        }
    })

    if (suitable) {
        submit()
    } else {
        alert('All boxes need to be filled')
    }
}

function handleOnPasteOtp(e) {
    const data = e.clipboardData.getData('text')
    const value = data.split('')
    if (value.length === inputs.length) {
        inputs.forEach((input, index) => {
            input.value = value[index]
        })
        checkSuitable()
    }
}

function submit() {
    let otp = ''
    inputs.forEach(input => {
        otp += input.value
        input.disabled = true
        input.classList.add("disabled")
    })
    console.log(otp)
    otp = ''
    disabled = true
}