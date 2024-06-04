const form = document.getElementById('form')
const inputText = document.querySelectorAll('.input-text')

function validateInput(event) {
    const input = event.target;
    const errorElement = input.nextElementSibling;

    if (input.value.trim()) {
        input.classList.add('fullied-form')
        input.classList.remove('non-fullied-form')
        if (errorElement) {
            errorElement.classList.remove('mostrar')
        }
    } else {
        input.classList.remove('fullied-form')
        input.classList.add('non-fullied-form')
    }
}

inputText.forEach(input => {
    input.addEventListener('input', validateInput)
})

function validateForm(event) {
    event.preventDefault();


    inputText.forEach(input => {
        const errorElement = input.nextElementSibling;

        input.classList.remove('non-fullied-form')
        input.classList.remove('fullied-form')
        if (errorElement) {
            errorElement.classList.remove('mostrar')
        }

        if (input.value.trim() === '') {
            input.classList.add('non-fullied-form')
            if (errorElement) {
                errorElement.classList.add('mostrar')
            }
        } else {
            input.classList.add('fullied-form')
        }
    })
}

form.addEventListener('submit', validateForm);