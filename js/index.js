(function () {
    const burger = document.querySelector('.burger');
    const button = document.querySelector('.header__toggle');
    button.addEventListener('click', () => {
      button.classList.toggle('header__toggle-close')  
    }); 
  } ());