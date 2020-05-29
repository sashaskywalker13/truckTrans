
let numbers = document.body.querySelectorAll('.achieve__block_num');
let achieveBlock = document.body.querySelector('.achieve');

function onCounter() {
    if (achieveBlock.getBoundingClientRect().top.toFixed(0) >= 285 && achieveBlock.getBoundingClientRect().top.toFixed(0) <= 290) {
        for (let number of numbers) {
            let start = (+number.innerHTML - 12);
            let end = number.innerHTML;
            let timer = setInterval(function () {
                number.innerHTML = `${start++}`;
                if (start > end) {
                clearInterval(timer);
                }
            }, 50);
        }
    }
}

window.addEventListener('scroll', onCounter);