let navMain = document.querySelector('.main-header__main-nav');
let navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-header__main-nav--no-script');
navToggle.classList.remove('main-header__toggle--no-script');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header__main-nav--closed')) {
    navMain.classList.remove('main-header__main-nav--closed');
    navMain.classList.add('main-header__main-nav--opened');
  } else {
    navMain.classList.add('main-header__main-nav--closed');
    navMain.classList.remove('main-header__main-nav--opened');
  }
  if (navToggle.classList.contains('main-header__toggle--closed')) {
    navToggle.classList.remove('main-header__toggle--closed');
    navToggle.classList.add('main-header__toggle--opened');
  } else {
    navToggle.classList.add('main-header__toggle--closed');
    navToggle.classList.remove('main-header__toggle--opened');
  }
});
