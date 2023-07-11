const input = document.querySelector('#validation-input')

input.addEventListener('blur', (event) => {
    if ('blur') {
        if (input.value.length === Number(input.getAttribute('data-length'))) {
            input.classList.add('valid')
            input.classList.remove('invalid')
        } else {
            input.classList.remove('valid')
            input.classList.add('invalid')
        }
    }
})

