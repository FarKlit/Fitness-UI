function validation(form) {
    function createError(text,input) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')
        parent.classList.add('error')
        errorLabel.classList.add('error-label')
        errorLabel.textContent = text
        parent.appendChild(errorLabel)
    }
    let result = true
    const allInputs = form.querySelectorAll('input')
    for (const input of allInputs) {
        if(input.value=="") {
            console.log("Заполните форму")
            createError("Поле не заполнено", input)
            result = false
        }
    }

    if(input.dataset.maxLength) {
        removeError(input)
        if(input.value.length > input.dataset.maxlength) {
            console.log("Ошибка")
            createError(`Недопустимое количество символов:${input.dataset.maxLength}`, input)
            result = false
        }
    }
    
    form.querySelectorAll('input').forEach(element => {
        console.log(element)
    })
    return result
}

document.querySelector('#add-form').addEventListener('submit', function(event){
    event.preventDefault()
    if(validation(this)==true) {
        alert('Форма успешно заполнена!')
    }
})