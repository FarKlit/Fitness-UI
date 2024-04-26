
// LOADER
(function() {
    const mask = document.querySelector('.mask')
    window.addEventListener('load', () => {
        mask.classList.add('hide')
        setTimeout(() => {
            mask.remove()
        }, 1000)
    })
})();

// BURGER
// (function() {
//     const burger = document.querySelector('.burger')
//     const menu = document.querySelector('.header__nav')
//     const closeItem = document.querySelector('.header__nav-close')
//     burger.addEventListener('click', () => {
//         menu.classList.add('header__nav-active')
//     });
//     closeItem.addEventListener('click', () => {
//         menu.classList.remove('header__nav-active')
//     })
// }) ();
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})



// ВАРИАНТ ПРИМЕНЯЕМЫЙ НА УРОКЕ
let slideIndex = 1;

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let i;
    const slides = document.querySelectorAll('.mySlides');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
       slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active"); 
    }
    
    slides[slideIndex - 1].style.display = "block"; 
    dots[slideIndex - 1].classList.add("active"); 
}

document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1);
});

const dots = document.querySelectorAll('.dot');
dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
        currentSlide(index + 1);
    });
});

showSlide(slideIndex);


// VALIDATION
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



