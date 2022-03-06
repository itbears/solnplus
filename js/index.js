// Шапка
const menu = document.querySelector('.header');
const headerToggleBtn = document.querySelector('.header__toggle');
const body = document.querySelector("body")

headerToggleBtn.addEventListener('click', () => {
    menu.classList.toggle('header__active')
    body.classList.toggle("scroll-off")
});
