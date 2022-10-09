function renderBurgerMenu(options) {
  let navContainer = document.querySelector(`.${options.navigation}`);
  let navToggle = document.querySelector(`.${options.container}`);
  let navToggleButton = document.querySelector(`.${options.container}__button`);

  navContainer.classList.remove(`${options.navigation}--no-script`);
  navToggle.classList.remove(`${options.container}--no-script`);

  navToggleButton.addEventListener('click', function () {
    if (navContainer.classList.contains(`${options.navigation}--closed`)) {
      navContainer.classList.remove(`${options.navigation}--closed`);
      navContainer.classList.add(`${options.navigation}--opened`);
    } else {
      navContainer.classList.add(`${options.navigation}--closed`);
      navContainer.classList.remove(`${options.navigation}--opened`);
    }

    if (navToggleButton.classList.contains(`${options.container}__button--closed`)) {
      navToggleButton.classList.remove(`${options.container}__button--closed`);
      navToggleButton.classList.add(`${options.container}__button--opened`);
    } else {
      navToggleButton.classList.add(`${options.container}__button--closed`);
      navToggleButton.classList.remove(`${options.container}__button--opened`);
    }
  });
}

export default renderBurgerMenu;
