let navContainer = document.querySelector('.main-header__site-nav');
let navToggle = document.querySelector('.menu-toggle');
let navToggleButton = document.querySelector('.menu-toggle__button');

navContainer.classList.remove('main-header__site-nav--no-script');
navToggle.classList.remove('menu-toggle--no-script');

navToggleButton.addEventListener('click', function () {
  if (navContainer.classList.contains('main-header__site-nav--closed')) {
    navContainer.classList.remove('main-header__site-nav--closed');
    navContainer.classList.add('main-header__site-nav--opened');
  } else {
    navContainer.classList.add('main-header__site-nav--closed');
    navContainer.classList.remove('main-header__site-nav--opened');
  }

  if (navToggleButton.classList.contains('menu-toggle__button--closed')) {
    navToggleButton.classList.remove('menu-toggle__button--closed');
    navToggleButton.classList.add('menu-toggle__button--opened');
  } else {
    navToggleButton.classList.add('menu-toggle__button--closed');
    navToggleButton.classList.remove('menu-toggle__button--opened');
  }
});
