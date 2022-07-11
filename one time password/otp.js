const inputs = document.querySelectorAll('.otp-field input')
const submitBtn = document.querySelector('#submitBtn')

submitBtn.addEventListener('click', () => {
    inputs.forEach(input => {
        input.disabled = false
        input.classList.remove("disabled")
    })
})

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

    // in order to submit it needs to check that all inputs are filled 

    // alert otherwise
    if (input.dataset.index == inputs.length - 1 && value.length > 0) {
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