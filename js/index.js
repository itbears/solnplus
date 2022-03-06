// Шапка
const burger = document.querySelector('.burger');
const headerToggleBtn = document.querySelector('.header__toggle');

headerToggleBtn.addEventListener('click', () => {
    burger.classList.toggle('burger__active')
});
