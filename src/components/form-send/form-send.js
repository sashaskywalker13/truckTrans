let buttonClose = document.body.querySelector('.form-send__button_close');

buttonClose.addEventListener('click', closePopup);
document.body.addEventListener('click', openPopup);

function closePopup(event) {
    if (event.target.closest('.form-send__button_close')) {
        let modal = document.body.querySelector('.form-send');
        let popapBackground = document.body.querySelector('.popup-background');
        modal.style.transform = 'translateX(-999px)';
        popapBackground.style.display = 'none';
    }
}

function openPopup(event) {
    if (event.target.closest('.buttonPopup')) {
        let modal = document.body.querySelector('.form-send');
        let popapBackground = document.body.querySelector('.popup-background');
        modal.style.transform = 'translateX(100%)';
        popapBackground.style.display = 'block';
    }
}