let burgerButton = document.querySelector('.burger-menu__button-btn');
let burgerMenu = document.querySelector('.burger-menu__navigation');

burgerButton.onclick = onClick;

function onClick() {
  burgerMenu.classList.toggle('active');
}