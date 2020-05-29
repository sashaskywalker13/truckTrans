let btnScrollTop = document.querySelector('.scroll-top');

console.log(window.pageYOffset);

document.addEventListener('scroll', scrollHidden);
btnScrollTop.addEventListener('click', (event) => window.scrollTo(0, 0));



function scrollHidden() {
    if (window.pageYOffset === 0) {
        btnScrollTop.setAttribute('hidden', true);
    } else {
        btnScrollTop.removeAttribute('hidden');
    }
}