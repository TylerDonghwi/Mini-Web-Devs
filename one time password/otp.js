const inputs = document.querySelectorAll('.otp-field input')

inputs.forEach((input, index) => {
    input.dataset.index = index
        // input.addEventListener('past', handleOnPasteOtp)
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
    if (input.dataset.index == inputs.length - 1) {
        submit()
    }
}


// function handleOnPasteOtp(e) {
//     const data = e.clipboardData.getData('text')
//     const value = data.spit('')
//     if (value.length == inputs.length) {
//         inputs.forEach((input, index) => (input.value = value[index]))
//         submit()
//     }
// }

function submit() {
    let otp = ''
    inputs.forEach(input => {
        otp += input.value
        input.disabled = true
        input.classList.add("disabled")
    })
    console.log(otp)
}