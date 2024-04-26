const alldomains = ["google", "yandex", "mail", "ru"]
function validation(form) {
    function removeError(input) {
        const parent = input.parentNode;
        if(parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }
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
        removeError(input)
        if(input.value=="") {
            createError("Поле не заполнено", input)
            result = false
        }
        
        if(input.dataset.maxLength) {
            if(input.value.length > input.dataset.maxLength)  {
                createError(`Максимальное количество символов не должно превышать:${input.dataset.maxLength}`, input)
                result = false     
            }
        }

        if(input.dataset.minLength) {
            if(input.value.length < input.dataset.minLength) {
                createError(`Минимальное количество символов не должно быть меньше:${input.dataset.minLength}`, input)
                result = false  
            }
        }  

        if(input.dataset.type) {
            if(!input.value.includes('@')) {
                createError(`Email должен содержать символ @`, input)
                result = false
            } else {
                const domain = input.value.split('@')[1].split('.')[0]
                if(!alldomains.includes(domain)) {
                    createError(`Домен не поддерживается`, input)
                    result = false
                }
            }
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