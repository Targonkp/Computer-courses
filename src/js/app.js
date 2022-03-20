let modalEl = document.querySelector('.modal');
let loginEl = document.querySelector('.login');
let modalcloseEl = document.querySelector('.modal__close');
let menuToggleEl = document.querySelector('#menu__toggle');

loginEl.addEventListener(
    'click',
    function (event){
        event.preventDefault();
        modalEl.style.display = 'block';
        menuToggleEl.checked = false;
    }
)

modalcloseEl.addEventListener(
    'click',
    function () {
        modalEl.style.display = 'none';
    }
)


