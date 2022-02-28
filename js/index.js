// Шапка
const burger = document.querySelector('.burger');
const button = document.querySelector('.header__toggle');
const headerContainer = document.querySelector('.header__container');
const logo = document.querySelector('.header__logo');
const nameing = document.querySelector('.header__name');
button.addEventListener('click', () => {
    button.classList.toggle('header__toggle-close')
    burger.classList.toggle('burger__active')
    logo.classList.toggle('header__logo-active')
    nameing.classList.toggle('header__name-active')
    headerContainer.classList.toggle('header__container-active')
}); 
