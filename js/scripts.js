const spoiler = document.querySelectorAll('.footer__item-title')

for (let i = 0; i < spoiler.length; i++) {
    spoiler[i].addEventListener("click", function () {
        this.nextElementSibling.classList.toggle('spoiler-active')
    });
}

$(document).ready(function() {
    $('.car-brand, .model, .spare-part').select2({
        placeholder: "Марка автомобиля",
        maximumSelectionLength: 2,
        language: "ru",
        width: null
    });
    $('.model').select2({
        placeholder: "Модель автомобиля",
        maximumSelectionLength: 2,
        language: "ru",
        width: null
    });
    $('.spare-part').select2({
        placeholder: "Название запчасти",
        maximumSelectionLength: 2,
        language: "ru",
        width: null
    });
});

lightbox.option({
    'disableScrolling': true,
    'albumLabel': "Картинка %1 из %2"
})

