document.querySelectorAll('.custom-select').forEach(select => {

	const selectCurrent = select.querySelector('.custom-select__current');
  const selectList = select.querySelector('.custom-select__list');
  const selectInput = select.querySelector('.custom-select__input');
  const selectItem = select.querySelectorAll('.custom-select__item');

	selectCurrent.addEventListener('click', () => {
		selectList.classList.toggle('custom-select__list--show');
    selectCurrent.classList.toggle('custom-select__current--show');
    selectItem.forEach(item =>{
      if (item.getAttribute('data-value')===select.querySelector('.custom-select__input').value) {
        item.classList.add('custom-select__item--current');
      } else {
        item.classList.remove('custom-select__item--current');
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
		selectList.classList.remove('custom-select__list--show')
	}

	document.addEventListener('mouseup', (e) =>{
    if (!select.contains(e.target))	selectListHide()
  })

})
