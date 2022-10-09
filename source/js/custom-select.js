function renderCustomSelect(customClass) {
  document.querySelectorAll(`.${customClass}`).forEach(select => {

    const selectCurrent = select.querySelector(`.${customClass}__current`);
    const selectList = select.querySelector(`.${customClass}__list`);
    const selectInput = select.querySelector(`.${customClass}__input`);
    const selectItem = select.querySelectorAll(`.${customClass}__item`);

    selectCurrent.addEventListener('click', () => {
      selectList.classList.toggle(`${customClass}__list--show`);
      selectCurrent.classList.toggle(`${customClass}__current--show`);
      selectItem.forEach(item =>{
        if (item.getAttribute('data-value')===select.querySelector(`.${customClass}__input`).value) {
          item.classList.add(`${customClass}__item--current`);
        } else {
          item.classList.remove(`${customClass}__item--current`);
        };
      })
    })

    selectItem.forEach(item =>{
      item.addEventListener('click', ()=>{
        const itemValue = item.getAttribute('data-value');
        const itemText = item.textContent;
        selectInput.value = itemValue;
        selectCurrent.textContent = itemText;
        selectListHide();
      })
    })

    const selectListHide = () => {
      selectList.classList.remove(`${customClass}__list--show`)
    }

    document.addEventListener('mouseup', (e) =>{
      if (!select.contains(e.target))	selectListHide()
    })

  })
}

export default renderCustomSelect;
